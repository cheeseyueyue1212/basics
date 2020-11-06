//多维数组展平

// 方法一
function flatten(arr) {  
    return arr.reduce((result, item)=> {
        return result.concat(Array.isArray(item) ? flatten(item) : item);
    }, []);
}

// 方法二
function flatten(arr) {
    return arr.toString().split(',').map(function(item) {
        return Number(item);
    })
}


// 方法三
function flatten(arr) {
    return arr.join(',').split(',').map(function(item) {
        return parseInt(item);
    })
}

// 方法四
function flatten(arr) {
    var res = [];
    arr.map(item => {
        if(Array.isArray(item)) {
            res = res.concat(flatten(item));
        } else {
            res.push(item);
        }
    });
    return res;
}


// 方法五
[].concat(...[1, 2, 3, [4, 5]]);  // [1, 2, 3, 4, 5]

function flatten(arr) {
    while(arr.some(item=>Array.isArray(item))) {
        arr = [].concat(...arr);
    }
    return arr;
}

//方法六
arr.flat(Infinity)

