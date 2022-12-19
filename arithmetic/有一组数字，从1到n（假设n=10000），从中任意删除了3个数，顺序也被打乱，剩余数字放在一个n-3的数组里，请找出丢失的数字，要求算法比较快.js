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

	// 如果丢失一个数, 可以利用下标索引
	// 异或

	var missingNumber = function(nums) {
    let xor = 0;
    const n = nums.length + 1;
    for (let i = 0; i < n - 1; i++) {
        xor ^= nums[i];
    }
    for (let i = 0; i <= n - 1; i++) {
        xor ^= i;
    }
    return xor;
};

	// 求和
	var missingNumber = function(nums) {
    const n = nums.length + 1;
    let total = Math.floor(n * (n - 1) / 2);
    let arrSum = 0;
    for (let i = 0; i < n - 1; i++) {
        arrSum += nums[i];
    }
    return total - arrSum;
};