# 知识点1 
```js
　　var name = "The Window";

　　var object = {
　　　　name : "My Object",

　　　　getNameFunc : function(){
　　　　　　return function(){
　　　　　　　　return this.name;
　　　　　　};

　　　　}

　　};

　　alert(object.getNameFunc()()); 
```

结果是： "The Window"




# 知识点2
```js
　　var name = "The Window";

　　var object = {
　　　　name : "My Object",

　　　　getNameFunc : function(){
　　　　　　var that = this;
　　　　　　return function(){
　　　　　　　　return that.name;
　　　　　　};

　　　　}

　　};

　　alert(object.getNameFunc()());
```

结果是："My Object"


# 知识点3

# 调用counter() counter() counter() 输出 0， 1， 2 
```js
let counter = (function() {
    let num = 0;
    return function() {
        return num++
    }
})()
console.log(counter())
console.log(counter())
console.log(counter())
```