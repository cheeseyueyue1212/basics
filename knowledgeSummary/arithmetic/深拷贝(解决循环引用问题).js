//深拷贝(解决循环引用问题)

// arr: 当前拷贝目标
//item: 
function find(arr, item) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].source === item) {
            return arr[i]
        }
    }
    return null;
}
function isObject(obj) {
    return typeof obj === 'object' && obj != null;
}

function deepClone(source, uniqueList) {
    if (!isObject(source)) return source;

    if (!uniqueList) uniqueList = [];    //   初始化数据

    var target = Array.isArray(source) ? [] : {};

    var uniqueData = find(uniqueList, source);
    if (uniqueData) return uniqueData.target;


    uniqueList.push({
        source: source, //要拷贝的对象
        target: target // 操作目标
    });

    for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
            if (isObject(source[key])) {
                target[key] = deepClone(source[key], uniqueList)      //   传入数组
            } else {
                target[key] = source[key];
            }
        }
    }
    return target;
}
var a = {
    name: "key1",
    eat: [
        "苹果",
        "香蕉"
    ]
}
//    console.log(b);
a.eat[2] = "桃";
a.d = a;
b = deepClone(a);
console.log(a);
console.log(b);