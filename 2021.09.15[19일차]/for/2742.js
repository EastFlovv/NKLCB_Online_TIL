// 기찍 N 성공
// 시간 제한	메모리 제한	제출	정답	맞은 사람	정답 비율
// 1 초	128 MB	120952	81380	72513	68.282%
// 문제
// 자연수 N이 주어졌을 때, N부터 1까지 한 줄에 하나씩 출력하는 프로그램을 작성하시오.

// 입력
// 첫째 줄에 100,000보다 작거나 같은 자연수 N이 주어진다.

// 출력
// 첫째 줄부터 N번째 줄 까지 차례대로 출력한다.

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');
// const input = fs.readFileSync('./ex.txt').toString().split('\n');

let num = Number(input[0]);
let answer ='';
for (let i = num; i > 0; i--) { 
  answer += (i) + '\n';
}

console.log(answer);