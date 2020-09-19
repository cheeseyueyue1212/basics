# React中PureComponent原理
PureComponent 会对 props 和 state 进行浅层比较，并减少了跳过必要更新的可能性。

React.PureComponent 与 React.Component 很相似。两者的区别在于 React.Component 并未实现 shouldComponentUpdate()，而 React.PureComponent中以浅层对比 prop 和 state的方式来实现了该函数。

如果赋予 React 组件相同的 props 和 state，render() 函数会渲染相同的内容，那么在某些情况下使用 React.PureComponent 可提高性能。

```js
    import React from 'react';
    import ReactDOM from 'react-dom';

    class Counter extends React.Component {
        state = {
        count: 0
    }
    handleClick = () => {
        this.setState({ count: this.state.count + 1 })
    }
    render() {
    return (
    <div>
        <Title title='计数器'></Title>
        <span>{this.state.count}</span>
        <button onClick={this.handleClick}>+1</button>
    </div>
        );
    }
    }

    class Title extends React.PureComponent {
        render() {
            console.log('Title render')
            return (
                <p>{this.props.title}</p>
            );
        }
    }

    ReactDOM.render(<Counter />, document.getElementById('root'))
```