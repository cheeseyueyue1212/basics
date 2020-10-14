class Point {
// ...
}

typeof Point // "function"
Point === Point.prototype.constructor // true


class B {}
let b = new B();

b.constructor === B.prototype.constructor // true

//类的内部所有定义的方法，都是不可枚举的（non-enumerable）