// X보다 작은 수 성공
// 시간 제한	메모리 제한	제출	정답	맞은 사람	정답 비율
// 1 초	256 MB	138131	75705	63379	55.353%
// 문제
// 정수 N개로 이루어진 수열 A와 정수 X가 주어진다. 이때, A에서 X보다 작은 수를 모두 출력하는 프로그램을 작성하시오.

// 입력
// 첫째 줄에 N과 X가 주어진다. (1 ≤ N, X ≤ 10,000)

// 둘째 줄에 수열 A를 이루는 정수 N개가 주어진다. 주어지는 정수는 모두 1보다 크거나 같고, 10,000보다 작거나 같은 정수이다.

// 출력
// X보다 작은 수를 입력받은 순서대로 공백으로 구분해 출력한다. X보다 작은 수는 적어도 하나 존재한다.

// 예제 입력 1 
// 10 5
// 1 10 4 9 2 3 8 5 7 6
// 예제 출력 1 
// 1 4 2 3

const fs = require('fs'); 
// const input = fs.readFileSync('/dev/stdin').toString().split('\n');
const input = fs.readFileSync('./ex.txt').toString().split('\n');

let question = input[0].split(' ');
let testcase = input[1].split(' ');

let num1 = Number(question[0]);
let num2 = Number(question[1]);
let str = '';

for (let i = 0; i < num1; i++) {
  if(testcase[i] < num2)
    str += `${testcase[i]} `;
}

console.log(str);