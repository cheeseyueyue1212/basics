## Promise

### 问题一：立即输出 0，之后每隔 1 秒依次输出 1,2,3,4，循环结束后在大概第 5 秒的时候输出 5
```js
const tasks = [];
for(var i =0; i < 5; i++) {
    ((j) => {
        tasks.push(
            new Promise(resolve => {
                setTimeout(() => {
                    console.log(j)
                    resolve();
                }, j * 1000)
            })
        )
    })(i)
}

Promise.all(tasks).then(() => {
    setTimeout(() => {
        console.log(i)
    }, 1000)
})
```

### 优化版本
```js
const tasks = [];
var outputs = (i) => {
    tasks.push(new Prom)
    setTimeout(() => {
        console.log(i)
    }, i * 1000)
}
```

### 红绿灯
```js
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
```