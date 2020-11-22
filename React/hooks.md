# setState

## 实现一个 useState：
```js
var _state; // 把 state 存储在外面

function useState(initialValue) {
  _state = _state || initialValue; // 如果没有 _state，说明是第一次执行，把 initialValue 复制给它
  function setState(newState) {
    _state = newState;
    render();
  }
  return [_state, setState];
}
```


# useEffect

### 1. 使用：
```js
 useEffect(() => {
    console.log(count);
 }, [count]);
```

### 2. 原理：
- 有两个参数 callback 和 dependencies 数组
- 如果 dependencies 不存在，那么 callback 每次 render 都会执行
- 如果 dependencies 存在，只有当它发生了变化， callback 才会执行

### 3. 实现一个
```js
let _deps; // _deps 记录 useEffect 上一次的 依赖

function useEffect(callback, depArray) {
  const hasNoDeps = !depArray; // 如果 dependencies 不存在
  const hasChangedDeps = _deps
    ? !depArray.every((el, i) => el === _deps[i]) // 两次的 dependencies 是否完全相等
    : true;
  /* 如果 dependencies 不存在，或者 dependencies 有变化*/
  if (hasNoDeps || hasChangedDeps) {
    callback();
    _deps = depArray;
  }
}
```

https://blog.csdn.net/sinat_17775997/article/details/94453167


useReducer: https://blog.csdn.net/stone805/article/details/92786435s


## 至此useReducer系列三篇就全部结束了，我们简单回顾一下：

1. 如果你的页面state很简单，可以直接使用useState
2. 如果你的页面state比较复杂（state是一个对象或者state非常多散落在各处）请使用userReducer
3. 如果你的页面组件层级比较深，并且需要子组件触发state的变化，可以考虑useReducer + useContext