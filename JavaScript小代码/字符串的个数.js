let str = 'lkj23;4ljk;lsdjg;lj;q3lj;lj;'
// function test(str) {
//     let obj = {};
//     for(var i =0; i < str.length; i++) {
//         if(obj[str.slice(i, i+1)]) {
//             obj[str.slice(i, i+1)]++
//         } else {
//             obj[str.slice(i, i+1)] = 1
//         }
//     }
//     return obj;
// }



function test(str) {
    let obj = {};
    for(var i =0; i < str.length; i++) {
		let key = str[i]
		if(obj[key]) {
			obj[key]++
		} else {
			obj[key] = 1
		}
    }
    return obj;
}
console.log(test(str))