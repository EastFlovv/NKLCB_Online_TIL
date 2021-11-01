/**
 * @param {number[]} nums
 * @return {number[]}
 */
 let majorityElement = function(nums) {
  let answer = [];
  let appear = nums.length/3;
  let hash = {};
  
  for(let i = 0; i < nums.length; i++){
    if(hash[nums[i]] === undefined) hash[nums[i]] =1;
    else hash[nums[i]]++;
  }
  
  for(const key in hash){
    if(hash[key] > appear) answer.push(key);
  }
  return answer;
};