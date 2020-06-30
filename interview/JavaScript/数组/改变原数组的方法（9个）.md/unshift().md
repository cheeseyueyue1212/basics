# unshift()

定义：unshift() 方法可向数组的开头添加一个或更多元素，并返回新的长度。

参数: item1, item2, ..., itemX ,要添加到数组开头的元素

```js
    let  a =  [1,2,3];
    let item = a.unshift('开头');  // 4
    console.log(a); // ['开头',1,2,3]
```