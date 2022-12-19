function GetUrlParam(paraName) {
    var url = document.location.toString();
    var arrObj = url.split("?");
    if (arrObj.length > 1) {
        var arrPara = arrObj[1].split("&");
        var arr;
        for (var i = 0; i < arrPara.length; i++) {
            arr = arrPara[i].split("=");

            if (arr != null && arr[0] == paraName) {
                return arr[1];
            }
        }
        return "";
    } else {
        return "";
    }
}

//自实现：
function getParma(url) {
    let arr = url.split('?')[1]?.split('&')
    let obj = {}
    if (!arr) return ''
    for (var i = 0; i < arr.length; i++) {
        const [key, val] = arr[i].split('=')
        obj[key] = val
    }
    return obj
}
getParma(url)