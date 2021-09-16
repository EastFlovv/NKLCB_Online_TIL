// 단어 공부 성공
// 시간 제한	메모리 제한	제출	정답	맞은 사람	정답 비율
// 2 초	128 MB	117204	46060	36897	39.215%
// 문제
// 알파벳 대소문자로 된 단어가 주어지면, 이 단어에서 가장 많이 사용된 알파벳이 무엇인지 알아내는 프로그램을 작성하시오. 단, 대문자와 소문자를 구분하지 않는다.

// 입력
// 첫째 줄에 알파벳 대소문자로 이루어진 단어가 주어진다. 주어지는 단어의 길이는 1,000,000을 넘지 않는다.

// 출력
// 첫째 줄에 이 단어에서 가장 많이 사용된 알파벳을 대문자로 출력한다. 단, 가장 많이 사용된 알파벳이 여러 개 존재하는 경우에는 ?를 출력한다.

// 예제 입력 1 
// Mississipi
// 예제 출력 1 
// ?
// 예제 입력 2 
// zZa
// 예제 출력 2 
// Z
// 예제 입력 3 
  // z
  // 예제 출력 3 
// Z
// 예제 입력 4 
// baaa
// 예제 출력 4 
// A

const fs = require('fs'); 
// const input = fs.readFileSync('/dev/stdin').toString().split('\n');
const input = fs.readFileSync('./ex.txt').toString().split('\n');

const alpha = Array.from({length:26}).fill(0);
let str = input[0].split('');
let max =0;
let same = false;

str.forEach(element => {
  let w = element.toUpperCase().charCodeAt()-65;
  alpha[w]++;
});

for (let i = 0; i < alpha.length; i++) {
  if(max == alpha[i]){
    same = true;
  }else if(max < alpha[i]){
    max = alpha[i];
    same = false;
  }
}

if(same == true)
  console.log('?');
else
  console.log(String.fromCharCode(alpha.indexOf(max)+65));