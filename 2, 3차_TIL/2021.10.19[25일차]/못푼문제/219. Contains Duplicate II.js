/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
 let containsNearbyDuplicate = function(nums, k) {
  let answer = false;
  let hashTable = {};
  for(let i = 0; i < nums.length; i++){
    
    if(hashTable[nums[i]] === undefined) hashTable[nums[i]] = i; // 값 : 인덱스
    else if(hashTable[nums[i]] !== undefined)
      if(i - hashTable[nums[i]] === k) answer = true;
  }
  return answer;
};

// wrong case : [1, 0, 1, 1], k = 1
// 값이 3개 이상이라면 어떻게 비교해야하는가?