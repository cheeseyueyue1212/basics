var tasks = []
Promise.all1 = function(Promises) {
    return new Promise(async function(resolve, reject) {
        promises.forEach(promise => {
            promise.then(res => {
                tasks.push(res)
                if(tasks.length === promsies.length) {
                    resolve(tasks)
                }
            })
        })
    })
}


//节流
function todo(fn, delay) {
    var timer = null;
    return function() {
        if(!timer) {
            timer = setTimeout(() => {
                fn();
                timer = null;
            }, delay)
        }
    }
}

//防抖
function todo(fn, delay) {
    var timer = null;
    return function() {
        clearTimeout(itemer);
        timer = setTimeout(fn, delay)
    }
}



function handler(delay) {
    console.log(111)
}

window.addEventListener('scroll', todo(handler, 1000))


Promise.all1 = function(promises) {
    var results = [];
    return new Promise(async function(resolve, reject) {
        promises.forEach(promise => {
            promise.then(res => {
                results.push(res);
                if(results.length === promises.length) {
                    resolve(results);
                }
            })
        })
    })
}

Promise.all1([a,b]).then(res => {
    console.log(res, 'cheese成功啦')
})
