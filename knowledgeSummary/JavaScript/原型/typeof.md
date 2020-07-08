# typeof

>其实就是判断参数是什么类型

```js
"number"、"string"、"boolean"、"object"、"function" 和 "undefined"

typeof 123; // number
typeof 'jartto'; // string
typeof !!’0’; // boolean
typeof new Function(); // function
typeof name; // undefined

let arr = [1,2,3];
let obj = {name: 'jartto'};
let obj1 = null;

typeof arr; // object
typeof obj; // object
typeof obj1; // object
```

### 如上所示，引用类型的数据，都返回了 object，我们无法做到精确判断。我们来总结一下：
1.对于基本类型，除 null 以外，均可以返回正确的结果。
2.对于引用类型，除 function 以外，一律返回 object 类型。
3.对于 null ，返回 object 类型。
4.对于 function 返回 function 类型。