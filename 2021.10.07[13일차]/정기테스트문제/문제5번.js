// 숫자세기
function solution(s){
  let answer = 0;
  let arr = new Array(10).fill(0); // 10의 길이를 가진 배열을 0으로 초기화

  for (let i = 0; i < s.length; i++) { // 문자열 전체탐색
    arr[Number(s[i])]++; // 수로 바꾼 arr인덱스 값을 1 올림
  }
  answer = arr.indexOf(Math.max(...arr)); // arr의 맥스값을 가진 요소의 인덱스를 answer에 넣음

  return answer; // answer반환
}
