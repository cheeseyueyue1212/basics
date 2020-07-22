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
