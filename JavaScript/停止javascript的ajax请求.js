//停止javascript的ajax请求
xmlHttp.open("POST", "Url", true);
xmlHttp.onreadystatechange = function () {
     //得到响应之后的操作
}
xmlHttp.send();
//设置3秒钟后检查xmlHttp对象所发送的数据是否得到响应.
setTimeout("CheckRequest()", "3000");

function CheckRequest() {
    //为4时代表请求完成了
    if (xmlHttp.readyState != 4) {
        alert('数据响应超时');
        //关闭请求
        xmlHttp.close();
    }
}  //根据响应状态的改变关闭

//切记：不可用abort方法来作为终止对服务器的请求操作，只有当做在前端页面立刻停止执行ajax成功后的方法，因为你执行abort方法后，ajax很可能已经对服务端发送了请求，只是还未返回回馈信息而已。

// 文档： https://www.toutiao.com/article/7072525164218483200/