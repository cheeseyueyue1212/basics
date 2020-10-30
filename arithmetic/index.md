# 面试题链接
1. [面试题总结](https://www.jianshu.com/p/c141d9d85de6)
2. [面试题](https://blog.csdn.net/m0_37828249/article/details/105215326)
3. [面试题](https://blog.csdn.net/m0_37828249/article/details/104976153)
4. [6次面试题](https://www.kanzhun.com/jiaocheng/451973.html)(https://www.cnblogs.com/hanxuming/p/10642074.html)
5. [很全面的总结](https://juejin.im/post/6844904200917221389#heading-85)

对vuex源码上如何实现只能mutation更改，而不能直接更改
vuex中如何在层层都可以引用$store
vuex和redux的差别

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


vue的生命周期
组件A下有子组件B、C，那么3个组件生命周期的调用顺序，同级组件mounted触发一定是先调用先call吗？同步还是异步？
vue的基本原理
vue eventbus的实现
vue父子组件的通信
vuex的使用

对https的理解,对称、非对称加密在哪部使用
css布局 各种定位的方式
css实现水平垂直居中
css实现一个旋转的圆
cookie跨域的处理方案
cookie 种在子域下能否携带发送到服务端(SSO登录)
写一个函数，第一次调用返回0，之后每次调用返回比之前大1
闭包、作用域的理解
用原生xhr发送一个请求
跨域请求可以携带cookie吗
axios与xhr的区别，如何用promise包装xhr
讲讲项目中的难点

vue的生命周期
vue双向绑定的原理
vue父子组件通信的方式
vue eventbus的原理
对vuex的理解
谈谈对vue和react对比，并从中能学到什么
vue中可以对对象进行数据监听，如果对于数组中的某个元素能否监听，是如何做到的

http的头部有什么字段，简要描述(缓存，content-type，cookie等等)
cookie跨域服务端需要如何适配(CORS头)
一个请求跨域是否会抵达服务端
对之前的项目做过什么优化，讲一讲
对之前的项目遇到过什么难点，讲一讲
对http2有哪些了解
对canvas有哪些性能上的优化
对settimeout和对setinterval的理解（涉及代码题倒计时函数，eventloop的考点）计时是否准确？如何实现较为准确的计时？

写一个倒计时函数
写一个函数，给定一棵树，输出这棵树的深度
写一个函数，给定一个url和最大深度maxdeep，输出抓取当前url及其子链接深度范围内的所有图片
写一个函数，给定nodes=[]，每一个节点拥有id,name,parentid，输出一个属性列表的展示(涉及dom操作)


vue数据绑定的实现原理
vue computed具体在什么阶段进行的依赖收集，具体的过程详细描述
vuex和redux的差别

跨域的解决办法
原型链的理解，写一个原型继承
实现一个sendRequest，有最大请求并发限制
EventLoop的理解
浏览器渲染触发在EventLoop的哪个阶段，触发机制是怎么样的
https 建立连接的过程及通信 如何劫持，鉴别是否被劫持
ES module与cjs的区别
Tree shaking的实现原理
给定一个sum 检验一棵树中，是否存在一条路径和为sum，输出该路径

对vuex源码上如何实现只能mutation更改，而不能直接更改
vuex中如何在层层都可以引用$store
vuex和redux的差别

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


------
## one
- 如何获取数组中最大的数
- 数组和链表的使用场景
- 了解哪些排序算法，说说冒泡排序和快排的区别
- 背包问题
- 浏览器缓存

## two
- 输入一串 url 到浏览器，会发生什么？
- vm.$set 原理
- 深拷贝如何解决循环引用
- http 缓存头部字段
- vue 和 react 的区别
- 讲讲前端路由
- 一道查找路径的场景题
- 一道如何优雅处理异步的场景题
- webpack 工作流
- webpack 是如何解决两次引入的

## three
- 公司团队规模
- 讲讲 http 三次握手，为什么需要三次握手
- 讲讲 http 四次挥手，为什么需要四次而不是三次
- 如何看待 toc tob 端业务
- 对于新技术如何看待
- 小程序有了解过吗

## four
- 在小组担任的位置
- 说说你工作中遇到有挑战的项目

## one
- 布局的几种方式
- rem vw 的区别
- rem em 的区别
- 讲讲 React 生命周期
- webpack 你是如何做优化的
- 浏览器缓存
- react 性能优化
- vue 如何做权限检验
- 你是如何做性能优化的
- 单元测试如何测试，代码覆盖率如何
- 说说 react 状态逻辑复用问题
- react fiber 节点（不会，没研究过）
- Koa 中间件原理
- Redux 工作流？
- Koa 如何实现监控处理
- 如何实现 Redux 异步功能
- Redux 如何优化
- commonjs 的实现原理
- 讲讲垃圾回收机制
- Vue 和 React 的区别
- 函数式编程 如何理解纯函数
- Node 原生 api 错误处理有了解吗
- 说说浏览器渲染流程
- 说说重绘和重排
- 说说那些属性可以直接避免重绘和重排
- treeshaking 原理
- 按需加载的原理
- 讲讲原型链
- 了解过那些前端构建工具 分别介绍他 webpack rollup gulp
- 双向数据绑定原理
- 说 vue 如何收集依赖的

## two
- 组件库设计有什么原则？
- 组件库是自己从 0 开始搭的吗，说说有哪些特点
- 如何实现组件库按需加载
- 讲讲 http2.0
- 讲讲 react fiber 节点

## one
- 讲讲 ts 中 type 和 interface 的区别   
- 说说 http
- 说说 vue 双向绑定
- diff 算法
- 虚拟 dom
- http 缓存
- 说说状态逻辑复用问题
- 介绍下项目的亮点
- 介绍下 es6 新增了哪些特性
- Reflect 的用途？
- 域名切片
- 为什么 vue 或者 react 要求 key 值唯一

## two
- MVVM 实现
- data 里面为什么是函数
- UDP TCP 区别
- vuex 应用场景
- 说说 XSS 攻击
- 说说 vue 的模板编译
- new 原理实现
- 说说事件循环
- react16 的重大更新
- 为什么废除三个 react 生命周期的 api
- 浏览器缓存
- nextTick 原理
- 说说你的 vuex 持久化插件

## one
- 内联元素与块级元素 table/div/p/ul/form  span/a/img/input
- 数组 api 介绍
- dom 操作有哪些 api
- 数组去重有哪几种方式
- 变量提升问题
- 柯里化问题
- 数字转金额的问题
- 手写防抖和节流
- 判断变量的几种方式，有哪些不同
- 动态规划算法题

## two
- 什么是暂时性死区？
- 块级作用域和函数作用域
- call bind new 实现原理    
- vue 双向绑定原理
- LRU 算法
- rem vw 区别
- 移动 1px 问题
- diff 算法
- 虚拟 dom
- nextTick 原理
- 闭包
- 如何解决移动端 click300ms 延迟？
- vue 有哪些全局组件
- 移动端如何完成拖拽功能？
- 一道逻辑题：有 5L 的桶和 3L 的桶，如何拿到 4L 的水

## three
- 居中的几种方案
- setTimeout 与 rAF：在未激活时，不渲染。发生在渲染前，浏览器找时间。不会出现丢帧。当页面被隐藏或最小化时，定时器 setTimeout 仍在后台执行动画任务。
- flex:1
- 发布订阅和观察者的区别
- 单例模式
- JSONP 实现原理
- 移动端点击延迟怎么处理
- git flow 工作流介绍
- 怎么做性能优化
- 性能监控如何做
- 跨域解决方案
- 简单请求和复杂请求
- 多路复用

## one
- 组件库相关问题
- 项目自己搭的？如何支持 treeshaking
- 如何做版本号管理
- less 样式如何做按需加载
- webpack 项目如何优化
- ts 泛型
- 怎么通过实例拿到构造函数
- extend 原理
- Object.create 原理
- 虚拟列表原理
- 什么 csrf 攻击
- csrftoken 怎么获取，存到哪里
- 并发调度手写题

## teng gao
- 实现一个 array 多维数组，把他拍平。遍历以及 reduce 的实现方法。
- Angular 预编译是怎么做的？@Component 中的元数据是如何被使用的？
- Object.defineproperty 和 Object.freeze，哪个是深层的冻结？
- Http 拦截器的原理是什么？如何实现？
- 截流和防抖的区别，说说如何实现一个防抖函数。
- Jwt 鉴权的整个过程，前端，后段。
- 如何判断一个类型是否为其他类的子类？如果让你实现 instanceof ，你会如何实现？
- 路由守卫的原理，如何实现？
- 斐波那契在递归时，如何优化性能？
- Node 中超大文件的读取，写入，移动是怎么做的？
- 最近在看什么有趣的东西？可以介绍一下吗？(回答 decorator)
- Eslint 的原理，如何检测出不符合规则的代码？

- Rx中的 swichMap 是如何实现的？
- 看你最近做的项目，线上加载的 js 很多超过 200k 的，你打算怎么优化？
- 如果让你实现一个全景空间(WebVr)你有哪些思路？
- 谈谈对 scrum 的认识。

- 团队leader要承担的事情
- 构建流程/cli/工作流/git 的工作
- vue响应式实现$nexttick实现
- react setState 实现原理
- http2.0的优势


计算机或者相关专业本科以上学历，扎实的软件开发、数据结构、算法基础；
精通HTML及CSS，包括HTML5及CSS3；精通Javascript，包括基本对象及操作、DOM操作、事件、Ajax、错误处理、兼容性、ES5/6等内容；
熟悉Web前端组件化/模块化开发模式和前端工程化实践；至少精通一种前端开发框架，如React、Vue等；


具有强烈的学习欲望，自驱意识；具有良好的沟通能力、团队协作能力；具有较强的逻辑思维能力、抗压能力；具备良好的问题分析与解决能力；
有大数据、BI、增长相关经验，或前端可视化渲染数据经验者优先，全栈优先；