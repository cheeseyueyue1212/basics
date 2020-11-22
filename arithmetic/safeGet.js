var data = { a: { b: { c: 'ScriptOJ' } } }
const safeGet = function(o,path) {
	try {
		return path.split('.').reduce((o, k) => o[k],o)
	}catch(err){
		return void 666
	}
	
}


console.log(safeGet(data, 'a.b') )