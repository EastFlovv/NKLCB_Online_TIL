/**
 * @param {number[]} nums
 * @return {number}
 */
let maxWidthRamp = function(nums) {
  let leng = 0;
  let max = 0;
  for(let i = 0; i < nums.length-1; i++){
    for(let j = i+1; j < nums.length; j++){
      if(nums[j] >= nums[i]) {
        leng = j;
        if(max < j-i) max = j-i;
      }
    }
    leng = 0;
  }
  return max;
};

maxWidthRamp([6,0,8,2,1,5]);