###styled-components

参考： https://zhuanlan.zhihu.com/p/28876652

1. 配合react antd组件
```js
import styled from 'styled-components';
import { Button } from 'antd';

export const StyledButton = styled(Button)`
  &.ant-btn-primary {
    color: red;
  }
`;

<StyledButton type="primary">Button2</StyledButton>
```

2. 嵌套结构
```js
const Container = styled.div`
  width: 400px;
  margin: 30px auto;
  font-family: ${fontFamily};
  font-size: ${fontSize};
  color: ${gray2};
  ul {
    list-style: none;
    padding: 0px 20px;
    background-color: #fff;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    border-top: 3px solid ${accent1};
    box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.16);
    li {
      padding: 10px 0px;
      border-top: 1px solid ${gray5};
      :first-of-type {
        border-top: none;
      }
    }
  }
`;
```
3. 创建单独的样式化的组件
```js
const Container = styled.div`
  width: 400px;
  margin: 30px auto;
  font-family: ${fontFamily};
  font-size: ${fontSize};
  color: ${gray2};
`;

const List = styled.ul`
  list-style: none;
  padding: 0px 20px;
  background-color: #fff;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-top: 3px solid ${accent1};
  box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.16);
`;

const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  padding: 10px 0px;
  border-top: 1px solid ${gray5};
  :first-of-type {
    border-top: none;
  }
`;

const Title = styled.span`
  font-size: 18px;
  color: ${gray1};
  margin-bottom: 5px;
`;

const App = () => (
  <Container>
    <List>
      {posts.map(({ id, title, body }) => (
        <ListItem key={id}>
          <Title>{title}</Title>
          <span>{body}</span>
        </ListItem>
      ))}
    </List>
  </Container>;
);
```
4. 响应式组件
```js
const Container = styled.div`
  width: 400px;
  margin: 30px auto;
  font-family: ${fontFamily};
  font-size: ${fontSize};
  color: ${gray2};
  @media (max-width: 400px) {
    width: 100%;
  }
`;
```
5. 继承
我们可以在另一个样式化的组件基础上建立样式化的组件：
```js
const Text = styled.div`
  font-family: ${fontFamily};
  font-size: ${fontSize};
  color: ${gray2};
`;

const Title = styled(Text)`
  font-size: 18px;
  color: ${gray1};
  margin-bottom: 5px;
`;
```
6. Props(属性）
```js
interface ITextProps {
  size?: string;
}

const Text = styled.div<ITextProps>`
  font-family: ${fontFamily};
  font-size: ${props => props.size || fontSize};
  color: ${gray2};
`;

...


const App = () => (
  <Container>
    <List>
      {posts.map(({ id, title, body }) => (
        <ListItem key={id}>
          <Title>{title}</Title>
          <Text size="14px" as="p">
            {body}
          </Text>
        </ListItem>
      ))}
    </List>
  </Container>
);
```
7. 添加属性
```js
const Input = styled.input.attrs((props) => ({
  // we can define static props
  type: "password",

  // or we can define dynamic ones
  size: props.size || "1em",
}))`
  color: palevioletred;
  font-size: 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;

  /* here we use the dynamically computed prop */
  margin: ${(props) => props.size};
  padding: ${(props) => props.size};
`;

render(
  <div>
    <Input placeholder="A small text input" />
    <br />
    <Input placeholder="A bigger text input" size="2em" />
  </div>
);
```
8. 使用伪元素，选择器，嵌套语法
```js
const Thing = styled.div`
  color: blue;
  &:hover {
    color: red; // <Thing> when hovered
  }
  & ~ & {
    background: tomato; // <Thing> as a sibling of <Thing>, but maybe not directly next to it
  }
  & + & {
    background: lime; // <Thing> next to <Thing>
  }
  &.something {
    background: orange; // <Thing> tagged with an additional CSS class ".something"
  }
  .something-else & {
    border: 1px solid; // <Thing> inside another element labeled ".something-else"
  }
  .child-component {
    border: 1px solid;
  }
`;
render(
  <React.Fragment>
    <Thing>Hello world!</Thing>
    <Thing>How ya doing?</Thing>
    <Thing className="something">The sun is shining...</Thing>
    <div>Pretty nice day today.</div>
    <Thing>Don't you think?</Thing>
    <div className="something-else">
      <Thing>Splendid.</Thing>
    </div>
    <Thing>
      <label htmlFor="foo-button" className="child-component">
        Mystery button
      </label>
      <button id="foo-button">What do I do?</button>
    </Thing>
  </React.Fragment>
);
```
在出现语法冲突时，可以使用&&提高优先级
```js
const Thing = styled.div`
  && {
    color: blue;
  }
`;
const GlobalStyle = createGlobalStyle`
  div${Thing} {
    color: red;
  }
`;
render(
  <React.Fragment>
    <GlobalStyle />
    <Thing>I'm blue, da ba dee da ba daa</Thing>
  </React.Fragment>
);
```
缺点：在浏览器中看起来不好，生成class乱码