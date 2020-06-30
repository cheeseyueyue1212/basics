# cancat

定义： 方法用于合并两个或多个数组，返回一个新数组。

语法：

```js
    var newArr =oldArray.concat(arrayX,arrayX,......,arrayX)
```

参数：
arrayX（必须）：该参数可以是具体的值，也可以是数组对象。可以是任意多个。

eg:

```js
    let a = [1, 2, 3];
    let b = [4, 5, 6];
    //连接两个数组
    let newVal=a.concat(b); // [1,2,3,4,5,6]
    // 连接三个数组
    let c = [7, 8, 9]
    let newVal2 = a.concat(b, c); // [1,2,3,4,5,6,7,8,9]
    // 添加元素
    let newVal3 = a.concat('添加元素',b, c,'再加一个'); 
    // [1,2,3,"添加元素",4,5,6,7,8,9,"再加一个"]
   // 合并嵌套数组  会浅拷贝嵌套数组
   let d = [1,2 ];
   let f = [3,[4]];
   let newVal4 = d.concat(f); // [1,2,3,[4]]
```