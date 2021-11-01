// 연속된 수의 합 갯수
function solution(n){
  let answer = 0;
  for (let i = 1; i <= n; i++) { //자연수이므로 1로 스타트
    let now = i; // 초기화
    if(i == n){ //본인 자체일 경우
      answer++; // 경우의 수 증가
    }else{ // 그외에
      for (let j = i+1; j < n; j++) {
        now += j; // 연속된 수를 더함
        if(now == n){ // 타겟을 now가 만족하면
          answer++; // 경우의 수 증가
          break;
        }
        if(now > n){ // now가 타겟값보다 크다면 진행할 필요 없다 break
          break;
        }
      }
    }
  }

  return answer;
}
