/**
 * @param {string} s
 * @return {number}
 */

// 두자리 이상의 수에서 계산 불가 -> 나중에 다시풀기
let calculate = function(s) {
  let stack = [];
  // 계산식에서 공백 제거
  s = s.split('').filter(el => el !== ' ').join('');
  
  // 나눗셈 곱셈 계산
  for(let i = 0; i < s.length; i++){
    if(s[i] === "*") stack.push(Number(stack.pop()) * Number(s[++i]));
    else if(s[i] === "/") stack.push(parseInt(Number(stack.pop()) / Number(s[++i])));
    else stack.push(s[i]);
  }
  
  
  // 남은 배열을 다시 문자열로 (스택만 써보기)
  s = stack.join('');
  stack = [];
  // 덧셈 뺄셈 계산
 for(let i = 0; i < s.length; i++){
    if(s[i] === "+") stack.push(Number(stack.pop()) + Number(s[++i]));
    else if(s[i] === "-") stack.push(Number(stack.pop()) - Number(s[++i]));
    else stack.push(s[i]);
  }
  
  return Number(stack.join(''));
};