
function test(arr, n) {
  let res = []
  let i = 0
  function getArr(arr) {
    if (Array.isArray(arr) && arr.length > 0) {
      arr.forEach(d => {
        if (Array.isArray(d) && i < n) {
          getArr(d)
          i++
        } else {
          res.push(d)
        }
      })
    }
  }
  getArr(arr)
  return res
}
test([1, [22], 3], 2)