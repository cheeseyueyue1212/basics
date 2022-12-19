function instanceof(obj, Fn){
  return obj.__proto__ === Fn.prototype
}