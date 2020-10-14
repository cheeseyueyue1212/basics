# AMD和CMD 规范的区别？

## 1、AMD推崇依赖前置，在定义模块的时候就要声明其依赖的模块
## 2、CMD推崇就近依赖，只有在用到某个模块的时候再去require

[模块化](./模块化.md)

```js
    //AMD
    define(['./a','./b'], function (a, b) {
    
        //依赖一开始就写好
        a.test();
        b.test();
    });
    
    //CMD
    define(function (requie, exports, module) {
        
        //依赖可以就近书写
        var a = require('./a');
        a.test();
        
        ...
        //软依赖
        if (status) {
        
            var b = requie('./b');
            b.test();
        }
    });
```

[参考文档](https://www.jianshu.com/p/bd4585b737d7)