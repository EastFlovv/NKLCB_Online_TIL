/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
 let intersect = function(nums1, nums2) {
  let answer = [];
  for(let i = 0; i < nums1.length; i++){
    if(nums2.includes(nums1[i])) {
      answer.push(nums1[i]);
      delete nums2[nums2.indexOf(nums1[i])];
    }
  }
  return answer;
};