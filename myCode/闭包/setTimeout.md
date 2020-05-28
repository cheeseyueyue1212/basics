## 闭包

```js
function test() {
    var a = 2,
        b = 4;
    function inner() {
        var c;
        c = a + b;
        console.log(c);
    }
    return inner;
}
test();
```

```js
for(var i = 0; i < 5; i++> {
    setTimeout((i) => {
        console.log(i)
    },i*1000)
})

==> 输出：1 2 3 4 5
//方法一：
for (var i = 1; i <= 5; i++) {
  let _i = i;
  setTimeout(function timer() {
    console.log(_i);
  }, i * 1000);
} //1 2 3 4 5

//方法二：
for (let i = 1; i <= 5; i++) {
  setTimeout(function timer() {
    console.log(i);
  }, i * 1000);
} //1 2 3 4 5

//方法三：闭包（立即执行函数）
for (var i = 1; i <= 5; i++) {
  (function (i) {
    setTimeout(function timer() {
      console.log(i);
    }, i * 1000);
  })(i)
}

//方法四：闭包
for (var i = 1; i <= 5; i++) {
  setTimeout((function (i) {
    return function () {
      console.log(i);
    }
  })(i), i * 1000);
}

//方法五：参数传递按照值传递
function fn(i) {
    setTimeout(() => {
        console.log(i);
    }, 1000)
}

for (var i = 1; i <= 5; i++) {
    fn(i)
}
```

### 原因：var可以变量提升，setTimeout 内部拿到的是循环完的，只是5

### 知识点2:
> setTimeout 执行完返回一个唯一ID，比如89。 用来clearTimeout.

### 闭包的形成条件:
1. 在函数内部创建新的函数
2. 新的函数执行时，访问了外部函数的变量对象