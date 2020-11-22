
/** 
 * @method 实现一个promise.all
 */

const a = new Promise(function(resolve, reject) {
    resolve('a resolve');
})

const b = new Promise(function(resolve, reject) {
    resolve('b resolve')
})

Promise.all1 = function(promises) {
    var results = [];
    return new Promise(async function(resolve, reject) {
        promises.forEach(promise => {
            promise.then(res => {
                results.push(res);
                if(results.length === promises.length) {
                    resolve(results);
                }
            }).catch((err) => {
                reject(err)
            });
        })
    })
}

Promise.all1([a,b]).then(res => {
    console.log(res, 'cheese成功啦')
})



/** 
 * @method promise实现一个sleep
 */
function sleep(time) {
    return new Promise(resolve => setTimeout(resolve,time))
}

var t1 = new Date;
sleep(3000).then(() => {
    var t2 = new Date;
    console.log('time:', t2-t1);
})

//Async/Await 版本
function sleep(time) {
    return new Promise(resolve => setTimeout(resolve,time))
}

!async function test() {
    var t1 = new Date;
    await sleep(3000);
    var t2= new Date;
    console.log(t2 - t1);
}()