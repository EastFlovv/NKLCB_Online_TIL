// https://programmers.co.kr/learn/courses/30/lessons/17679
// 삭제 목록을 추출
function check(h, w, arr){
  const flag = arr[h][w];
  if(flag){ // 플래그가 0이 아니면
    return flag === arr[h+1][w] && flag === arr[h][w+1] && flag === arr[h+1][w+1];
  }
}

// 삭제
function del(pos, brd){
  brd[pos[0]][pos[1]] = 0;
  brd[pos[0]+1][pos[1]] = 0;
  brd[pos[0]][pos[1]+1] = 0;
  brd[pos[0]+1][pos[1]+1] = 0;
}

// 블록을 다시 쌓는다
function reStack(h, w, arr){
  let res = arr[h][w];
  if(res || h === 0){ // res가 0이 아니거나 h 가 0이 됬을때 멈춤
    arr[h][w] = 0;
    return res;
  }
  res = reStack(--h, w, arr);
  return res
}

function solution(m, n, board) {
  let answer = 0;

  // 이차원 배열 만들기
  const brd = [];
  board.forEach(el => {
    brd.push(el.split(''));
  });


  while(true){
    // 삭제 목록을 만듦
  const delPosition = [];
  for(let i = 0; i < m-1; i++){
      for(let j = 0; j < n-1; j++){
          if(check(i, j, brd)) delPosition.push([i,j]);
      }
  }

  if(!delPosition.length) break; // 삭제 할 값이 없으면 멈춘다.

  // 삭제
  while(delPosition.length){
    const pos = delPosition.pop();
    del(pos, brd);
  }
  // console.log(brd);
  
  // 채우기, 밑에서 부터 검사
  for(let i = m-1; i >= 0; i--){
    for(let j = 0; j < n; j++){
      // 0을 만나면 위를 검사해서 바꿈
      if(!brd[i][j]) {
        brd[i][j] = reStack(i, j, brd);
      }
    }
  }
  // console.log(brd);
  // 위 과정을 반복
  }

  // 0의 갯수를 센다
  brd.forEach(el=>{
    el.forEach(elmt => {
      if(!elmt) answer++;
    })
  })

  return answer;
}

console.log(solution(6, 6, ["TTTANT", "RRFACC", "RRRFCC", "TRRRAA", "TTMMMF", "TMMTTJ"]));

// TTTANT
// RRFACC
// RRRFCC
// TRRRAA
// TTMMMF
// TMMTTJ