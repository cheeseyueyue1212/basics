# promise

## Promise构造函数是同步执行还是异步执行，那么 then 方法呢？
promise构造函数是同步执行的，then方法是异步执行的


## 示例
```js

//错误处理

//方法一：
new Promise(function() {

}).then(() => {

}).catch(err => {

})

//方法二：
new Promise(function() {
    //todo ...
}).then(() => {
    //todo ...
}, function(err) {

})
```

## 问题二
```js
const promise = new Promise((resolve, reject) => {
    console.log(1);
    resolve();
    console.log(2);
})

promise.then(() => {
    console.log(3);
})

console.log(4);
```
结果：1 2 4 3