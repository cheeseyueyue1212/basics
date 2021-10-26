# render props模式
https://www.cnblogs.com/monsterooo/p/8799447.html

(高阶组件，hooks, render props) https://blog.csdn.net/qq_40962320/article/details/87043581

区别：
1. 高阶组件
    1）高阶函数传参的属性名是写死的，即属性名不同，逻辑不能复用。 
    2）追踪问题困难
    3）高阶组件传递给被包裹组件的 props 如果重名的话，会发生覆盖

2. render props 
    1）可以以函数传参的形式自定义
    2）是动态构建的，页面在渲染后，可以动态地决定渲染哪个组件
    3）所有能用HOC完成的事情，Render Props都可以做，且更加灵活
    4）除了功能复用，还可以用作两个组件的单向数据传递
3. hooks 实现函数式编程，避免了层层嵌套


## useMemo 和 useCallback 都会在组件第一次渲染的时候执行，之后会在其依赖的变量发生改变时再次执行
> 组件第一次渲染的时候执行

- useMemo 返回缓存的值
- useCallback返回函数

- useMemo() 是在 render 期间执行的，所以不能进行一些额外的副操作


## 总的来说：useEffect、useMemo、useCallback
在子组件不需要父组件的值和函数的情况下，只需要使用 memo 函数包裹子组件即可。

如果有函数传递给子组件，使用 useCallback

如果有值传递给子组件，使用 useMemo
useMemo是在渲染期间完成的

useEffect、useMemo、useCallback 都是自带闭包的。也就是说，每一次组件的渲染，其都会捕获当前组件函数上下文中的状态(state, props)，所以每一次这三种hooks的执行，反映的也都是当前的状态，你无法使用它们来捕获上一次的状态。对于这种情况，我们应该使用 ref 来访问。

https://blog.csdn.net/sinat_17775997/article/details/94453167

https://blog.csdn.net/leelxp/article/details/107822103?utm_medium=distribute.pc_aggpage_search_result.none-task-blog-2~all~sobaiduend~default-1-107822103.nonecase&utm_term=usecallback%E5%8C%BA%E5%88%AB&spm=1000.2123.3001.4430