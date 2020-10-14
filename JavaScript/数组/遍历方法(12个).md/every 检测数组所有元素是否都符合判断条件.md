# every 检测数组所有元素是否都符合判断条件


定义: 方法用于检测数组所有元素是否都符合函数定义的条件

语法：

```js
  array.every(function(currentValue, index, arr), thisValue)
```
thisValue(可选): 当执行回调函数时this绑定对象的值，默认值为undefined

**方法返回值规则**:

1. 如果数组中检测到**有一个元素不满足，则整个表达式返回 false**，且剩余的元素不会再进行检测。
2. 如果所有元素**都满足条件，则返回 true**。

eg:

```js
    function isBigEnough(element, index, array) { 
      return element >= 10; // 判断数组中的所有元素是否都大于10
    }
    let result = [12, 5, 8, 130, 44].every(isBigEnough);   // false
    let result = [12, 54, 18, 130, 44].every(isBigEnough); // true
    // 接受箭头函数写法 
    [12, 5, 8, 130, 44].every(x => x >= 10); // false
    [12, 54, 18, 130, 44].every(x => x >= 10); // true
```