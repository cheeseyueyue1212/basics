//冒泡排序

function bubbleSort(arr) {
    if (arr.length < 2) return arr;
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] > arr[j]) {
          let tmp = arr[j];
          arr[j] = arr[i];
          arr[i] = tmp;
        }
      }
    }
    return arr;
  }
  bubbleSort([2, 4, 5, 3, 1]); // 1,2,3,4,5

  