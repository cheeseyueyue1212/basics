# Object.getOwnPropertyDescriptor

## 语法：
```js
Object.getOwnPropertyDescriptor(obj, prop)
```

## 参数：
### obj
需要查找的目标对象
### prop
目标对象内属性名称

## 返回值
如果指定的属性存在于对象上，则返回其属性描述符对象（property descriptor），否则返回 undefined。

## 示例
```js
var o, d;

o = { get foo() { return 17; } };
d = Object.getOwnPropertyDescriptor(o, "foo");
// d {
//   configurable: true,
//   enumerable: true,
//   get: /*the getter function*/,
//   set: undefined
// }

o = { bar: 42 };
d = Object.getOwnPropertyDescriptor(o, "bar");
// d {
//   configurable: true,
//   enumerable: true,
//   value: 42,
//   writable: true
// }

o = {};
Object.defineProperty(o, "baz", {
  value: 8675309,
  writable: false,
  enumerable: false
});
d = Object.getOwnPropertyDescriptor(o, "baz");
// d {
//   value: 8675309,
//   writable: false,
//   enumerable: false,
//   configurable: false
// }
```