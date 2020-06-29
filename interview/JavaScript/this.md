# 函数执行改变this

> 由于 JS 的设计原理: 在函数中，可以引用运行环境中的变量。因此就需要一个机制来让我们可以在函数体内部获取当前的运行环境，这便是this。因此要明白 this 指向，其实就是要搞清楚 函数的运行环境，说人话就是，谁调用了函数。例如:

* obj.fn()，便是 obj 调用了函数，既函数中的 this === obj
* fn()，这里可以看成 window.fn()，因此 this === window

但这种机制并不完全能满足我们的业务需求，因此提供了三种方式可以手动修改 this 的指向:

* call: fn.call(target, 1, 2)
* apply: fn.apply(target, [1, 2])
* bind: fn.bind(target)(1,2)

* 用new调用函数，改变指向new的实例对象
```js
    function fn(){
        console.log(this);
    }
    let a=new fn();
    //输出 {}（指向对象a）
```
