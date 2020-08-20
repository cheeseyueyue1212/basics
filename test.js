

var script = document.createElement('src');
script.src = 'http://www.baidu.com?callBack=fuc';

script.type = 'text/javascript';

document.appendChild(script);

function fuc(res) {
    alert(res);
}