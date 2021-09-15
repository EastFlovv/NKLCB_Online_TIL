// 합 성공출처다국어
// 시간 제한	메모리 제한	제출	정답	맞은 사람	정답 비율
// 1 초	128 MB	124334	82495	71929	67.044%
// 문제
// n이 주어졌을 때, 1부터 n까지 합을 구하는 프로그램을 작성하시오.

// 입력
// 첫째 줄에 n (1 ≤ n ≤ 10,000)이 주어진다.

// 출력
// 1부터 n까지 합을 출력한다.

// 예제 입력 1 
// 3
// 예제 출력 1 
// 6

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin, 
  output: process.stdout
});

rl.on('line', line => {
  const num = Number(line);
  let result = 0;
  for (let i = 1; i <= num; i++) {
    result += i;
  }
  console.log(result);

  rl.close();
}).on('close', ()=>{
  process.exit();
});