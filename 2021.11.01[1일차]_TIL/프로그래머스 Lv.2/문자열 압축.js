// https://programmers.co.kr/learn/courses/30/lessons/60057#
function solution(s) {
  let answer = Number.MAX_SAFE_INTEGER;
  let shortStr = '';
  let str = '';
  let rep = 1;

  // 슬라이딩 윈도우의 크기 설정
  for (let i = 1; i <= s.length; i++) {
    // 슬라이딩 윈도우의 크기만큼 반복
    for (let j = 0; j < s.length; j += i) {
      // 문자열을 자를 시작 위치
      const start = j;
      const nowStr = s.substring(start, j+i);
      // 반복을 판단
      if(j !== 0){
        if (str === nowStr) rep++;
        else if (rep !== 1) { // 반복이 있으면 추가
          shortStr += rep + str;  
          rep = 1;
        } else {
          shortStr += str;
        }
        str = nowStr;
      }else str = nowStr;
    }
    // 마지막 윈도우
    if (rep !== 1) { // 반복이 있으면 추가
      shortStr += rep + str;
      rep = 1;
    } else {
      shortStr += str;
    }
    // console.log(shortStr);
    // 최소길이
    if (shortStr.length < answer) answer = shortStr.length;
    shortStr = '';
  }
  return answer;
}

solution("abcabcdede");

// console.log(solution("abcabcdede"));
// console.log(solution("aabbaccc"));
// console.log(solution("ababcdcdababcdcd"));
// console.log(solution("abcabcabcabcdededededede"));
// console.log(solution("xababcdcdababcdcd"));