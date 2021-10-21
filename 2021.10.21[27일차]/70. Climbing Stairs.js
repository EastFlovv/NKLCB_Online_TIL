/**
 * @param {number} n
 * @return {number}
 */
// 피보나치 형식을 띄고 있다 // 왜?
let climbStairs = function(n) {
  let d = new Array(n+1).fill(0);
  d[0] = 1;
  d[1] = 1;
  for(let i = 1; i <= n; i++){
    d[i] = d[i-1] + d[i-2];
  };
  return d[n];
};

console.log(climbStairs(5));