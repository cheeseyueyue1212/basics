// Function.prototype.call1 = function(context, ...args) {
//   if(typeof this !== 'function') {
//     throw Error('not a function')
//   }

//   let newContext = context || window;
//   newContext.fn = this;

//   var result;
//   if(args) {
//     result = newContext.fn(...args)
//   } else {
//     result = newContext.fn();
//   }
//   delete newContext.fn;
//   return result;
// }

Function.prototype.bind2 = function (context) {

  if (typeof this !== "function") {
    throw new Error("Function.prototype.bind - what is trying to be bound is not callable");
  }

  var self = this;
  var args = Array.prototype.slice.call(arguments, 1);

  var fNOP = function () {};

  var fBound = function () {
      var bindArgs = Array.prototype.slice.call(arguments);
      self.apply(this instanceof fNOP ? this : context, args.concat(bindArgs));
  }

  fNOP.prototype = this.prototype;
  fBound.prototype = new fNOP();
  return fBound;
}

function test(...args) {
  alert(this.cheese)
  alert('arguments:', arguments)
}

var obj = {
  cheese: 111
}

var a = test.bind2(obj, 123, 222)
a(333)
