https://www.cnblogs.com/yfrs/p/fetch.html

```js
//ahutor:herbert qq:464884492
let controller = new AbortController();
let signal = controller.signal;

let timeoutPromise = (timeout) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(new Response("timeout", { status: 504, statusText: "timeout " }));
            controller.abort();
        }, timeout);
    });
}
let requestPromise = (url) => {
    return fetch(url, {
        signal: signal
    });
};
Promise.race([timeoutPromise(1000), requestPromise("https://www.baidu.com")])
    .then(resp => {
        console.log(resp);
    })
    .catch(error => {
        console.log(error);
    });
```