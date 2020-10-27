# Promise, setTimeout, rAF, rIC

参考：https://segmentfault.com/a/1190000019154514

rAF 会保证注册的回调在下次渲染页面之前执行，且只会执行一次。另外，当页面处于不可见状态时，rAF 会自动停止执行，以节省系统资源