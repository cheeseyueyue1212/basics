//快排算法  时间复杂度：nlogN  最差n2 相当于冒泡排序

function myQuick(arr) {
    if(arr.length <= 1) {
        return arr;
    }
    var k = arr.splice(0, 1)[0];
    var left = [];
    var right = [];
    
    for(var i = 0; i < arr.length; i++) {
        if(arr[i] < k) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }
    return myQuick(left).concat([k], myQuick(right))
}

myQuick([1,5,2,6,4,9,0])

// 方式二

function swap(A, i, j) {
    const t = A[i];
    A[i] = A[j];
    A[j] = t;
  }
  
  /**
   *
   * @param {*} A  数组
   * @param {*} p  起始下标
   * @param {*} r  结束下标 + 1
   */
  function divide(A, p, r) {
    const x = A[r - 1]; // 右指针
    let i = p - 1;
  
    for (let j = p; j < r - 1; j++) {
      if (A[j] <= x) {
        i++;
        swap(A, i, j);
      }
    }
  
    swap(A, i + 1, r - 1);
  
    return i + 1;
  }
  
  /**
   * 
   * @param {*} A  数组
   * @param {*} p  起始下标
   * @param {*} r  结束下标 + 1
   */
  function qsort(A, p = 0, r) {
    r = r || A.length;
  
    if (p < r - 1) {
      const q = divide(A, p, r);
      qsort(A, p, q);
      qsort(A, q + 1, r);
    }
  
    return A;
  }

  // 方法三：
  function partition(arr, low, high) {
    let pivot = arr[low];
    while (low < high) {
      while (low < high && arr[high] > pivot) {
        --high;
      }
      arr[low] = arr[high];
      while (low < high && arr[low] <= pivot) {
        ++low;
      }
      arr[high] = arr[low];
    }
    arr[low] = pivot;
    return low;
  }
  
  function quickSort(arr, low, high) {
    if (low < high) {
      let pivot = partition(arr, low, high);
      quickSort(arr, low, pivot - 1);
      quickSort(arr, pivot + 1, high);
    }
    return arr;
  }


  // 自实现
  function quickSort(arr, l, r) {
    if (l < r) {
        let target = arr[l]
        while(l < r) {
            while(l < r && target < arr[r]) {
                r--
            }
            arr[l] = arr[r]
            while(l < r && arr[l] <= target) {
                l++
            }
            arr[r] = arr[l]
        }

        arr[l] = target

        quickSort(arr, 0, l - 1)
        quickSort(arr, l + 1, r)
    }

    return arr
}

quickSort([5, 3, 9, 1, 4], 0, 4)