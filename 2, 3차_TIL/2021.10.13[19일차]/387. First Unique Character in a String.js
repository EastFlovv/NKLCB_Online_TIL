/**
 * @param {string} s
 * @return {number}
 */
 let firstUniqChar = function(s) {
  let answer = -1;
  let hash = {};
  for(let i = 0; i < s.length; i++){
    if(hash[s[i]] === undefined) hash[s[i]] = 1;
    else hash[s[i]] += 1;
  };
  
  for(let i = 0; i < s.length; i++){
    if(hash[s[i]] === 1){
      answer = i;
      break;
    }
  };
  return answer;
};