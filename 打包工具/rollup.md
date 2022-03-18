## rollup
网上统一的观念是

#### 1. —save --save-dev区别
- devDependencies用于本地环境开发时候。
- dependencies用户发布环境

其实看名字我也知道是这个意思，我觉得没解释情况。
devDependencies是只会在开发环境下依赖的模块，生产环境不会被打入包内。通过NODE_ENV=developement或NODE_ENV=production指定开发还是生产环境。
而dependencies依赖的包不仅开发环境能使用，生产环境也能使用。其实这句话是重点，按照这个观念很容易决定安装模块时是使用--save还是--save-dev。

#### rollup 使用
1. npm install --global rollup
2. 对于 Node.js: rollup main.js --file bundle.js --format cjs

```js
# 默认使用rollup.config.js
$ rollup --config

# 或者, 使用自定义的配置文件，这里使用my.config.js作为配置文件
$ rollup --config my.config.js


// rollup.config.js
export default {
  input: 'src/main.js',
  output: {
    file: 'bundle.js',
    format: 'cjs'
  }
};

rm bundle.js # so we can check the command works!
rollup -c
```

```js
rollup src/main.js -o bundle.js -f cjs
```

##### Rollup提供了多种打包方式，通过format属性可以设置你想要打包成的代码类型：
- amd - 输出成AMD模块规则，RequireJS可以用
- cjs - CommonJS规则，适合Node，Browserify，Webpack 等
- es - 默认值，不改变代码
- iife - 输出自执行函数，最适合导入html中的script标签，且代码更小
- umd - 通用模式，amd,cjs,iife都能用

##### 浏览器使用：
```js
# 编译成一个自执行函数，可以直接在 html 中的 script 标签直接引入
$ rollup main.js --format iife --output bundle.js
```

##### Nodejs使用：
```js
# 编译成 CommonJS 模块
$ rollup main.js --format cjs --output bundle.js
```

##### 浏览器和Nodejs通用：
```js
# UMD 模式需要设置一个大报名
$ rollup main.js --format umd --name "myBundle" --output bundle.js
```

链接：https://segmentfault.com/a/1190000009932242

常见插件： https://blog.cjw.design/blog/old/rollup#rollup-%E5%B8%B8%E7%94%A8%E6%8F%92%E4%BB%B6%E4%BB%8B%E7%BB%8D