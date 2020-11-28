const a = { b: {c: 1, d: {e: 1}}}

console.log(flattenKeys(a))

//["b","b.c","b.d", "b.d.e"]


function flattenKeys(a, res = [], preKey) {
	for(var key in a) {
		if(preKey !== undefined) {
			let item= preKey + '.' + key
			res.push(item)
		} else {
			res.push(key)
		}
		
		if(typeof a[key] == 'object'){
			if(preKey !== undefined) {
				preKey = preKey + '.' + key
			} else {
				preKey = key
			}
			flattenKeys(a[key], res, preKey)
		}
	}

	return res;
}