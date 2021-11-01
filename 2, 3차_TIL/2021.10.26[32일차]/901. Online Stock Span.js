
let StockSpanner = function() {
  this.stack = new Array();
};

/** 
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function(price) {
  let span = 0;
  this.stack.push(price);
  this.stack.forEach((el)=>{
    if(el <= price) span++;
    else if(el > price) span = 0;
  });
  return span;
};

/** 
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */