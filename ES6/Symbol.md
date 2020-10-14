# Symbol

## 这是一种新的基础数据类型（primitive type）
Symbol是由ES6规范引入的一项新特性，它的功能类似于一种标识唯一性的ID。通常情况下，我们可以通过调用Symbol()函数来创建一个Symbol实例：
```js
let s1 = Symbol()
```
或者，你也可以在调用Symbol()函数时传入一个可选的字符串参数，相当于给你创建的Symbol实例一个描述信息：
```js
let s2 = Symbol('another symbol')
```
由于Symbol是一种基础数据类型，所以当我们使用typeof去检查它的类型的时候，它会返回一个属于自己的类型symbol，而不是什么string、object之类的：
```js
typeof s1  // 'symbol'
```
另外，我们需要重点记住的一点是：每个Symbol实例都是唯一的。因此，当你比较两个Symbol实例的时候，将总会返回false：
```js
let s1 = Symbol()
let s2 = Symbol('another symbol')
let s3 = Symbol('another symbol')

s1 === s2 // false
s2 === s3 // false
```

## 应用场景1：使用Symbol来作为对象属性名(key)
在这之前，我们通常定义或访问对象的属性时都是使用字符串，比如下面的代码：
```js
let obj = {
  abc: 123,
  "hello": "world"
}

obj["abc"] // 123
obj["hello"] // 'world'
```
而现在，Symbol可同样用于对象属性的定义和访问：
```js
const PROP_NAME = Symbol()
const PROP_AGE = Symbol()

let obj = {
  [PROP_NAME]: "一斤代码"
}
obj[PROP_AGE] = 18

obj[PROP_NAME] // '一斤代码'
obj[PROP_AGE] // 18
```
随之而来的是另一个非常值得注意的问题：就是当使用了Symbol作为对象的属性key后，在对该对象进行key的枚举时，会有什么不同？在实际应用中，我们经常会需要使用Object.keys()或者for...in来枚举对象的属性名，那在这方面，Symbol类型的key表现的会有什么不同之处呢？来看以下示例代码：
```js
let obj = {
   [Symbol('name')]: '一斤代码',
   age: 18,
   title: 'Engineer'
}

Object.keys(obj)   // ['age', 'title']

for (let p in obj) {
   console.log(p)   // 分别会输出：'age' 和 'title'
}

Object.getOwnPropertyNames(obj)   // ['age', 'title']
```
由上代码可知，Symbol类型的key是不能通过Object.keys()或者for...in来枚举的，它未被包含在对象自身的属性名集合(property names)之中。所以，利用该特性，我们可以把一些不需要对外操作和访问的属性使用Symbol来定义。

也正因为这样一个特性，当使用JSON.stringify()将对象转换成JSON字符串的时候，Symbol属性也会被排除在输出内容之外：
```js
JSON.stringify(obj)  // {"age":18,"title":"Engineer"}
```
我们可以利用这一特点来更好的设计我们的数据对象，让“对内操作”和“对外选择性输出”变得更加优雅。

然而，这样的话，我们就没办法获取以Symbol方式定义的对象属性了么？非也。还是会有一些专门针对Symbol的API，比如：
```js
// 使用Object的API
Object.getOwnPropertySymbols(obj) // [Symbol(name)]

// 使用新增的反射API
Reflect.ownKeys(obj) // [Symbol(name), 'age', 'title']
```

## 应用场景2：使用Symbol来替代常量
先来看一下下面的代码，是不是在你的代码里经常会出现？
```js
const TYPE_AUDIO = 'AUDIO'
const TYPE_VIDEO = 'VIDEO'
const TYPE_IMAGE = 'IMAGE'

function handleFileResource(resource) {
  switch(resource.type) {
    case TYPE_AUDIO:
      playAudio(resource)
      break
    case TYPE_VIDEO:
      playVideo(resource)
      break
    case TYPE_IMAGE:
      previewImage(resource)
      break
    default:
      throw new Error('Unknown type of resource')
  }
}
```
如上面的代码中那样，我们经常定义一组常量来代表一种业务逻辑下的几个不同类型，我们通常希望这几个常量之间是唯一的关系，为了保证这一点，我们需要为常量赋一个唯一的值（比如这里的'AUDIO'、'VIDEO'、 'IMAGE'），常量少的时候还算好，但是常量一多，你可能还得花点脑子好好为他们取个好点的名字。

现在有了Symbol，我们大可不必这么麻烦了：
```js
    const TYPE_AUDIO = Symbol()
    const TYPE_VIDEO = Symbol()
    const TYPE_IMAGE = Symbol()
```
这样定义，直接就保证了三个常量的值是唯一的了！是不是挺方便的呢。

## 应用场景3：使用Symbol定义类的私有属性/方法
我们知道在JavaScript中，是没有如Java等面向对象语言的访问控制关键字private的，类上所有定义的属性或方法都是可公开访问的。因此这对我们进行API的设计时造成了一些困扰。
而有了Symbol以及模块化机制，类的私有属性和方法才变成可能。例如：
- 在文件 a.js中
```js
const PASSWORD = Symbol()

class Login {
  constructor(username, password) {
    this.username = username
    this[PASSWORD] = password
  }

  checkPassword(pwd) {
      return this[PASSWORD] === pwd
  }
}

export default Login
```
- 在文件 b.js 中
```js
import Login from './a'

const login = new Login('admin', '123456')

login.checkPassword('123456')  // true

login.PASSWORD  // oh!no!
login[PASSWORD] // oh!no!
login["PASSWORD"] // oh!no!
```
由于Symbol常量PASSWORD被定义在a.js所在的模块中，外面的模块获取不到这个Symbol，也不可能再创建一个一模一样的Symbol出来（因为Symbol是唯一的），因此这个PASSWORD的Symbol只能被限制在a.js内部使用，所以使用它来定义的类属性是没有办法被模块外访问到的，达到了一个私有化的效果。

## 注册和获取全局Symbol
通常情况下，我们在一个浏览器窗口中（window），使用Symbol()函数来定义和Symbol实例就足够了。但是，如果你的应用涉及到多个window（最典型的就是页面中使用了<iframe>），并需要这些window中使用的某些Symbol是同一个，那就不能使用Symbol()函数了，因为用它在不同window中创建的Symbol实例总是唯一的，而我们需要的是在所有这些window环境下保持一个共享的Symbol。这种情况下，我们就需要使用另一个API来创建或获取Symbol，那就是Symbol.for()，它可以注册或获取一个window间全局的Symbol实例：
```js
let gs1 = Symbol.for('global_symbol_1')  //注册一个全局Symbol
let gs2 = Symbol.for('global_symbol_1')  //获取全局Symbol

gs1 === gs2  // true
```
这样一个Symbol不光在单个window中是唯一的，在多个相关window间也是唯一的了。
