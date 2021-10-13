let lengthOfLongestSubstring = function(s) {
  let start = 0;
  let end = 0;
  let now = 0;
  let max = 0;
  let ch = {};
  
  while(end < s.length){
    
    if(!ch.hasOwnProperty(s[end])) { // ch에 현재 글자가 없으면
      ch[s[end]] = end; // 새로운 키밸류
      now = end-start+1;
    if(now > max) max = now;
    }else{ // 글자가 있으면
      start = ch[s[end]];
      ch[s[end]] = end;
    }
    end++; //end 1칸 이동
  }
  return max;
};

console.log(lengthOfLongestSubstring("aaa"));
console.log(lengthOfLongestSubstring("abcabcbb"));
console.log(lengthOfLongestSubstring("bbbbb"));
console.log(lengthOfLongestSubstring("pwwkew"));
console.log(lengthOfLongestSubstring("dvdf"));
console.log(lengthOfLongestSubstring("tmmzuxt"));
