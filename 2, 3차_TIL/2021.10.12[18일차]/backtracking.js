// 프로그래머스 43165
// 타겟넘버

// 테스트 1 〉	통과 (15.01ms, 32.7MB)  // 테스트 1 〉	통과 (32.01ms, 32.8MB)
// 테스트 2 〉	통과 (14.51ms, 32MB)    // 테스트 2 〉	통과 (31.18ms, 33MB)
// 테스트 3 〉	통과 (0.21ms, 30.4MB)   // 테스트 3 〉	통과 (0.49ms, 30MB)
// 테스트 4 〉	통과 (1.33ms, 32.1MB)   // 테스트 4 〉	통과 (1.59ms, 32.9MB)
// 테스트 5 〉	통과 (2.30ms, 31.9MB)   // 테스트 5 〉	통과 (4.49ms, 33.1MB)
// 테스트 6 〉	통과 (0.37ms, 30.3MB)   // 테스트 6 〉	통과 (0.51ms, 30.3MB)
// 테스트 7 〉	통과 (0.20ms, 30.4MB)   // 테스트 7 〉	통과 (0.41ms, 30.1MB)
// 테스트 8 〉	통과 (2.04ms, 31.8MB)   // 테스트 8 〉	통과 (2.41ms, 32.8MB)
// 나는 시간이 오히려 2배로 증가함: 왜?


function dfs(numbers, target, sums, index, total){
  let count = 0;
  // 종료 조건
  if(numbers.length === index){
      return total === target ? 1 : 0;
  }
  
  //백트래킹
  if (target > total && target > total + sums[index] || 
      target < total && target < total - sums[index])
      return 0;
  
  // 재귀 수행
  count+= dfs(numbers, target, sums, index+1, total+numbers[index]);
  count+= dfs(numbers, target, sums, index+1, total-numbers[index]);
  return count;
}

function solution(numbers, target) {
  // 백트래킹을 위한 코드
  let sums = new Array(numbers.length);
  let sum = 0;
  for(let i = numbers.length; i >= 0; i--){
      sum += numbers[i];
      sums[i] = sum;
  }
  
  return dfs(numbers, target, sums, 0, 0);
}