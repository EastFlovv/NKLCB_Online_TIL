/**
 * @param {string} s
 * @return {boolean}
 */
 let validPalindrome = function(s) {
  let answer = true;
  let letters = s.split('');
  let left = 0;
  let right = letters.length-1;
  let del = false;
  while(left < right){
    if(letters[left] !== letters[right] && del === false){ // 대칭이 아닐경우
      // 각자 한칸씩 밀어서 비교
      if(letters[left] === letters[right-1]) {
        letters.splice(right-1, 1);
        del = true;
      }else if (letters[left+1] === letters[right]){
        letters.splice(left+1, 1);
        del = true;
      }// 삭제 했음에도 대칭아님
      else if(letters[left] !== letters[right] && del === true){
        answer = false;
        break;
      }
    }
    // 대칭이던 아니던 비교는 계속한다
    left++;
    right--; 
  }
  
  return answer;
};