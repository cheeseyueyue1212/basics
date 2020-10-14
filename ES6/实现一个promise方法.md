# 实现一个promise方法

## class的实现方法：
```js
//创建一个Promise的类
class Promise {
    constructor(executer) { //构造函数constructor里面是个执行器
        this.status = 'pending'; //默认的状态 pending
        this.value = undefined //成功的值默认undefined
        this.reason = undefined //失败的值默认undefined
        //状态只有在pending时候才能改变
        let resolve = value => {
            //判断只有等待时才能resolve成功
            if (this.status == 'pending') {
                this.status = 'resolve';
                this.value = value;
            }
        }
        //判断只有等待时才能reject失败
        let reject = reason => {
            if (this.status == 'pending') {
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
        if (this.status == 'resolve') {
            onFufilled(this.value);
        }
        //如果状态失败调用onReject
        if (this.status == 'reject') {
            onReject(this.reason);
        }
    }
}
```


## 原生写法：
```js

function Promise(excutor) {
  let self = this
  self.status = 'pending'
  self.value = null
  self.reason = null
  self.onFulfilledCallbacks = []
  self.onRejectedCallbacks = []

  function resolve(value) {
    if (self.status === 'pending') {
      self.value = value
      self.status = 'fulfilled'
      self.onFulfilledCallbacks.forEach(item => item())
    }
  }

  function reject(reason) {
    if (self.status === 'pending') {
      self.reason = reason
      self.status = 'rejected'
      self.onRejectedCallbacks.forEach(item => item())
    }
  }
  try {
    excutor(resolve, reject)
  } catch (err) {
    reject(err)
  }
}


Promise.prototype.then = function (onFulfilled, onRejected) {
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : function (data) {
        resolve(data)
    }
    onRejected = typeof onRejected === 'function' ? onRejected : function (err) {
        throw err
    }
    let self = this
    if (self.status === 'fulfilled') {
        return new Promise((resolve, reject) => {
            try {
                let x = onFulfilled(self.value)
                if (x instanceof Promise) {
                    x.then(resolve, reject)
                } else {
                    resolve(x)
                }
            } catch (err) {
                reject(err)
            }
        })
    }
    if (self.status === 'rejected') {
        return new Promise((resolve, reject) => {
            try {
                let x = onRejected(self.reason)
                if (x instanceof Promise) {
                    x.then(resolve, reject)
                } else {
                    resolve(x)
                }
            } catch (err) {
                reject(err)
            }
        })
    }
    if (self.status === 'pending') {
        return new Promise((resolve, reject) => {
            self.onFulfilledCallbacks.push(() => {
                let x = onFulfilled(self.value)
                if (x instanceof Promise) {
                    x.then(resolve, reject)
                } else {
                    resolve(x)
                }
            })
            self.onRejectedCallbacks.push(() => {
                let x = onRejected(self.reason)
                if (x instanceof Promise) {
                    x.then(resolve, reject)
                } else {
                    resolve(x)
                }
            })
        })
    }
}

Promise.prototype.catch = function (fn) {
    return this.then(null, fn)
}
```

另一种简单写法：

```js
    function Promise(exector) {
        let self = this;
        //status表示一种状态
        let status = "pending";
        let value = undefined;
        let reason = undefined;
        //成功执行
        function resolve(value) {
            if (status == 'pending') {
                self.value = value;
                self.status = "resolve";
            }
        }
        //执行失败
        function reject(reason) {
            if (status == 'pending') {
                self.reason = reason;
                self.status = "reject"
            }
        }
        //对异常操作
        try {
            exector(resolve, reject)
        } catch (e) {
            reject(e)
        }
        //设置promise的then方法
        Promise.prototype.then = function (reject, resolve) {
            let self = this;
            if (this.status == 'resolve') {
                reject(self.value)
            }
            if (this.status == 'reject') {
                resolve(self.reason)
            }
        }
    }
    //new 一个promise  进行测试  
    let promise = new Promise((resolve, reject) => {
        resolve("return resolve");
    });
    promise.then(data => {
        console.log(`success ${data}`);

    }, err => {
        console.log(`err ${err}`);

    })
```