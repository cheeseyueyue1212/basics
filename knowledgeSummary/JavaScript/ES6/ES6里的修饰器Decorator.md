# ES6里的修饰器Decorator
修饰器（Decorator）是一个函数，用来修改类的行为。

## 一、概述
S6 引入了这项功能，目前 Babel 转码器已经支持Decorator

首先，安装babel-core和babel-plugin-transform-decorators。由于后者包括在babel-preset-stage-0之中，所以改为安装babel-preset-stage-0亦可
```js
    $ npm install babel-core babel-plugin-transform-decorators
```
然后，设置配置文件.babelrc
```js
{
  "plugins": ["transform-decorators"]
}
```
这时，Babel就可以对Decorator转码了

脚本中打开的命令如下
```js
babel.transform("code", {plugins: ["transform-decorators"]})
```
## 二、类修饰
下面代码中，@testable就是一个修饰器。它修改了MyTestableClass这个类的行为，为它加上了静态属性isTestable
```js
    @testable
    class MyTestableClass {
    // ...
    }

    function testable(target) {
        target.isTestable = true;
    }

    MyTestableClass.isTestable // true
```
基本上，修饰器的行为就是下面这样
```js
    @decorator
    class A {}

    // 等同于

    class A {}
    A = decorator(A) || A;
```
修饰器对类的行为的改变，是代码编译时发生的，而不是在运行时。这意味着，修饰器能在**编译阶段运行代码**，也就是说，修饰器本质就是编译时执行的函数
## 1、参数
修饰器函数的第一个参数，是所要修饰的目标类
```js
function testable(target) {
  // ...
}
```
如果觉得一个参数不够用，可以在修饰器外面再封装一层函数
```js
    function testable(isTestable) {
        return function(target) {
            target.isTestable = isTestable;
        }
    }

    @testable(true)
    class MyTestableClass {}
    MyTestableClass.isTestable // true

    @testable(false)
    class MyClass {}
    MyClass.isTestable // false
```
上面代码中，**修饰器testable可以接受参数，这就等于可以修改修饰器的行为**。
前面的例子是为类添加一个静态属性，如果想添加实例属性，可以通过目标类的prototype对象操作
```js
    function testable(target) {
    target.prototype.isTestable = true;
    }

    @testable
    class MyTestableClass {}

    let obj = new MyTestableClass();
    obj.isTestable // true
```

## 三、方法修饰
修饰器不仅可以修饰类，还可以修饰类的属性
```js
class Person {
  @readonly
  name() { return `${this.first} ${this.last}` }
}
```
上面代码中，修饰器readonly用来修饰“类”的name方法
### 1、参数
此时，修饰器函数一共可以接受三个参数，第一个参数是所要修饰的目标对象，第二个参数是所要修饰的属性名，第三个参数是该属性的描述对象
```js
function readonly(target, name, descriptor){
  // descriptor对象原来的值如下
  // {
  //   value: specifiedFunction,
  //   enumerable: false,
  //   configurable: true,
  //   writable: true
  // };
  descriptor.writable = false;
  return descriptor;
}

readonly(Person.prototype, 'name', descriptor);
// 类似于
Object.defineProperty(Person.prototype, 'name', descriptor);
```
上面代码说明，修饰器（readonly）会修改属性的描述对象（descriptor），然后被修改的描述对象再用来定义属性。

下面是另一个例子，修改属性描述对象的enumerable属性，使得该属性不可遍历
```js
class Person {
  @nonenumerable
  get kidCount() { return this.children.length; }
}

function nonenumerable(target, name, descriptor) {
  descriptor.enumerable = false;
  return descriptor;
}
```
### 2、日志应用
下面的@log修饰器，可以起到输出日志的作用
```js
class Math {
  @log
  add(a, b) {
    return a + b;
  }
}

function log(target, name, descriptor) {
  var oldValue = descriptor.value;

  descriptor.value = function() {
    console.log(`Calling "${name}" with`, arguments);
    return oldValue.apply(null, arguments);
  };

  return descriptor;
}

const math = new Math();

// passed parameters should get logged now
math.add(2, 4);
```
上面代码中，@log修饰器的作用就是在执行原始的操作之前，执行一次console.log，从而达到输出日志的目的。
修饰器有注释的作用
```js
@testable
class Person {
  @readonly
  @nonenumerable
  name() { return `${this.first} ${this.last}` }
}
```
从上面代码中，我们一眼就能看出，Person类是可测试的，而name方法是只读和不可枚举的
### 3、执行顺序
如果同一个方法有多个修饰器，会像剥洋葱一样，先从外到内进入，然后由内向外执行
```js
function dec(id){
    console.log('evaluated', id);
    return (target, property, descriptor) => console.log('executed', id);
}

class Example {
    @dec(1)
    @dec(2)
    method(){}
}
// evaluated 1
// evaluated 2
// executed 2
// executed 1
```
上面代码中，外层修饰器@dec(1)先进入，但是内层修饰器@dec(2)先执行
除了注释，修饰器还能用来类型检查。所以，对于类来说，这项功能相当有用。从长期来看，它将是JS代码静态分析的重要工具

## 四、注意事项
修饰器只能用于类和类的方法，不能用于函数，因为存在函数提升
```js
var counter = 0;

var add = function () {
  counter++;
};

@add
function foo() {
}
```
上面的代码，意图是执行后counter等于1，但是实际上结果是counter等于0。因为函数提升，使得实际执行的代码是下面这样
```js
@add
function foo() {
}

var counter;
var add;

counter = 0;

add = function () {
  counter++;
};
```
下面是另一个例子
```js
var readOnly = require("some-decorator");

@readOnly
function foo() {
}
```
上面代码也有问题，因为实际执行是下面这样
```js
var readOnly;

@readOnly
function foo() {
}

readOnly = require("some-decorator");
```
总之，由于**存在函数提升，使得修饰器不能用于函数**。类是不会提升的，所以就没有这方面的问题。

### 另一方面，如果一定要修饰函数，可以采用高阶函数的形式直接执行
```js
function doSomething(name) {
  console.log('Hello, ' + name);
}

function loggingDecorator(wrapped) {
  return function() {
    console.log('Starting');
    const result = wrapped.apply(this, arguments);
    console.log('Finished');
    return result;
  }
}

const wrapped = loggingDecorator(doSomething);
```