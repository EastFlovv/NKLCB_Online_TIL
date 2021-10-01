// 큰 수 A+B
// 시간 제한	메모리 제한	제출	정답	맞은 사람	정답 비율
// 1 초	256 MB	36227	16212	14031	48.787%
// 문제
// 두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.

// 입력
// 첫째 줄에 A와 B가 주어진다. (0 < A,B < 1010000)

// 출력
// 첫째 줄에 A+B를 출력한다.

// 예제 입력 1 
// 9223372036854775807 9223372036854775808
// 예제 출력 1 
// 18446744073709551615
const fs = require('fs');
const input = fs.readFileSync('./data.txt').toString().split(' ');
// const input = fs.readFileSync('/dev/stdin').toString().split('\n');

// console.log(BigInt(input[0]));
// console.log(BigInt(input[1]));
let num = (BigInt(input[0])+BigInt(input[1])).toString();
console.log(num);