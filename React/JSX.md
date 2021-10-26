# JSX写法
##### 注意：
##### 1.  组件必须以大写字母开头
##### 2. Props 默认值为 “True”
  如果你没给 prop 赋值，它的默认值是 true。以下两个 JSX 表达式是等价的：

    ```js
    <MyTextBox autocomplete />
    <MyTextBox autocomplete={true} />
    ```
##### 3. 属性展开
    ```js
    function App1() {
    return <Greeting firstName="Ben" lastName="Hector" />;
    }

    function App2() {
    const props = {firstName: 'Ben', lastName: 'Hector'};
    return <Greeting {...props} />;
    }
    ```

    你还可以选择只保留当前组件需要接收的 props，并使用展开运算符将其他 props 传递下去。
    ```js
    const Button = props => {
    const { kind, ...other } = props;
    const className = kind === "primary" ? "PrimaryButton" : "SecondaryButton";
    return <button className={className} {...other} />;
    };

    const App = () => {
    return (
        <div>
        <Button kind="primary" onClick={() => console.log("clicked!")}>
            Hello World!
        </Button>
        </div>
    );
    };
    ```
    在上述例子中，kind 的 prop 会被安全的保留，它将不会被传递给 DOM 中的 `<button>` 元素。 所有其他的 props 会通过 ...other 对象传递，使得这个组件的应用可以非常灵活。你可以看到它传递了一个 onClick 和 children 属性。

    属性展开在某些情况下很有用，但是也很容易将不必要的 props 传递给不相关的组件，或者将无效的 HTML 属性传递给 DOM。我们建议谨慎的使用该语法。

##### 4. JSX 子元素 （待补充...


```js
import React from 'react';

const MyComponents = {
  DatePicker: function DatePicker(props) {
    return <div>Imagine a {props.color} datepicker here.</div>;
  }
}

function BlueDatePicker() {
  return <MyComponents.DatePicker color="blue" />;
}
```