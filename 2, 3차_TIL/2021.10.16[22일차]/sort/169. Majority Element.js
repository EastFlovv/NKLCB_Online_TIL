/**
 * @param {number[]} nums
 * @return {number}
 */
 let majorityElement = function(nums) {
  let flag = nums.length/2;
  let now, answer;
  let count = 0;
  nums.sort((x,y)=>x-y);
  for(let i = 0; i < nums.length; i++){
    if(i === 0 || now !== nums[i]){
      now = nums[i];
      count = 0;
    } 
    if(now === nums[i]) count++;
    if(count >= flag) answer = now;
    
  }
   
   return answer;
};