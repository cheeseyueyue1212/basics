# async/await 的基础使用及原理
async/await是es7推出的一套关于异步的终极解决方案，为什么要说他是终极解决方案呢？因为他实在是太好用了，而且写起来还非常的简单。
## 一：async/await基础语法
```js
// 定义一个异步函数（假设他是一个异步函数）
getJSON(){
    return 'JSON'
}

// 在需要使用上面异步函数的函数前面，加上async声明，声明这是一个异步函数
async testAsync() {
  // 在异步函数前面加上await，函数执行就会等待用await声明的异步函数执行完毕之后，在往下执行
  await getJSON()
  
  ...剩下的代码
}
```
以上就是async/await最基本的用法。
还需要注意的一点就是**使用async/await的时候，是无法捕获错误**的，这个时候就要用到我们es5里面一个被大家遗忘了的try/catch，来进行错误的捕获：
```js
async testAsync() {
  try {
     await getJSON()
  } catch(err) {
     console.log(err)
  }
  ...剩下的代码
}
```
### 注意：
1. async函数在声明形式上和普通函数没有区别，函数声明式，函数表达式，对象方法，class方法和箭头函数等都可以声明async函数。
2. 任何一个await语句后面的 Promise 对象变为reject状态，那么整个async函数都会中断执行。
3. async函数返回的 Promise 对象，必须等到内部所有await命令后面的 Promise 对象执行完，才会发生状态改变，除非遇到return语句或者抛出错误。也就是说，只有async函数内部的异步操作执行完，才会执行then方法指定的回调函数。

## 二：async/await
## async
async这个单词大家应该都比较熟悉，他是英文单词‘异步’的简写，代表的意思也是异步。
```js
async function testAsync() {
    return "hello async";
}

const result = testAsync();
console.log(result);
```
输出结果：
```js
Promise{<resolved>: "hello async"}
```
可以看出async函数，返回的是一个Promise对象
### await
await是英文单词‘等待’的意思，代表的意思也是等待，那他等的到底是个什么东西呢？还是一个Promise。

## 三 async/await和Generator
Generator函数:generator（生成器）是ES6标准引入的新的数据类型。一个generator看上去像一个函数，但可以返回多次。下面面是一个Generator函数的简单写法。
```js
function* Generator() {
            yield '11111111';
            yield '22222222'
            return '3333333';
        }

        let aaa = Generator();
```
Generator函数和普通函数一样通过函数名+()去调用，但是调用完之后并不执行。它仅仅是创建了一个generator对象，还没有去执行它。想要运行Generator函数，需要通过遍历器对象的next方法。
```js
let a = aaa.next()
    let b = aaa.next()
    let c = aaa.next()
    let d = aaa.next()
    console.log(a,b,c,d) //  {value: "11111111", done: false}     {value: "22222222", done: false}      {value: "3333333", done: true}     {...
```
想要Generator函数执行下一步，必须调用遍历器对象的next方法，使得指针移向下一个状态。也就是说，每次调用next方法，内部指针就从函数头部或上一次停下来的地方开始执行，直到遇到下一个yield表达式或return语句。由此可见，Generator 函数是分段执行的，yield表达式是暂停执行的标记，而next方法可以恢复执行。也就是上面说的可以交出函数的执行权。
上面对Generator函数做了一个简单的介绍，接下来说一下async/await和Generator。
**根据阮一峰老师的介绍，async函数就是Generator函数的语法糖。**
[await](./img/await.png)
代码上看起来，async函数就是将 Generator 函数的星号（*）替换成async，将yield替换成await。

### 实际上async函数对Generator函数的改进，体现在一下四点：

1. async函数自带执行器，所以执行方式和普通函数的执行方式一样，通过函数名+（）的方式执行。

2. async和await比起*和yield在语义上更清楚。

3. co模块约定，yield命令后面只能是 Thunk 函数或 Promise 对象，而async函数的await命令后面，可以是 Promise 对象和原始类型的值（数值、字符串和布尔值，但这时会自动转成立即 resolved 的 Promise 对象）。

4. async函数的返回值是 Promise 对象，这比 Generator 函数的返回值是 Iterator 对象方便多了。你可以用then方法指定下一步的操作。

进一步说，async函数完全可以看作多个异步操作，包装成的一个 Promise 对象，而await命令就是内部then命令的语法糖。


## 四：async/await和Promise
上面说了async/await和Generator的关系，这里再说一下和Promise的关系，async/await其实是基于Promise的。async函数其实是把Promise包装了一下。
下面是一个async/await的写法：
```js
getConstant() {
    return 1
 }

async getAsyncConstant() { 
    return 1
}

async getPromise() {
    return new Promise((resolved, rejected)=> {
        resolved(1)
    });
}

async test() {
    let a = 2
    let c = 1
    await getConstant();
    let d = 3
    await getPromise();
    let d = 4
    await getAsyncConstant();
    return 2
}
```
上面的代码其实真正的在解析执行的时候是这样的：
```js
function getConstant() {
   return 1;
}

function getAsyncConstant() {
  return Promise.resolve().then(function () {
   return 1;
  });
}

function getPromise() {
  return Promise.resolve().then(function () {
    return new Promise((resolved, rejected) => {
        resolved(1);
    });
  });
}

  test() {
    return Promise.resolve().then(function () {
       let a = 2;
       let c = 1;
       return getConstant();
     }).then(function () {
       let d = 3;
       return getPromise();
     }).then(function () {
       let d = 4;
       return getAsyncConstant();
     }).then(function () {
       return 2;
     });
 }
 ```
通过上面的代码可以看出async/await的本身还是基于Promise的。

因为await本身返回的也是一个Promise,它只是把await后面的代码放到了await返回的Promise的.then后面，以此来实现的。

[一道练习题](./question.md)