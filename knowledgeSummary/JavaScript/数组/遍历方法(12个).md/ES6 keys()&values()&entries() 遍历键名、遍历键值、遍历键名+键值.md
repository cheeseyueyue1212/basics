# ES6 keys()&values()&entries() 遍历键名、遍历键值、遍历键名+键值

定义：三个方法都返回一个新的 Array Iterator 对象，对象根据方法不同包含不同的值。

语法：

```js
    array.keys()
    array.values()
    array.entries()
```

遍历栗子(摘自ECMAScript 6 入门)：

```js
    for (let index of ['a', 'b'].keys()) {
      console.log(index);
    }
    // 0
    // 1
    
    for (let elem of ['a', 'b'].values()) {
      console.log(elem);
    }
    // 'a'
    // 'b'
    
    for (let [index, elem] of ['a', 'b'].entries()) {
      console.log(index, elem);
    }
    // 0 "a"
    // 1 "b"
```

在for..of中如果遍历中途要退出，可以使用break退出循环。

如果不使用for...of循环，可以手动调用遍历器对象的next方法，进行遍历:

```js
    let letter = ['a', 'b', 'c'];
    let entries = letter.entries();
    console.log(entries.next().value); // [0, 'a']
    console.log(entries.next().value); // [1, 'b']
    console.log(entries.next().value); // [2, 'c']
```