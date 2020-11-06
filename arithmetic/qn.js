let func = ({value, num}) => ({total: value * num})
var result = func({
    value: 10,
    num: 10
})
console.log(result);



var x = 30;
function test() {
  console.log(x);
  var x = 10;
  console.log(x);
  x = 20;
  function x() {}
  console.log(x);
}
test();


/*
1)函数声明会置顶
2)变量声明也会置顶
3)函数声明比变量声明更置顶：）
4)变量和赋值语句一起书写，在js引擎解析时，会将其拆成声明和赋值2部分，声明置顶，赋值保留在原来位置
5)声明过的变量不会重复声明
*/



function A() {}
A.prototype.x = 10;
var a1 = new A();
A.prototype.y = "abc";
var a2 = new A();
console.log(a1.x);
console.log(a1.y);
console.log(a2.x);
console.log(a2.y);


function A() {}
A.prototype.x = 10;
var a1 = new A();
A.prototype = { x: 20, y: 30 };
var a2 = new A();
console.log(a1.x);

console.log(a1.y);

console.log(a2.x);

console.log(a2.y);