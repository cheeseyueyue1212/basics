
// 方法一：
let arr = ['红灯', '绿灯', '黄灯']
let result = [];
async function led(i) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(arr[i])
            resolve(arr[i])

        }, i * 1000)

    }).then((res) => {
        result.push(res)

        if (result.length%3 === 0) {
            setTimeout(function () {
                lights();
            }, 1000)
        }


    })
}

function lights() {
    for (let i = 0; i < 3; i++) {
        led(i)
    }
}

lights()

//方法二：
var arr = ['red', 'yellow', 'green'];
var tasks = [];
var test = function() {
    for(var i = 0; i < arr.length; i++ ) {
        ((j) => {
            tasks.push(
                new Promise(resolve => {
                    setTimeout(() => {
                        console.log(arr[j]);
                        resolve();
                    }, j * 1000)
                })
            )
        }
    
        )(i)
    }

    Promise.all(tasks).then(() => {
        setTimeout(() => {
            test();
        }, 1000);
    })
}
test();


//方法三：
let arr = ['红灯', '绿灯', '黄灯']
function sleep(time) {
    return new Promise(resolve => {
        setTimeout(resolve, time)
    })
}

async function lights() {
    for (let i = 0; i < 3; i++) {
        await sleep(1000)
        console.log(arr[i])
        if(i == 2) i = -1;
    }
}

lights()

//方法四：
let arr = ['红灯', '绿灯', '黄灯']
function sleep(time) {
    return new Promise(resolve => {
        setTimeout(resolve, time)
    })
}

async function lights() {
    let i = 0;
    while(true) {
        await sleep(1000)
        console.log(arr[i])	
        i++;
        i = i%3
    }
}
lights()