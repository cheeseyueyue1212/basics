var number = '0100110011100'
function getCount(str) {
    let arr = number.split('0'),
        res = 0
    arr = arr.filter(item => item !== '')
    for(var i = 0; i < arr.length; i++) {
        let itemLen = arr[i].length
        res += itemLen*(itemLen+1)/2
    }
    return res;
}
console.log(getCount(number))
