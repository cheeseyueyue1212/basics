const a = {}
const b = 1
const c = 'ScriptOJ'

const set1 = new Set([a, b, c])
const set2 = new Set([a, c, b])

console.log(isSameSet(set1, set2)) // => true


function isSameSet(set1, set2) {
	return [...set1].every(item => set2.has(item)) && [...set2].every(item => set1.has(item))
}