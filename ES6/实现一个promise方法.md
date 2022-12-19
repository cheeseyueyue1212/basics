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


```js
const stateArr = ['pending', 'fulfilled', 'rejected']; // 三种状态
class MyPromise {
    constructor(callback) {
        this.state = stateArr[0]; // 当前状态
        this.value = null; // 完成时的返回值
        this.reason = null; // 失败原因
        this.resolveArr = [];
        this.rejectArr = [];
        
        callback(this.resolve, this.reject); // 调用此function
    }
    
    // callback中执行的resolve方法
    resolve = (value) => {
        // 判断状态是否需要是pending
            if (this.state === stateArr[0]) {
                this.state = stateArr[1]; // 更新状态为 fulfilled
                this.value = value; // 写入最终的返回值
               
                this.resolveArr.forEach(fun => fun(value)) // 循环执行then已插入的resolve方法
            }
    }
    
    // callback中执行的reject方法
    reject = (reason) => {
        // 判断状态是否需要是pending
            if (this.state === stateArr[0]) {
               this.state = stateArr[1]; // 更新状态为 fulfilled
               this.reason = reason; // 写入最终的返回值
               
               this.rejectArr.forEach(fun => fun(reason)) // 循环执行then已插入的reject方法
            }
    }
    
    // then方法
    then = (onFulilled, onRejected) => {
        // 判断onFulilled 和 onRejected是否是一个函数，如果不是函数则忽略它
        onFulilled = typeof onFulilled === 'function' ? onFulilled : (value) => value;
        onRejected = typeof onRejected === 'function' ? onRejected : (reason) => reason;

        // 如果状态为pending
        if (this.state === stateArr[0]) {
            return new MyPromise((resolve, reject) => {
                // 插入成功时调用的函数
                this.resolveArr.push((value) => {
                    try {
                        const result = onFulilled(value);
                        if (result instanceof MyPromise) {
                            result.then(resolve, reject);
                        } else {
                            resolve(result);
                        }
                    } catch(err) {
                        reject(err);
                    }
                })
                
                // 插入失败时调用的函数
                this.rejectArr.push((value) => {
                    try {
                        const result = onRejected(value);
                        if (result instanceof MyPromise) {
                            result.then(resolve, reject);
                        } else {
                            resolve(result);
                        }
                    } catch(err) {
                        reject(err)
                    }
                })
            })
            
        }
        
        // 如果状态是fulfilled
        if (this.state === stateArr[1]) {
            // then返回的必须是一个promise
            return new MyPromise((resolve, reject) => {
                try {
                    const result = onFulilled(this.value); // 执行传入的onFulilled方法
                    
                    // 如果onFulilled返回的是一个Promise,则调用then方法
                    if (result instanceof MyPromise) {
                        result.then(resolve, reject);
                    } else {
                        resolve(result);
                    }
                } catch(err) {
                    reject(err);
                }
            })
        }
        
        // 如果状态是rejected
        if (this.state === stateArr[2]) {
            // then返回的必须是一个promise
            return new MyPromise((resolve, reject) => {
                try {
                    const result = onRejected(this.reason); // 执行传入的onRejected方法
                    
                    // 如果onRejected返回的是一个Promise,则调用then方法
                    if (result instanceof MyPromise) {
                        result.then(resolve, reject);
                    } else {
                        resolve(result);
                    }
                } catch(err) {
                    reject(err);
                }
            })
        }
    }

    // 调用then中的reject
    catch = (reject) => {
        this.then(null, reject);
    }
}

MyPromise.resolve = (value) => {
    return new MyPromise((resolve, reject) => { resolve(value) });
}

MyPromise.resolve = (reason) => {
    return new MyPromise((resolve, reject) => { reject(reason) });
}

```