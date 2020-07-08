### 使用 instanceof 操作符
> 定义：能在实例的 原型对象链 中找到该构造函数的prototype属性所指向的 原型对象，就返回true
> 是用来判断 A 是否为 B 的实例

```js
    // __proto__: 代表原型对象链
    instance.[__proto__...] === instance.constructor.prototype

    // return true
```

若 **左侧的__proto__ === 右侧的prototype**,则返回true

```js
alert(instance instanceof Object);//true
alert(instance instanceof Father);//true
alert(instance instanceof Son);//true

// 示例来自于：https://blog.csdn.net/liwenfei123/article/details/77978027
instanceof (A,B) = {
    var L = A.__proto__;
    var R = B.prototype;
    if(L === R) {
        //A的内部属性__proto__指向B的原型对象
        return true;
    }
    return false;
}
```


### 2. 使用 isPrototypeOf() 同样只要是原型链中出现过的原型,isPrototypeOf() 方法就会返回true
```js
alert(Object.prototype.isPrototypeOf(instance));//true
alert(Father.prototype.isPrototypeOf(instance));//true
alert(Son.prototype.isPrototypeOf(instance));//true
```