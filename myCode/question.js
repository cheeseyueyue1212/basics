/**
 * @todo 函数变量优先提升，变量被覆盖
 */
var a = 10;
function a() {}
typeof a // number 

//等价于
function a() {};
var a;
a=10; // 函数变量优先提升，变量被覆盖


/**
 * @todo 布尔值和其他比较，将其转化为布尔值
 */
console.log(([])?true:false); // Boolean([])  true
console.log(([]==false?true:false));  //Boobean([]) 转化为 0， 所以结果是true
console.log(({}==false)?true:false)  // Boobean({})  转化为 NaN ，所以结果是false


/**     
 * @todo let i只在本轮循环有效，可以理解为每次的i都是新的变量
 */
for(let i = 0; i < 5; i++){
    requestAnimationFrame(() => console.log(i)); // 1 2 3 4 5
}


/**     
 * @todo Boolean
 */
new Boolean(NaN) //false
new Boolean('') //false
new Boolean(0) //false
new Boolean(null) //false
new Boolean() //false

undefined == null //true


/**     
 * @todo 继承，原型链
 */
instanceof 希望左侧对象是右侧对象的实例

function Person() {
    this.name = name;
}
var person = new Person();
person instanceof Person; //true
Person.prototype == person.__proto__
Person.prototype.constructor == function Person() {
    this.name = name;
}
Person.prototype.constructor.prototype.constructor == function Person() {
    this.name = name;
}


/**     
 * @todo 数组空位处理
 */
ES5
// orEach(), filter(), reduce(), every() 和some() 都会跳过空位。
// map()会跳过空位，但会保留这个值
// join()和toString()会将空位视为undefined，而undefined和null会被处理成空字符串。
// ES6 中都会将空位当做undefined
let array = [,1,,2,,3];
array = array.map((i) => ++i)