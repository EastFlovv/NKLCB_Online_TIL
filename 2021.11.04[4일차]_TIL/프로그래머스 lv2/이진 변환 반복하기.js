// https://programmers.co.kr/learn/courses/30/lessons/70129
function solution(s) {
  // [이진변환 횟수, 제거된 0의 갯수]
  const answer = [0, 0];

  let str = s;
  // 마지막은 항상 1이다.
  while (str.length > 1) {
    // 1의 갯수 초기화
    let countOne = 0;
    // 문자열은 이터레이터 for... of
    for (const el of str) {
      // 1의 갯수 세기
      if (el == '1') countOne++;
    }
    // 전체 길이에서 1의 갯수만큼 뺀 값 => 0의 갯수
    answer[1] += str.length - countOne;
    // 1의 갯수를 이진수로 변환하여 재할당
    str = countOne.toString(2)
    // 변환 횟수 증가
    answer[0]++;

  }

  return answer;
}