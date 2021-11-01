// https://programmers.co.kr/learn/courses/30/lessons/12952?language=javascript

// Q = (row = 1, col = 0)
// col = 1, row = 3
// 1, 2 (1,1 or 2,2 처럼 동일값일 경우 같은 대각선상에 있음)
function isPossible(arr, row, col){ // 조건을 만족하지 않으면 진행 안함 (백트래킹)
  for(let c = 0; c < col; c++){
      if(arr[c] === row) return false; // 세로 판단
      if(Math.abs(c-col) === Math.abs(arr[c] - row)) return false; // 대각선 판단
  }
  return true; // 두 요건 통과시 true
}

function dfs(n, arr, col){
  if(col === n) return 1;
  
  let ret = 0;
  for(let row = 0; row < n; row++){ // 각 행마다 하나씩 놓아봄
      if(isPossible(arr, row, col)){ // 놓을 수 있는 공간이면
          arr[col] = row; // arr[col]에 Queen을 둔다
          ret += dfs(n, arr, col+1); // 깊이 탐색 진행
      }
  }
  return ret;
}

function solution(n) {
  return dfs(n, [], 0);
}