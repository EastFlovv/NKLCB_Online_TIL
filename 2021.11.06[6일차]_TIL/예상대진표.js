// 지수 구하기
function indice(num){
  let i = 0;
  while((2 ** i) < num){
    i++;
    if((2 ** i) === num) return i;
  }
  return i;
}

function solution(n,a,b){
  // 큰 수를 b로
  if(a > b) [a, b] = [b, a];
  let aIndice = 0;
  let bIndice = 0;
  // 지수가 다르면 큰쪽을 반환 
  // 같으면 같은 지수범위에 있으므로 두 수를 1부터 놓는 방식으로 해결
  do{
    aIndice = indice(a);
    bIndice = indice(b);
    a -= 2 **(aIndice-1);
    b -= 2 **(aIndice-1);
  }while(aIndice === bIndice)

  return bIndice;
}

console.log(solution(8, 5, 8));