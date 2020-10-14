# 前端开发规范参考文档
* [一. 基本原则](#一-基本原则)
    * [1. 结构、样式、行为分离](#1-结构样式行为分离)
    * [2. 缩进](#2-缩进)
    * [3. 统一注释](#3-统一注释)
* [二. JavaScript](#二-JavaScript)
    * [1. 缓存数组长度](#1-缓存数组长度)
    * [2. 异步加载第三方内容](#2-异步加载第三方内容)
    * [3. 不同行为或逻辑的语句集，使用空行隔开，更易阅读](#3-不同行为或逻辑的语句集，使用空行隔开，更易阅读)
    * [4. 对象的属性和方法间保留空行](#4-对象的属性和方法间保留空行)
    * [5. 不用别名引用 this，使用箭头函数，直接使用，更加简洁](#5-不用别名引用使用箭头函数直接使用更加简洁)
    * [6. 多次使用的命名空间，使用对象解构替换，简洁易读](#6-多次使用的命名空间使用对象解构替换简洁易读)
    * [...]()
* [三. 浏览器环境](#三-浏览器环境)
## 一. 基本原则
### 1. 结构、样式、行为分离
尽量确保文档和模板只包含 HTML 结构，样式都放到样式表里，行为都放到脚本里。
### 2. 缩进
统一两个空格缩进（总之缩进统一即可）
### 3. 统一注释

## 二. JavaScript
### 1. 缓存数组长度
循环无疑是和 JavaScript 性能非常相关的一部分。通过存储数组的长度，可以有效避免每次循环重新计算。
注: 虽然现代浏览器引擎会自动优化这个过程，但是不要忘记还有旧的浏览器。

![alt](./imgs/栗子.png)

### 2. 异步加载第三方内容
当你无法保证嵌入第三方内容比如 Youtube 视频或者一个 like/tweet 按钮可以正常工作的时候，你需要考虑用异步加载这些代码，避免阻塞整个页面加载。

![alt](./imgs/async.png)

### 3. 不同行为或逻辑的语句集，使用空行隔开，更易阅读
```js
function setStyle(element, property, value) {
  if (element == null) return

  element.style[property] = value
}
```

### 4. 对象的属性和方法间保留空行
```js
// bad
const obj = {
  foo() {
  },
  bar() {
  }
}

// good
const obj = {
  foo() {
  },

  bar() {
  }
}
```
### 5. 不用别名引用 this，使用箭头函数，直接使用，更加简洁

```js
// bad
function foo() {
  const self = this
  return function () {
    console.log(self)
  }
}

// bad
function foo() {
  const that = this
  return function () {
    console.log(that)
  }
}

// good
function foo() {
  return () => {
    console.log(this)
  }
}
```

### 6. 多次使用的命名空间，使用对象解构替换，简洁易读
```js
// bad
const x = obj.x
const y = obj.y
const a = arr[0]
const b = arr[1]

// good
const { x, y } = obj
const [a, b] = arr
```

```js
// good
function getFullName(user) {
  const { firstName, lastName } = user;
  return `${firstName} ${lastName}`;
}

// best
function getFullName({ firstName, lastName }) {
  return `${firstName} ${lastName}`;
}
```

```js
// good
function processInput(input) {
  // 处理代码...
  return { left, right, top, bottom };
}

// 调用者只选择他们需要的数据。
const { left, top } = processInput(input);
```

### 7. 避免使用 switch
`switch` 的方式需要逐条 `case` 判断且匹配的 `case`，如果漏掉 `break`，会执行下一条 `case` （不论是否满足）或 `default`，直到遇到 `break` 为止。

> 使用字典对象代替，速度更快，同时避免未预料的结果。
```js
const cases = {
  alpha: function() {
    // ...
  },
  beta: function() {
    // ...
  },
  _default: function() {
    // ...
  }
}
```

### 8. 循环体不要包含函数表达式，事先将函数提取到循环体外，避免多次声明函数对象。
```js
// bad
for (let i = 0, len = elements.length; i < len; i++) {
  const element = elements[i]
  addListener(element, 'click', function () {})
}

// good
function clicker() {
  // ...
}

for (let i = 0, len = elements.length; i < len; i++) {
  const element = elements[i]
  addListener(element, 'click', clicker)
}
```

### 9.遍历对象若无需获取原型链的属性，用 Object.keys 和 for 代替 for...in
* for in 的速度很慢
* 无需遍历原型链的可枚举属性
* 无需 hasOwnProperty 判断来避免遍历原型链
```js
for (let keys = Object.keys(obj), i = keys.length; i--; ) {
  const key = keys[i]
  // ...
}
```

### 10. 字符串
**字符串模版**
```js
const name = 'lucy'

// bad
const greetings = 'Hello ' + name

// good
const greetings = `Hello ${name}`
```
**换行的字符串**
```js
const html = `
    <article>
    <h1>Title here</h1>
    <p>This is a paragraph</p>
    <footer>Complete</footer>
    </article>
    `
```


### 11. 转换类数组（array-like object）成数组时，使用 Array.from
```js
const foo = document.querySelectorAll('.foo')

// bad
const nodes = Array.prototype.slice.call(foo, 0)

// good
const nodes = Array.from(foo)
```

### 12. 对象的属性不使用关键字/保留字，只对无效属性的属性名添加引号
```js
// bad
const superman = {
  default: { clark: 'kent' },
  'bar': true,
  'data-blah': 5
}

// good
const superman = {
  defaults: { clark: 'kent' },
  bar: true,
  'data-blah': 5
}
```

### 13. 直接给函数的参数指定默认值，不要使用一个变化的函数参数

> 默认值只会在参数未传入或值为 undefined 的情况下被使用

```js
// bad
function handleThings(opts) {
  opts = opts || {}
  // ...
}

// good
function handleThings(opts = {}) {
  // ...
}
```


### 14. 箭头函数如果只有一个参数，省略圆括号；如果函数体只有一行返回语句，省略花括号和 return

```js
// bad
[1, 2, 3].map((x) => {
  return x * x
})

// good
[1, 2, 3].map(x => x * x)
```

## 三. 浏览器环境
### 1. 尽量减少 DOM 操作
> 使用变量缓存 DOM 对象

### 15. 对于对迭代器的映射，使用 Array.from 替代展开方法 ... ， 因为它避免了创建中间数组。
```js
// bad
const baz = [...foo].map(bar);

// good
const baz = Array.from(foo, bar);
```

```js
// bad
document.getElementById('container').setAttribute('class', 'active')
document.getElementById('container').setAttribute('index', 0)

// good
const el = document.getElementById('container')
el.setAttribute('class', 'active')
el.setAttribute('index', 0)
```

### 2. 操作 DOM 时，尽量减少页面 reflow
页面 reflow 是非常耗时的行为，非常容易导致性能瓶颈。下面一些场景会触发浏览器的reflow：
- DOM 元素的添加、修改（内容）、删除
- 应用新的样式或者修改任何影响元素布局的属性
- Resize 浏览器窗口、滚动页面
- 读取元素的某些属性，如offsetLeft、offsetTop、offsetHeight、offsetWidth、scrollTop/Left/Width/Height、clientTop/Left/Width/Height、getComputedStyle()、currentStyle(IE)

```js
// bad
el.style.width = '100px'
el.style.height = '100px'
while (i--) {
  el.style.left = el.offsetWidth + 10 + 'px'
}

// good
el.style.cssText = 'width: 100px; height: 100px;'
const offsetWidth = el.offsetWidth
while (i--) {
  el.style.left = offsetWidth + 10 + 'px'
}
```

> 操作 document fragment 是在内存中操作而非 DOM 树下，不会导致 reflow

```js
// bad
for (let i = 0; i < 5; i++) {
  const li = document.createElement('li')
  ul.appendChild(li)
}

// good
const docFrag = document.createDocumentFragment()
for (let i = 0; i < 5; i++) {
  const li = document.createElement('li')
  docFrag.appendChild(li)
}
ul.appendChild(docFrag)
```

