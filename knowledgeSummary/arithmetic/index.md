# 面试题链接
1. [面试题总结](https://www.jianshu.com/p/c141d9d85de6)
2. [面试题](https://blog.csdn.net/m0_37828249/article/details/105215326)
3. [面试题](https://blog.csdn.net/m0_37828249/article/details/104976153)
4. [6次面试题](https://www.kanzhun.com/jiaocheng/451973.html)(https://www.cnblogs.com/hanxuming/p/10642074.html)
5. []()

对vuex源码上如何实现只能mutation更改，而不能直接更改
vuex中如何在层层都可以引用$store
vuex和redux的差别
笔试题6页
css优先级关系
eventloop的先后顺序(node内)
node中的垃圾收集机制
BFC，IFC，FFC的区别
a11y是什么，如何理解
prototype的考察
TDZ的考察

写一个数组方法，打乱整个数组顺序，并且每个数字落在各个位置的概率相同
one(add(two())) // 3 two(add(one())) // 3 写出 one() two() add()的实现
实现一个catchPromise 发同一个请求缓存data 在实际网络层相同url只会发出一个请求
给定 n 个 {x, y, w, h}的盒子 按需排列，左上聚拢(层叠后的max(h)*max(w)最小)，求给一个{w,h}，输出放置的位置
从输入一个url到呈现网页，都有哪些步骤
http keep—alive都解决了哪些问题 keep-alive是从c - nginx建立的还是直接到服务建立的长连接，与websocket有什么区别与联系
给定一个html，输出其中包含的html标签数量，可以用domapi 注意iframe
实现一个NumberStack，实现pop，push，max(n)方法，max(n)返回第n大的数，max(n)需要 O(1)的时间复杂度
实现一个bind函数
跨域的解决办法，jsonp的实现原理

React组件的生命周期
React父子组件如何通信的
React层级很深的组件如何通信传值(Context API)
React做了哪些性能优化 PureComponent的实现原理是什么
React setState后都会发生什么，是否了解
React 1000个列表节点渲染，给出一个优化方案
是否了解React事件机制，如果让你实现如何来设计
Redux的原理及理解
react-redux是如何来实现的，connect是不是一个高阶函数，原理是什么
react与vue相比，有什么不同
对缓存的理解，需要什么设置
对代码构建上线流程是否了解，说一下如果让你实现的思路
谈谈对webpack的理解，常用哪些plugin，对webpack配置是否了解，对项目打包是否做过什么优化
ES6常用到哪些，对class的理解，手写一个对继承的实现
Promise是否了解，如何实现一个promise
class继承中子类想使用父类的方法，应该用什么方式调用(super的意义)
箭头函数与正常函数的区别
css实现border渐变
css实现下阴影（气泡类 带箭头的阴影）
css对flex的理解
对浏览器渲染机制的理解（具体到细节，从渲染树到paint之间究竟发生了什么）
纯css实现一个高宽比为1：3的盒子 列举几种方式
浏览器的架构，bom，dom


框架

vue的生命周期
组件A下有子组件B、C，那么3个组件生命周期的调用顺序，同级组件mounted触发一定是先调用先call吗？同步还是异步？
vue的基本原理
vue eventbus的实现
vue父子组件的通信
vuex的使用
基础知识

对https的理解,对称、非对称加密在哪部使用
css布局 各种定位的方式
css实现水平垂直居中
css实现一个旋转的圆
cookie 跨域的处理方案
cookie 种在子域下能否携带发送到服务端(SSO登录)
写一个函数，第一次调用返回0，之后每次调用返回比之前大1
闭包、作用域的理解
用原生xhr发送一个请求
跨域请求可以携带cookie吗
axios与xhr的区别，如何用promise包装xhr
讲讲项目中的难点

框架

vue的生命周期
vue双向绑定的原理
vue父子组件通信的方式
vue eventbus的原理
对vuex的理解
谈谈对vue和react对比，并从中能学到什么
vue中可以对对象进行数据监听，如果对于数组中的某个元素能否监听，是如何做到的
基础知识

http的头部有什么字段，简要描述(缓存，content-type，cookie等等)
cookie跨域服务端需要如何适配(CORS头)
一个请求跨域是否会抵达服务端
对之前的项目做过什么优化，讲一讲
对之前的项目遇到过什么难点，讲一讲
对http2有哪些了解
对canvas有哪些性能上的优化
对settimeout和对setinterval的理解（涉及代码题倒计时函数，eventloop的考点）计时是否准确？如何实现较为准确的计时？
对一个短时间并发高的场景需要如何处理（后端设计）(开始答题获取试卷的场景)
写代码

写一个倒计时函数
写一个函数，给定一棵树，输出这棵树的深度
写一个函数，给定一个url和最大深度maxdeep，输出抓取当前url及其子链接深度范围内的所有图片
写一个函数，给定nodes=[]，每一个节点拥有id,name,parentid，输出一个属性列表的展示(涉及dom操作)
抖音

框架

vue数据绑定的实现原理
vue computed具体在什么阶段进行的依赖收集，具体的过程详细描述
vuex和redux的差别
基础知识

跨域的解决办法
原型链的理解，写一个原型继承
实现一个sendRequest，有最大请求并发限制
EventLoop的理解
浏览器渲染触发在EventLoop的哪个阶段，触发机制是怎么样的
https 建立连接的过程及通信 如何劫持，鉴别是否被劫持
ES module与cjs的区别
Tree shaking的实现原理
给定一个sum 检验一棵树中，是否存在一条路径和为sum，输出该路径

框架

对vuex源码上如何实现只能mutation更改，而不能直接更改
vuex中如何在层层都可以引用$store
vuex和redux的差别
基础知识

css优先级关系
eventloop的先后顺序(node内)
node中的垃圾收集机制
BFC，IFC，FFC的区别
a11y是什么，如何理解
prototype的考察
TDZ的考察
写一个数组方法，打乱整个数组顺序，并且每个数字落在各个位置的概率相同
one(add(two())) // 3 two(add(one())) // 3 写出 one() two() add()的实现
实现一个catchPromise 发同一个请求缓存data 在实际网络层相同url只会发出一个请求
给定 n 个 {x, y, w, h}的盒子 按需排列，左上聚拢(层叠后的max(h)*max(w)最小)，求给一个{w,h}，输出放置的位置
从输入一个url到呈现网页，都有哪些步骤
http keep—alive都解决了哪些问题 keep-alive是从c - nginx建立的还是直接到服务建立的长连接，与websocket有什么区别与联系
给定一个html，输出其中包含的html标签数量，可以用domapi 注意iframe
实现一个NumberStack，实现pop，push，max(n)方法，max(n)返回第n大的数，max(n)需要 O(1)的时间复杂度
实现一个bind函数
跨域的解决办法，jsonp的实现原理