## CSS
1. ### 盒子模型
    页面渲染时，dom 元素所采用的 布局模型。可通过box-sizing进行设置。根据计算宽高的区域可分为：
    * content-box (W3C 标准盒模型)
    * border-box (IE 盒模型)

2. ### 标准盒子和IE盒子的区别：
    * 标准盒子： width = width 
    * IE盒子：width = width + border-left + border-right + padding-left + padding-right

3. ### JS如何设置获取盒子模型对应的宽和高
    * dom.style.width/height
    * dom.getBoundingClientRect.width/height

4. ### BFC(边距重叠解决方案)
    * BFC 的基本概念: Block Formatting Context, 块级格式化上下文，一个独立的块级渲染区域，该区域拥有一套渲染规格来约束块级盒子的布局，且与区域外部无关。
    #### BFC 的原理
        1. BFC 这个元素的垂直的边距会发生重叠
        2. BFC 的区域不会与浮动元素的 float 重叠
        3. 独立的容器，内外元素互不影响
        4. 计算 BFC 高度，浮动元素也参与计算
        5. 文字层不会被浮动层覆盖，环绕于周围
    #### 如何创建 BFC
        * float 不为none的时候
        * position 不为 static 或者 relative 的时候
        * display 与 table 相关的时候
        * overflow 为auto, hidden 的时候
        * IE下为 Layout，可通过 zoom:1 触发
    
    #### 应用
    * 阻止margin重叠
    * 可以包含浮动元素 —— 清除内部浮动(清除浮动的原理是两个div都位于同一个 BFC 区域之中)
    * 自适应两栏布局
    * 可以阻止元素被浮动元素覆盖
      
    #### 实例
    [两栏布局](./BFC_eg.html)