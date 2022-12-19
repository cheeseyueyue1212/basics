var merge = function(intervals) {
  var res = intervals.sort((a, b) => {
      return a[0] - b[0]
  })
  var i = 0
  while(i < res.length - 1) {
      if (res[i][1] >= res[i+1][0]) {
          if (res[i][1] < res[i+1][1]) {
              res[i] = [res[i][0], res[i+1][1]]
          } 
          res.splice(i+1, 1)
      } else {
          i++
      }
  }
  return res
};

// 测试用例
intervals =
[[1,4],[0,4]]

[[1,4]]

// https://leetcode.cn/problems/merge-intervals/description/