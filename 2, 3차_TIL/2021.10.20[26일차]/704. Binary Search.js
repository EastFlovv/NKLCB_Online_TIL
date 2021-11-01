/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
let search = function(nums, target) {
  let left = 0;
  let right = nums.length-1;
  let mid = Math.floor((left + right)/2);
  
  while(true){
    if(nums[mid] === target) break;
    if(left === right){
      mid = -1;
      break; 
    }
    if(nums[mid] > target) right = mid;
    if(nums[mid] < target) left = mid + 1;
    mid = Math.floor((left + right)/2);
  }
  return mid;
};

search( [-1,0,3,5,9,12], 9)