// https://programmers.co.kr/learn/courses/30/lessons/12899
function solution(n) {
  const answer = [];
  let num = n;
  
  while(num/3 > 0){
      // 나머지를 구함
      let weird = num % 3;
      // 나머지가 0이면 weird를 4로 지정하고 num을 1감소시킴
      if(weird === 0) {
        weird = 4;
        num -= 1;
      }
      answer.push(weird); // weird를 배열에 입력
      num = Math.floor(num/3); // num을 3으로 나누고 소수점을 버림
  }
  return answer.reverse().join(''); // 배열을 역순으로 문자열 출력  
}

// console.log(solution(3));
solution();