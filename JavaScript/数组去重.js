
 //方法一： include
var arr = [1,1,2,4,6,6]

var newArr = [];
function arrToWeight() {
    arr.map(item => {
        if(!newArr.includes(item)) {
            newArr.push(item)
        }
    })
}
arrToWeight(arr);


//方法二： reduce
let names = [1, 2, 3, 4, 4, 3];

let nameNum = names.reduce((pre,cur)=>{
    if(!pre.includes(cur)) {
        return pre.concat(cur)
    }else{
        return pre;
    }
},[])
console.log(nameNum); //[1, 2, 3, 4]

或者

let nameNum = names.reduce((pre,cur)=>{
    if(!pre.includes(cur)) pre.push(cur)
    return pre;
},[])
console.log(nameNum); //[1, 2, 3, 4]


//方法三： filter
let names = [1, 2, 3, 4, 4, 3];

function unique(arr) {
    return arr.filter((item, index) => {
        return arr.indexOf(item) === index
    })
}
unique(names);


//方法四：ES6
let names = [1, 2, 3, 4, 4, 3];

[...new Set(names)]

//方法五：Object.keys()
//遍历，将数组的值添加到一个对象的属性名里，并给属性赋值，对象不能添加相同属性名，以这个为依据可以实现数组去重，然后用Object.keys(对象)返回这个对象可枚举属性组成的数组，这个数组就是去重后的数组。
let a = ['1', '2', '3', 1,NaN,NaN,undefined,undefined,null,null, 'a', 'b', 'b'];
const unique = arr => {
    var obj = {}
    arr.forEach(value => {
        obj[value] = 0;//这步新添加一个属性，并赋值，如果不赋值的话，属性会添加不上去
    })
    return Object.keys(obj);//`Object.keys(对象)`返回这个对象可枚举属性组成的数组，这个数组就是去重后的数组
}
console.log(unique(a));//["1", "2", "3", "NaN", "undefined", "null", "a", "b"]
