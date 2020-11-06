### 移动端html文档中JS代码经常有下面的语句：

```html
<meta id="viewport" name="viewport" content="width=device-width; initial-scale=1/DPR; minimum-scale=1/DPR;   maximum-scale=1/DRP; user-scalable=no;">
```
#### 语句分析：

1. content="width=device-width：
指定手机浏览器显示的页面宽度刚好符合理想视口的宽度。
#### Device-width：设备屏幕宽度，就是理想视口宽度。由手机厂商根据手机分辨率和自定义DPR算出，在手机出厂里就设置好的。

2. initial-scale=1/DPR：
由于我们在页面代码中书写的像素值都是布局视图中手机的物理像素值大小，所以需要对页面进行初始化缩小1/DPR倍。

3. minimum-scale=1/DPR; maximum-scale=1/DRP; user-scalable=no;
是指定理想视口下页面能被最大的缩放、最小的缩放、以及是否允许用户缩放进行设置。前两项是允许用户操作视觉视口的最大和最小缩放。