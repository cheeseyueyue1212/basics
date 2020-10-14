## this

```js
'use strict';
var a = 20;
function foo() {
  var a = 1;
  var obj = {
    a: 10,
    c: this.a + 20,
    fn: function () {
      return this.a;
    }
  }
  return obj.c;
}
console.log(foo());    // 40
console.log(window.foo());  // 40
```

### 原因：
> {} 不产生作用域，上下文this指向window