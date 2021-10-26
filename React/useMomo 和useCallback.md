### useCallback使用场景
1. 函数定义时需要进行大量运算， 这种场景极少
2. 需要比较引用的场景，如上文提到的useEffect，又或者是配合React.Memo使用：

```js
const Child = React.memo(function({val, onChange}) {
  console.log('render...');
  
  return <input value={val} onChange={onChange} />;
});

function App() {
  const [val1, setVal1] = useState('');
  const [val2, setVal2] = useState('');

  const onChange1 = useCallback( evt => {
    setVal1(evt.target.value);
  }, []);

  const onChange2 = useCallback( evt => {
    setVal2(evt.target.value);
  }, []);

  return (
  <>
    <Child val={val1} onChange={onChange1}/>
    <Child val={val2} onChange={onChange2}/>
  </>
  );
}
```
上面的例子中，如果不用useCallback, 任何一个输入框的变化都会导致另一个输入框重新渲染。代码在这里。

### useMemo
useCallback缓存的是方法的引用，而useMemo缓存的则是方法的返回值。使用场景是减少不必要的子组件渲染：

```js
function Parent({ a, b }) {
  // 当 a 改变时才会重新渲染
  const child1 = useMemo(() => <Child1 a={a} />, [a]);
  // 当 b 改变时才会重新渲染
  const child2 = useMemo(() => <Child2 b={b} />, [b]);
  return (
    <>
      {child1}
      {child2}
    </>
  )
}
```
如果想实现Class Component的shouldComponentUpdate方法，可以使用React.memo方法，区别是它只能比较 props，不会比较 state：
```js
const Parent = React.memo(({ a, b }) => {
  // 当 a 改变时才会重新渲染
  const child1 = useMemo(() => <Child1 a={a} />, [a]);
  // 当 b 改变时才会重新渲染
  const child2 = useMemo(() => <Child2 b={b} />, [b]);
  return (
    <>
      {child1}
      {child2}
    </>
  )
});
```