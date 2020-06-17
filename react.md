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

    