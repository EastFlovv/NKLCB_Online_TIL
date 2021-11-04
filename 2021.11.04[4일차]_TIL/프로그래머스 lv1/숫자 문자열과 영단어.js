// https://programmers.co.kr/learn/courses/30/lessons/81301
function solution(s) {
  let answer = 0;
  const arr = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

  let str = '';

  for(let i = 0; i < s.length; i++){
      if(Number(s[i]) <= 9) answer = answer*10 + Number(s[i]);
      else str += s[i];

      if(arr.includes(str)) {
          answer = answer * 10 + arr.indexOf(str);
          str = '';
      }
  }

  return answer;
}