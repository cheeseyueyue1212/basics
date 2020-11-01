# display:inline-block元素之间空隙的产生原因和解决办法

## 空隙产生的原因：
在CSS布局中，如果我们想要将一些元素在同一行显示，其中的一种方法就是把要同行显示的元素设置display属性为inline-block。但是你会发现这些同行显示的inline-block元素之间经常会出现一定的空隙，这就是“换行符/空格间隙问题”。

元素被当成行内元素排版的时候，元素之间的空白符（空格、回车换行等）都会被浏览器处理，根据white-space的处理方式（默认是normal，合并多余空白），原来HTML代码中的回车换行被转成一个空白符，在字体不为0的情况下，空白符占据一定宽度，所以inline-block的元素之间就出现了空隙。这些元素之间的间距会随着字体的大小而变化，当行内元素font-size:16px时，间距为8px。

```html
<!DOCTYPE html>
<html>
<head>
  <title>display:inline-block元素之间空隙的产生原因和解决办法</title>
  <style type="text/css">
  	.parent .child {
      display: inline-block;
      background-color: #fdfd04;
      width: 100px;
      height: 100px;
    }
	.parent{
		display: table;
	}
  </style>
</head>
<body>
  <div class="parent">
    <div class="child">child1</div>
    <div class="child">child2</div>
  </div>
</body>
</html>
```

来自：https://blog.csdn.net/qq_32614411/article/details/82223624