// 나무 문제
function solution(fruits){
  //인덱스 반환은 필요없기떄문에 그냥 이중for문을 돌린다
  let answer = Number.MIN_SAFE_INTEGER; // 정답는 최소 음수로 초기화
  for (let i = 0; i < fruits.length; i++) {
    let now = fruits[i]; // 기준
    for (let j = i+1; j < fruits.length; j++) {
      now += fruits[j]; //연속된 값을 더함
      if(now > answer){ //최대값을 갱신
        answer = now;
      }
    }
  }
  // 반환
  return answer;
}

