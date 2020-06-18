## CSS
1. ## 盒子模型
    页面渲染时，dom 元素所采用的 布局模型。可通过box-sizing进行设置。根据计算宽高的区域可分为：
    * content-box (W3C 标准盒模型)
    * border-box (IE 盒模型)

2. ## 标准盒子和IE盒子的区别：
    * 标准盒子： width = width 
    * IE盒子：width = width + border-left + border-right + padding-left + padding-right

3. ## JS如何设置获取盒子模型对应的宽和高
    * dom.style.width/height
    * dom.getBoundingClientRect.width/height
