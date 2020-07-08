# reduce 为数组提供累加器，合并为一个值

定义：reduce() 方法对累加器和数组中的每个元素（从左到右）应用一个函数，最终合并为一个值。

语法：

```js
    array.reduce(function(total, currentValue, currentIndex, arr), initialValue)
```

**initialValue(可选)**: 指定第一次回调 的第一个参数。


## 回调第一次执行时:

* 如果 initialValue 在调用 reduce 时被提供，那么第一个 total 将等于 initialValue，此时 currentValue 等于数组中的第一个值；
* 如果 initialValue 未被提供，那么 total 等于数组中的第一个值，currentValue 等于数组中的第二个值。此时如果数组为空，那么将抛出 TypeError。
* 如果数组仅有一个元素，并且没有提供 initialValue，或提供了 initialValue 但数组为空，那么回调不会被执行，数组的唯一值将被返回。


### eg:

```js
    // 数组求和 
    let sum = [0, 1, 2, 3].reduce(function (a, b) {
      return a + b;
    }, 0);
    // 6
    // 将二维数组转化为一维 将数组元素展开
    let flattened = [[0, 1], [2, 3], [4, 5]].reduce(
      (a, b) => a.concat(b),
      []
    );
     // [0, 1, 2, 3, 4, 5]
```