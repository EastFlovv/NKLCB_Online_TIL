// 시험 성적 
// 시간 제한  	메모리 제한	제출	  정답	  맞은 사람	  정답 비율
// 1 초	        128 MB  	167122	93075	  81205	      56.728%
// 문제
// 시험 점수를 입력받아 90 ~ 100점은 A, 80 ~ 89점은 B, 70 ~ 79점은 C, 60 ~ 69점은 D, 나머지 점수는 F를 출력하는 프로그램을 작성하시오.

// 입력
// 첫째 줄에 시험 점수가 주어진다. 시험 점수는 0보다 크거나 같고, 100보다 작거나 같은 정수이다.

// 출력
// 시험 성적을 출력한다.

// 예제 입력 1 
// 100
// 예제 출력 1 
// A

const { on } = require('events');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let score = Number();

rl.on('line', line => {
  score = Number(line);
  rl.close();
}).on('close', ()=>{
  // console.log(score);

  if (score >= 90)
    console.log('A');
  else if(score >= 80)
    console.log('B');
  else if(score >= 70)
    console.log('C');
  else if(score >= 60)
    console.log('D');
  else
    console.log('F');

  process.exit();
});