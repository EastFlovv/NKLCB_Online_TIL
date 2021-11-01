/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 let isSubsequence = function(s, t) {
  let pointer1 = 0;
  let pointer2 = 0;
  
  let answer = true;
  
  while(true){
    if(pointer1 === s.length) break;
    if(pointer2 === t.length && pointer1 < s.length) {
      answer = false;
      break;
    }
    
    if(s[pointer1] === t[pointer2]){
      pointer1++;
      pointer2++;
    }else pointer2++;
  }
  return answer;
};