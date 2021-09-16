// 최댓값 성공출처
// 시간 제한	메모리 제한	제출	정답	맞은 사람	정답 비율
// 1 초	128 MB	113544	53581	46320	47.547%
// 문제
// 9개의 서로 다른 자연수가 주어질 때, 이들 중 최댓값을 찾고 그 최댓값이 몇 번째 수인지를 구하는 프로그램을 작성하시오.

// 예를 들어, 서로 다른 9개의 자연수

// 3, 29, 38, 12, 57, 74, 40, 85, 61

// 이 주어지면, 이들 중 최댓값은 85이고, 이 값은 8번째 수이다.

// 입력
// 첫째 줄부터 아홉 번째 줄까지 한 줄에 하나의 자연수가 주어진다. 주어지는 자연수는 100 보다 작다.

// 출력
// 첫째 줄에 최댓값을 출력하고, 둘째 줄에 최댓값이 몇 번째 수인지를 출력한다.

// 예제 입력 1 
// 3
// 29
// 38
// 12
// 57
// 74
// 40
// 85
// 61

const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().split('\n');
const input = fs.readFileSync('./ex.txt').toString().split('\n');

// fs형식의 입력은 이미 배열 형식으로 들어온다.

let max = Number(input[0]);
let idx = 0;
for (let i = 0; i < input.length; i++) {
  let now = Number(input[i]);
  if(max <= now){
    max = now;
    idx = i+1;
  }
}

console.log(max);
console.log(idx);
