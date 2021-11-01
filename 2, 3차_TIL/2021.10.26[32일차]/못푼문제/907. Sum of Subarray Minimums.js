/**
 * @param {number[]} arr
 * @return {number}
 */
 let sumSubarrayMins = function(arr) {
  
  let answer = 0;
  // 슬라이딩 방식
  let slide = 0;
  
  while(slide !== arr.length){ // 슬라이드가 arr.length와 같을때까지 반복 
    slide++;
    for(let i = 0; i + slide <= arr.length; i++){
      answer += Math.min(...(arr.slice(i, i+slide)));
    }
  }
  return answer%1000000007;;
};

sumSubarrayMins([3,1,2,4]); // 시간초과 코드