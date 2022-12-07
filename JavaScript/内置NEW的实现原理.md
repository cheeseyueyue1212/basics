# 内置NEW的实现原理


## 方法一
```js
/* 
 * 内置NEW的实现原理 
 * @params
 *    Func：操作的那个类
 *    ARGS：NEW类的时候传递的实参集合
 * @return
 *    实例或者自己返回的对象
 */
function _new(Func, ...args) {
    //默认创建一个实例对象（而且是属于当前这个类的一个实例）
    // let obj = {};
    let obj = Object.create(Func.prototype);

    //也会把类当做普通函数执行
    //执行的时候要保证函数中的this指向创建的实例
    let result = Func.call(obj, ...args);

    //若客户自己返回引用值，则以自己返回的为主，否则返回创建的实例
    if ((result !== null && typeof result === "object") || (typeof result === "function")) {
        return result;
    }
    return obj;
}
``` 

## 方法二
```js
//定义create方法
function create(){
	//定义空对象
	let obj = {};
	//取出参数列表的第一个参数（构造函数）
	let Con = [].shift.call(arguments);
	//手动指正obj的构造函数为Con（链接原型）
	obj.__proto__ = Con.prototype;
	//调用Con，改变this为obj，传入剩余参数arguments
	let result = Con.apply(obj,arguments);
	//考虑到Con函数中有return的原因，需要对result进行判断
	return result instanceof Object ? result : obj
}
```


### 示例
```js
// 构造器函数
let Parent = function (name, age) {
    this.name = name;
    this.age = age;
};
Parent.prototype.sayName = function () {
    console.log(this.name);
};
//自己定义的new方法
let newMethod = function (Parent, ...rest) {
    // 1.以构造器的prototype属性为原型，创建新对象；
    let child = Object.create(Parent.prototype);
    // 2.将this和调用参数传给构造器执行
    let result = Parent.apply(child, rest);
    // 3.如果构造器没有手动返回对象，则返回第一步的对象
    return typeof result === 'object' ? result : child;
};
//创建实例，将构造函数Parent与形参作为参数传入
const child = newMethod(Parent, 'echo', 26);
child.sayName() //'echo';

//最后检验，与使用new的效果相同
child instanceof Parent//true
child.hasOwnProperty('name')//true
child.hasOwnProperty('age')//true
child.hasOwnProperty('sayName')//false
```