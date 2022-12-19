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

// 自实现：
const a = { b: {c: 1, d: {e: 1}}}

function flattenKeys(obj) {
    let res = []
    let preStr = ''

    function getKeys(obj, key) {
        preStr = preStr ? `${preStr}.${key}` : key
        for (var key in obj) {
            nowStr = preStr ? preStr + '.' + key : preStr + key
            res.push(nowStr)
            if (Object.prototype.toString.call(obj[key]) === '[object Object]') {
                getKeys(obj[key], key)
            }
        }   
    }

    getKeys(obj, preStr)

    return res;
}
console.log(flattenKeys(a))