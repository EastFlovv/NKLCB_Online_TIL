// https://programmers.co.kr/learn/courses/30/lessons/62048
function solution(w, h) {
  let answer = 0;
  
  // 기울기로 접근 했었으나 실패, 솔루션을 찾아보니 최대 공약수를 이용해서 푸는 문제였다.
  // 본인의 수학적 소양이 얕아 풀지 못한 문제
  let x = w; let y = h;
  let t = 0;
  // 유클리드 호제법 (최대 공약수 알고리즘)
  while(y) {
      t = y;
      y = x % y;
      x = t;
  }
  // 삭제되는 사각형의 수
  const delSquare = w + h - t;
  // 답
  answer = w*h-delSquare;
  return answer;
}

solution(8, 12);