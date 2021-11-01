/**
 * @param {number} n
 * @return {number}
 */
 let fib = function(n) {
  let answer = new Array(n+1).fill(0);
  for(let i = 1; i <= n; i++){
    if(i <= 2) answer[i] = 1;
    else answer[i] = answer[i-1] + answer[i-2];
  }
  return answer[n];
};