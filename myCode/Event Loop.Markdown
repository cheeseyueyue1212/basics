## 题目一
```javascript

    setTimeout(() => {
    console.log('setTimeout')
    }, 0)

    setImmediate(() => {
    console.log('setImmediate')
    })

```
结果：
> setTimeout
> setImmediate
或者
> setImmediate
> setTimeout