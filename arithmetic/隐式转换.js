//1. 复杂数据类型 转换成 Number,先调用valueOf方法获取原始值， 
//2. 如果原始值不是Number类型，再使用toString方法转成string, 
//3. 再将string转成number

var a = {
    i: 0,
    valueOf: function() {
        return ++a.i;
    }
}


// 输出1， a == ???
if(a==1 && a ==2 && a==3) {
    console.log('1')
}




[] == 0 //true
![] == [] //true

[] == [] //false
![] == [] //true


{} == {} //false
!{} == {} //false

null == 0 // false
//这时候两边的类型也不同，但是却没有做类型转换，why？因为这时候二者都已经是基本数据类型了，没有办法在进行转换了，所以二者的类型都不可能相同，结果自然为false

null == undefined

!![] == true //true
//这里并没有涉及 == 比较，只需要判断 [] 是true还是false即可


[] == false

//参考：https://blog.csdn.net/itcast_cn/article/details/82887895

// https://blog.csdn.net/weixin_42259266/article/details/89558725