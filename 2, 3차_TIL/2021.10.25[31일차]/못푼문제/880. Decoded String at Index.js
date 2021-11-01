/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
 let decodeAtIndex = function(s, k) {
  let answer = '';
  let str = '';
  let stack = [];
  for(let i = 0; i < s.length; i++){
    if(isNaN(Number(s[i]))) str += s[i];
    else {
      str = str.repeat(Number(s[i]));
      // console.log(str);
    }
    if(str.length > k) { // 지나친 입출력예외조건 : 으로도 매우 큰 수는 해결치 못했다 (예제만 통과)
      answer = str[k-1];
      break;
    }
  }
  answer = str[k-1];
  return answer;
};