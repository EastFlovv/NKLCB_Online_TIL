// https://programmers.co.kr/learn/courses/30/lessons/42895?language=javascript

function solution(N, number) {
  const s = new Array(9).fill(0).map(()=> new Set()); // N: 1~9
  
  for(let i = 1; i < 9; i++){
      s[i].add(Number("".padStart(i, N))); // n = 1 -> 5, n =2 -> 55 ... ""를 지우고 i를 N번 반복하여 채운다
      
      for(let j = 1; j < i; j++){
          for(const arg1 of s[j]){
              for(const arg2 of s[i - j]){ // 기존 값에 사칙연산을 한다
                  s[i].add(arg1 + arg2);
                  s[i].add(arg1 - arg2);
                  s[i].add(arg1 * arg2);
                  s[i].add(Math.floor(arg1 / arg2)); // 나머지 무시
              }
          }
      }
      if(s[i].has(number)) return i;
  }
  
  
  return -1;
}