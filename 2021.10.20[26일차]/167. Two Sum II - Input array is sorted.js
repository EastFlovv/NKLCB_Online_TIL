/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
 let twoSum = function(numbers, target) {
  let left = 0;
  let right = numbers.length-1;
  // 투 포인터
  while(true){
    if(numbers[left] + numbers[right] > target) right--;
    if(numbers[left] + numbers[right] < target) left++;
    if(numbers[left] + numbers[right] === target) break;
  }
  return [left+1, right+1];
};