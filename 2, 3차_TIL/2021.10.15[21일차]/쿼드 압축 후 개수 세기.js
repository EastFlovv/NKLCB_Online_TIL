// https://programmers.co.kr/learn/courses/30/lessons/68936?language=javascript

function dac(answer, arr, n, x, y){
  let count = [0, 0]; //0과 1의 갯수
  for(let j = y; j < y + n; j++){ // n번 만큼의 순회
      for(let i = x; i < x + n; i++){ // n번 만큼 순회
          count[arr[j][i]]++; // 자기 수에 맞게 수를 올림
      }
  }
  if(count[0]===0){ // 1로 압축 가능할때
      answer[1]++;
      return;
  }
  if(count[1]===0){ // 0으로 압축 가능할때
      answer[0]++;
      return;
  }
  // 재귀로 분할정복
  dac(answer, arr, Math.floor(n/2), x, y);
  dac(answer, arr, Math.floor(n/2), x + Math.floor(n/2), y);
  dac(answer, arr, Math.floor(n/2), x, y + Math.floor(n/2));
  dac(answer, arr, Math.floor(n/2), x + Math.floor(n/2), y + Math.floor(n/2));
}

function solution(arr) {
  let answer = [0, 0];
  
  dac(answer, arr, arr.length, 0, 0);
  
  return answer;
}