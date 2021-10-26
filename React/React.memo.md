### useMomo 和useCallback 以及useEffect


### useCallback


### React.memo
- React.memo()是一个高阶函数，它与 React.PureComponent类似，但是一个函数组件而非一个类
React.memo()可接受2个参数，第一个参数为纯函数的组件，第二个参数用于对比props控制是否刷新，与shouldComponentUpdate()功能类似。
```js
import React from "react";

function Child({seconds}){
    console.log('I am rendering');
    return (
        <div>I am update every {seconds} seconds</div>
    )
};

function areEqual(prevProps, nextProps) {
    if(prevProps.seconds===nextProps.seconds){
        return true
    }else {
        return false
    }

}
export default React.memo(Child,areEqual)
```

### React.memo() 与Redux
```js
import React from "react";

function Child({seconds,state}){
    console.log('I am rendering');
    return (
      <div>
        <div>I am update every {seconds} seconds</div>
        <p>{state}</p>
      </div>
    )
};
const mapStateToProps = state => ({
    state: 'React.memo()用在connect()(内)'
});
export default connect(mapStateToProps)(React.memo(Child))
```

参照：https://www.jianshu.com/p/b3d07860b778
