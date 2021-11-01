/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 let isIsomorphic = function(s, t) { // 양방향 검사 필요
  let answer = true;
  let hashTableS = {};
  let hashTableT = {};
  
  for(let i = 0; i < s.length; i++){
    if(hashTableS[s[i]] === undefined && hashTableT[t[i]] === undefined) {
      hashTableS[s[i]] = t[i];
      hashTableT[t[i]] = s[i];
    }
    else if(hashTableS[s[i]] !== t[i] || hashTableT[t[i]] !== s[i]) answer = false;
  }
  
  return answer;
};

console.log(isIsomorphic('foo', 'bar'))