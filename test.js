
Function.prototype.call1 = function(context, ...arguments) {
    if(typeof this !== 'function') {
        throw new TypeError('Error')
    }
    var newContext = context || window;
    newContext.fn = this;
    var result;

    if(arguments) {
        result = newContext.fn(...arguments)
    } else {
        result = newContext.fn();
    }

    delete newContext.fn;
    return result;

}

var obj = {a: 1, b: 2}

function test(pr1,pr2) {
    console.log('a:', this.a)
    console.log('b:', this.b)
    console.log('pr1:', pr1)
    console.log('pr2:', pr2)
}

test.call(obj, 11, 22)