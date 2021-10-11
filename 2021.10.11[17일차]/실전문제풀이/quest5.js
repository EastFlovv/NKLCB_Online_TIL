// 타겟 넘버
// https://programmers.co.kr/learn/courses/30/lessons/43165?language=javascript#
function dfs(numbers, target, index, total){
  let count = 0;
  // 종료 조건
  if(numbers.length === index){
      return total === target ? 1 : 0;
      
  }
  
  // 재귀 수행
  count+= dfs(numbers, target, index+1, total+numbers[index]);
  count+= dfs(numbers, target, index+1, total-numbers[index]);
  return count;
}

function solution(numbers, target) {
  let answer = 0;
  
  return dfs(numbers, target, 0, 0);
}