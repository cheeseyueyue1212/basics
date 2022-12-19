var shortestToChar = function(s, c) {
  let res = []
  let preIndex = -s.length
  let resIndex = 0
  for (var i = 0; i < s.length; i++) {
      if (s[i] === c) {
          res[i] = 0
          let middleIndex = (i + preIndex) / 2
          for (var j = resIndex; j < i; j++) {
              if (j < middleIndex) {
                  res[j] = j - preIndex
              } else {
                  res[j] = i - j
              }
          }
          preIndex = i
          resIndex = i
      }
  }
  for (var i = resIndex + 1; i < s.length; i++) {
      res[i] = i - resIndex
  }
  return res
};


// https://leetcode.cn/problems/shortest-distance-to-a-character/