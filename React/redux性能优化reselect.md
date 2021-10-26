# react-redux性能优化之reselect

避免组件更新，mapStateToProps的函数不断的从新计算
- eg:
```js
const mapStateToProps = (state) => {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
  }
}
```


### 参考
https://www.jianshu.com/p/1fcef4c892ba

```js
// Reselect selector
// Takes a list of posts and post Ids, and picks out
// the selected Posts
import { createSelector } from 'reselect';
import _ from 'loadash';

// Create select functions to pick off the pieces of state we care about
// for this calculation
const postsSelector = state => state.posts;
const selectedPostsSelector = state => state.selectedPostIds;

// 参数名字无所谓
const getPosts = (posts, selectedPostIds) => {
    const selectPosts = _.filter(
        posts,
        post => _.contains(selectedPostIds, post.id)
    );

    return selectPosts;
}

/**
 * 前面几个参数：state selecting functions，当 state 改变时，这些函数都会被执行
 * 前面这些参数产生的结果都会传到最后一个函数
 */
const SelectedPostsSelector = createSelector([
        postsSelector,  // pick off a piece of state
        selectedPostsSelector   // pick off a piece of state
    ],
    getPosts    // last argument is the function that has our select logic
);

// App
const mapStateToPorps = state => ({
    posts: SelectedPostsSelector(state)
});

export default connect(mapStateToPorps)(App);
```

优化版本
```js
const getVisibilityFilter = (state, props) =>
  state.todoLists[props.listId].visibilityFilter

const getTodos = (state, props) =>
  state.todoLists[props.listId].todos

const makeGetVisibleTodos = () => {
  return createSelector(
    [ getVisibilityFilter, getTodos ],
    (visibilityFilter, todos) => {
      switch (visibilityFilter) {
        case 'SHOW_COMPLETED':
          return todos.filter(todo => todo.completed)
        case 'SHOW_ACTIVE':
          return todos.filter(todo => !todo.completed)
        default:
          return todos
      }
    }
  )
}
export default makeGetVisibleTodos

const makeMapStateToProps = () => {
  const getVisibleTodos = makeGetVisibleTodos()
  const mapStateToProps = (state, props) => {
    return {
      todos: getVisibleTodos(state, props)
    }
  }
  return mapStateToProps
}

import { connect } from 'react-redux'
import { toggleTodo } from '../actions'
import TodoList from '../components/TodoList'
import { makeGetVisibleTodos } from '../selectors'

const makeMapStateToProps = () => {
  // 独立的getVisibleTodos selector
  const getVisibleTodos = makeGetVisibleTodos()
  const mapStateToProps = (state, props) => {
    return {
      todos: getVisibleTodos(state, props)
    }
  }
  return mapStateToProps
}

const mapDispatchToProps = (dispatch) => {
  return {
    onTodoClick: (id) => {
      dispatch(toggleTodo(id))
    }
  }
}

const VisibleTodoList = connect(
  makeMapStateToProps,
  mapDispatchToProps
)(TodoList)

export default VisibleTodoList
```