# React Fiber 原理介绍

https://segmentfault.com/a/1190000018250127

主线程 执行有时会事件过长 阻塞UI渲染，超过16s 导致掉帧。
react fiber 采用链表，在diff算法时，加上链表。可以随时停止，让优先级高的任务先行。运用window.requestIdleCallbake()空闲的时候执行,来运行优先级低的任务。

在小切片执行完，就把执行权交给浏览器 看有没有要执行的，叫做异步渲染。