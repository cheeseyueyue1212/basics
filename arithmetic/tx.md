# this 闭包 作用域问题
```js
var num = 10
const obj = {num: 20}

obj.fn = (function (num) {
  this.num = num * 3
  num++
  return function (n) {
    this.num += n
    num++
    console.log(num)
  }
})(obj.num)

var fn = obj.fn

fn(5)
obj.fn(10)
console.log(num, obj.num)
```

# 继承
```js
class A {}
实例a.__proto__ 、a.__proto__.__proto__、a.__proto__.__proto__.__proto__

Function.__proto__ == Function.prototype
```


# 异步，eventloop
```js
var promiseA = new Promise(function(resolved) {
    setTimeout(function() {
      console.log('p1')
      resolved('p1 resolved');
    }, 0);
  
    console.log('p0');
    resolved('p0 resolved');
    var promise2 = new Promise((resolved2) => {
      console.log('p2');
      resolved2('p2 resolved');
    });
    promise2.then((msg) => {
      console.log(msg);
    });
  })
  
  console.log('start');
  promiseA.then((msg) => {
   console.log(msg)
  });

  
  //p0 ,p2 ,start,  p2 resolved, p0 resolved  p1
```

# 1. 实现一个reducer
[10,20,30].reducer((a,b)=>a+b, 0) // 60

# 2. 有效的括号
给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。
有效字符串需满足：
（1）左括号必须用相同类型的右括号闭合。
（2）左括号必须以正确的顺序闭合。
注意：空字符串可被认为是有效字符串。

示例1："()" // true
示例2："()[]{}" // true
示例3："(]" // false
示例4："([)]" //  false
示例5："{[]}" // true


```js
s = "[(())]"

function test(s) {
    a = s.split("")
    m = {")":"(", "]":"[", "}":"{"}
    b = []
    
    for(var i = 0; i < a.length; i++) {
        let item = a[i];
        let c;
        if(item === '(' || item === '[' || item === '{') {
            b.push(item)
        } else {
            c = b.pop()
            if (m[item] != c) {
                return false;
            }
        }
    }
    
    if(b.length !== 0) {
        return false;
    }
    
    return true;
}
console.log(test(s))
```


# 3. 大数相加
给定两个字符串形式的非负整数 num1 和 num2, 计算它们的和；
提示：
1. num1 和 num2 都只包含数字 0-9
2. num1 和 num2 都不包含任何前导零
3. 两个数都是以字符串的方式提供
示例1：
function addBigInt(str1, str2) {
}
var a ='123456789123456789';
var b = '23456789123456789';
console.log(addBigInt(a, b));
//'146913578246913578'



# 4. 求数组中两个元素相加为某个值的两个坐标（要求O(n)复杂度）
```JS
getTargetIndexs([3,4,5,7,9], 10)

function getTargetIndexs(arr, sum) {
    let obj = {};
    let res;
    let arr1 = []
    arr.map((item, i) => {
        res = sum - item
        if(obj[res] !== undefined) {
            arr1.push([obj[res], i])
        }

        obj[item] = i;
    })
    console.log(arr1)
}
```

# less

# BFC

# webpack

# 居中

# flex

# http1.0 http2.0 http3.0 https

# redux

# 虚拟dom

# 浏览器渲染 even loop