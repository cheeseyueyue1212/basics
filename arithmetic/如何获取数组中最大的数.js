//方法一：
var arr = [1,2,3,4,5,6,7,8,9,0]
Math.max(...arr)

//方法二：
arr.reduce((pre,cur,index, arr) => {
    return pre > cur ? pre : cur;
}, 0)

//方法三：
var res = 0;
arr.forEach(item => {
    res = item > res ? item : res;
})

//方法四：
arr.sort(function(a, b) {
    return a - b;
})
arr[arr.length-1]