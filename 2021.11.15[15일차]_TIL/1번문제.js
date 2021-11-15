// 건물이 감염상태인지 아닌지 검사
// 비감염 : true false자유변환, 아무런 동작없음
// 감염자가 입장 : 건물의 true를 모두 set으로 넣는다.
// 감염상태에서의 출입은 모두 set으로 넣는다.

function solution(history, infected) { // history = number [], infected = number
  // 동선이 겹친 사람을 저장하는 suspect
  const suspect = new Set();
  // 건물내의 사람을 표시하는 building
  const building = new Array(Math.max(...history) + 1).fill(false);
  // 출입기록을 모두 양수로 바꾼 배열
  const positiveHistory = history.map(el => el < 0 ? -1 * el : el);

  // 모든 출입기록을 조사
  for (const man of positiveHistory) {
    if (building[infected]) { // 현재 건물에 감염자가 있는가?
      if (man === infected) building[infected] = !building[infected]; // 현재 출입기록이 감염자라면 건물을 감염상태에서 해제한다
      else suspect.add(man); // 아니라면 현재 출입하는 사람을 suspect로 add
    } else if (man === infected) { // 현재 출입하는 사람이 감염자인가?
      building[infected] = !building[infected]; // 건물을 감염상태로 변경
      building.forEach((el, idx) => { // 현재 건물에 체류중인 인원을 전부 suspect로 add
        if (el) suspect.add(idx);
      });
    } else building[man] = !building[man]; // 건물이 감염되지 않고 출입하면 출입 기록만 변경
  }

  // set에서 감염자를 제거한뒤 정렬해서 배열로 반환
  return [...suspect].filter(el => el !== infected).sort((x, y) => x - y);
}

console.log(solution([3, 2, -3, 1, -1, -2, 4, -4, 1, -1], 2));
console.log(solution([2, 4, 3, -3, 3, -2, 1, -3, -1, -4], 4));
console.log(solution([1, -1], 1));
console.log(solution([7, -7, 2, 5, 1, 4, 9, -9, -2, 3, -1, -5, 6, 10, -10, 7, -4, -6, 8, -7, 4, -3, 3, -8, -3, -4], 1));
console.log(solution([10, 2, 14, 12, 13, 6, 9, -14, 4, 1, 11, 8, -10, 15, -11, -4, 3, -2, -15, -13, 7, 2, -7, 5, 7, -7, -2, -8, -3, -5, -6, -15, 5, -9, -5, -1], 3));
console.log(solution([18, 12, 13, 11, 6, 15, -6, 19, 7, 5, 17, -5, -13, -11, 14, 2, -19, 16, -17, -16, 3, 9, 19, -7, -15, 20, 10, -14, -10, -18, -2, -19, 8, -9, -8, 4, -20, -4, -12, -3, 1, -1], 16));