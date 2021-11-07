function solution(name) {
  const leng = name.length;
  const horizCheck = new Array(leng);
  let cur = 0;
  let move = 0;

  // 조이스틱 상하 움직임 계산 & 좌우 이동을 위한 배열생성
  for(let i = 0; i < name.length; i++){
    move +=  (name.charCodeAt(i) - 65) <= 13 ? name.charCodeAt(i) - 65 : 26 - (name.charCodeAt(i) - 65);
    horizCheck[i] = i ? !(name.charCodeAt(i) - 65) : true;
  }

  // horizCheck에 false가 있으면 반복
  while(horizCheck.includes(false)){
    // 우측 좌측 움직임을 위한 변수 초기환
    let left = 0;
    let right = 0;
    let Lcheck;
    let Rcheck;

    while(true){
      // 우측을 증가
      right++;
      // (현재 커서 + 이동거리) % 전체길이가 false라면
      Rcheck = (cur + right) % leng;
      if(!horizCheck[Rcheck]){
        // 이동거리 업데이트
        move += right;
        // 커서를 바꾸고
        cur = Rcheck;
        // 현재 위치를 true로 바꿈
        horizCheck[cur] = true;
        // 탈출
        break;
      }
      // 좌측을 증가
      left++;
      // 마이너스로 넘어갔을 경우
      Lcheck = (cur - left) % leng < 0 ? leng + (cur - left) % leng : (cur - left) % leng;
      if(!horizCheck[Lcheck]){
        // 이동거리 업데이트
        move += left;
        // 커서를 바꾸고
        cur = Lcheck
        // 현재 위치를 true로 바꿈
        horizCheck[cur] = true;
        // 탈출
        break;
      }
    }
  }
  // 조이스틱 움직임 최소 횟수 반환
  return move;
}

console.log(solution("JAZ"));
console.log(solution("JEROEN"));
console.log(solution("JAN"));