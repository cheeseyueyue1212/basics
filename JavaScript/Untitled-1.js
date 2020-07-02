var srcript = document.createElement('script');
srcript.type = 'text/javascript'
srcript.src = 'http://www.baidu.com?callback=handleCallBack'
document.head.appendChild(srcript);

function callbaack(res) {
    //todo ...
}