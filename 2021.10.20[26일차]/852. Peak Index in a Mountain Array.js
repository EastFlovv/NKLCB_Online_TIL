/**
 * @param {number[]} arr
 * @return {number}
 */
 let peakIndexInMountainArray = function(arr) {
  let max = Math.max(...arr);
  return arr.indexOf(max);
};