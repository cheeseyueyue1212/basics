Function.prototype.bind1 = function (context) {
    if(typeof this !== 'function') {
        return new TypeError('is not a function')
    }

    var realFn = this;
    var arg = Array.prototype.slice.call(arguments, 1);

    var toBindFn = function() {
        realFn.apply(realFn instanceof toBindFn ? realFn : context, arg.concat(Array.prototype.slice.call(arguments)));
    }

    toBindFn.prototype = Object.create(this.prototype);

    return toBindFn;
}



Function.prototype.call1 = function(contexts) {
    if(typeof this !== 'function') {
        return new TypeError('not a function')
    }

    var newContext =  Arrary.prototype.shift.call(arguments)
    var args = Arrary.prototype.slice.call(arguments, 1)

    newContext.fn = this;

    var result = newContext.fn(args || '')
    delete newContext.fn;

    return result;
}

test.call(obj,1,2,3);