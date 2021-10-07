// 문자열 계산식
function solution(s){
  let answer = 0;
  let now = '';
  for (let i = 0; i < s.length; i++) {
    if(now == ''){ // now가 비어있다면
      now += s[i]; // now에 현재 값을 추가
    }else if (s[i] == '-' || s[i] == '+'){ // 덧셈이나 뺄셈이면
      answer += Number(now); // 지금까지 모은 now를 answer에 Number타입을 전환시켜 전달
      now = s[i]; // now는 새 부호로 초기화
    }else{ // 그외는 더한다
      now += s[i];
    }
  } // 반복이 끝나면 모은 값을 answer로 반환
  answer += Number(now);
  return answer; // 출력
}
