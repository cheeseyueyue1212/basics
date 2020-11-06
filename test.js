var num = 10 //11
const obj = {num: 20} //60

obj.fn = (function (num) {
  this.num = num * 3
  num++
  return function (n) {
    this.num += n
    num++
    console.log(num)
  }
})(obj.num)

var fn = obj.fn

fn(5) //22
obj.fn(10) //23
console.log(num, obj.num) //65 30




obj.fn = function(n) {
  this.num +=n
  num++
  comsole.log(num)
}

fn = function(n) {
  this.num +=n
  num++
  comsole.log(num)
}