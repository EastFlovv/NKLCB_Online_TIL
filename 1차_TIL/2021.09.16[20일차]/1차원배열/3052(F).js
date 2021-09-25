// 나머지 성공출처다국어
// 시간 제한	메모리 제한	제출	정답	맞은 사람	정답 비율
// 1 초	128 MB	75601	44648	38574	59.774%
// 문제
// 두 자연수 A와 B가 있을 때, A%B는 A를 B로 나눈 나머지 이다. 예를 들어, 7, 14, 27, 38을 3으로 나눈 나머지는 1, 2, 0, 2이다. 

// 수 10개를 입력받은 뒤, 이를 42로 나눈 나머지를 구한다. 그 다음 서로 다른 값이 몇 개 있는지 출력하는 프로그램을 작성하시오.

// 입력
// 첫째 줄부터 열번째 줄 까지 숫자가 한 줄에 하나씩 주어진다. 이 숫자는 1,000보다 작거나 같고, 음이 아닌 정수이다.

// 출력
// 첫째 줄에, 42로 나누었을 때, 서로 다른 나머지가 몇 개 있는지 출력한다.

// 예제 입력 1 
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10

const fs = require('fs'); 
// // const input = fs.readFileSync('/dev/stdin').toString().split('\n');
const input = fs.readFileSync('./ex.txt').toString().split('\n');

// //data에 input의 element들을 42로 나눈 나머지를 저장한다.
// let data = [];
// input.forEach(element => {
//   data.push(element%42);
// });
// // let count = 1;
// // let set = new Set;
// data =Array.from(new Set(data));

// // for (let i = 0; i < data.length-1; i++) {
// //   if(data[i]!=data[i+1])
// //     count++;
// // }

// // console.log(count);
// console.log(data.length);



// let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let numbers = [];

input.forEach(x => {
    let rest = x % 42;

    if (numbers.indexOf(rest) === -1) {
        numbers.push(rest);
    }
}); 
console.log(numbers.length);