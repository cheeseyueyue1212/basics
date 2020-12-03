# js延迟加载的方式有哪些？

- defer (立即下载，延迟执行)
- async （异步加载，执行。不让页面等待）
- 动态创建DOM方式（创建script，插入到DOM中，加载完毕后callBack)
- 按需异步载入js

https://www.cnblogs.com/amiezhang/p/11450569.html


2. script 带 async

　　不会停止（阻塞）dom 树构建，立即异步加载，加载好后立即执行


3. script 带 defer

　　不会停止（阻塞）dom 树构建，立即异步加载。加载好后，如果 dom 树还没构建好，则先等 dom 树解析好再执行；如果 dom 树已经准备好，则立即执行。