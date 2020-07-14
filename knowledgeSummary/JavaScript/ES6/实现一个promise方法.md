# 实现一个promise方法
```js
//创建一个Promise的类
class Promise {
    constructor(executer) { //构造函数constructor里面是个执行器
        this.status = 'pending'; //默认的状态 pending
        this.value = undefined //成功的值默认undefined
        this.reason = undefined //失败的值默认undefined
        //状态只有在pending时候才能改变
        let resolveFn = value => {
            //判断只有等待时才能resolve成功
            if (this.status == pending) {
                this.status = 'resolve';
                this.value = value;
            }
        }
        //判断只有等待时才能reject失败
        let rejectFn = reason => {
            if (this.status == pending) {
                this.status = 'reject';
                this.reason = reason;
            }
        }
        try {
            //把resolve和reject两个函数传给执行器executer
            executer(resolve, reject);
        } catch (e) {
            reject(e); //失败的话进catch
        }
    }
    then(onFufilled, onReject) {
        //如果状态成功调用onFufilled
        if (this.status = 'resolve') {
            onFufilled(this.value);
        }
        //如果状态失败调用onReject
        if (this.status = 'reject') {
            onReject(this.reason);
        }
    }
}
```