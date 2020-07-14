# ES7

## 求幂运算符（**）
```js
3**2
```

## Array.prototype.includes()方法
```js
[1, 2, 3].indexOf(3) > -1 // true
等同于：
[1, 2, 3].includes(3) // true
```

> 两者这都是通过===进行数据处理，但是对NaN数值的处理行为不同。includes对NaN的处理不会遵循严格模式去处理，所以返回true。indexOf会按照严格模式去处理，返回-1。

```js
[1, 2, NaN].includes(NaN)     // true
[1, 2, NaN].indexOf(NaN)  // -1
```
> 如果仅仅查找数据是否在数组中，建议使用includes，如果是查找数据的索引位置，建议使用indexOf更好一些
