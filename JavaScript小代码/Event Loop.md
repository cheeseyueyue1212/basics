## 题目一
```javascript

    setTimeout(() => {
        console.log('setTimeout')
    }, 0)

    setImmediate(() => {
        console.log('setImmediate')
    })

```
结果：
> setTimeout
> setImmediate
或者
> setImmediate
> setTimeout

### 原因：
> setTimeout/setInterval 第二个参数有个范围【1， 2^31 -1】，如果不在范围内，则初始化为1，即setTimeout(fu,0) === setTimeout(fn,1)
> 当event loop时，先检查timer,等待的时间超过1，就执行setTimeout,否则不执行


## setTimeout的那些事
1.第二个参数：在多少时间后加入异步队列，并不一定多少时间就执行
2.可以防抖
```javascript

function throttle(method, context) {
    clearTimeout(method.tid)

    method.tid = setTimeout(() => {
        method.call(context);
    })
}

function fn() {
    console.log(111)
}

window.onresize = function() {
    throttle(fn)
}


```

### 一本好书：JavaScript核心技术开发解密