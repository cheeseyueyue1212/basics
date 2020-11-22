//用js递归的方式写1到100求和？

function getSum(sum, i) {
    
    sum += i;
    if(i < 100) {
        i++
        return getSum(sum, i)
	} else {
		return sum;
	}
	
}

console.log(getSum(0, 1))