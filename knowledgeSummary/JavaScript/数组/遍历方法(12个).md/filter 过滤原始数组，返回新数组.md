# 一：filter 过滤原始数组，返回新数组

类似 every/some

```js
     let a = [32, 33, 16, 40];
    let result = a.filter(function (value, index, array) {
      return value >= 18; // 返回a数组中所有大于18的元素
    });
    console.log(result,a);// [32,33,40] [32,33,16,40]
```

## 注意：
1. 数组的长度已经为定值
  eg:再push进去的元素不会被遍历, 因为存储空间不能再变大了
2. 引用地址不变，遍历时取当前索引下的值。
  eg:如果删除某个元素，则不会被遍历到。
  eg: 如果删除一个元素，再添加一个元素，则删除的不会被遍历到，添加的会被遍历到。


# 二：for循环
```js
  var arr = [1,2,3,4];
  var flag = 0;
  for(var i = 0; i < arr.length; i ++ ){
    if(flag == 0){
      arr.push(5);
      flag = 1;
    }
    console.log( arr[i] )
  }
```

## 注意：
> 看到，在arr新加入了5后，5也被遍历到了
> 这个很容易理解，循环的结束条件是 i < arr.length,在数组改变后，它的length也同时增加，循环继续执行下去

# 三：forEach 循环

```js
var words = ['one', 'two', 'three', 'four','five'];
words.forEach(function(word) {
  console.log(word);
  if (word === 'two') {
      words.shift();
      words.shift();
  }
});
console.log(words);
```

## 注意：和filter原理相同， 空间最大长度已定，属于指针引用。

# 四：map 遍历
```js
var arr = [1, 2, 3]
var flag = 0;
var result = arr.map(item => {
    
    if(flag == 0){
      arr.splice(1, 1)
      flag = 1;
    }
  item = item * 3;
    console.log('item:', item)
  return item;
});
console.log('arr', arr);     
console.log('result', result);  // [3, 9, empty]
```
## 注意：
1. 类似filter /forEach ，空间长度已定， 属性指针引用
2. map 有返回值，返回长度不变，如果短了，就用empty补位
3. 当循环时改变值类型，原数组不变。如果改变是引用类型，则改变原数组。


# 五： reduce遍历

## 注意： 
1. 和filter原理相同， 空间最大长度已定，属于指针引用。
2. 有返回值，改变数据长度变小时， 不会补位。


# 六： some

## 注意： 
1. 和filter原理相同， 空间最大长度已定，属于指针引用。
2. 有返回值，返回 true/false