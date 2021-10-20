/**
 * @param {number} num
 * @return {boolean}
 */
 let isPerfectSquare = function(num) {
  let jud = Math.sqrt(num);
  return Number.isInteger(jud);
};