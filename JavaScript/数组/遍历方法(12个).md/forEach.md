# forEach

参数:

function(必须): 数组中每个元素需要调用的函数。

```js

    array.forEach(function(currentValue, index, arr), thisValue)


    // 回调函数的参数
    1. currentValue(必须),数组当前元素的值
    2. index(可选), 当前元素的索引值
    3. arr(可选),数组对象本身
```

thisValue(可选): 当执行回调函数时this绑定对象的值，默认值为undefined


**关于forEach()你要知道：**

1. 无法中途退出循环，只能用return退出本次回调，进行下一次回调。
2. 它总是返回 undefined值,即使你return了一个值。

**下面类似语法同样适用这些规则**
```js
    1. 对于空数组是不会执行回调函数的
    2. 对于已在迭代过程中删除的元素，或者空元素会跳过回调函数
    3. 遍历次数再第一次循环前就会确定，再添加到数组中的元素不会被遍历。
    4. 如果已经存在的值被改变，则传递给 callback 的值是遍历到他们那一刻的值。
```

eg:

```js
    let a = [1, 2, ,3]; // 最后第二个元素是空的，不会遍历(undefined、null会遍历)
    let obj = { name: 'OBKoro1' };
    let result = a.forEach(function (value, index, array) { 
      a[3] = '改变元素';
      a.push('添加到尾端，不会被遍历')
      console.log(value, 'forEach传递的第一个参数'); // 分别打印 1 ,2 ,改变元素
      console.log(this.name); // OBKoro1 打印三次 this绑定在obj对象上
      // break; // break会报错
      return value; // return只能结束本次回调 会执行下次回调
      console.log('不会执行，因为return 会执行下一次循环回调')
    }, obj);
    console.log(result); // 即使return了一个值,也还是返回undefined
    // 回调函数也接受接头函数写法
```