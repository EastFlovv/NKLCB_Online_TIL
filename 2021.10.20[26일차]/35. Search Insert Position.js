/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
let searchInsert = function (nums, target) {
  let left = 0;
  let right = nums.length-1;
  let answer = 0;
  let mid = Math.floor(right/2);
  while (true) {
    if(left === right){
      if(nums[left] >= target) answer = left;
      else answer = left+1;
      break;
    }

    if(nums[mid] === target) {
      answer = mid;
      break;
    }
    else if (nums[mid] < target) left = mid+1;
    else right = mid;
    
    mid = Math.floor((left + right)/2);
    
  }
  return answer;
};




console.log(searchInsert([1,3,5,6], 0)); // 0, 9 등 끝에서 에러