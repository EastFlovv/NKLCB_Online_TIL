// A+B - 4 성공
// 시간 제한	메모리 제한	제출	정답	맞은 사람	정답 비율
// 1 초	256 MB	163992	57409	48901	35.693%
// 문제
// 두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.

// 입력
// 입력은 여러 개의 테스트 케이스로 이루어져 있다.

// 각 테스트 케이스는 한 줄로 이루어져 있으며, 각 줄에 A와 B가 주어진다. (0 < A, B < 10)

// 출력
// 각 테스트 케이스마다 A+B를 출력한다.

// 예제 입력 1 
// 1 1
// 2 3
// 3 4
// 9 8
// 5 2
// 예제 출력 1 
// 2
// 5
// 7
// 17
// 7

const fs = require('fs'); 
// const input = fs.readFileSync('/dev/stdin').toString().split('\n');
const input = fs.readFileSync('./ex.txt').toString().split('\n');

let i = 0;
// console.log(input.length);
while(i < input.length -1){
  
  let data = input[i].split(' ');
  // let nums = data[i].split(' ');
  console.log(Number(data[0]) + Number(data[1]));
  i++;
}