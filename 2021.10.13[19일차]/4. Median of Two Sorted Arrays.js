// array 4번

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
 let findMedianSortedArrays = function(nums1, nums2) {
  let answer = 0;
  let arr = nums1.concat(nums2);
  arr.sort((x,y)=>x-y);
  
  // console.log(arr);
  
  if(arr.length%2 == 1) answer = arr[Math.floor(arr.length/2)];
  else {
    answer = (arr[arr.length/2] + arr[arr.length/2 -1])/2;
  }
  return answer;
};