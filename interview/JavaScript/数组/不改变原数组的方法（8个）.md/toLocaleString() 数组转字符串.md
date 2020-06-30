# toLocaleString() 数组转字符串

定义: 返回一个表示数组元素的字符串。该字符串由数组中的每个元素的 toLocaleString() 返回值经调用 join() 方法连接（由逗号隔开）组成。

语法:

```js
    array.toLocaleString()
```

参数：无。

```js
    let a=[{name:'OBKoro1'},23,'abcd',new Date()];
    let str=a.toLocaleString(); // [object Object],23,abcd,2018/5/28 下午1:52:20 
```

**如上述栗子：调用数组的toLocaleString方法，数组中的每个元素都会调用自身的toLocaleString方法，对象调用对象的toLocaleString,Date调用Date的toLocaleString**。