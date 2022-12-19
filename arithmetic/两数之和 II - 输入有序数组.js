// 二分查找
var twoSum = function(numbers, target) {
  for (var i = 0; i < numbers.length; i++) {
      let low = i + 1
      let high = numbers.length - 1
      while(low <= high) {
          let mid = Math.floor((high - low) / 2 + low)
          if (numbers[mid] == target - numbers[i]) {
              return [i + 1, mid + 1]
          } else if (numbers[mid] > target - numbers[i]) {
              high = mid - 1
          } else {
              low = mid + 1
          }
      }
  }
  return []
};

// 双指针
class Solution {
  public int[] twoSum(int[] numbers, int target) {
      int low = 0, high = numbers.length - 1;
      while (low < high) {
          int sum = numbers[low] + numbers[high];
          if (sum == target) {
              return new int[]{low + 1, high + 1};
          } else if (sum < target) {
              ++low;
          } else {
              --high;
          }
      }
      return new int[]{-1, -1};
  }
}