// 문제설명 n개의 문자를 보여주는 크기가 n인 전광판이 있습니다. 전광판의 문자는 오른쪽에서 왼쪽으로 반복해서
// 흘러가며, 1초에 한 글자씩 흘러갑니다. 예를 들어, 크기가 5인 전광판에 "Snowball" 노출한다고 가정할 때,
// 시간 t의 변화에 따른 노출 예시는 다음과 같습니다.

// t 초 전광판
// 0 초 .....
// 1 초 ....S
// 5 초 Snowb
// 10 초 all..
// 15 초 ...Sn

// 전광판의 크기 n과 전광판에 노출할 문자 s 그리고 시간 t가 주어질 때, t 초 후의 전광판에 표시될 문구를
// 반환하는 함수, solution을 완성해주세요.
// 제한사항 전광판의 문자는 1초부터 흐르기 시작합니다.
// 매개변수
// & 리턴타입

// - 매개변수
// number n
// string s
// number t

// - Return Type : string
// 입출력형식 [입력 형식]

// - n은 1 이상 50 이하의 자연수입니다.
// - s는 길이가 1 이상 100 이하의 문자열입니다.
// - s는 알파벳 대/소문자와 숫자로 구성됩니다.
// - t는 1 이상 1000 이하의 자연수입니다.
// [출력 형식]
// - t 초 후, 주어진 전광판에 노출되는 문자를 출력합니다.
// - 전광판의 공백은 마침표(".")로 대체하여 출력합니다.

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input=[];

// 입력은 개행으로 전광판길이, 문자, 시간을 입력한다.
rl.on('line', line=>{
  input.push(line);

}).on('close', ()=>{
  let answer=[];
  
  let leng= Number(input[0]);
  let str = input[1].split('');
  let time = Number(input[2]);

  // 전광판이 비워지고 새로운 값이 들어가는 시간
  let last= time%(leng + str.length);
  // 진행시간이 전광판 길이보다 작으면 전광판길이-진행시간만큼 .을 찍은뒤 진행시간만큼 문구를 push한다
  if(last <= leng){
    for (let i = 0; i < leng-last; i++)
      answer.push(".");
    for (let i = 0; i < last; i++)
      if(str[i] == ' ')
        answer.push('.');
      else
        answer.push(str[i]);
  }else{
    // 진행시간이 전광판길이보다 길면 진행시간-전광판길이부터 문구를 출력한다. 이때 문구의 길이를 초과한 undefined를 만나면 .을 출력
    for (let i = 0; i < leng; i++) {
      let idxStart = last-leng;

      if(str[idxStart+i] == undefined || str[idxStart+i] == ' ')
        answer.push(".");
      else
        answer.push(str[idxStart+i]);
    }
  }

  
  console.log(answer.join(''));

  process.exit();
});