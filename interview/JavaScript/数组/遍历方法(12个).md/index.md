
# js中遍历数组并不会改变原始数组的方法总共有12个:


```js
    ES5：
    forEach、every 、some、 filter、map、reduce、reduceRight、
    ES6：
    find、findIndex、keys、values、entries
```

## 关于遍历：
* 关于遍历的效率，可以看一下这篇详解JS遍历
* 尽量不要在遍历的时候，修改后面要遍历的值
* 尽量不要在遍历的时候修改数组的长度（删除/添加）