// 문제설명 여름을 맞아 가족들과 함께 해수욕장을 방문했습니다.

// 코로나로 인해서 많은 사람이 각자의 파라솔 아래에서 마스크를 쓰고 둘러앉아 모래 뺏기 게임을 하고
// 있습니다.
// 흥민이와 흥민이의 누나는 `num`kg의 모래를 쌓아두고 게임을 시작합니다.
// 모래성 중앙의 깃발이 쓰러지지 않도록 하는 모래성의 무게는 `1kg`입니다.
// 흥민, 누나의 순서대로 게임이 진행됩니다.
// 한사람이 한 번에 가져갈 수 있는 모래의 양은 최소 `1kg`, 최대 `3kg`입니다.
// 여기에서 모래의 양 `num`을 입력하여 흥민이가 이길 수 있는 경우를 `true, false`로 반환하는 함수를
// 작성해 보세요.

// 제한사항 - 최소 `1kg`, 최대 `3kg`의 모래를 가져갈 수 있습니다.
// - 흥민, 누나의 순서대로 게임이 진행됩니다.
// - 모래성은 `1kg미만`으로 남게되면 쓰러집니다.
// - 즉, `1kg`이 자기 차례에 남으면 승리합니다.

// 매개변수
// & 리턴타입

// - 매개변수 : num
// - Return Type : Boolean

// 입출력형식 [입력 형식]
// - num = 3
// [출력 형식]
// - true
// [입출력 예시]
// num return
// 2 true


const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let num;

rl.on('line', line=>{
  num = Number(line);
  // 시작하는 모래의 무게를 4로 나눈 나머지가 1일경우 흥민이는 반드시 패배한다.
  if(num%4 == 1)
    console.log('false');
  else
    console.log('true');

  rl.close();
}).on('close', ()=>{
  process.exit();
});