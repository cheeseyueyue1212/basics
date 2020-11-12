# 问题一：
var name = 'x'
var people = {
  name: 'y',
  setName: (name) => {
    this.name = name
    return () => {
      return this.name
    }
  }
}

var getName = people.setName(name)
 console.log(getName())

// 2
var name = 'global_name'
function test(){

  console.log(this.name)

}

var obj = {

  name:'obj_name',

  test

}

obj.test()
window.test2 = obj.test
window.test2()



# 问题二：
var A = function(){

  this.arr = [1,2,3]

}

var B = function(){}

B.prototype = new A()

var a1 = new B()

var a2 = new B()

a1.arr.push(4)

console.log(a2.arr)


var s1 = new A()
var s2 = new A()

s1.arr.push(5)
console.log(s2.arr)


//
var A = function(){
  this.arr = [1,2,3]

}


var s1 = new A()
var s2 = new A ()

new A()
A this 指向了刚创建的
obj1.arr  = [1,2,3,4]
obj2.arr  = [1,2,3]



# 问题三：
用js 实现千分位表示法

123456元
123,456元

func(123456)   // 123,456
func(1123456)   // 1,123,456
 
入参是一个number
输出是一个string
function func(num){
    // todo
    return  res // 千分位格式化后的字符串
}


result  = 654,321



result string 

## 答案：
### 方法一：
function func(num) {
    var str = num.toString()
     var result="", 
        index = 0, 
        len = str.length-1; 
    while(len>=0) { 
         index%3===0&&index!==0 ? result+=","+str[len] : result+=str[len]; 
         len--; 
         index++; 
    }; 
    return result.split("").reverse().join("");  
}

### 方法二：
```js
		function func(num){
			let n = Number(num)

			if (n == 0 ) {
				return 0
			}

			let y = 0
			let sy = ""
			let a = []

			while (n > 0 ) {
				y = n % 1000
				n = parseInt(n / 1000)
				
				sy = y.toString()

				if (n > 0) {
					if (sy.length == 1){
						sy = "00"+sy
					}else if (sy.length == 2){
						sy = "0"+sy
					}
				}
				a.unshift(sy)
			}
			return a.join(",")

		}

		console.log(func(12345034)) 
```


# 问题四：
![积水图片](./imgs/jishui.png)
入参是一个非负整数组成的数组
var arr = [0,1,0,2,1,0,1,3,2,1,2,1]
数组中的每个元素看成一个柱子，柱子的高是元素的值，宽是1，

function func(arr){
    // TODO 
   return res //积水面积
}

2,1,0,1,3

2 1 0

积水是左边有高，右边有高
0，1，3
左边最大值，而不是左值
积水怎么算， 


# 问题五：
<div class="A" id="a">
    <div class="B" id="b"></div>
    <div class="C" id="c"></div>
</div>

.B{
     maring:30px;
    height:100px;
}
.C{
    margin:20px;
    height:20px;
}；


.A .B .C .D {

}

#a span{

}


用户增长  做业务
裂变的业务  app -share,--> landingpage  -> lanchapp
金币激励业务  激励业务

http缓存强缓存，协商缓存

强
exipires 
cach-control 
max-age

if-modifiy-since


