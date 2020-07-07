# super(props)

[参考文章](https://juejin.im/post/5c04fea5f265da6133565696)

- super 是调用父类的构造函数，传入props 是为了拿到this.props 即父类的属性和方法
- 在你调用父类构造函数之前，你无法在构造函数中使用 this。JavaScript 不会允许你这么做。

```js
// React 内部
const instance = new YourComponent(props);
instance.props = props;
```

为了避免这样的陷阱，JavaScript 强制规定，如果你想在构造函数中只用this，就必须先调用 super。

诚然，React 会在你的构造函数运行之后设置 this.props。但在 super 调用一直到构造函数结束之前，this.props 依然是未定义的。


在 React 中，构造器的主要作用是对 state 初始化，既然要初始化 state，必然要使用 this，在ES6 中子类构造器要使用 this 则必须通过 super() 来调用父类的 constructor()，因为子类的构造器内是没有 this 的，通过集成父类 this 并进行加工。