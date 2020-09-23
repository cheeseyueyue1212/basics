function axios({
    url,
    method = 'GET',
    params = {},
    data = {}
}) {
    // 返回一个promise对象
    return new Promise((resolve, reject) => {

        // 处理method(转大写)
        method = method.toUpperCase()

        // 处理query参数(拼接到url上)   id=1&xxx=abc
        /* 
        {
          id: 1,ß
          xxx: 'abc'
        }
        */
        let queryString = ''
        Object.keys(params).forEach(key => {
            queryString += `${key}=${params[key]}&`
        })
        if (queryString) { // id=1&xxx=abc&
            // 去除最后的&
            queryString = queryString.substring(0, queryString.length - 1)
            // 接到url
            url += '?' + queryString
        }


        // 1. 执行异步ajax请求
        // 创建xhr对象
        const request = new XMLHttpRequest()
        // 打开连接(初始化请求, 没有请求)
        request.open(method, url, true)

        // 发送请求
        if (method === 'GET' || method === 'DELETE') {
            request.send()
        } else if (method === 'POST' || method === 'PUT') {
            request.setRequestHeader('Content-Type', 'application/json;charset=utf-8') // 告诉服务器请求体的格式是json
            request.send(JSON.stringify(data)) // 发送json格式请求体参数
        }

        // 绑定状态改变的监听
        request.onreadystatechange = function () {
            // 如果请求没有完成, 直接结束
            if (request.readyState !== 4) {
                return
            }
            // 如果响应状态码在[200, 300)之间代表成功, 否则失败
            const { status, statusText } = request
            // 2.1. 如果请求成功了, 调用resolve()
            if (status >= 200 && status <= 299) {
                // 准备结果数据对象response
                const response = {
                    data: JSON.parse(request.response),
                    status,
                    statusText
                }
                resolve(response)
            } else { // 2.2. 如果请求失败了, 调用reject()
                reject(new Error('request error status is ' + status))
            }
        }
    })
}

/*
axios优点：
1）从浏览器中创建XMLHttpRequests
2）从 node.js 创建 http 请求
3）支持 Promise API
4）拦截请求和响应
5）转换请求数据和响应数据
6）取消请求
7）自动转换 JSON 数据
8）客户端支持防御 XSRF

fetch 缺点：
1）fetch只对网络请求报错，对400，500都当做成功的请求，服务器返回 400，500 错误码时并不会 reject，只有网络错误这些导致请求不能完成时，fetch 才会被 reject。
2）fetch默认不会带cookie，需要添加配置项： fetch(url, {credentials: 'include'})
3）fetch不支持abort，不支持超时控制，使用setTimeout及Promise.reject的实现的超时控制并不能阻止请求过程继续在后台运行，造成了流量的浪费
4）fetch没有办法原生监测请求的进度，而XHR可以
*/