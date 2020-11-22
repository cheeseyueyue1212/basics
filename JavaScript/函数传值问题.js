var obj = {
    a: 1
}
function test(obj) { //相当于生成一个新的值，指向了obj。
    console.log('obj:', obj)
    obj.a = 2
    obj = {a: 4}
    obj.b = 3
    
    console.log('内部',obj)
}

console.log(test(obj))
console.log('外部：', obj)