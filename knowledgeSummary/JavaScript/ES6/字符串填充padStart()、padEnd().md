# 字符串填充padStart()、padEnd()
> ES8提供了新的字符串填充方法，该方法可以使得字符串达到固定长度。它有两个参数，字符串目标长度和填充内容。

```js
'react'.padStart(10, 'm')      //'mmmmmreact'
'react'.padEnd(10, 'm')       //' reactmmmmm'
'react'.padStart(3, 'm')    // "react"
```