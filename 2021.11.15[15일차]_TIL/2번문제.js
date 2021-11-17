// 각 배열의 가로로 n만큼의 숫자 더하기 (2중 for)
// 행렬 반전 (2중 map)
// 새 배열의 가로로 n만큼의 숫자 더하기 (2중 for)
// 최대값 구하기 (for)
// O(n^2) + O(n^2) + O(n^2) + O(n) = 3O(n^2) + O(n) =  O(n^2)

function solution(field, n) { // field: number[][], n: number
  let answer = 0;
  let newField = Array.from(Array(field.length), () => new Array(field[0].length - n + 1));

  // 가로로 합한 값 구하ㅠ기
  for (let y = 0; y < field.length; y++) {
    for (let x = 0; x <= field[y].length - n; x++) {
      newField[y][x] = field[y].slice(x, x + n).reduce((acc, curVal) => acc + curVal, 0);
    }
  }
  // console.log(newField);

  // 배열의 행렬을 교체
  newField = newField[0].map((col, i) => newField.map(row => row[i]));
  // console.log(newField);

  // 가로로 합한 값 구하기
  for (let y = 0; y < newField.length; y++) {
    for (let x = 0; x <= newField[y].length - n; x++) {
      newField[y][x] = newField[y].slice(x, x + n).reduce((acc, curVal) => acc + curVal, 0);
    }
  }
  // console.log(newField);

  // 최대값 구하기
  for (let i = 0; i < newField.length; i++) {
    const num = Math.max(...newField[i]);
    answer = num > answer ? num : answer;
  }
  return answer;
}

console.log(solution([
  [1, 0, 1],
  [0, 0, 1],
  [0, 1, 1]
], 2));
console.log(solution([
  [0, 0, 0, 1],
  [1, 1, 0, 0],
  [0, 1, 0, 0],
  [0, 0, 1, 0]
], 3));
console.log(solution([
  [1, 1, 0, 0, 1],
  [0, 1, 1, 0, 0],
  [1, 1, 0, 0, 0],
  [0, 1, 1, 0, 0],
  [1, 0, 1, 0, 0]
], 3));
console.log(solution([
  [0]
], 1));
console.log(solution([
  [1]
], 1));
console.log(solution([
  [0, 0, 0, 1, 1, 0, 0],
  [1, 1, 0, 0, 0, 1, 0],
  [1, 0, 1, 0, 0, 1, 0],
  [0, 1, 0, 1, 1, 1, 0]
], 3));