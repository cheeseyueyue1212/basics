# 创建一个数组

## 1. 创建一个数组:
```js
    // 字面量方式:
    // 这个方法也是我们最常用的，在初始化数组的时候 相当方便
    var a = [3, 11, 8];  // [3,11,8];
    // 构造器:
    // 实际上 new Array === Array,加不加new 一点影响都没有。
    var a = Array(); // [] 
    var a = Array(3); // [,,] 
    var a = Array(3,11,8); // [ 3,11,8 ]
```

## 2. ES6 Array.of() 返回由所有参数值组成的数组
> 定义： 返回由所有参数值组成的数组，如果没有参数，就返回一个空数组。

> 目的： Array.of() 出现的目的是为了解决上述构造器因参数个数不同，导致的行为有差异的问题。

```js
    let a = Array.of(3, 11, 8); // [3,11,8]
    let a = Array.of(3); // [3]
```

## 3. ES6 Arrary.from() 将两类对象转为真正的数组
> 定义：用于将两类对象转为真正的数组（不改变原对象，返回新的数组）。

第一个参数(必需):要转化为真正数组的对象。

第二个参数(可选): 类似数组的map方法，对每个元素进行处理，将处理后的值放入返回的数组。

第三个参数(可选): 用来绑定this。

```js
    // 1. 对象拥有length属性
    let obj = {0: 'a', 1: 'b', 2:'c', length: 3};
    let arr = Array.from(obj); // ['a','b','c'];
    // 2. 部署了 Iterator接口的数据结构 比如:字符串、Set、NodeList对象
    let arr = Array.from('hello'); // ['h','e','l','l','o']
    let arr = Array.from(new Set(['a','b'])); // ['a','b']

    const someNumbers = { '0': 10, '1': 15, length: 2 };
    Array.from(someNumbers, value => value * 2); // => [20, 30]

```

**用途**
* 1. 类数据转化为真正的数组
* 2. 克隆一个数组（浅拷贝， 只有第一层数据不相互影响）
```js
    //实现深拷贝
    function recursiveClone(val) {
        return Array.isArray(val) ? Array.from(val, recursiveClone) : val;
    }

    const numbers = [[0, 1, 2], ['one', 'two', 'three']];
    const numbersClone = recursiveClone(numbers);

    numbersClone; // => [[0, 1, 2], ['one', 'two', 'three']]
    numbers[0] === numbersClone[0] // => false
```

* 3. 使用值填充数组
```js
    const length = 3;
    const init   = 0;
    const result = Array.from({ length }, () => init);

    result; // => [0, 0, 0]
```

result 是一个新的数组，它的长度为3，数组的每一项都是0。调用 Array.from() 方法，传入一个类数组对象 { length } 和 返回初始化值的 mapFunction 函数。

但是，有一个替代方法 **array.fill()** 可以实现同样的功能。

```js
    const length = 3;
    const init   = 0;
    const result = Array(length).fill(init);
```