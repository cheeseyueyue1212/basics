// 方法一： 时间复杂度o(N), o(N)  缺点： 速度慢
var checkValidString = function(s) {
  const leftStack = [];
  const asteriskStack = [];
  const n = s.length;
  for (let i = 0; i < n; i++) {
      const c = s[i];
      if (c === '(') {
          leftStack.push(i);
      } else if (c === '*') {
          asteriskStack.push(i);
      } else {
          if (leftStack.length) {
              leftStack.pop();
          } else if (asteriskStack.length) {
              asteriskStack.pop();
          } else {
              return false;
          }
      }
  }
  while (leftStack.length && asteriskStack.length) {
      const leftIndex = leftStack.pop();
      const asteriskIndex = asteriskStack.pop();
      if (leftIndex > asteriskIndex) {
          return false;
      }
  }
  return leftStack.length === 0;
};


// 方法二： 时间复杂度o(N), o(1)
var checkValidString = function(s) {
  let leftNum = 0;
  let startNum = 0;
  for (var i = 0; i < s.length; i++) {
      if (s[i] === '(') {
          leftNum++
      }
      if (s[i] === '*') {
          startNum++
      }
      if (s[i] === ')') {
          if (leftNum > 0) {
              leftNum--
          } else if (startNum > 0) {
              startNum--
          } else {
              return false
          }
      }
  }
  var flag = leftNum <= startNum
  if (!flag) return false


  let rightNum = 0;
   startNum = 0
  for (var i = s.length - 1; i >= 0; i--) {
      if (s[i] === ')') {
          rightNum++
      }
      if (s[i] === '*') {
          startNum++
      }
      if (s[i] === '(') {
          if (rightNum > 0) {
              rightNum--
          } else if (startNum > 0) {
              startNum--
          } else {
              return false
          }
      }
  }
  
  return rightNum <= startNum
};