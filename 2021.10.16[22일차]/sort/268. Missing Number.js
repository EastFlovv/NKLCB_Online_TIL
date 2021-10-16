/**
 * @param {number[]} nums
 * @return {number}
 */
 let missingNumber = function(nums) {
  let answer;
  nums.sort((x,y)=>x-y);
  if(nums[nums.length-1] !== nums.length) answer = nums.length;
  else{
    for(let i = 0; i < nums.length; i++){
      if(nums[i]!==i) {
        answer = i;
        break;
      }
    }
  }
  return answer;
};