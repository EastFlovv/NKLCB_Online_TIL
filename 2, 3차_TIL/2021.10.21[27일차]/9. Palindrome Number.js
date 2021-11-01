/**
 * @param {number} x
 * @return {boolean}
 */
 let isPalindrome = function(x) {
  let str = x.toString();
  let str2 = str.split('').reverse().join('');
  return str === str2;
};