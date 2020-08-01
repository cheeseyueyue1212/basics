# a in window 与 'a' in window的区别

```js
   // 例子如下   
   window.a = 1;
 
    a in window;   //返回false
   'a' in window;  //返回true
 
 
    //这个貌似是正常的，和我们理解的一样
    var xx = 1;
    console.log(xx in window);   //false
    console.log('xx' in window); //true 
 
 
    //但是这个就有点奇怪了，只声明变量，结果两种情况返回的的都是true，
    var x;
    console.log(x in window);    //true
    console.log('x' in window);  //true
    console.log(x); //undefined    我们打印下X 发现X其实就是undefined
    // 所以其实  x in window 等价于  undefined in window 所以为true
```

其实就是 a 是个变量，a in window 实际等于 1 in window，所以1 不在对象window或其原型链中，in 运算符返回false。

 而'a' in window 我们window.a 定义过了，a已经在window属性中的，所以返回true。

接着第二个例子 var xx = 1， 其实我们要知道这个js中 var 的全局变量的声明是等价于 windw.xx = 1的， 明白了这个，所以 其实第二个例子和上面一样。

第三个例子， var x; 其实可以等价于  window.x = undefined ;   所以在undefined in window的时候，我们可以看到window上 确实有undefined属性，所以为true。 而'x' in window 与之前例子同理，window上已有x属性所以为true。


## in
如果指定的属性在指定的对象或其原型链中，则in 运算符返回true。
语法：
```js
    prop in object
```
- prop
一个字符串类型或者 symbol 类型的属性名或者数组索引（非symbol类型将会强制转为字符串）。
- objectName
检查它（或其原型链）是否包含具有指定名称的属性的对象。

### 下面的例子演示了一些 in 运算符的用法。
```js
    // 数组
    var trees = new Array("redwood", "bay", "cedar", "oak", "maple");
    0 in trees        // 返回true
    3 in trees        // 返回true
    6 in trees        // 返回false
    "bay" in trees    // 返回false (必须使用索引号,而不是数组元素的值)

    "length" in trees // 返回true (length是一个数组属性)

    Symbol.iterator in trees // 返回true (数组可迭代，只在ES2015+上有效)


    // 内置对象
    "PI" in Math          // 返回true

    // 自定义对象
    var mycar = {make: "Honda", model: "Accord", year: 1998};
    "make" in mycar  // 返回true
    "model" in mycar // 返回true
```
in右操作数必须是一个对象值。例如，你可以指定使用String构造函数创建的字符串，但不能指定字符串文字。
```js
    var color1 = new String("green");
    "length" in color1 // 返回true
    var color2 = "coral";
    "length" in color2 // 报错(color2不是对象)
```

### 对被删除或值为 undefined 的属性使用in
如果你使用 delete 运算符删除了一个属性，则 in 运算符对所删除属性返回 false。
```js
    var mycar = {make: "Honda", model: "Accord", year: 1998};
    delete mycar.make;
    "make" in mycar;  // 返回false

    var trees = new Array("redwood", "bay", "cedar", "oak", "maple");
    delete trees[3];
    3 in trees; // 返回false
```

如果你只是将一个属性的值赋值为undefined，而没有删除它，则 in 运算仍然会返回true。
```js
    var mycar = {make: "Honda", model: "Accord", year: 1998};
    mycar.make = undefined;
    "make" in mycar;  // 返回true

    var trees = new Array("redwood", "bay", "cedar", "oak", "maple");
    trees[3] = undefined;
    3 in trees; // 返回true
```

## 继承属性
如果一个属性是从原型链上继承来的，in 运算符也会返回 true。
```js
    "toString" in {}; // 返回true
```