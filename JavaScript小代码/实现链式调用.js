//链式调用的核心就在于调用完的方法将自身实例返回

//1）示例一
function Class1() {
    console.log('初始化')
}
Class1.prototype.method = function(param) {
    console.log(param)
    return this
}
let cl = new Class1()
//由于new 在实例化的时候this会指向创建的对象， 所以this.method这个方法会在原型链中找到。
cl.method('第一次调用').method('第二次链式调用').method('第三次链式调用')


//2）示例二
var obj = {
    a: function() {
        console.log("a");
        return this;
    },
    b: function() {
        console.log("b");
        return this;
    },
};
obj.a().b();



//3）示例三
// 类
class Math {
    constructor(value) {
        this.hasInit = true;
        this.value = value;
        if (!value) {
            this.value = 0;
            this.hasInit = false;
        }
    }
    add() {
        let args = [...arguments]
        let initValue = this.hasInit ? this.value : args.shift()
        const value = args.reduce((prev, curv) => prev + curv, initValue)
        return new Math(value)
    }
    minus() {
        let args = [...arguments]
        let initValue = this.hasInit ? this.value : args.shift()
        const value = args.reduce((prev, curv) => prev - curv, initValue)
        return new Math(value)
    }
    mul() {
        let args = [...arguments]
        let initValue = this.hasInit ? this.value : args.shift()
        const value = args.reduce((prev, curv) => prev * curv, initValue)
        return new Math(value)
    }
    divide() {
        let args = [...arguments]
        let initValue = this.hasInit ? this.value : args.shift()
        const value = args.reduce((prev, curv) => prev / (+curv ? curv : 1), initValue)
        return new Math(value)
    }
}

let test = new Math()
const res = test.add(222, 333, 444).minus(333, 222).mul(3, 3).divide(2, 3)
console.log(res.value)

// 原型链
Number.prototype.add = function() {
    let _that = this
    _that = [...arguments].reduce((prev, curv) => prev + curv, _that)
    return _that
}
Number.prototype.minus = function() {
    let _that = this
    _that = [...arguments].reduce((prev, curv) => prev - curv, _that)
    return _that
}
Number.prototype.mul = function() {
    let _that = this
    _that = [...arguments].reduce((prev, curv) => prev * curv, _that)
    return _that
}
Number.prototype.divide = function() {
    let _that = this
    _that = [...arguments].reduce((prev, curv) => prev / (+curv ? curv : 1), _that)
    return _that
}
let num = 0;
let newNum = num.add(222, 333, 444).minus(333, 222).mul(3, 3).divide(2, 3)
console.log(newNum)

