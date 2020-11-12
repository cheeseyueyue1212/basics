
var x=1,y=0,z=0;
var add=function(x){
	 return x = x+1;
}
y=add(x);
function add(x){
	 return x=x+3;
}
z = add(x);
console.log(x,y,z);
// 1, 2, 3 原因：通过var声明的函数的引用不会被后面的函数改变




var num = 1;
var myObject = {
    num: 2,
    add: function () {
        this.num = 3;
        (function () {
            console.log(this.num);
            this.num = 4;
        })();
        console.log(this.num);
    },
    sub: function () {
        console.log(this.num);
    }
}

myObject.add(); //1   3

console.log(myObject.num); //2
console.log(num);  //1
var sub = myObject.sub;

sub();  // 1