# react-virtualized原理
[参考文章](https://blog.csdn.net/sinat_17775997/article/details/81047576)
> React如何渲染大数据量的列表？
核心原理：只渲染你所见的。

上面的应用渲染了1000条评论，但屏幕只为你展示了10来条数据，那另外990条的渲染就是浪费的。

如果我们只渲染可见的评论，当鼠标滚动查看更多的时候，将新的节点替换旧的节点。这样就完美解决了性能瓶颈的问题。


首先在 src/App.js 中，引入 List 组件：

```js
import { List } from "react-virtualized";


<div className="list">
 
  {this.list.map(this.renderRow.bind(this))}
 
</div>


const listHeight = 600;
 
const rowHeight = 50;
 
const rowWidth = 800;
 
//...
 
<div className="list">
 
  <List
 
    width={rowWidth}
 
    height={listHeight}
 
    rowHeight={rowHeight}
 
    rowRenderer={this.renderRow.bind(this)}
 
    rowCount={this.list.length} />
</div>



renderRow({ index, key, style }) {
  return (
    <div key={key} style={style} className="row">
      <div className="image">
        <img src={this.list[index].image} alt="" />
      </div>
      <div className="content">
        <div>{this.list[index].name}</div>
        <div>{this.list[index].text}</div>
      </div>
    </div>
  );
}
```
