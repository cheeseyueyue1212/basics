//快排算法

function myQuick(arr) {
    if(arr.length <= 1) {
        return arr;
    }
    var k = arr.splice(0, 1)[0];
    var left = [];
    var right = [];
    
    for(var i = 0; i < arr.length; i++) {
        if(arr[i] < k) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }
    return myQuick(left).concat([k], myQuick(right))
}

myQuick([1,5,2,6,4,9,0])