/**
 * @param {number} n
 * @return {number}
 */
 let arrangeCoins = function(n) {
  let ans = 0;
  let sum = 0;
  while(true){
    sum += ans;
    if(sum === n) break;
    if(sum > n){
      ans--;
      break;
    }
    ans++;
    
  }
  return ans;
};