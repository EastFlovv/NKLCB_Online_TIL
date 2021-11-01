/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

// 반례 [0] -> 시간초과, 왜?
let sortColors = function(nums) {
  // 내부 라이브러리를 사용하지 않고 수를 정렬
  let left = 0;
  let right = nums.length-1;

  let n = 0;

  while(n < 2) {
    if(nums[right] === n && nums[right] !== nums[left]) [nums[left], nums[right]] = [nums[right], nums[left]];
    else if(nums[left] === n) left++;
    else right--;

    if(left === right) {
      n++;
      right = nums.length-1;
    }
  }
  // return nums;
};

console.log(sortColors([1,0,2]));
console.log(sortColors([2,0,2,1,1,0]));