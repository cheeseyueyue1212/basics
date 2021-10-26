###useRef
- Class Component获取 ref 的方式如下：
```js
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }
  
  componentDidMount() {
    this.myRef.current.focus();
  }  

  render() {
    return <input ref={this.myRef} type="text" />;
  }
}
```
Hooks 的实现方式如下：
```js
function() {
  const myRef = useRef(null);

  useEffect(() => {
    myRef.current.focus();
  }, [])
  
  return <input ref={myRef} type="text" />;
}
```
useRef返回一个普通 JS 对象，可以将任意数据存到current属性里面，就像使用实例化对象的this一样。另外一个使用场景是获取 previous props 或 previous state：
```js
function Counter() {
  const [count, setCount] = useState(0);

  const prevCountRef = useRef();

  useEffect(() => {
    prevCountRef.current = count;
  });
  const prevCount = prevCountRef.current;

  return <h1>Now: {count}, before: {prevCount}</h1>;
}
```