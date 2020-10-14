//方法一：API版本
(123456789).toLocaleString('en-US')  // 1,234,567,890


//方法二：普通版本
var str = '1234567890';

function formatNumber(str) {
    var arr = [],
        len = str.length;

    while(len >= 3) {
        arr.unshift(str.slice(len-3, len))
        len -= 3;
    }

    len%3 && arr.unshift(str.slice(0, len%3))
    return arr.toString();
}
formatNumber(str);


//方法三： reduce
var str = '1234567890';

function formatNumber(str) {
    return str.split('').reverse().reduce((pre, cur, index) => {
        return (index % 3 ? cur : cur + ',') + pre;
    })
}
formatNumber(str)


//**方法四：正则版本
function formatNumber(str) {
    return str.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  }
  
console.log(formatNumber("123456789")) // 1,234,567,890