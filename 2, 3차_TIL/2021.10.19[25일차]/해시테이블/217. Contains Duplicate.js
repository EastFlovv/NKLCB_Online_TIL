/**
 * @param {number[]} nums
 * @return {boolean}
 */
// 해시에서 꺼낸문제 배열로 품
 let containsDuplicate = function(nums) {
  let answer = false;
  nums.sort((x,y)=>x-y);
  for(let i = 0; i < nums.length-1; i++){
    if(nums[i] === nums[i+1]) answer = true;
  };
  
  return answer;
};