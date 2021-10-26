# Rxjs
处理复杂的数据流时，RxJS以其响应流式编程的特点，在前端开发中占据一席之地。RxJS通过使用可观察序列来构建异步和基于事件的程序。RxJS中的概念不多，主要有Observa-ble，Observer，Scheduler，Subject，Operator等。其中：
* Observable可观察对象：可观察对象是数据流的源头，可以来自事件，网络，也可以自定义数据流。
* Observer观察者：通过订阅可观察对象，即可获得观察者，观察者拦截处理数据流，可以视为数据流的终点
* Operator操作符：操作符主要用于数据流的转换操作
* Subject主题：集Observable和Observer的特点于一身，还可以用于广播事件流
* Sheduler调度者：控制事件流的并发


RxJS中会有一个惰性推送数据的概念。拉取和推送分别对应数据的消费者和数据生产者两种不同的交流方式。

在拉取的体系中，数据消费者决定何时从数据生产者处那里获取到数据，数据的生产者不会意识到数据什么时候被消费。这里比较典型的例子是JS中的函数，ES6中的迭代器和生成器。对于函数来说，通过调用函数，最终决定了消费函数提供的数据时机，而ES6中的迭代器和生成器，通过调用iterator.next()进行消费数据。

而对应的推送体系中，数据的生产者决定何时将数据发送给数据的消费者，数据消费者不会意识到何时将接收到数据。推送模型中常见的就是Promise，Promise通过resolve来发送一个值给消费者，此时消费者将接收到数据进行消费。

RxJS中同样采用推送体系，通过Observable(生产者)产生数据，并且推送给Observer

(消费者)。跟Promise不同的是，Observable可以推送多个值；Observable跟EventEmitter有些类似，因为它可以在多处被订阅；同时，它也是惰性的，不订阅时，函数的内部不会执行，就像下面这样：


```js
const observable = Rx.observable.create(observer => {
    console.log('start executing');
    observer.next('hello world')
});

observable.subscribe(value => {
    console.log(value)
});
observable.subscribe(value => {
    console.log(value)
});
```
输出结果：
```js
'start executing' 'hello world' 'start executing' 'hello world'
```
可以看到可以多次订阅Observable，并且每次订阅的作用域是独立的，互不影响。同时，如果不订阅Observable，Observable内部是不会执行的，所以是惰性的

Observable的订阅可以是同步的，也可以是异步的，这一点非常灵活：
```js
const observable = Rx.observable.create(observer => {
    observer.next(1);
    observer.next(2);
    setTimeout(() => {
        observer.next(3)
    }, 0);
})
console.log('before subscribe');
observable.subscribe(value => {
    console.log(value);
});
console.log('after subscribe');
```

输出的结果为：
```js
'before subscribe' 1 2 'after subscribe' 3
```

### 参考 
https://zhuanlan.zhihu.com/p/31623736
在React中使用RxJS: https://zhuanlan.zhihu.com/p/31879126

### api
#### 1. switchMap
 > switchMap 和其他打平操作符的主要区别是它具有取消效果。在每次发出时，会取消前一个内部 observable (你所提供函数的结果) 的订阅，然后订阅一个新的 observable 。你可以通过短语切换成一个新的 observable来记忆它。

#### 2. mapTo
> 将每个发出值映射成常量。

```js
// RxJS v6+
import { interval } from 'rxjs';
import { mapTo } from 'rxjs/operators';

// 每2秒发出值
const source = interval(2000);
// 将所有发出值映射成同一个值
const example = source.pipe(mapTo('HELLO WORLD!'));
// 输出: 'HELLO WORLD!'...'HELLO WORLD!'...'HELLO WORLD!'...
const subscribe = example.subscribe(val => console.log(val));
```

3. of
> 按顺序发出任意数量的值。

```js

```

4. lettable操作符
```js
·do改为tap
·catch改为catchError
·switch改为switchAll
·finally改为finalize
```
