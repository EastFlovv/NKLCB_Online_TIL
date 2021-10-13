
let MyStack = function() {
  this.array = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
  this.array.push(x);
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
  return this.array.pop();
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
  return this.array[this.array.length-1];
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
  return this.array.length === 0
};

/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */