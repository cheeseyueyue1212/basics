var arr = [1,3,5]

//方法一：reduce
function getSum(arr) {
    return arr.reduce((pre, cur, index) => {
        return pre + cur;
    })
}
getSum(arr);


//**方法二：eval join 不建议使用，不利于调试，性能下降10倍
function getSum(arr) {
    return eval(arr.join('+'))
}
getSum(arr);111