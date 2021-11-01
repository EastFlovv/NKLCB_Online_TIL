/**
 * @param {number} n
 * @return {boolean}
 */
 let isHappy = function(n) {
  let answer = true;
  let hashTable = {};
  let key = n;
  
  while(true){
    let value = 0;
    let nums = key.toString().split('');
    for(let i = 0; i < nums.length; i++){
      value += Math.pow(Number(nums[i]), 2);
    }
    // true
    if(value === 1) break;
    // false
    if(hashTable[key]) {
      answer = false;
      break;
    }
    hashTable[key] = value;
    key = value;
  }
  return answer;
};

console.log(isHappy(19));