// 백준 5585번
function solution(n){
  let coin = [500, 100, 50, 10, 5, 1];
  let answer = 0;

  n = 1000 - n;
  for(let i = 0; i< coin.length; i++){
    while(n>=coin[i]){
      n -= coin[i];
      answer++;
    }
  }

  return answer;
}

console.log(solution(380))
console.log(solution(1))