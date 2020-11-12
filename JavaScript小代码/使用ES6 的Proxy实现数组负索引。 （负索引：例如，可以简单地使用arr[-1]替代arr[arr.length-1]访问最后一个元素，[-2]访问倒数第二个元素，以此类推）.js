const negativeArray = els =>
    new Proxy(els, {
        get: (target, propKey, receiver) =>
            Reflect.get(
                target,
                +propKey < 0 ? String(target.length + +propKey) : propKey,
                receiver
            )
    });
const unicorn = negativeArray(["京", "程", "一", "灯"]);
unicorn[-1]; 



const proxyArray = arr => {
    const length = arr.length;
    return new Proxy(arr, {
        get(target, key) {
            key = +key;
            while (key < 0) {
                key += length;
            }
            return target[key];
        }
    })
};
var a = proxyArray([1, 2, 3, 4, 5, 6, 7, 8, 9]);
console.log(a[1]);  // 2
console.log(a[-10]);  // 9
console.log(a[-20]);  // 8