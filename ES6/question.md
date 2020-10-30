## 1. promsie async 问题
```js
async function async1() {     
    console.log("async1 start");      
    await  async2();     
    console.log("async1 end");   
 }  

async  function async2() {    
    console.log( 'async2');  
} 

console.log("script start");  

setTimeout(function () {      
    console.log("settimeout");  
},0);

async1();  

new Promise(function (resolve) {      
    console.log("promise1");      
    resolve();  
}).then(function () {      
    console.log("promise2"); 
}); 
console.log('script end');  

//结果：
//script start
//async1 start
//async2
//promise1
//script end
//async1 end
//promise2

//settimeout
```

## 2. Set 问题
```js
let s = new Set();
s.add([1]);
s.add([1]);console.log(s.size);
```
结果：2
两个数组[1]并不是同一个值，它们分别定义的数组，在内存中分别对应着不同的存储地址，因此并不是相同的值
都能存储到Set结构中，所以size为2



## async 和 await 相比直接使用 Promise 来说，优势在于处理 then 的调用链，能够更清晰准确的写出代码。缺点在于滥用 await 可能会导致性能问题，因为 await 会阻塞代码，也许之后的异步代码并不依赖于前者，但仍然需要等待前者完成，导致代码失去了并发性

```js
var a = 0;
var b = async () => {

    a = a + await 10
    console.log('2', a)
    a = (await 10) + a
    console.log('3', a)
}

b()
a++
console.log('1', a)
```
- 首先函数b 先执行，在执行到 await 10 之前变量 a 还是 0，因为在 await 内部实现了 generators ，generators 会保留堆栈中东西，所以这时候 a = 0 被保存了下来
- 因为 await 是异步操作，遇到await就会立即返回一个pending状态的Promise对象，暂时返回执行代码的控制权，使得函数外的代码得以继续执行，所以会先执行 console.log('1', a)
- 这时候同步代码执行完毕，开始执行异步代码，将保存下来的值拿出来使用，这时候 a = 10
- 然后后面就是常规执行代码了

