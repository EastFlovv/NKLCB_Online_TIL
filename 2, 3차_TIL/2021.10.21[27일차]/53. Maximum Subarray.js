/**
 * @param {number[]} nums
 * @return {number}
 */
let maxSubArray = function(nums) {
  // 연속된 배열속 합계
  // 음수로만 안간다면 +값
  let sum = 0;
  let max = 0;
  for(let i = 0; i < nums.length; i++){
    sum += nums[i];
    if(sum > max) max = sum;
    if(sum < 0) sum = 0;
  }
  
  // 음수로 이루어진 배열이 반례 -> 가장 큰 음수 하나만 출력
  if(max <= 0 && Math.max(...nums) !== 0){
    return Math.max(...nums);
  }
  
  return max;
};