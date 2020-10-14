# sort() 数组排序

定义: sort()方法对数组元素进行排序，并返回这个数组。

参数可选: 规定排序顺序的比较函数。

默认情况下sort()方法没有传比较函数的话，默认按字母升序，如果不是元素不是字符串的话，会调用toString()方法将元素转化为字符串的Unicode(万国码)位点，然后再比较字符。

```js
    // 字符串排列 看起来很正常
    var a = ["Banana", "Orange", "Apple", "Mango"];
    a.sort(); // ["Apple","Banana","Mango","Orange"]
    // 数字排序的时候 因为转换成Unicode字符串之后，有些数字会比较大会排在后面 这显然不是我们想要的
    var	a = [10, 1, 3, 20,25,8];
    console.log(a.sort()) // [1,10,20,25,3,8];
```

## 比较函数的两个参数：
sort的比较函数有两个默认参数，要在函数中接收这两个参数，这两个参数是数组中两个要比较的元素，通常我们用 a 和 b 接收两个将要比较的元素：

* 若比较函数返回值<0，那么a将排到b的前面;
* 若比较函数返回值=0，那么a 和 b 相对位置不变；
* 若比较函数返回值>0，那么b 排在a 将的前面；

## sort排序常见用法：

1. 数组元素为数字的升序、降序:
```js
    var array =  [10, 1, 3, 4,20,4,25,8];
    // 升序 a-b < 0   a将排到b的前面，按照a的大小来排序的 
    // 比如被减数a是10，减数是20  10-20 < 0   被减数a(10)在减数b(20)前面   
    array.sort(function(a,b){
        return a-b;
    });
    console.log(array); // [1,3,4,4,8,10,20,25];
    // 降序 被减数和减数调换了  20-10>0 被减数b(20)在减数a(10)的前面
    array.sort(function(a,b){
        return b-a;
    });
    console.log(array); // [25,20,10,8,4,4,3,1];
```

2. 数组多条件排序

```js
    var array = [{id:10,age:2},{id:5,age:4},{id:6,age:10},{id:9,age:6},{id:2,age:8},{id:10,age:9}];
        array.sort(function(a,b){
            if(a.id === b.id){// 如果id的值相等，按照age的值降序
                return b.age - a.age
            }else{ // 如果id的值不相等，按照id的值升序
                return a.id - b.id
            }
        })
    // [{"id":2,"age":8},{"id":5,"age":4},{"id":6,"age":10},{"id":9,"age":6},{"id":10,"age":9},{"id":10,"age":2}]
```