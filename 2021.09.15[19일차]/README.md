# 2021.09.15 [19일차]

오늘은 코딩 테스트 준비를 위해 JavaScript를 이용한 알고리즘 문제풀이를 시작했다.  
문제는 백준코딩의 단계별 문제풀이를 진행하고있다.  
아직은 알고리즘이라고 하기엔 수준이 낮은 부분을 풀고 있지만 JavaScript의 입출력 모듈과 여러 동작을 익히기 위해서 기초부터 시작하기로 했다.  
실제로 나는 지정된 주제외의 여러가지 문제로 문제를 푸는데 몇가지 어려움을 겪었고 이를 해결해 문제를 풀어냈다.

## 공부한 내용

- `if`문을 통해 조건에 따라 코드의 흐름을 분기 시킬수 있다.  
- `if()`의 괄호안 조건문이 `true`일때 `if`문 안으로 분기한다.  
- `else if()`문을 통해 분기문을 추가할 수 있다. 앞선 조건으로인해 if문안으로 이미 분기했다면 else문 뒤로 오지않는다.
- 15552번 문제 빠른A+B 문제를 통해 `readline`모듈이 아닌 `filesystem` 모듈을 사용하기로 바꿨다. 더 빠른 입출력을 할 수 있다.
- 2741번 문제 찍기 N의 경우 최대 케이스가 100000이므로 `console.log()`를 `for`문의 안으로 넣으면 시간초과가 발생한다. 이 경우 각 값을 개행문자 `\n`을 포함한 문자열로 하나의 변수에 저장하여 한번 출력한다.
- JS는 아니지만 백준에서 지원하는 런타임 환경인 Node.js에서는 `${valuable}`과 같은 형태로 출력할 수 있다.  
- `readine`과 `fs`모듈의 차이점과 사용법을 배웠다.  
- 반복적인 대량의 출력을 한번에 보여주어야 할때 시간을 절약하기위해 String변수를 이용한 출력을 하는법을 익혔다.  
- `EOF`에 대한 이해를 했다. `try{}catch{}`나 `undefined`를 이용한 `break`가 모두 되지 않았는데 이에 대해서는 더 공부해야 할것같다.

<!-- ## 학습 결과물 -->

<!-- 오늘의 학습결과물은 TIL 최상위 파일의 '학습 결과물 살펴보기 링크에 추가되었습니다. -->

### 강의 학습 현황

\> 오늘은 강의학습대신 javaScript문제를 공부했다. README.md 파일과 함께 들어있는 폴더에서 해당 문제들을 확인할 수 있다.


## readline과 if문

`readline`모듈을 사용하여 readline 인터페이스를 변수안에 담아 사용할수있다.  
`fs`와도 같지만 javascript에서의 입출력을 할때 입력값은 보통 배열로 담아 나눠 사용하게 된다.
`if`문을 통해 다양한 조건문을 비교해 코드흐름을 분기할 수 있다.

```Javascript
// 예제
//문제 1330
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input;

rl.on('line', line => {
  input = line.split(' ');
  rl.close();
}).on('close', () => {
  // console.log(input);
  if (Number(input[0]) > Number(input[1]))
    console.log('>');
  else if(Number(input[0]) < Number(input[1]))
    console.log('<');
  else 
    console.log('==');
});
```

## for문과 fs모듈

`for`문을 통해 지정된 길이만큼의 반복을 할 수 있다.  
주로 새 변수 i를 지정해 i의 값을 1씩 증가시켜 사용하는데 이 i값을 배열의 index값이나 반복적인 수의 증가들에 넣어 사용할 수 있다.  
`fs`모듈은 `fileSystem`모듈로 이미 만들어진 파일을 가져와 읽을 수 있다.  
매번 새로운 입력을 받는 readline보다 문제를 풀때 속도에서 유리하다.

```javascript
//백준 15552문제
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');
// const input = fs.readFileSync('./ex.txt').toString().split('\n');

const T = input[0];

for (let i = 1; i < input.length; i++) {
  let data = input[i].split(' ');
  console.log(Number(data[0]) + Number(data[1]));
}
```

## while문

`while`문은 조건식 안의 조건이 `true`라면 반복문을 무한히 반복한다.  
조건문안에는 조건문 대신 true값을 넣을 수 있다. 이러한 무한반복을 막기위해 `break`문을 사용하면 `break`문은 해당 반복문을 강제로 탈출한다.

```javascript
//백준 1110문제
const fs = require('fs'); 
// const input = fs.readFileSync('/dev/stdin').toString().split('\n');
const input = fs.readFileSync('./ex.txt').toString().split('\n');

let num = Number(input[0]);
let newone = 0;
newone = num;
let cycle = 0;
while(true){
  if(newone < 10)
    newone * 10;
  
  let num1 = Math.floor(newone/10);
  let num2 = newone % 10; 
  newone = num2*10 + (num1+num2)%10;
  cycle++;
  if(newone == num){
    break;
  }
}

console.log(cycle)
```