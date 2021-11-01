/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	            -1 if num is lower than the guess number
 *			             1 if num is higher than the guess number
 *                       otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
 let guessNumber = function(n) {
  let left = 1;
  let right = n;
  let mid = Math.floor((left + right)/2);
  
  while(true){
    if(guess(mid) === 0) break;
    else if(guess(mid) === 1) right = mid;
    else if(guess(mid) === -1) left = mid+1;
    mid = Math.floor((left + right)/2);
  }
  return mid;
};

function guess(mid){
  if(mid > 2) return 1;
  if(mid < 2) return -1;
  if(mid == 2) return 0;
}

console.log(guessNumber(2));