// ['aaafsd', 'aawwewer', 'aaddfff'] => 'aa'

let arr = ['aaafsdwewer', 'a', 'aaddfff'];
function getSomeTop(arr) {
    let target = '';
    let res = [];
    let j = 0;
    while(true) {
		for(var i = 0; i < arr.length; i++) {
			if(i == 0) {
				target = arr[i][j]
			} else if(target == arr[i][j]) {
				continue;
			} else {
				return res.join('');
			}
		}
		res.push(target)
		j++;
    }
}

console.log(getSomeTop(arr))