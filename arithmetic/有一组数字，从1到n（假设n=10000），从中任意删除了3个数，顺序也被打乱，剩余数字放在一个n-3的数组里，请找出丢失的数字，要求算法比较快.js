	//有一组数字，从1到n（假设n=10000），从中任意删除了3个数，顺序也被打乱，剩余数字放在一个n-3的数组里，请找出丢失的数字，要求算法比较快

	const arr = [1, 3, 6, 7, 5, 2, 9]

	function findNums(arr) {
	    let res = [],
	        obj = {},
	        n = arr.length + 3

	    for (var i = 0; i < arr.length; i++) {
	        obj[arr[i]] = 1
	    }

	    for (var j = 1; j <= n; j++) {
	        if (!obj[j]) {
	            res.push(j)
	        }
	    }

	    return res;
	}

	console.log(findNums(arr))