# react事件机制

事件的实质触发过程：事件捕获 、目标事件的处理、事件冒泡

1. react将**事件委托**给document（绑定在最外层），在冒泡阶段处理事件
2. react并没有使用原生的事件，而是在Virtual Dom 的基础上合成事件，它完全符合W3C标准，故有兼容性。通过stopPropagation()和preventDefault()相应中断，
    可以通过引用nativeEvent获取原生事件。

## react事件机制两个阶段：
1. 事件注册
    在组件加载（mount）和更新（update）时
2. 事件执行
    合成事件，逐个执行，可复用，节省内存