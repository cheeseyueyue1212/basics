setTimeout(function() {
    console.log(0);
}, 0);
var promise = new Promise((resolve, reject) => {
    console.log(1);
    setTimeout(function () {
        var success = true;
        if (success) {
            resolve('成功');
        } else {
            reject('失败');
        }
    },2000);
}).then(
    (data) => { console.log(data)},
    (data) => { console.log(data)}
);
console.log(promise);	//<pending> 进行中
setTimeout(function () {
    console.log(promise);	//<resolved> 已完成
},2500);
console.log(2);
 
//1
//Promise {<pending>}
//2
//0
//成功
//Promise {<resolved>: undefined}

