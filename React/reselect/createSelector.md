### createSelector
* createSelector(…inputSelectors|[inputSelectors],resultFunc)
    1. 接受一个或者多个selectors,或者一个selectors数组,计算他们的值并且作为参数传递给resultFunc.

    2. createSelector通过判断input-selector之前调用和之后调用的返回值的全等于(===,这个地方英文文献叫reference equality,引用等于,这个单词是本质,中文没有翻译出来).经过createSelector创建的selector应该是immutable(不变的).

    3. 经过createSelector创建的Selectors有一个缓存,大小是1.这意味着当一个input-selector变化的时候,他们总是会重新计算state,因为Selector仅仅存储每一个input-selector前一个值.

```js
const mySelector = createSelector(
  state => state.values.value1,
  state => state.values.value2,
  (value1, value2) => value1 + value2
)

// You can also pass an array of selectors
//可以出传递一个selector数组
const totalSelector = createSelector(
  [
    state => state.values.value1,
    state => state.values.value2
  ],
  (value1, value2) => value1 + value2
)
```
在selector内部获取一个组件的props非常有用.当一个selector通过connect函数连接到一个组件上,组件的属性作为第二个参数传递给selector:
```js
const abSelector = (state, props) => state.a * props.b

// props only (ignoring state argument)
const cSelector =  (_, props) => props.c

// state only (props argument omitted as not required)
const dSelector = state => state.d

const totalSelector = createSelector(
  abSelector,
  cSelector,
  dSelector,
  (ab, c, d) => ({
    total: ab + c + d
  })
)
```