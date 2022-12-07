# forEach、for in 、 for of三者的区别

## for循环
其实除了这三种方法以外还有一种最原始的遍历，自Javascript诞生起就一直用的 就是for循环，它用来遍历数组
```js
var arr = [1,2,3,4]
for(var i = 0 ; i< arr.length ; i++){
	console.log(arr[i])
}
```
**for循环中可以使用break等来中断循环**

## forEach
对数组的每一个元素执行一次提供的函数（**不能使用return、break等中断循环**），不改变原数组，无返回值undefined。
```js
let arr = ['a', 'b', 'c', 'd']
arr.forEach(function (val, idx, arr) {
    console.log(val + ', index = ' + idx) // val是当前元素，index当前元素索引，arr数组
    console.log(arr)
})
```
输出结果：
```js
a, index = 0
(4) ["a", "b", "c", "d"]
b, index = 1
(4) ["a", "b", "c", "d"]
c, index = 2
(4) ["a", "b", "c", "d"]
d, index = 3
(4) ["a", "b", "c", "d"]
```

## for…in
循环遍历的值都是数据结构的键值
```js
let obj = {a: '1', b: '2', c: '3', d: '4'}
for (let o in obj) {
    console.log(o)    //遍历的实际上是对象的属性名称 a,b,c,d
    console.log(obj[o])  //这个才是属性对应的值1，2，3，4
}
```
总结一句: for in也可以循环数组但是特别适合遍历对象

## for…of
**它是ES6中新增加的语法，用来循环获取一对键值对中的值**

### 循环一个数组
```js
let arr = ['China', 'America', 'Korea']
for (let o of arr) {
    console.log(o) //China, America, Korea
}
```
循环一个普通对象（报错）
```js
let obj = {a: '1', b: '2', c: '3', d: '4'}
for (let o of obj) {
    console.log(o)   //Uncaught TypeError: obj[Symbol.iterator] is not a function
}
```
一个数据结构只有部署了 Symbol.iterator 属性, 才具有 iterator接口可以使用 for of循环。例子中的obj对象没有Symbol.iterator属性 所以会报错。
### 哪些数据结构部署了 Symbol.iteratoer属性了呢?
- 数组 Array
- Map
- Set
- String
- arguments对象
- Nodelist对象, 就是获取的dom列表集合

如果想让对象可以使用 for of循环怎么办?使用 Object.keys() 获取对象的 key值集合后,再使用 for of
```js
let obj = {a: '1', b: '2', c: '3', d: '4'}
for (let o of Object.keys(obj)) {
    console.log(o) // a,b,c,d
}
```
或者使用内置的Object.values()方法获取对象的value值集合再使用for of
```js
let obj = {a: '1', b: '2', c: '3', d: '4'}
for (let o of Object.values(obj)) {
    console.log(o) // 1,2,3,4
}
```
### 循环一个字符串
```js
let str = 'love'
for (let o of str) {
    console.log(o) // l,o,v,e
}
```
### 循环一个Map
```js
let iterable = new Map([["a", 1], ["b", 2], ["c", 3]]);

for (let [key, value] of iterable) {
  console.log(value);
}
// 1
// 2
// 3

for (let entry of iterable) {
  console.log(entry);
}
// [a, 1]
// [b, 2]
// [c, 3]
```
### 循环一个Set
```js
let iterable = new Set([1, 1, 2, 2, 3, 3]);

for (let value of iterable) {
  console.log(value);
}
// 1
// 2
// 3
```