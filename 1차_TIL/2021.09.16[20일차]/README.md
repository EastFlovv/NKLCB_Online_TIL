# 2021.09.16 [20일차]

오늘은 네카라쿠배 1차 일정의 마지막날 이다.  
오늘도 JavaScript를 이용한 알고리즘 문제풀이를 시작했다.
풀지 못한 문제는 1차원 배열에서 2문제 이며 vscode에서는 잘 작동하지만 백준코딩의 채점에서 막히고 있다.  
문자열과 함수, 그리고 1차원 배열의 많은 문제는 배열을 얼마나 잘 사용하는가에 대해 물어보는 모습이 강한데, JavaScript의 입출력 자체가 배열로 이루어지다 보니 크게 어렵지는 않았다.

## 공부한 내용

- 인덱스를 필요로 하지 않는 배열의 반복의 경우 `forEach()`를 사용하여 더 간결한 코드로 사용할 수 있다.  
- 함수의 매개변수로 익명함수를 넣어 콜백함수로 사용할 수 있다.  
- 배열을 `shift()`하면 0번 인덱스를 버리고 배열을 당길 수 있다.  
- 문자열을 비교해야할때 `toUpperCase`나 `toLowerCase`와 같은 함수를 통해 대소문자를 비교하는데 어려움을 줄일수있다.
- `charCodeAt()`함수를 이용해 문자를 `ascii`코드로 바꿀 수 있다. 앞서 번 `toUpperCase`, `toLowerCase`와 함께 사용하여 문자열을 쉽게 이용 할 수 있다.
- `function 함수명()`을 통해 함수를 선언하여 함수를 만들어 사용할 수 있다.
- `toFixed()`함수를 사용하여 소수점 출력자리를 정할 수 있다.

<!-- ## 학습 결과물 -->

<!-- 오늘의 학습결과물은 TIL 최상위 파일의 '학습 결과물 살펴보기 링크에 추가되었습니다. -->

### 강의 학습 현황

\> 오늘은 강의학습대신 javaScript문제를 공부했다. README.md 파일과 함께 들어있는 폴더에서 해당 문제들을 확인할 수 있다.

## 1차원 배열

배열을 선언하여 `for`문을 통한 `index`와 `value`를 같이 참조하는 반복문을 사용할수 있다.  
또 `forEach를` 통해 `index`를 사용하지 않고 더 간결한 반복문을 사용할 수 있다.  
숫자 자료형의 경우 `toFixed()`함수를 통해 소수점 몇번쨰 자리까지 출력할지 정할 수 있다.  
또한 `shift()`함수를 통해 사용하지 않는 앞쪽 배열을 버릴 수 있다.

```javascript
const fs = require('fs'); 
// const input = fs.readFileSync('/dev/stdin').toString().split('\n');
const input = fs.readFileSync('./ex.txt').toString().split('\n');

let T = input[0];
input.shift();
for (let i = 0; i < T; i++) {
  let data = input[i].split(' ');
  let per = avgPercentage(data);
  console.log(`${per.toFixed(3)}%`);
}


function avgPercentage(data){
  let stu = data[0];
  let score =0;
  let count=0;
  data.shift();
  data.forEach(element => {
    score += Number(element);
  });
  score = score/stu;
  data.forEach(element => {
    if(Number(element) > score)
      count++;
  });
  return count/stu*100;
}
```

## 문자열

자바스크립트에서 입력받은 값의 숫자들은 `Number()`함수를 통해 형변환을 하기 전까진 모두 문자이다.  
`fs모듈`을 통합 입력시 입력받은 변수 자체가 이미 하나의 문자열이므로 사용할때는 `split()`과 같은 함수를 통해 나눠서 사용해야한다.  
또한 문자열은 그 자체로 하나의 배열과 같다.

```javascript
const fs = require('fs'); 
// const input = fs.readFileSync('/dev/stdin').toString().split('\n');
const input = fs.readFileSync('./ex.txt').toString().split('\n');

let str = input[0].split(' ');
let num1 = Number(str[0].split('').reverse().join(''));
let num2 = Number(str[1].split('').reverse().join(''));

if(num1 > num2)
  console.log(num1);
else
  console.log(num2);
```

## 함수

함수를 사용하여 본문 코드의 복잡함을 줄일수있다.  
또한 코드들을 재활용하기 쉬워진다.  

```javascript
const fs = require('fs'); 
// const input = fs.readFileSync('/dev/stdin').toString().split('\n');
const input = fs.readFileSync('./ex.txt').toString().split('\n');


let num = Number(input[0]);
console.log(hansu(num));

function hansu(num){
  let awr = 0;

  if(num == 1000)
    num = 999;

  if(num < 100)
    awr = num;
  else{
    awr = 99;
    for (let i = 100; i <= num; i++) {
      let numStr = i.toString().split('');
      if(Number(numStr[0])-Number(numStr[1]) == Number(numStr[1])-Number(numStr[2]))
        awr++;
    }
  }
  return awr;
}
```