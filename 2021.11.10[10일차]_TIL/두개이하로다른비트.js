// https://programmers.co.kr/learn/courses/30/lessons/77885
// 3중 for문은 시간초과가 발생
function minNumberDiffUnder2bits(numbers) { // numbers는 숫자 배열
  const answer = new Array(numbers.length).fill(0);
  const binary = numbers.map(num => num.toString(2).split(''));

  // 입력값이 2^n보다 작다면 n을 삽입 (1의 경우는 1을 명시적으로 삽입)
  const nextBinaryJump = numbers.map(num => {
    // 1은 예외처리
    if(num === 1) return 1;
    // 지수를 구해서 넣는다
    let indice = 0;
    while (2 ** indice < num) indice++;
    return 2 ** (indice-1);
  });

  // 바이너리를 순회
  binary.forEach((el, idx) => {
    // 맨끝
    let tail = el.length - 1;
    // 변경여부
    let change = false;
    if (!+el[tail]) { // tail이 0이라면 (case: 00 , 10) 1을 더함
      el[tail] = '1';
      change = true;
    } else { // el[tail]이 0이 아닐때
      while (tail > 0) { // tail이 0이 될때까지 진행
        if (el[tail] !== el[tail - 1]) { // 0 1이면 서로 교체하고 break;
          [el[tail], el[tail - 1]] = [el[tail - 1], el[tail]];
          change = true;
          break;
        }
        tail--; // tail을 감소
      }
    }
    // 모든 수가 1일땐 el + 2^n(현재값 지수)
    answer[idx] = change ? parseInt(el.join(''), 2) : parseInt(el.join(''), 2) + nextBinaryJump[idx];
  });
  return answer; // answer배열 반환
}

// let arr = [1, 5, 7, 15];
const arr = [1,2,3,7,11,15,16,17,18,19,20];
// let arr = [2, 3, 4];
// console.log(arr);
console.log(minNumberDiffUnder2bits(arr));