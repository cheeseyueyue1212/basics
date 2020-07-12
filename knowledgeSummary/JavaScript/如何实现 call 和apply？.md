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
if (!Function.prototype.bind) {
  Function.prototype.bind = function (oThis) {
    if (typeof this !== "function") {
      // closest thing possible to the ECMAScript 5 internal IsCallable function
      throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
    }

    var aArgs = Array.prototype.slice.call(arguments, 1), 
        fToBind = this, 
        fNOP = function () {},
        fBound = function () {
          return fToBind.apply(this instanceof fNOP && oThis
                                 ? this
                                 : oThis || window,
                               aArgs.concat(Array.prototype.slice.call(arguments)));
        };

    fNOP.prototype = this.prototype;
    fBound.prototype = new fNOP();

    // fBound.prototype = Object.create(this.prototype) 上两行代码 等于这行

    return fBound;
  };
}
```
方案二：
```js
Function.prototype.mybind = function (context) {
    if (typeof this !== "function") {
        throw new Error(this + "is not a function");
    }
    var self = this;
    var args = [...arguments];
    // for (var i = 1, len = arguments.length; i < len; i++) {
    //     args.push(arguments[i]);
    // }
 
    var fbound = function () {
        var bindArgs = Array.prototype.slice.call(arguments);
        self.apply(this instanceof self ? this : context, args.concat(bindArgs));
    }
    fbound.prototype = Object.create(self.prototype);
    //返回的函数不仅要和 被调函数的函数体相同，也要继承人家的原型链
    return fbound;
}
```