let str1 = 'ABCD'
let str2 = 'BAD'

function StringContains(str1, str2) {
	var arr = str1.split('');
	var obj = []
	for(var i = 0; i < arr.length; i++) {
		obj[arr[i]] = i;
	}
	for(var j = 0; j < str2.length; j++) {
		if(obj[str2[j]] == undefined) return false;
	}
	return true;
}

console.log(StringContains(str1, str2))