/**
 * @param {number[]} nums
 * @return {number}
 */
 let removeDuplicates = function(nums) {
  let answer = Array.from(new Set(nums));
  return answer;
};

// console.log(answer)는 답이 나오나
// return answer로는 답이 나오지 않음 