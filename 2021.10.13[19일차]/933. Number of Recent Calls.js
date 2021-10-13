
let RecentCounter = function() {
  this.array = [];
};

/** 
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function(t) {
  this.array.push(t);
  for (let i = 0; i < this.array.length; i++) {
    if(this.array[i] < t-3000) this.array[i] = null;
  }
  
  let answer = this.array.filter(el => el !== null);
  return answer.length;
};

/** 
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */

let recent = new RecentCounter();
console.log(recent.ping(1));
console.log(recent.ping(100));
console.log(recent.ping(3001));
console.log(recent.ping(3002));