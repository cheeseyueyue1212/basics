# lastIndexOf() 查找指定元素在数组中的最后一个位置

定义: 方法返回指定元素,在数组中的最后一个的索引，如果不存在则返回 -1。（从数组后面往前查找）

语法:

```js
    arr.lastIndexOf(searchElement,fromIndex)
```

参数:
1. searchElement(必须): 被查找的元素
2. fromIndex(可选): 逆向查找开始位置，默认值数组的长度-1，即查找整个数组。


关于fromIndex有三个规则:
* 正值。如果该值大于或等于数组的长度，则整个数组会被查找。


* 负值。将其视为从数组末尾向前的偏移。(比如-2，从数组最后第二个元素开始往前查找)


* 负值。其绝对值大于数组长度，则方法返回 -1，即数组不会被查找。

```js
 let a=['OB',4,'Koro1',1,2,'Koro1',3,4,5,'Koro1']; // 数组长度为10
 // let b=a.lastIndexOf('Koro1',4); // 从下标4开始往前找 返回下标2
 // let b=a.lastIndexOf('Koro1',100); //  大于或数组的长度 查找整个数组 返回9
 // let b=a.lastIndexOf('Koro1',-11); // -1 数组不会被查找
 let b=a.lastIndexOf('Koro1',-9); // 从第二个元素4往前查找，没有找到 返回-1
```