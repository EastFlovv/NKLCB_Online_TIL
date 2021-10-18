/**
 * @param {number[]} nums
 * @return {number}
 */

// 작은 값끼리 더한것중 가장 큰 값을 반환
let arrayPairSum = function(nums) {
  let answer = 0;
  nums.sort((x,y) => x-y);
  
  for(let i = 0; i < nums.length; i++){
    if(i % 2 == 0) answer += nums[i];
  }
  return answer;
};
  
  // 1 4 3 2
  // 1 2 3 4
  // o x o x = 4
  
  // 6 2 6 5 1 2
  // 1 2 2 5 6 6
  // o x o x o x = 9