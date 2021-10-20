/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
 let nextGreatestLetter = function(letters, target) {
  let left = 0;
  let right = letters.length-1;
  let mid = Math.floor((left + right)/2);
  
  while(true){
    if(letters[mid] < target) left = mid+1;
    if(letters[mid] >= target) right = mid;
    if(left === right) {
      if(letters[mid] <= target) mid++;
      if(mid === letters.length-1 && letters[mid] <= target) mid = 0; // 예외처리?
      break;
    }
    mid = Math.floor((left + right)/2);
  }
  return letters[mid];
};

console.log(nextGreatestLetter(["c","f","j"], "a"))
// 반례
// Input        ["e","e","e","e","e","e","n","n","n","n"], "e"
// Output       "e"
// Expected     "n"