/**
 * @param {number[]} prices
 * @return {number}
 */
 let maxProfit = function(prices) {
  let buy = Number.MAX_SAFE_INTEGER;
  let sell = 0;
  let max = 0;
  let profit = [];
  for(let i = 0; i < prices.length; i++){
    if(prices[i] > sell) sell = prices[i];
    if(prices[i] < buy) {
      buy = prices[i];
      sell = 0;
      max = 0;
    }
    profit.push(sell-buy);
  }
  return Math.max(...profit) > 0 ? Math.max(...profit) : 0;
};