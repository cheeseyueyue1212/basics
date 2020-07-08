

```js
for(var i = 0; i < 5; i++) {
    setTimeout((i) => {
        console.log(i)
    },i*1000)
}

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


# ES7
```js
// 模拟其他语言中的 sleep，实际上可以是任何异步操作
const sleep = (timeountMS) => new Promise((resolve) => {
    setTimeout(resolve, timeountMS);
});

(async () => {  // 声明即执行的 async 函数表达式
    for (var i = 0; i < 5; i++) {
        if (i > 0) {
            await sleep(1000);
        }
        console.log(new Date, i);
    }

    await sleep(1000);
    console.log(new Date, i);
})();
```

# ES6
```js
var tasks = [];
​
var outPut = (i) => new Promise((resolve) => {
         setTimeout(() => {
            console.log('i:', i)
            resolve()
        }, i*1000)
    })

​
for(var i = 0; i < 5; i++) {
    tasks.push(outPut(i))
}
​
Promise.all(tasks).then(() => {
    console.log('i:', i)
})
```