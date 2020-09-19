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
Function.prototype.myBind = function() {
    var args = arguments || [];
    var context = args[0];
    var func = this;
    var thisArgs = Array.prototype.slice.call(args, 1);
    var returnFunc = function() {
      Array.prototype.push.apply(thisArgs, arguments);
      // 最关键的一步，this是new returnFunc中创建的那个新对象，此时将其传给func函数，其实相当于做了new操作最后一步（执行构造函数）
      return func.apply(this instanceof func ? this : context, thisArgs);
    }
    returnFunc.prototype = new func()
    return returnFunc
}
```