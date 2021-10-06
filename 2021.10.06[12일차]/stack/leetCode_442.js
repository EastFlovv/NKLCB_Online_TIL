// 442. Find All Duplicates in an Array
// Medium

// 4435

// 204

// Add to List

// Share
// Given an integer array nums of length n where all the integers of nums are in the range [1, n] and each integer appears once or twice, return an array of all the integers that appears twice.

// You must write an algorithm that runs in O(n) time and uses only constant extra space.

 

// Example 1:

// Input: nums = [4,3,2,7,8,2,3,1]
// Output: [2,3]
// Example 2:

// Input: nums = [1,1,2]
// Output: [1]
// Example 3:

// Input: nums = [1]
// Output: []
 

// Constraints:

// n == nums.length
// 1 <= n <= 105
// 1 <= nums[i] <= n
// Each element in nums appears once or twice.

// 중복된 수 찾기, 시간복잡도는 O(n)으로 제한
let findDuplicates = function(nums) {
  nums = nums.sort((x, y)=> x-y);
  let answer = [];
  for(let i = 0; i < nums.length-1; i++){
    if(nums[i] === nums[i+1])
      answer.push(nums[i]);
  }
  return answer;
};