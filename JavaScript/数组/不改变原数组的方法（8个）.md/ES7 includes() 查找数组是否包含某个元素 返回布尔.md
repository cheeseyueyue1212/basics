# ES7 includes() 查找数组是否包含某个元素 返回布尔

定义： 返回一个布尔值，表示某个数组是否包含给定的值

语法：

```js
    array.includes(searchElement,fromIndex=0)
```

参数：
1. searchElement(必须):被查找的元素
2. fromIndex(可选):默认值为0，参数表示搜索的起始位置，接受负值。正值超过数组长度，数组不会被搜索，返回false。负值绝对值超过长数组度，重置从0开始搜索。


**includes方法是为了弥补indexOf方法的缺陷而出现的**:

* indexOf方法不能识别NaN
* indexOf方法检查是否包含某个值不够语义化，需要判断是否不等于-1，表达不够直观

eg:

```js
    let a=['OB','Koro1',1,NaN];
    // let b=a.includes(NaN); // true 识别NaN
    // let b=a.includes('Koro1',100); // false 超过数组长度 不搜索
    // let b=a.includes('Koro1',-3);  // true 从倒数第三个元素开始搜索 
    // let b=a.includes('Koro1',-100);  // true 负值绝对值超过数组长度，搜索整个数组
```