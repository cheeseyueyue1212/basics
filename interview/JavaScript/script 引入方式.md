# script 引入方式

1. html 静态<script>引入

```js
    <script src="js/index.js" type="text/javascript"></script>
```


2. js 动态插入<script>

```js    
var scriptElement=document.createElement("script");
scriptElement.src="js/test.js";
(document.getElementsByTagName("head")[0] || document.body).appendChild(scriptElement);
```


3. <script defer>: 异步加载，元素解析完成后执行
延迟脚本defer属性
defer:可选。表示脚本可以延迟到文档完全被解析之后再执行。只对外部脚本文件有效。 相当于告诉浏览器立即下载，但延迟执行


4. <script async>: 异步加载，但执行时会阻塞元素渲染
与defer类似，async只适用于外部脚本文件，并告诉浏览器立即下载脚本，但不应妨碍页面的其他操作，比如下载其他资源或等待加载其他脚本。

> 这个属性与defer类似，都用于改变处理脚本的行为。同样与defer类似，async只适用于外部脚本文件，并告诉浏览器立即下载文件。但与defer不同的是，标记为async的脚本并不保证按照它们的先后顺序执行。
> 第二个脚本文件可能会在第一个脚本文件之前执行。因此确保两者之间互不依赖非常重要。指定async属性的目的是不让页面等待两个脚本下载和执行，从而异步加载页面其他内容。

5. 行内引入

```js
    <input type="button" οnclick="alert('行内引入')" value="button" name="button">
    <button οnclick="alert(123)">点击我</button>
```