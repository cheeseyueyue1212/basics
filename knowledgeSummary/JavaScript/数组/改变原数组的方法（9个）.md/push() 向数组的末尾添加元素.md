# push() 向数组的末尾添加元素

定义：push() 方法可向数组的末尾添加一个或多个元素，并返回新的长度。

参数: item1, item2, ..., itemX ,要添加到数组末尾的元素

```js
    let  a =  [1,2,3];
    let item = a.push('末尾');  // 4
    console.log(a); // [1,2,3,'末尾']
```