var toArr = {
    0: 'cheese',
    1: 'bre',
    length: 2
}

//方法一：
Array.prototype.slice.call(toArr) // ????


//方法二： Array.from
Array.from(toArr)


//方法三：arguments => array   [...arguments]
function toArr() {
    return [...arguments]
}
toArr(1,2,4,5)