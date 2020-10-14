
var a = 1,
    b = 2,

//方法一：
var temp;

temp = a;
a = b;
b = temp;

//方法二：ES6 解构赋值
[a,b] = [b, a]

