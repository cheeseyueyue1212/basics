# reflect
1. [reflect存在的意义和使用api](https://blog.csdn.net/qdmoment/article/details/91413951)

2. [es6 Reflect对象详解](https://www.cnblogs.com/kdcg/p/9139273.html)


## 观察者模式

```js
const queuedObservers = new Set();

const observe = fn => queuedObservers.add(fn);
const observable = obj => new Proxy(obj, {set});

function set(target, key, value, receiver) {
  const result = Reflect.set(target, key, value, receiver);
  queuedObservers.forEach(observer => observer());
  return result;
}


const person = observable({
  name: '张三',
  age: 20
});

function print() {
  console.log(`${person.name}, ${person.age}`)
}

observe(print);
person.name = '李四';



```