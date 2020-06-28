
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