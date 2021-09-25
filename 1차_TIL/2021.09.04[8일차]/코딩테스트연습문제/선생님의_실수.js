const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let origin = new Array;
let fix = new Array;

rl.on('line', function(line) {

  //입력받은 값을 문자열 함수 split()을 통해 배열로 만든다.
  //구분자는 정규표현식 /\D/를 통해 숫자가 아닌 모든 문자로 한다.
  // []로 인해 생긴 공백을 배열 함수 filter()를 통해 제거한다.
  origin = line.split(new RegExp(/\D/)).filter(el => el != '');

  //orgin의 모든 요소를 탐색하는 반복문 el은 각요소의 값, i는 인덱스이다.
  origin.forEach((el, i) => {
    
    //만약 el의 값이 origin안에 없다면 i+1을 fix에 추가한다.
    if(origin.includes(String(i+1)) == false)
      fix.push(i+1);
  });

  // console.log('origin is >>', origin);
  // console.log('fix is >>', fix);
  //fix를 출력
  console.log(fix);

  rl.close(); //callback 종료
}).on("close", function() {
  process.exit(); //프로그램을 종료한다.
});