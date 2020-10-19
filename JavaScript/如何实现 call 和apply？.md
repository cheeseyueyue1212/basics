# 如何实现 call 和apply？
- 1、改变this指向：可以将目标函数作为这个对象的属性
- 2、利用arguments类数组对象实现参数不定长
- 3、不能增加对象的属性，所以在结尾需要delete

## 实现一个call/apply
```js
  Function.prototype.call1 = function (context, ...args) {
    if(typeof this !== 'function') {
        throw new TypeError('Error')
    }
    var newContext = context || window;
    newContext.fn = this;
    var result 
    if(args) {
        result = newContext.fn(...args);
    } else {
        result = newContext.fn();
    }
    delete newContext.fn;
    return result;
  }


  var obj = {
      name: 'cheese',
      age: '18'
  }

  function test(sex) {
      console.log(this.name + ':' + this.age)
      console.log('sex:', sex)
  }

  test.call1(obj, '1111')
  ```

  ## 实现一个bind

方案一：
```js
var value = 2;

var foo = {
    value: 1
};

function bar(name, age) {
    this.habit = 'shopping';
    console.log(this.value);
    console.log(name);
    console.log(age);
}

bar.prototype.friend = 'kevin';

var bindFoo = bar.bind(foo, 'daisy');

var obj = new bindFoo('18');
// undefined
// daisy
// 18
console.log(obj.habit);
console.log(obj.friend);
// shopping
// kevin


Function.prototype.bind2 = function (context, ...args) {

    if (typeof this !== "function") {
        throw new Error("Function.prototype.bind - what is trying to be bound is not callable");
    }

    var fn = this;

    var fNOP = function () { };

    var fBound = function (...bindArgs) {
        fn.apply(this instanceof fNOP ? this : context, args.concat(bindArgs));
    }

    fNOP.prototype = this.prototype;
    fBound.prototype = new fNOP();
    return fBound;
}
```

[参考文档](https://www.jianshu.com/p/1929f3a01b43)