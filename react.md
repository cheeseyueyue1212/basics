# 理解react


### react diff: 构建渲染树，用diff算法 比对两颗树的不同 来实现局部刷新。

### setState: 不会立即更新，而是多个一起触发。
1. 回调函数，实现异步

    ```js
    this.setState({
        some: 1;
    }, ()=> {
        console.log('我是回调函数')
    })
    ```

2. setState接收函数

    ```js
        this.setState(function(prevState, props) {
            return {test: !prevState.test}
        })
    
    ```

    * eg: 实现两次自增，不会计数错误
    ```js
        incrementCount(){
        this.setState((prevState, props) => ({
            count: prevState.count + 1
            }));
        this.setState((prevState, props) => ({
            count: prevState.count + 1
            }));
        }
    ```

    ### setState 是同步 异步问题？

    * 答案：react库控制时是异步的，否则同步。 react库会在生命周期前，把setState放在事务队列中。生命周期结束后，再让其执行 后边值覆盖前边值，取最后一个输出 批量更新。

    #### 方法一：
    ```js
    setStateAsync(state) {
        return new Promise((resolve, reject) => {
            this.setState(state)
        })
    }

    async componentDidMount(){
        await this.setStateAsync({name: 'beta'})
    }

    ```

    #### 方法二：
    ```js
    this.setState({
        some: 1;
    }, ()=> {
        console.log('我是回调函数')
    })
    ```

## react生命周期
* constructor:
       > 1. 构造函数，在创建组件的时候调用一次  
       > 2. 组件初始化开始  
       > 3. 初始化state  

    * getDefaultProps:
        > 设置默认的props,也可以用defaultProps设置组件的默认属性  
    
    * getInitialState:
         > 初始化state, 可以直接在constructor中定义this.state  

    * componentWillMount:
         > 组件将要挂在，组件加载时调用，以后组件更新不调用，整个生命周期只调用一次，此时可以修改state  
         > 已经可以读到state数据  
         > 已经在内存中产生虚拟DOM树，但是没有绘制页面上  
         > Tip1: 不建议在次请求数据，由于请求数据接口一般都是异步，这时候render已经被执行，建议在componentDidMount中请求  
         > Tip2: 如果在服务端渲染，该钩子函数被调用两次，一次服务端，一次浏览器端，而componentDidMount函数只会在浏览器端请求一次  

    * render:
         > react最重要的步骤，创建虚拟dom， 进行diff算法，更新dom树都在此进行  
         > Tip： 记住，不要在render里面修改state  

    * componentDiDMount:
         > 所有的组件（包括自组件）在render执行之后立即调用，并且只会被调用一次  
         > 组件已经初始化完成  
         > DOM树渲染完成  
         > Tip: 建议在次请求数据  

    * componentWillReceiveProps(nextProps){}:
         > props的数据发生改变的时候触发，在该函数内部this.props 属性还没改变的时候发生，但是可以通过第一个参数nextProps获取到的修改之后的props属性  
         > 在props被改变时触发，初始化render时不调用  
         > Tip1: 某些情况下，props没变也会触发该钩子函数，需要在方法里手动判断一下this.props和nextProps是否相同，不相同了才执行我的更新方法  
         > Tip2: 该函数一般用来更新依赖props的状态  

    * shoudComponentUpdate(nextProps, nextState) {}:
         > 组件接收到新的props或者state时调用，return true就会更新dom（使用diff算法更新），return false 能阻止更新（不调用render）  
         > 在函数内部state 和props还未改变，新的props和state在两个参数内  
         > 该方法并不会在初始化渲染或者使用forceUpdate（）时调用。  

    * componentWillUpdate(nextProps, nextState) {}:
         > shoudComponentUpdate 返回true 或者调用forceUpdate之后，componentWillUpdate会被调用  
         > 数据修改， 接着执行render  

    * getSnapshotBeforeUpdate(prevProps, prevState) {}:
         > 触发时间： update发生的时候， 在render之后，在组件dom渲染之前；返回一个值，作为componentDidUpdate的第三个参数；  
         > 该函数在最新的渲染输出提交给DOM前将立即调用，它让你的组件能在当前的值要改变前获取它们。这一生命周期返回的任何值会 作为参数被传递给componentDidUpdate（）  

    * componentDidUpdate(prevProps, prevStaet) {}:
         > 数据修改成功，组件更新完成后调用  
         > 除了首次render之后调用componentDidMount,其他render结束之后都会调用componentDidUpdate  
         > 通过prevProps和prevState访问修改之前的props和state  

    * componentWillUnmount:
         > 在组件被卸载和销毁前立即调用。可以在该方法里处理任何必要的清理工作，例如解绑定时器，取消网络请求，清理任何在componentDidMount环节创建的DOM元素  

    * componentDidCatch(error, info) {}:
         > 该函数为错误边界， 捕获发生咋子组件树中任何地方的JS错误，打印错误日志，并且显示回退的用户边界。  
         > Tip：错误边界只捕获树中发生在它们之下的组件里的错误。一个错误边界并不能捕获它自己的内部错误。  

    1、React16新的生命周期弃用了componentWillMount、componentWillReceivePorps，componentWillUpdate
    2、新增了getDerivedStateFromProps、getSnapshotBeforeUpdate来代替弃用的三个钩子函数（componentWillMount、componentWillReceivePorps，componentWillUpdate）
    3、React16并没有删除这三个钩子函数，但是不能和新增的钩子函数（getDerivedStateFromProps、getSnapshotBeforeUpdate）混用，React17将会删除componentWillMount、componentWillReceivePorps，componentWillUpdate
    4、新增了对错误的处理（componentDidCatch
    ———————————————