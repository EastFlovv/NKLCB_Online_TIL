/**
 * @param {number[]} arr
 * @return {number}
 */

// 모노 스택 반례 [1,2,3,10,0,7,8,9]

 let findLengthOfShortestSubarray = function(arr) {
  let answer = 0;
  let stack = [];
  
  for(let i = 0; i < arr.length; i++){
    if(stack.length === 0) stack.push(arr[i]);
    else if (stack[stack.length-1] > arr[i]){
      while(stack[stack.length-1] > arr[i]){
        stack.pop();
        answer++;
      }
      stack.push(arr[i]);
    }else stack.push(arr[i]);
    
  }
  return answer;
};

findLengthOfShortestSubarray([1,2,3,10,4,2,3,5]);
findLengthOfShortestSubarray([5,4,3,2,1]);
// findLengthOfShortestSubarray([1,2,3,10,0,7,8,9]); 반례 expected = 2 output = 4