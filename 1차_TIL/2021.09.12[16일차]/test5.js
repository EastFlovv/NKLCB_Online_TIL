// 문제설명 알파벳 대/소문자와 숫자 그리고 구분자인 마침표("."), 쉼표(","), 느낌표("!"), 물음표("?"), 스페이스(" ")로

// 이뤄진 문장이 있습니다. 문장 내에는 구분자를 기준으로 단어를 구분합니다.
// 문장 s가 주어질 때, 단어를 거꾸로 출력하는 함수, solution을 완성해주세요.
// 예를 들어, 문장 "Hello, World!?"가 주어진다고 가정할 때, 구분자를 기준으로 구분된 단어는 "Hello",
// "World"이며, 단어를 거꾸로 출력한 결과는 ["olleH", "dlroW"] 입니다.

// 제한사항 없음
// 매개변수
// & 리턴타입

// - 매개변수
// number s

// - Return Type : string[]

// 입출력형식 [입력 형식]

// - s는 길이가 1 이상 1000 이하의 문자열입니다.
// [출력 형식]
// - 단어를 거꾸로 치환한, 문자열로 이뤄진 배열을 반환합니다.
// - 비어있는 단어는 제거하고 반환합니다.


const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.output
});

rl.on('line', line=>{
  // 입력받은 값을 구분자로 나누고 빈 배열을 제거
  let input = line.split(/\.|\,|\!|\?|\ /).filter(el=>el!='');
  console.log(input);
  // 각 문자열을 뒤집어서 배열에 다시배치.
  for (let i = 0; i < input.length; i++) {
    input[i] = input[i].split('').reverse().join('');
  }
  // 출력
  console.log(input);

  rl.close();
}).on('close', ()=>{
  process.exit();
});