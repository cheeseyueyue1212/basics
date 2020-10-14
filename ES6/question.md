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

