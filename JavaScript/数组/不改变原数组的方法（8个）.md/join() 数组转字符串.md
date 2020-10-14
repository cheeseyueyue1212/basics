# join() 数组转字符串

定义: join() 方法用于把数组中的所有元素通过指定的分隔符进行分隔放入一个字符串，返回生成的字符串。

语法:

```js
    array.join(str)
```

参数:
str(可选): 指定要使用的分隔符，默认使用逗号作为分隔符。

```js
    let a= ['hello','world'];
    let str=a.join(); // 'hello,world'
    let str2=a.join('+'); // 'hello+world'
```

使用join方法或者下文说到的toString方法时，当数组中的元素也是数组或者是对象时会出现什么情况？

```js
    let a= [['OBKoro1','23'],'test'];
    let str1=a.join(); // OBKoro1,23,test
    let b= [{name:'OBKoro1',age:'23'},'test'];
    let str2 = b.join(); // [object Object],test
    // 对象转字符串推荐JSON.stringify(obj);
```

所以，**join()/toString()方法在数组元素是数组的时候，会将里面的数组也调用join()/toString(),如果是对象的话，对象会被转为[object Object]字符串**。