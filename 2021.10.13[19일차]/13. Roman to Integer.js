/**
 * @param {string} s
 * @return {number}
 */
 let romanToInt = function(s) {
  let answer = 0;
  let hash = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000,
  };
  
  let unNormal = ['CM', "CD", "XC", 'XL', "IX", "IV"];
  
  for(let i = 0; i < s.length; i++){
    if(unNormal.includes(s[i]+s[i+1])){
       answer = answer + hash[s[i]]*-1;  
    }else {
      answer += hash[s[i]];
    }
  }
  return answer;
};

