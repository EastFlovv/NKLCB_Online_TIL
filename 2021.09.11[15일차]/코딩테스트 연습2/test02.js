// 문제설명 상현이와 성민이는 낱말 게임을 하고 있었습니다.

// 문제로 `가라나가`라는 패턴이 주어지면 이 패턴대로 한 사람씩 돌아가면서 낱말을 말하는 게임입니다.
// 한 사람이 `가` 시점에 특정 낱말을 말하면 그 다음 사람은 `가` 시점에 말한 낱말을 제외하고 `라` 패턴에
// 맞는 임의의 낱말을 말하면 됩니다.
// `상현, 성민` 순서로 낱말 게임을 진행하게 됩니다.
// 총 `두 단어`씩 언급할 수 있으며, 패턴도 총 `4`개의 패턴이 있습니다.
// 두 사람 모두 패턴대로 낱말을 언급하여 `무승부`로 게임이 끝나게 되는 경우를 리턴하는 함수를
// 작성해보세요.

// 제한사항 - 패턴은 총 `4패턴` 입니다. 예시) `가나나가` => 낱말 : `드래곤 바나나 바나나 드래곤`
// - 모두 제대로 낱말을 언급하여 무승부가 되는 경우를 `true`로 반환해보세요.

// 매개변수
// & 리턴타입

// - 매개변수 : pattern, string
// - Return Type : Boolean

// 입출력형식 [입력 형식]
// - pattern = `가나다라`
// - string = `드래곤 바나나 드래곤 키위`
// [출력 형식]
// - false
// [입출력 예시]
// pattern string return
// 가나다라 바나나 드래곤 바나나 드래곤 false
// pattern string return
// 가가가가 바나나 바나나 바나나 바나나 true

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];


// 입력방법에 대한 상세한 명세가 없어 pattern과 string을 개행으로 받았다.
// 입력예시
// pattern : 가나다라
// string : 바나나 고구마 감자 사과
rl.on('line', line=>{
  // 입력값을 배열로 지정
  input.push(line);

}).on('close', ()=>{

  let pattern = input[0].split('');
  let str = input[1].split(' ');
  let patternBool;
  let strBool;

  // 이중 for문을 통한 순차 탐색
  for (let i = 0; i < pattern.length; i++) {
    if(i != (pattern.length-1))
      for (let j = i+1; j < pattern.length; j++) {
        // 두개의 배열이 중복값을 갖는지 검사하고 그 결과를 비교한다
        patternBool = (pattern[i]==pattern[j]);
        strBool = (str[i]==str[j]);
        // 결과 값이 다르면 패턴이 틀리므로 break하여 for문 탈출
        if(patternBool != strBool)
          break;
      }
      // 결과 값이 다르면 패턴이 틀리므로 break하여 for문 탈출
      if(patternBool != strBool)
        break;
  }
  // true false를 출력한다
  if(patternBool != strBool)
    console.log('false');
  else
    console.log('true');
  
  process.exit();
});