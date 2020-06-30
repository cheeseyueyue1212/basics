# indexOf() 查找数组是否存在某个元素，返回下标

定义: 返回在数组中可以找到一个给定元素的第一个索引，如果不存在，则返回-1。

语法:

```js
    array.indexOf(searchElement,fromIndex)
```

参数:

* searchElement(必须):被查找的元素

* fromIndex(可选):开始查找的位置(不能大于等于数组的长度，返回-1)，接受负值，默认值为0。

* 严格相等的搜索:

数组的indexOf搜索跟字符串的indexOf不一样,数组的indexOf使用严格相等===搜索元素，即数组元素要完全匹配才能搜索成功。

**注意**：indexOf()不能识别NaN

eg:

```js
    let a=['啦啦',2,4,24,NaN]
    console.log(a.indexOf('啦'));  // -1 
    console.log(a.indexOf('NaN'));  // -1 
    console.log(a.indexOf('啦啦')); // 0
```


使用场景：

* 数组去重
* 根据获取的数组下标执行操作，改变数组中的值等。
* 判断是否存在，执行操作。