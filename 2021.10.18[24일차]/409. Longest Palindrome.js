/**
 * @param {string} s
 * @return {number}
 */
 let longestPalindrome = function(s) {
  // key-value 저장
  // 짝수 -> 모두 반환
  // 홀수는 한개만
  
  let letters = s.split('');
  let obj = {};
  let answer = 0;
  let odd = false;
  
  for(let i = 0; i < letters.length; i++){
    if(obj[letters[i]] === undefined) obj[letters[i]] = 1;
    else obj[letters[i]]++;
  }
  
  // console.log(obj);
  
  for(const key in obj){
    if(obj[key] % 2 == 0) answer += obj[key];
    else {
      answer += (obj[key]-1);
      odd = true;
    }
  }
  
  if(odd) answer++;
  return answer;
};