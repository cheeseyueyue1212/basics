# React Hooks究竟是什么呢？
[外链](https://blog.csdn.net/Fundebug/article/details/99952227)

## 一. 优点：
- 1、代码可读性更强，原本同一块功能的代码逻辑被拆分在了不同的生命周期函数中，容易使开发者不利于维护和迭代，通过 React Hooks 可以将功能代码聚合，方便阅读维护。例如，每个生命周期中常常会包含一些不相关的逻辑。一般我们都会在 componentDidMount 和 componentDidUpdate 中获取数据。但是，同一个 componentDidMount 中可能也包含很多其它的逻辑，如设置事件监听，而之后需在 componentWillUnmount 中清除。相互关联且需要对照修改的代码被进行了拆分，而完全不相关的代码却在同一个方法中组合在一起。如此很容易产生 bug，并且导致逻辑不一致。
- 2、组件树层级变浅。在原本的代码中，我们经常使用 HOC/render props 等方式来复用组件的状态，增强功能等，无疑增加了组件树层数及渲染，在 React DevTools 中观察过 React 应用，你会发现由 providers，consumers，高阶组件，render props 等其他抽象层组成的组件会形成“嵌套地狱”。而在 React Hooks 中，这些功能都可以通过强大的自定义的 Hooks 来实现。
- 3、不用再去考虑 this 的指向问题。在类组件中，你必须去理解 JavaScript 中 this 的工作方式。

## 二：缺点：
- 对一些钩子函数不支持。当下 v16.8 的版本中，还无法实现 getSnapshotBeforeUpdate 和 componentDidCatch 这两个在类组件中的生命周期函数。


参考：https://blog.csdn.net/Charissa2017/article/details/106730493/