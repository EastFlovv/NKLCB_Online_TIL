// https://programmers.co.kr/learn/courses/30/lessons/12973
function solution(s){
  // const answer = -1;
  const stack = [];
  // 스택문제
  for(let i = 0; i < s.length; i++){
      if(stack[stack.length-1] === s[i]){
          stack.pop();
      }else stack.push(s[i]);
  }

  return stack.length === 0 ? 1 : 0;
}

solution();