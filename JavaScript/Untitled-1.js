


var test = new Set([1,2,4,3])
var test2 = new Set([2,5,6])

var res = new Set([...test].filter((item, i) => {return [...test2].includes(item)}))