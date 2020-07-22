function Promise(executor) {
    let self = this;
    self.status = 'pending' //给promise设置初始状态pending；
    self.onfulfilledList = []; //用来订阅then中成功的回调onfulfilled
    self.onrejectedList = []; //用来订阅then中失败的回调onrejected
    try {
        executor(resolve, reject); //执行传入promise的这个回调函数executor,
        //并传入resolve,reject这两个函数作为实参。
    } catch (err) {
        reject(err); //如果执行executor抛出错误，那就进入失败状态。
    }

    //定义resolve reject这两个函数
    function resolve(value) { //接受一个参数value
        if (self.status == 'pending') {
            //只有当promise的状态是pending时调用resolve才会进行状态的改变
            self.status = 'fulfilled'; //调用resolve表示成功，状态变为fulfilled
            self.value = value //将值挂载到promise上，用于then的onfulfilled中拿到value；
            self.onfulfilledList.forEach(function (fn) { //逐个执行成功态then中添加的回调
                fn();
            })
        }
    }

    function reject(reason) {
        if (self.status == 'pending') {
            self.status = 'rejected' //调用reject表示失败，状态变为rejected
            self.reason = reason //把失败的原因挂载到promise上，方便then的onrejected拿到reason
            self.onfulfilledList.forEach(function (fn) { //逐个执行失败态then中添加的回调
                fn();
            })
        }
    }
}
Promise.prototype.then = function (onfulfilled, onrejected) {
    //如果当前promise进入成功态（用户调用的是resolve函数），就调用onfulfilled函数传入value
    if (self.status == 'fulfilled') { //成功态
        onfulfilled(self.value) //拿到resolve中的value    
    }
    //如果promise进入失败态（用户调用的是reject函数），就调用onrejected函数，传入reason
    if (self.status == 'rejected') { //失败状态
        onrejected(self.reason) //传入失败原因reason
    }
    //当promise中的回调resolve，reject没有立即执行（异步执行）时，当前状态还是pending
    if (self.status == 'pending') {
        //此时利用订阅发布模式，将then中的回调进行订阅，当promise的状态改变成resolve时或reject时(调用resolve或reject)时发布；
        self.onfulfilledList.push(function () { //订阅then中成功的函数
            onfulfilled(self.value); //可以增加多个回调，因为一个promise可以多次调用then
        })
        self.onrejectedList.push(function () { //订阅then中失败的函数
            onrejected(self.reason) //可以增加多个回调，因为一个promise可以多次调用then
        })
    }
}

// 试验以上例子发现当promise中then中的回调不是异步执行的，所以如1所示，在promise的resolve和reject的状态下then的回调onrejected，onjected应该用setTimeout包裹，使其变为异步；
Promise.prototype.then=function(onfulfilled,onrejected){
    //如果当前promise进入成功态（用户调用的是resolve函数），就调用onfulfilled函数传入value
    if(self.status=='fulfilled'){//成功态
      setTimeout(function(){//异步调用onfulfilled
        onfulfilled(self.value)//拿到resolve中的value 
      },0)   
    }
    //如果promise进入失败态（用户调用的是reject函数），就调用onrejected函数，传入reason
    if(self.status=='rejected'){//失败状态
      setTimeout(function(){//异步调用onrejected 
        onrejected(self.reason)//传入失败原因reason
      },0)
    }
    //当promise中的回调resolve，reject没有立即执行（异步执行）时，当前状态还是pending
    if(self.status=='pending'){
      //此时利用订阅发布模式，将then中的回调进行订阅，当promise的状态改变成resolve时或reject时(调用resolve或reject)时发布；
      self.onfulfilledList.push(function(){//订阅then中成功的函数
        onfulfilled(self.value);
      })
      self.onrejectedList.push(function(){//订阅then中失败的函数
        onrejected(self.reason)
      })
    }
  }

  

//   3.promise的then实现链式调用，需要返回一个新的promise
// 1 ) promise中then的特点 如果promise then方法的成功回调 或者失败回调执行后返回的是一个promise,会让这个promise执行 会调用then方法
// 2 ) 只要成功或者失败的回调有返回值不管是什么 都会走外层的then的成功
// 3 ) 返回的promise失败了 会走失败 如果抛出异常了会走失败
// 4）就近原则 先找最近的err 捕获 找不到 就向下找捕获
// 5 ) promise 每次返回的都必须是一个新的promise



Promise.prototype.then = function (onfulfilled, onrejected) {
    /** //如果当前promise进入成功态（用户调用的是resolve函数），就调用onfulfilled函数传入value
     if(self.status=='fulfilled'){//成功态
    setTimeout(function(){//异步调用onfulfilled
      onfulfilled(self.value)//拿到resolve中的value
    },0)
  }
     //如果promise进入失败态（用户调用的是reject函数），就调用onrejected函数，传入reason
     if(self.status=='rejected'){//失败状态
    setTimeout(function(){//异步调用onrejected
      onrejected(self.reason)//传入失败原因reason
    },0)
  }
     //当promise中的回调resolve，reject没有立即执行（异步执行）时，当前状态还是pending
     if(self.status=='pending'){
    //此时利用订阅发布模式，将then中的回调进行订阅，当promise的状态改变成resolve时或reject时(调用resolve或reject)时发布；
    self.onfulfilledList.push(function(){//订阅then中成功的函数
      onfulfilled(self.value);
    })
    self.onrejectedList.push(function(){//订阅then中失败的函数
      onrejected(self.reason)
    })
  }**/
    let self = this;
    let promise2 = new Promise(function (resolve, reject) { //返回这个promise对象
        //这个新的对象需要做的有判断当前的状态
        //判断then的onfulfilled的参数类型，onrejeced中拿到的参数的类型
        //如果then中的参数不是一个函数的话，那么promise中的value或reason就继续向下一个then传递
        //如果then的回调中返回的是一个普通对象那么就继续向下一个then传递
        //如果返回的是一个promise对象那么这个promise对象就作为下一个then的promise使用覆盖promise2;
        if (typeof onfulfilled !== 'function') { //如果不是函数就将value向下传递数据
            onfulfilled = function (value) {
                return value;
            }
        }
        if (typeof onrejected !== 'function') { //如果不是函数就将reason向下传递数据
            onrejected = function (reason) {
                return reason;
            }
        }

        if (self.status == 'fulfilled') { //成功状态
            setTimeout(function () { //计时器异步的另一个作用是能让promise2对象能在promise2中正确引用
                try {
                    let x = onfulfilled(self.value); //拿到onfulfilled的返回值
                    resolvePromise(promise2, x, resolve, reject); //这个函数用来判断以上then的返回值，以处理then向下传递的状态走resolve函数还是reject函数
                } catch (e) {
                    //抛出错误就返回错误
                    reject(e);
                }

            }, 0);
        }
        if (self.status == 'rejected') { //失败状态
            setTimeout(function () {
                try {
                    let x = onrejected(self.reason); //拿到onrejected的返回值
                    resolvePromise(promise2, x, resolve, reject);
                } catch (e) {
                    //抛出错误就返回错误
                    reject(e);
                }
            }, 0)
        }
        if (self.status == 'pending') { //等待状态
            self.onfulfilledList.push(function () {
                setTimeout(function () { //计时器异步的另一个作用是能让promise2对象能在promise2中正确引用
                    try {
                        let x = onfulfilled(self.value); //拿到onfulfilled的返回值
                        resolvePromise(promise2, x, resolve, reject);
                    } catch (e) {
                        reject(e)
                    }
                }, 0)
            })
            self.onrejectedList.push(function () {
                setTimeout(function () {
                    try {
                        let x = onrejected(self.reason); //拿到onrejected的返回值
                        resolvePromise(promise2, x, resolve, reject);
                    } catch (e) {
                        reject(e);
                    }
                }, 0)
            })
        }
    })
    return promise2;
}

//处理then回调中x返回值的状态
function resolvePromise(promise2, x, resolve, reject) {
    if (promise2 === x) { //如果then回调中返回的x和promise2是一个就会陷入死循环
        return reject(new Error('死循环'))
    }
    let changeFlag; //用来做状态标识，如果状态改变后，就不再改变
    if ((x != null) && (typeof x == 'object' || typeof x == 'function')) { //判断x的类型函数或对象
        try {
            let then = x.then;
            //之所以用then取值而不使用x.then的原因是：避免多次取值造成不必要的错误(代码更加严谨)
            //Object.definedProperty(x,then,{get(){处理取值结果，改变不同的值}})；
            if (typeof then == 'function') { //说明x有then方法
                then.call(x, function (y) {
                    //resolve(value)不是应该向下传递应该继续判断下一个then的返回值类型
                    if (!changeFlag) {
                        changeFlag = true
                    } else {
                        return
                    }
                    resolvePromise(x, y, resolve, reject) //递归判断
                    //避免返回的promise中依然返回的是promise，把所有嵌套的promise都执行，直到返回普通值
                }, function (reason) {
                    if (!changeFlag) {
                        changeFlag = true
                    } else {
                        return
                    }
                    reject(reason);
                })
            } else { //不是一个promise，是个普通的对象，数据向下传递
                resolve(x)
            }
        } catch (e) {
            if (!changeFlag) {
                changeFlag = true
            } else {
                return
            }
            reject(e)
        }
    } else { //说明返回的是普通值，向下传递
        resolve(x)
    }
};