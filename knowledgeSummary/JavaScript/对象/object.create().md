# Object.create()
Object.create()方法创建一个新对象，使用现有的对象来提供新创建的对象的__proto__。 

## 语法：
> Object.create(proto[, propertiesObject])

## proto
新创建对象的原型对象。
## propertiesObject
可选。如果没有指定为 undefined，则是要添加到新创建对象的不可枚举（默认）属性（即其自身定义的属性，而不是其原型链上的枚举属性）对象的属性描述符以及相应的属性名称。这些属性对应Object.defineProperties()的第二个参数。

## 返回值
一个新对象，带着指定的原型对象和属性。