# String.prototype.substring()

> substring() 方法返回一个字符串在开始索引到结束索引之间的一个子集, 或从开始索引直到字符串的末尾的一个子集。

# 语法

> str.substring(indexStart[, indexEnd])

# 描述

substring 提取从 indexStart 到 indexEnd（不包括）之间的字符。特别地：

- 如果 indexStart 等于 indexEnd，substring 返回一个空字符串。
- 如果省略 indexEnd，substring 提取字符一直到字符串末尾。
- 如果任一参数小于 0 或为 NaN，则被当作 0。
- 如果任一参数大于 stringName.length，则被当作 stringName.length。
- 如果 indexStart 大于 indexEnd，则 substring 的执行效果就像两个参数调换了一样。见下面的例子。

# 示例

```js
    var anyString = "Mozilla";

    // 输出 "Moz"
    console.log(anyString.substring(0,3));
    console.log(anyString.substring(3,0));
    console.log(anyString.substring(3,-3));
    console.log(anyString.substring(3,NaN));
    console.log(anyString.substring(-2,3));
    console.log(anyString.substring(NaN,3));

    // 输出 "lla"
    console.log(anyString.substring(4,7));
    console.log(anyString.substring(7,4));

    // 输出 ""
    console.log(anyString.substring(4,4));

    // 输出 "Mozill"
    console.log(anyString.substring(0,6));

    // 输出 "Mozilla"
    console.log(anyString.substring(0,7));
    console.log(anyString.substring(0,10));
```