function currying(fn, args = []) {
    return function temp(...innerArgs) {
        if (innerArgs.length > 0) {
            // 收集后面传入的参数
            args = [...args, ...innerArgs];
            // 返回函数供后面可以继续调用
            return temp;
        } else {
            const val = fn.apply(this, args);
            // 清空参数数组，为了保证下次执行函数可以继续迭代
            args = [];
            return val;
        }
    }
}
// 求和函数
const add = (...args) => args.reduce((a, b) => a + b);
let addCurry = currying(add)
console.log(addCurry(1)(2)(3)(4, 5)())  //15
console.log(addCurry(1)(2)(3, 4, 5)())  //15
console.log(addCurry(1)(2, 3, 4, 5)())  //15






function add (...args) {
    //求和
    return args.reduce((a, b) => a + b)
}

function currying (fn) {
    let args = []
    return function temp (...newArgs) {
        if (newArgs.length) {
            args = [
                ...args,
                ...newArgs
            ]
            return temp
        } else {
            let val = fn.apply(this, args)
            args = [] //保证再次调用时清空
            return val
        }
    }
}

let addCurry = currying(add)
console.log(addCurry(1)(2)(3)(4, 5)())  //15
console.log(addCurry(1)(2)(3, 4, 5)())  //15
console.log(addCurry(1)(2, 3, 4, 5)())  //15