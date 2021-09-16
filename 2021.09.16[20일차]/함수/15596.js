// 정수 N개의 합 성공언어 제한함수 구현
// 시간 제한	메모리 제한	제출	정답	맞은 사람	정답 비율
// 0.1 초	512 MB	66692	33304	29251	51.358%
// 문제
// 정수 n개가 주어졌을 때, n개의 합을 구하는 함수를 작성하시오.

// node.js로는 백준에서 해당 문제가 채점이 되지 않는다

const fs = require('fs'); 
// const input = fs.readFileSync('/dev/stdin').toString().split('\n');
const input = fs.readFileSync('./ex.txt').toString().split('\n');

console.log(sum(input[0]));

function sum(str){
  let data = str.split(' ');
  let sum = 0;
  data.forEach(element => {
    sum+=Number(element);
  });
  return sum;
}