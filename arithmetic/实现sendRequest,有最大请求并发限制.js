var urls = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
const limit = 5;

function sendRequest(urls, limit, callback) {
    function _send(urls) {
        const url = urls.shift();
        if (url) {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    console.log(`当前发送：${url}`);
                    resolve(url);
                }, 1000)
            })
                .finally(() => {
                    if (urls.length > 0) {
                        return _send(urls)
                    }
                })
        }

    }
    let asyncList = [];
    while (limit--) {
        asyncList.push(_send(urls));
    }
    return Promise.all(asyncList).then(callback);
}

sendRequest(urls, limit, function () {
    console.log('all urls sended!')
});