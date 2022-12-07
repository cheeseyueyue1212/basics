# 1. Object.keys方法

## 1. 输出对象中值大于2的key的数组

```js
var data = {a: 1, b: 2, c: 3, d: 4};
Object.keys(data).filter(function(x) { return 1 ;})
```
期待输出：[“c”,”d”]
请问1处填什么？

正确答案：1 ：data[x]>2


Object.keys是es5中新增的方法，用来获取对象自身所有的可枚举的属性名，但不包括原型中的属性，然后返回一个由属性名组成的数组。注意它同for..in一样不能保证属性按对象原来的顺序输出。
Object.getOwnPropertyNames也是es5中新增的方法，返回对象的所有自身属性的属性名（包括不可枚举的属性）组成的数组，但不会获取原型链上的属性。

Array.filter(function)对数组进行过滤返回符合条件的数组。

# 2. Object.values()方法
> Object.values方法返回一个数组，成员是参数对象自身的（不含继承的）所有可遍历（ enumerable ）属性的键值。

```js
var obj = { foo: "bar", baz: 42 };  
Object.values(obj)  
// ["bar", 42] 
```

返回数组的成员顺序，属性名为数值的属性，是按照数值大小，从小到大遍历的，因此返回的顺序是b、c、a。Object.values只返回对象自身的可遍历属性。
```js
var obj = { 100: 'a', 2: 'b', 7: 'c' };  
Object.values(obj)  
// ["b", "c", "a"]  
```

如果Object.values方法的参数是一个字符串，会返回各个字符组成的一个数组。
```js
Object.values('foo')  
// ['f', 'o', 'o'] 
```
上面代码中，字符串会先转成一个类似数组的对象。字符串的每个字符，就是该对象的一个属性。因此，Object.values返回每个属性的键值，就是各个字符组成的一个数组。
如果参数不是对象，Object.values会先将其转为对象。由于数值和布尔值的包装对象，都不会为实例添加非继承的属性。所以，Object.values会返回空数组。

# 3. Object.create()

> Object.create()方法创建一个新对象，使用现有的对象来提供新创建的对象的__proto__。
### 语法
Object.create(proto, [propertiesObject])
### 参数
proto
### 新创建对象的原型对象。
propertiesObject
可选。如果没有指定为 undefined，则是要添加到新创建对象的可枚举属性（即其自身定义的属性，而不是其原型链上的枚举属性）对象的属性描述符以及相应的属性名称。这些属性对应Object.defineProperties()的第二个参数。
### 返回值
一个新对象，带着指定的原型对象和属性。

如：
```js
var parent = {
    x : 1,
    y : 1
}
var child = Object.create(parent,{
    z : {                           // z会成为创建对象的属性
        writable:true,
        configurable:true,
        value: "newAdd"
    }
});
console.log(child)//{z: "newAdd"}z: "newAdd"__proto__: x: 1y: 1__proto__: Object
```

### Object.create()创建继承
```js
function A(){
  this.a = 1;
  this.b = 2;
}
A.prototype.drive = function(){
  console.log('drivvvvvvvvvv');
}
//方式1
function B(){}
B.prototype = Object.create(new A()); //这里采用了new 一个实例
//方式2
function C(){
  A.call(this);
}
C.prototype = Object.create(A.prototype) //这里使用的是父类的原型
```
以上两种方式有什么区别?
1的缺点：
执行了 new，相当于运行了一遍 A ，如果在 A 里做了一些其它事情（如改变全局变量）就会有副作用。
用 A 创建的对象做原型，里面可能会有一些冗余的属性。
2模拟了 new 的执行过程

# 4. Object.hasOwnProperty()方法
判断对象自身属性中是否具有指定的属性。
在某个对象是否拥有某个属性，判断的方法有很多，常用的方法就是object.hasOwnProperty('×××')，这个方法是不包括对象原型链上的方法的
```js
var obj = {
    name:'fei'
}
    console.log(obj.hasOwnProperty('name'))//true
    console.log(obj.hasOwnProperty('toString'))//false
```
以上，obj对象存在的name属性的时候，调用这个方法才是返回true，我们知道其实每个对象实例的原型链上存在toString方法，在这里打印false，说明这个方法只是表明实例对象的属性，不包括原型链上的属性。

# 5. Object.getOwnPropertyNames()方法
Object.getOwnPropertyNames()方法返回对象的所有自身属性的属性名（包括不可枚举的属性）组成的数组，但不会获取原型链上的属性。
```js
function A(a,aa) {
  this.a = a;
  this.aa = aa;
  this.getA = function() {
    return this.a;
  }
}
// 原型方法
A.prototype.aaa = function () {};

var B = new A('b', 'bb');
B.myMethodA = function() {};
// 不可枚举方法
Object.defineProperty(B, 'myMethodB', {
  enumerable: false,
  value: function() {}
});

Object.getOwnPropertyNames(B); // ["a", "aa", "getA", "myMethodA", "myMethodB"]
```

### Object.getOwnPropertyNames和Object.keys区别
Object.getOwnPropertyNames和Object.keys的区别，即Object.keys只适用于可枚举的属性，而Object.getOwnPropertyNames返回对象自动的全部属性名称。

```js
'use strict';
(function(){
    if(!Object.getOwnPropertyNames){
        console.log('浏览器不支持getOwnPropertyNames');
        return;
    }

    //人类的构造函数
    var person = function(name, age, sex){
        this.name = name;
        this.age = age;
        this.sex = sex;
        
        this.sing = function(){
            console.log('sing');
        }
    }
    //new 一个ladygaga
    var gaga = new person('ladygaga', 26, 'girl');

    //给嘎嘎发放一个不可枚举的身份证
    Object.defineProperty(gaga, 'id', {
        value : '1234567890',
        enumerable : false
    });

    //查看gaga的个人信息
    var arr = Object.getOwnPropertyNames(gaga);
    document.write(arr); //output: name,age,sex,sing,id

    document.write('</br>');
    
　　 //注意和getOwnPropertyNames的区别，不可枚举的id没有输出
    var arr1 = Object.keys(gaga);
    document.write(arr1); //output: name,age,sex,sing
})();
```
# 6. es6 javascript对象方法Object.assign()
Object.assign方法用于对象的合并，将源对象（ source ）的所有可枚举属性，复制到目标对象（ target ）
```js
var target = { a: 1 };
var source1 = { b: 2 };
var source2 = { c: 3 };
Object.assign(target, source1, source2);
target // {a:1, b:2, c:3}
```
1、如果目标对象与源对象有同名属性，或多个源对象有同名属性，则后面的属性会覆盖前面的属性。
2、如果只有一个参数，Object.assign会直接返回该参数。
```js
var obj = {a: 1};  
Object.assign(obj) === obj // true  
```
3、如果该参数不是对象，则会先转成对象，然后返回。
4、由于undefined和null无法转成对象，所以如果它们作为参数，就会报错。
5、Object.assign方法实行的是浅拷贝，而不是深拷贝。也就是说，如果源对象某个属性的值是对象，那么目标对象拷贝得到的是这个对象的引用。
```js
var obj1 = {a: {b: 1}};  
var obj2 = Object.assign({}, obj1);  
obj1.a.b = 2;  
obj2.a.b // 2  
```
上面代码中，源对象obj1的a属性的值是一个对象，Object.assign拷贝得到的是这个对象的引用。这个对象的任何变化，都会反映到目标对象上面。

### 常见用途
#### （ 1 ）为对象添加属性
```js
class Point {  
    constructor(x, y) {  
        Object.assign(this, {x, y});  
    }  
}
```
上面方法通过Object.assign方法，将x属性和y属性添加到Point类的对象实例。

#### （ 2 ）为对象添加方法
```js
Object.assign(SomeClass.prototype, {  
    someMethod(arg1, arg2) {  
    ···  
    },  
    anotherMethod() {  
    ···  
    }  
});  
//  等同于下面的写法  
SomeClass.prototype.someMethod = function (arg1, arg2) {  
···  
};  
SomeClass.prototype.anotherMethod = function () {  
···  
}; 
```
上面代码使用了对象属性的简洁表示法，直接将两个函数放在大括号中，再使用 assign 方法添加到 SomeClass.prototype 之中。

#### （ 3 ）克隆对象
```js
function clone(origin) {  
    return Object.assign({}, origin);  
}
```
上面代码将原始对象拷贝到一个空对象，就得到了原始对象的克隆。
不过，采用这种方法克隆，只能克隆原始对象自身的值，不能克隆它继承的值。

#### （ 4 ）合并多个对象
将多个对象合并到某个对象。
```js
const merge =(target, ...sources) => Object.assign(target, ...sources);  
```
如果希望合并后返回一个新对象，可以改写上面函数，对一个空对象合并。

```js
const merge =(...sources) => Object.assign({}, ...sources); 
```

#### （ 5 ）为属性指定默认值
```js
const DEFAULTS = {  
    logLevel: 0,  
    outputFormat: 'html'  
};  
function processContent(options) {  
    let options = Object.assign({}, DEFAULTS, options);  
} 
```
上面代码中，DEFAULTS对象是默认值，options对象是用户提供的参数。Object.assign方法将DEFAULTS和options合并成一个新对象，如果两者有同名属性，则option的属性值会覆盖DEFAULTS的属性值。
注意，由于存在深拷贝的问题，DEFAULTS对象和options对象的所有属性的值，都只能是简单类型，而不能指向另一个对象。否则，将导致DEFAULTS对象的该属性不起作用。

# 7. Object.defineProperty()方法理解
> Object.defineProperty可以用来定义新属性或修改原有的属性
使用构造函数定义对象和属性
```js
var obj = new Object; //obj = {}
obj.name = "张三"; //添加描述
obj.say = function(){}; //添加行为
```
### 语法
```js
Object.defineProperty(obj, prop, descriptor)
```
### 参数说明
- obj：必需。目标对象
- prop：必需。需定义或修改的属性的名字
- descriptor：必需。目标属性所拥有的特性

给对象的属性添加特性描述，目前提供两种形式：数据描述和存取器描述

### 数据描述
修改或定义对象的某个属性的时候，给这个属性添加一些特性， 数据描述中的属性都是可选的
```js
var obj = {
test:"hello"
}
//对象已有的属性添加特性描述Object.defineProperty(obj,"test",{
configurable:true | false,
enumerable:true | false,
value:任意类型的值,
writable:true | false
});
//对象新添加的属性的特性描述Object.defineProperty(obj,"newKey",{
configurable:true | false,
enumerable:true | false,
value:任意类型的值,
writable:true | false
});
```

- value: 设置属性的值
- writable: 值是否可以重写。true | false
- enumerable: 目标属性是否可以被枚举。true | false
- configurable: 目标属性是否可以被删除或是否可以再次修改特性 true | false

### 存取器描述
使用存取器描述属性的特性的时候，允许设置以下特性属性， 当使用了getter或setter方法，不允许使用writable和value这两个属性

```js
var obj = {};
Object.defineProperty(obj,"newKey",{
get:function (){} | undefined,
set:function (value){} | undefined
configurable: true | false
enumerable: true | false
});
```
### getter/setter
getter 是一种获得属性值的方法
setter是一种设置属性值的方法。
使用get/set属性来定义对应的方法
```js
var obj = {};
var initValue = 'hello';
Object.defineProperty(obj,"newKey",{
get:function (){
//当获取值的时候触发的函数
return initValue;
},
set:function (value){
//当设置值的时候触发的函数,设置的新值通过参数value拿到
initValue = value;
}
});
//获取值console.log( obj.newKey ); //hello

//设置值
obj.newKey = 'change value';

console.log( obj.newKey ); //change value
```

# 8. Object.defineProperties(obj,props)方法理解
> 直接在一个对象上定义新的属性或修改现有属性，并返回该对象。
```js
var obj = {};
Object.defineProperties(obj, {
  'property1': {
    value: true,
    writable: true
  },
  'property2': {
    value: 'Hello',
    writable: false
  }
  // etc. etc.
});
console.log(obj)   // {property1: true, property2: "Hello"}s
```
# 9. Object.getOwnPropertyDescriptor(obj,prop)
```js
Object,keys(obj).forEach(val => console.log(Object.getOwnPropertyDescriptor(obj,val)))
```

# 10. Object.getOwnPropertyDescriptors(obj)
```js
Object.getOwnPropertyDescriptors(obj)
```

```js
const source = {
  set foo(value) {
    console.log(value);
  }
};
 
const target2 = {};
Object.defineProperties(target2, Object.getOwnPropertyDescriptors(source));
Object.getOwnPropertyDescriptor(target2, 'foo')
 
 
const obj = Object.create(
  some_obj,
  Object.getOwnPropertyDescriptors({
    foo: 123,
  })
);
```

# 11. Object.getOwnPropertySymbols()
返回一个给定对象自身的所有 Symbol 属性的数组。

# 12. Object.getPrototypeOf()
返回指定对象的原型（内部[[Prototype]]属性的值，即__proto__，而非对象的prototype）。

# 13. isPrototypeOf()
判断一个对象是否存在于另一个对象的原型链上。

# 14. Object.setPrototypeOf(obj,prototype)
设置对象的原型对象

# 15. Object.is()
判断两个值是否相同。
如果下列任何一项成立，则两个值相同：

- 两个值都是 undefined
- 两个值都是 null
- 两个值都是 true 或者都是 false
- 两个值是由相同个数的字符按照相同的顺序组成的字符串
- 两个值指向同一个对象
- 两个值都是数字并且
  - 都是正零 +0
  - 都是负零 -0
  - 都是 NaN
  - 都是除零和 NaN 外的其它同一个数字

  ```js
    Object.is('foo', 'foo');     // true
    Object.is(window, window);   // true
    
    Object.is('foo', 'bar');     // false
    Object.is([], []);           // false
    
    var test = { a: 1 };
    Object.is(test, test);       // true
    
    Object.is(null, null);       // true
    
    // 特例
    Object.is(0, -0);            // false
    Object.is(-0, -0);           // true
    Object.is(NaN, 0/0);         // true
  ```
# 16. Object.freeze()
冻结一个对象，冻结指的是不能向这个对象添加新的属性，不能修改其已有属性的值，不能删除已有属性，以及不能修改该对象已有属性的可枚举性、可配置性、可写性。也就是说，这个对象永远是不可变的。该方法返回被冻结的对象。
```js
var obj = {
  prop: function() {},
  foo: 'bar'
};
 
// 新的属性会被添加, 已存在的属性可能
// 会被修改或移除
obj.foo = 'baz';
obj.lumpy = 'woof';
delete obj.prop;
 
// 作为参数传递的对象与返回的对象都被冻结
// 所以不必保存返回的对象（因为两个对象全等）
var o = Object.freeze(obj);
 
o === obj; // true
Object.isFrozen(obj); // === true
 
// 现在任何改变都会失效
obj.foo = 'quux'; // 静默地不做任何事
// 静默地不添加此属性
obj.quaxxor = 'the friendly duck';
console.log(obj)
```

# 17. Object.isFrozen()
判断一个对象是否被冻结 .

# 18. Object.preventExtensions()
对象不能再添加新的属性。可修改，删除现有属性，不能添加新属性。

```js
var obj = {
    name :'lilei',
    age : 30 ,
    sex : 'male'
}
 
obj = Object.preventExtensions(obj);
console.log(obj);    // {name: "lilei", age: 30, sex: "male"}
obj.name = 'haha';
console.log(obj)     // {name: "haha", age: 30, sex: "male"}
delete obj.sex ;
console.log(obj);    // {name: "haha", age: 30}
obj.address  = 'china';
console.log(obj)     // {name: "haha", age: 30}
```

# 19. Object.isExtensible()
判断对象是否是可扩展的，Object.preventExtensions，Object.seal 或 Object.freeze 方法都可以标记一个对象为不可扩展（non-extensible）

# 20. Object.seal()
Object.seal() 方法可以让一个对象密封，并返回被密封后的对象。密封一个对象会让这个对象变的不能添加新属性，且所有已有属性会变的不可配置。属性不可配置的效果就是属性变的不可删除，以及一个数据属性不能被重新定义成为访问器属性，或者反之。但属性的值仍然可以修改。尝试删除一个密封对象的属性或者将某个密封对象的属性从数据属性转换成访问器属性，结果会静默失败或抛出TypeError 异常. 不会影响从原型链上继承的属性。但 __proto__ (  ) 属性的值也会不能修改。

```JS
var obj = {
    prop: function () {},
    foo: "bar"
  };
 
// 可以添加新的属性,已有属性的值可以修改,可以删除
obj.foo = "baz";
obj.lumpy = "woof";
delete obj.prop;
 
var o = Object.seal(obj);
 
assert(o === obj);
assert(Object.isSealed(obj) === true);
 
// 仍然可以修改密封对象上的属性的值.
obj.foo = "quux";
 
// 但你不能把一个数据属性重定义成访问器属性.
Object.defineProperty(obj, "foo", { get: function() { return "g"; } }); // 抛出TypeError异常
 
// 现在,任何属性值以外的修改操作都会失败.
obj.quaxxor = "the friendly duck"; // 静默失败,新属性没有成功添加
delete obj.foo; // 静默失败,属性没有删除成功
 
// ...在严格模式中,会抛出TypeError异常
function fail() {
  "use strict";
  delete obj.foo; // 抛出TypeError异常
  obj.sparky = "arf"; // 抛出TypeError异常
}
fail();
 
// 使用Object.defineProperty方法同样会抛出异常
Object.defineProperty(obj, "ohai", { value: 17 }); // 抛出TypeError异常
Object.defineProperty(obj, "foo", { value: "eit" }); // 成功将原有值改变
```

# 21. Object.isSealed()
判断一个对象是否被密封