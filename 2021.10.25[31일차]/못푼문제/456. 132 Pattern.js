/**
 * @param {number[]} nums
 * @return {boolean}
 */
 let find132pattern = function(nums) {
  // 1, 3, 2패턴찾기 (크기순)
  // 객체배열이 들어온다
  
  // 조건문으로 풀기?
  // n+1. n+2가 n 보다 클때 n+1이 n+2보다 크면 true
  
 
  let answer = false;
  
  for(let i = 1; i < nums.length-1; i++){
    num1 = Math.min(...nums.slice(0, i));
    num2 = Math.max(...(nums.slice(i+1, nums.length).filter(el=>el<nums[i])));
    if(num1 < nums[i] && nums[i] > num2 && num1 < num2) {
      answer = true;
      break;
    }
  }
  
  
  return answer;
  
};

find132pattern([1,3,2,4,5,6,7,8,9,10]);