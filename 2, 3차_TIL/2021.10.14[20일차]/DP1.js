// 거스름돈2
// https://programmers.co.kr/learn/courses/30/lessons/12907
function solution(n, money) {
  let dp = new Array(n + 1).fill(0);
  let answer = 0;
  dp[0] = 1;
  
  for(let coin of money){
      for(let price = coin; price <= n; price++){
          dp[price] += dp[price-coin];
      }
      console.log(coin);
      console.log(dp);
  }
  
  
  return dp[n] % 1000000007;
}