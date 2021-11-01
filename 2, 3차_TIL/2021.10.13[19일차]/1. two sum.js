//array 1번

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 let twoSum = function(nums, target) {
  let answer = [];
  
  for(let i = 0; i < nums.length; i++){
    for(let j = i+1; j < nums.length; j++){
      if(nums[i] + nums[j] === target) answer = [i, j];
    }
  }
  return answer;
};
// console.log(twoSum([3, 3], 6));