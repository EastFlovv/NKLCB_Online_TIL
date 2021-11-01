/**
 * @param {number[]} height
 * @return {number}
 */
 let maxArea = function(height) {
  let max = 0;
  let left = 0, right = height.length-1;
  
  while(left < right){
    // 높이
    let h = height[left] <= height[right] ? height[left] : height[right];
    // 넓이
    let now = h * (right-left);
    // 최대값 갱신
    if (now > max) max = now;
    // 인덱스 이동
    if(height[left] <= height[right]) left++;
    else right--;
  }
  
  return max;
};

console.log(maxArea([1,8,6,2,5,4,8,3,7]));