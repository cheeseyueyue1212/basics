const num = {
    a: 10,
    add() {
        return this.a + 2;
    },
    reduce: () => {
        this.a - 2
    }
};
console.log(num.add());
console.log(num.reduce());


// 下面代码输出什么
for (let i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 1);
}
//解析：使用let关键字声明变量i：使用let（和const）关键字声明的变量是具有块作用域的（块是{}之间的任何东西）。 在每次迭代期间，i将被创建为一个新值，并且每个值都会存在于循环内的块级作用域。


var x = 1;
if (function f() {}) {
    x += typeof f;
}
console.log(x)
//解析：条件判断为假的情况有：0，false，''，null，undefined，未定义对象。函数声明写在运算符中，其为true，但放在运算符中的函数声明在执行阶段是找不到的。另外，对未声明的变量执行typeOf不会报错，会返回undefined



(function () {
    var a = (b = 5);
})();
console.log(b);
console.log(a);
/*解析
在这个立即执行函数表达式（IIFE）中包括两个赋值操作，其中a使用var关键字进行声明，因此其属于函数内部的局部变量（仅存在于函数中），相反，b被分配到全局命名空间。
另一个需要注意的是，这里没有在函数内部使用严格模式(use strict;)。如果启用了严格模式，代码会在输出 b 时报错Uncaught ReferenceError: b is not defined,需要记住的是，严格模式要求你显式的引用全局作用域。
*/


var a = [0];
if (a) {
  console.log(a == true);
} else {
  console.log(a);
}
/*解析
当 a 出现在 if 的条件中时，被转成布尔值，而 Boolean([0])为 true,所以就进行下一步判断 a == true,在进行比较时，[0]被转换成了 0，所以 0==true 为 false
数组从非 primitive 转为 primitive 的时候会先隐式调用 join 变成“0”，string 和 boolean 比较的时候，两个都先转为 number 类型再比较，最后就是 0==1 的比较了


!![] //true 空数组转换为布尔值是 true,  
!![0]//true 数组转换为布尔值是 true  
[0] == true;//false 数组与布尔值比较时却变成了 false  
Number([])//0  
Number(false)//0  
Number(['1'])//1


数组从非 primitive 转为 primitive 的时候会先隐式调用 join 变成“0”
这一句解释应该有点问题，应该是隐式调用数组的toString方法。[0].toString() // '0', 只不过这里和[0].join() 产生一样的结果。
[0].toString() 和 [0].join(',') 和 [0].join() 都返回 '0'
顺便说一下，非 primitive 都是通过调用自身的 valueOf、和toString 来进行隐式转换的。
*/



var a = 1;
(function a () {
    a = 2;
    console.log(a);
})();
/*解析
立即调用的函数表达式（IIFE） 有一个 自己独立的 作用域，如果函数名称与内部变量名称冲突，就会永远执行函数本身；所以上面的结果输出是函数本身；
*/



var min = Math.min();
max = Math.max();
console.log(min < max);
/*解析
按常规的思路，这段代码应该输出 true，毕竟最小值小于最大值。但是却输出 false
MDN 相关文档是这样解释的
Math.min 的参数是 0 个或者多个，如果多个参数很容易理解，返回参数中最小的。如果没有参数，则返回 Infinity，无穷大。
而 Math.max 没有传递参数时返回的是-Infinity.所以输出 false
*/
