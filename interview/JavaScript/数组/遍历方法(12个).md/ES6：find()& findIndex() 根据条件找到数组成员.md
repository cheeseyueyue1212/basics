# ES6：find()& findIndex() 根据条件找到数组成员

## find()定义：
> 用于找出第一个符合条件的数组成员，并返回该成员，如果没有符合条件的成员，则返回undefined。

## findIndex()定义：
> 返回第一个符合条件的数组成员的位置，如果所有成员都不符合条件，则返回-1。

这两个方法都可以识别NaN,弥补了indexOf的不足.

**eg:**

```js
    // find
    let a = [1, 4, -5, 10].find((n) => n < 0); // 返回元素-5
    let b = [1, 4, -5, 10,NaN].find((n) => Object.is(NaN, n));  // 返回元素NaN
    // findIndex
    let a = [1, 4, -5, 10].findIndex((n) => n < 0); // 返回索引2
    let b = [1, 4, -5, 10,NaN].findIndex((n) => Object.is(NaN, n));  // 返回索引4
```