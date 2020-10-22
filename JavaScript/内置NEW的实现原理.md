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