// 분할정복, 재귀
function star(n, mat, x, y) {
  //종료조건
  if(n==1) {
    mat[y][x] = "*";
    return;
  }

  let size = Math.floor(n/3); // 3^n -> 3^(n-1)

  for (let j = 0; j < 3; j++) {
    for (let i = 0; i < 3; i++) {
      if(i == 1 && j == 1) continue; // 안찍는 조건 (해당 섹션을 통채로 스킵)
      // 별찍기
      star(size, mat, x+i*size, y+j*size);
    }
  }
}
function solution(n){
  // 배열선언
  let mat = new Array(n).fill(0).map(()=>new Array(n).fill(" "));
  // 재귀
  star(n, mat, 0, 0);
  for (let i = 0; i < n; i++) {
    console.log(mat[i].join(""));
  }

};

solution(27);