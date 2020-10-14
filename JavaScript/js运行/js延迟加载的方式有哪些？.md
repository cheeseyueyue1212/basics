# js延迟加载的方式有哪些？

- defer (立即下载，延迟执行)
- async （异步加载，执行。不让页面等待）
- 动态创建DOM方式（创建script，插入到DOM中，加载完毕后callBack)
- 按需异步载入js