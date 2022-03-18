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

使用二：
- 通过expensive函数，执行一次昂贵的计算，拿到count对应的某个值。我们可以看到：无论是修改count还是val，由于组件的重新渲染，都会触发expensive的执行(能够在控制台看到，即使修改val，也会打印)；但是这里的昂贵计算只依赖于count的值，在val修改的时候，是没有必要再次计算的。在这种情况下，我们就可以使用useMemo，只在count的值修改时，执行expensive计算：
```js
export default function WithMemo() {
    const [count, setCount] = useState(1);
    const [val, setValue] = useState('');
    const expensive = useMemo(() => {
        console.log('compute');
        let sum = 0;
        for (let i = 0; i < count * 100; i++) {
            sum += i;
        }
        return sum;
    }, [count]);
 
    return <div>
        <h4>{count}-{expensive}</h4>
        {val}
        <div>
            <button onClick={() => setCount(count + 1)}>+c1</button>
            <input value={val} onChange={event => setValue(event.target.value)}/>
        </div>
    </div>;
}
```