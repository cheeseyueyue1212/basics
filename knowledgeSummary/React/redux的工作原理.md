# redux的工作原理

借书的人（ReactComponent）说了一句话（Action Creator）向图书馆管理员（Store）借一本书，可是图书馆管理员年纪大了啊记不住啊，便掏出了自己的小本本（Reducers）。看了看知道了那本书有没有，在哪，怎么样。这样一来管理员就拿到了这本书，再把这本书交给了借书人。

## 翻译过来就是：
> 组件想要获取State， 用ActionCreator创建了一个请求交给Store,Store借助Reducer确认了该State的状态，Reducer返回给Store一个结果，Store再把这个State转给组件。



[参考文章](https://blog.csdn.net/c_kite/article/details/79018469)