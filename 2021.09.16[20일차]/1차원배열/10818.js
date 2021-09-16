// 최소, 최대 성공
// 시간 제한	메모리 제한	제출	정답	맞은 사람	정답 비율
// 1 초	256 MB	147456	63298	49658	43.232%
// 문제
// N개의 정수가 주어진다. 이때, 최솟값과 최댓값을 구하는 프로그램을 작성하시오.

// 입력
// 첫째 줄에 정수의 개수 N (1 ≤ N ≤ 1,000,000)이 주어진다. 둘째 줄에는 N개의 정수를 공백으로 구분해서 주어진다. 모든 정수는 -1,000,000보다 크거나 같고, 1,000,000보다 작거나 같은 정수이다.

// 출력
// 첫째 줄에 주어진 정수 N개의 최솟값과 최댓값을 공백으로 구분해 출력한다.

// 예제 입력 1 
// 5
// 20 10 35 30 7
// 예제 출력 1 
// 7 35

const fs = require('fs'); 
// const input = fs.readFileSync('/dev/stdin').toString().split('\n');
const input = fs.readFileSync('./ex.txt').toString().split('\n');

let num = Number(input[0]);
let max = -1000000;
let min = 1000000;
let data = input[1].split(' ');

for (let i = 0; i < num; i++) {
  let now = Number(data[i]);
    if(now >= max)
      max = now;
    if(now <= min)
      min = now;
}

console.log(`${min} ${max}`);