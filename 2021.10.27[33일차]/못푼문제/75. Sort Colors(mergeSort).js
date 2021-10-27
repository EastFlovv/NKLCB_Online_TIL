/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

function merge(left, right){
  let arr = [];
  while(left.length !== 0 && right.length !== 0){
    left[0] > right[0] ? arr.push(right.shift()) : arr.push(left.shift());
  }
  if(left.length === 0) arr.push(...right);
  else arr.push(...left);
  return arr;
}

 function mergeSort(arr){
  // 종료조건
  if(arr.length === 1){
    return arr;
  }
  
  // 분할
  let left = mergeSort(arr.splice(0, arr.length/2));
  let right = mergeSort(arr);
  
  return arr = merge(left, right);
}


let sortColors = function(nums) {
  // 내부 라이브러리를 사용하지 않고 수를 정렬
  
  nums = mergeSort(nums);
  return nums;
};

console.log(sortColors([2,0,2,1,1,0]));