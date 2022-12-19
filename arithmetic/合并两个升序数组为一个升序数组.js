let arr1 = [1, 2, 4, 13]
let arr2 = [3, 6, 7, 8, 9, 10]
// 归并排序思想
function myContant(arr1, arr2) {
    let arr3 = [];
    let i = 0,
        j = 0;
    while (i < arr1.length && j < arr2.length) {

        if (arr1[i] <= arr2[j]) {
            arr3.push(arr1[i]);
            i++
        } else {
            arr3.push(arr2[j]);
            j++
        }
    }

    if (i >= arr1.length) {
        arr3 = arr3.concat(arr2.splice(j))
    }
    if (j >= arr2.length) {
        arr3 = arr3.concat(arr1.splice(i))
    }

    return arr3;
}
console.log(myContant(arr1, arr2))