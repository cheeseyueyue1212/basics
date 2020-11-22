String.prototype.repeat = function (times) {
	let str = ''
	while(times) {
		str += this;
		times--
	}
	return str
}

var str = 'cheese'
console.log(str.repeat(3))