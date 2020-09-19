
// 方法一：
let arr = [1, 2, 3, 4, 5];
function randFun(arr) {
    for(let i=0, len = arr.length; i < len; i++) {
        let index = parseInt(Math.random() * (len - 1));
        let tempValue = arr[i];
        arr[i] = arr[index];
        arr[index] = tempValue;
    }
    return arr;
}
let newArr = randFun(arr);

// 方法二：
// ES6:
function shuffle(arr) {
    let i = arr.length;
    while (i) {
        let j = Math.floor(Math.random() * i--);
        [arr[j], arr[i]] = [arr[i], arr[j]];
    }
}

// ES5:
function shuffle(arr) {
  var i = arr.length, t, j;
  while (i) {
    j = Math.floor(Math.random() * i--);
    t = arr[i];
    arr[i] = arr[j];
    arr[j] = t;
  }
}