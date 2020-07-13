# for of循环
> ES6 中引入了 Iterator，只有提供了 Iterator 接口的数据类型才可以使用 for-of 来循环遍历，而 Array、Set、Map、某些类数组如 arguments 等数据类型都默认提供了 Iterator 接口，所以它们可以使用 for-of 来进行遍历

## Iterator 接口的实现
```js
newObj[Symbol.iterator] = function(){
    let index = 0, 
        self = this, 
        keys = Object.keys(self);

    return {
        next(){
            if( index < keys.length ){
                return {
                    value: self[keys[index++]],
                    done: false
                };
            } else{
                return {
                    value: undefined,
                    done: true
                }
            }
        }
    };
};
```
仔细看一下发现就会发现 Symbol.iterator 接口其实是一个 Generator 函数，那么就可以简化代码：
```js
    newObj[Symbol.iterator] = function* (){
        let keys = Object.keys(this);

        for(let i = 0, l = keys.length; i < l; i++){
            yield this[keys[i]];
        }
    }

    for(let v of newObj){
        console.log( v );
    }
    // 输出结果
    // 5
    // 6
```
值得注意的是 **Object.keys 碰巧解决了之前 for-in 遇到的继承问题**

这样满足了我们的期望，使用 for-of 来遍历对象，但是好像哪里不对，我们遍历对象时一般都是期望同时输出 key 和 value 的，这样调整一下代码

```js
    newObj[Symbol.iterator] = function* (){
        let keys = Object.keys(this);

        for(let i = 0, l = keys.length; i < l; i++){
            yield {
                key: keys[i], 
                value: this[keys[i]]
            };
        }
    }

    for(let v of newObj){
        console.log( v );
    }
    // 输出结果
    // {key: "e", value: 5}
    // {key: "f", value: 6}
```

这样返回了一个对象，似乎又很不舒服，我们能不能尝试一些解构赋值呢。。。

```js
    for(let {key, value} of newObj){
        console.log(key, value );
    }
    // 输出结果
    // e 5
    // f 6
```

**for of:不同于forEach方法，它可以与break、continue和return配合使用**