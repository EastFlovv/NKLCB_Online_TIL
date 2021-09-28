# 2021.09.28 [4일차]

오늘은 자바스크립트 기본문법의 문제풀이를 했다.  
강사님의 도움없이 문제만 읽은 뒤 풀어냈다. 중간에 기억이 나지 않거나 헷깔리는 부분은 이전의 TIL을 보거나 인터넷 검색을 통해 해당 문법을 찾아내 풀었다.  
기초 문제라 그런지 논리적으로 어려운 문제는 없었다.  
복습 개념의 문제풀이 이다보니 새로 배운내용은 거의 없다.

## 공부한 내용
오늘 문제풀이는 사실상 복습에 가까운 학습이였다.
- 문자열은 덧셈으로도 문자열을 더할수 있다.
- 제 3의 변수를 이용해 두 변수의 내용을 바꿀 수 있다.
- break를 통해 무한 반복문을 제어할수있다.  
- 논리 연산자를 통해 보다 복잡한 조건문을 만들 수 있다.
- 메서드 사용 없이 제곱, 배열 뒤집기, 최대/최소값 구하기를 할 수 있다.
- 배열의 중복을 제거할 수 있다.
- `Date()`를 사용할 수 있다.
- 이중 배열을 탐색할 수 있다.


## 학습 결과물
학습 결과물은 같이 포함된 파일에 동봉되었으며 각 TIL의 목록별 소제목에 링크가 달려있다.

### 강의 학습 현황

\> 자바스크립트 기초문법 '42. 기본문제풀이(가이드)' ~ '62. 기본문제풀이(종합) 2차원배열의 곱셈의 합' 

## 43번 별별별
[코드 링크](./43_loop.js)  
반복문을 이용해 문자열을 더하는 문제였다.
```js
let result = ""; // 빈 문자열에
for (let i = 0; i < num; i++) {
  result += '*'; // 반복문 만큼 별을 더해준다.
};
```

## 44번 두 수 사이 숫자
[코드 링크](./44_loop.js)  
주어진 두 수를 포함한 중간의 모든 정수를 출력하는 문제였다.
```js
function answer(x, y){
  let result = [];
  if(x > y){ //반목문을 실행하기전 x가 더 크다면 x와 y를 바꾼다.
    let temp = y;
    y = x;
    x = temp;
  };
  for (let i = x; i <= y; i++) { // 반복문을 통해 두 수 사이의 수를 새 배열에 추가한다.
    result.push(i);
  };
  return result;
};
```

## 45번 반평균
[코드 링크](./45_loop.js)  
배열의 평균을 소수점 둘째자리 까지 출력하는 문제였다.
```js
function answer(score){
  let average = 0;
  score.forEach(element => { // 배열의 모든 요소를 더한다.
    average+=element;
  });
  average /= (score.length); // 평균을 구한다.
  average = average.toFixed(2); // toFixed()함수를 이용해 소수점 2째자리까지 표현한다.
  return average;
};
```

## 46번 핸드폰 판매
[코드 링크](./46_loop.js)  
배열에서 가장 큰 자연수의 length값을 출력하는 문제이다. (length는 index보다 1크다.)
```js
function answer(employee){
  let employee_id;
  let max = 0; // 가장 큰 자연수를 찾으므로 max는 0으로 초기화
  for (let i = 0; i < employee.length; i++) {
    if(employee[i] > max){ // 배열값이 max보다 크면
      max = employee[i]; // max는 배열값을 갖는다.
      employee_id = i+1; // 사원의 순서는 index +1을 갖는다.
    };
  }
  return employee_id;
};
```

## 47번 무한 뺼셈
[코드 링크](./47_loop.js)  
두 수가 주어지면 두 수의 차를 배열에 넣고 계속해서 가장 끝의 두 배열값의 차를 구한다.  
두 수의 차가 0 이상이면 배열에 넣지만 음수면 뺼셈을 멈추고 배열을 출력하는 문제이다.
```js
function answer(s, e){ // 두수를 받는다.
  let sequence = [];
  sequence.push(s); // 두수를 배열에 넣는다.
  sequence.push(e);
  while(true){ // 무한반복한다.
    let num1 = sequence[sequence.length-2]; // 배열 끝에서 2번째 값은 num1
    let num2 = sequence[sequence.length-1]; // 배열 끝에서 1번째 값은 num2
    if(num1 - num2 >= 0){ // 두수의 차가 0이상이면
      sequence.push(num1-num2); // 배열에 두수의 차를 넣는다.
    }else break; // 아니면 break하여 루프탈출
  }
  return sequence;
};
```

## 48번 대소비교
[코드 링크](./48_condition.js)  
주어진 두 수의 크기를 비교해 부등호를 출력하는 문제이다.
```js
function answer(x, y){ // 두수를 받는다.
  let result ='';
  if(x > y) //주어진 조건문을 비교하여 x가 크면 >, y가 크면 <, 같으면 =를 반환한다.
    result += '<';
  else if (x < y)
    result += '>';
  else if (x == y)
    result += '=';
  return result;
};
```

## 49번 나누기와 대소비교
[코드 링크](./49_condition.js)  
수 a, b, c, d를 차례로 받아 a/b와 c/d를 비교하여 a/b가 크면 1, c/d가 크면 -1, 같다면 0을 출력한다.
```js
function answer(a, b, c, d){ // 수 4개를 입력
  let result;
  let num1 = a/b; // a/b는 num1
  let num2 = c/d; // c/d는 num2
  if(num1 > num2) // 비교하여 값을 출력한다.
    result = 1;
  else if (num1 < num2)
    result = -1;
  else if (num1 == num2)
    result = 0;

  return result;
};
```

## 50번 윤년 판별기
[코드 링크](./50_condition.js)  
윤년을 판별하여 윤년이라면 true, 아니라면 false를 출력한다.
```js
function answer(year){
  let yoon;
  // 윤년의 조건 (4의배수 AND 100의 배수가 아님) OR 400의 배수
  if((year%4 == 0 && year % 100 != 0) || year % 400 == 0)
    yoon = true;
  else yoon = false;
  return yoon;
};
```

## 51번 ATM기기
[코드 링크](./51_condition.js)  
'출금금액 원금'을 입력받고 출금은 5의 배수로만, 수수료는 0.5  
출금 조건이 만족하지 않거나 잔액 부족일 경우 원금을 출력하고 조건을 만족한다면 출금후의 잔액을 표기한다.

```js
function answer (withdraw, total){
  let result;

  if(withdraw % 5 != 0){ // 조건1: 출금은 5의 단위로한다.
    result = total; // 출금실패 원금리턴
  }else if ((withdraw+0.5) > total){ //조건2: 잔액이 부족하지않은지 확인한다.
    result = total; // 출금실패 원금리턴
  }else { // 출금성공 잔액출력
    result = total - (withdraw+0.5);
  };
  return result;
};
```

## 52번 네번쨰 좌표
[코드 링크](./52_condition.js)  
사각형을 만들기 위해 필요한 마지막 점을 찾는 문제  
x좌표와 y좌표가 2번씩 나와야 하므로 부족한 하나를 찾아야한다.
```js
function answer(x_arr, y_arr){ // x값 모음, y값 모음
  let result = [];
  //2번의 비교를 통해 혼자 다른 x값을 찾아 result의 x좌표로 삽입
  if(x_arr[0] == x_arr[1])
    result.push(x_arr[2]);
  else if(x_arr[0]==x_arr[2])
    result.push(x_arr[1]);
  else result.push(x_arr[0]);
  //2번의 비교를 통해 혼자 다른 y값을 찾아 result의 y좌표로 삽입
  if(y_arr[0] == y_arr[1])
    result.push(y_arr[2]);
  else if(y_arr[0]==y_arr[2])
    result.push(y_arr[1]);
  else result.push(y_arr[0]);

  return result;
};
```

## 53번 최솟값 구하기
[코드 링크](./53_general.js)  
두 수중 작은 값을 출력한다.
```js
function answer(x, y){
  let min;
  if(x>y) min = y; // 더 작은값을 리턴
  else min = x;
  return min;
  // 강사님은 삼항연산자로 풀었다.
  // min = x>y?y:x
};
```

## 54번 제곱구현
[코드 링크](./54_general.js)  
제곱연산자 **을 사용하지 않고 제곱을 하는 문제이다.
```js
function answer(x, y){
  let result = 1;
  // x를 y번 반복하여 곱한다.
  for (let i = 0; i < y; i++) {
    result *= x;
  };
  // 나는 Math.pow()를 사용했다.
  // result = Math.pow(x, y);
  return result;
};
```

## 55번 놀이기구 입장 제한
[코드 링크](./55_general.js)  
사람 객체를 받아 키가 150미만인 사람은 false를 출력한다.
```js
function answer(user){
  let permit;
  // 비교연산자의 리턴이 Boolean타입인것을 이용한 강사님의 솔루션
  permit = user.height >= 150; // 리턴값이 true, false

  // 나의 풀이: 일반적 if조건문을 통해 풀었다.
  // if(user.height < 150)
  //   permit = false;
  // else
  //   permit = true;

  return permit;
};
```

## 56번 요일 구하기
[코드 링크](./56_general.js)  
문자열로 된 날짜구문을 받아 해당 날짜의 요일을 출력한다.  
```js
function answer(str){
  let week = new Array( // 요일은 일요일이 0 토요일이 6인것을 이용해 index에 맞춰 배열을 만듦
    '일요일',
    '월요일',
    '화요일',
    '수요일',
    '목요일',
    '금요일',
    '토요일'
  );
  let day;
  // 문자열을 Date객체로 바꾼다.
  let date = new Date(str);
  // getDay()메서드를 통해 요일값을 받아 week배열의 인덱스에 넣어 요일값을 얻는다.
  day = week[date.getDay()];
  return day;
};
```

## 57번 중복 단어 제거
[코드 링크](./57_general.js)  
배열에서 중복된 요소를 하나만 남기고 제거한다.  
`Set()`은 요소의 중복을 허용하지 않으므로 `Set()`을 이용한다.
```js
function answer(arr){
  let new_arr = [];
  // 새 배열에 Array객체를 만드는 Array.from을 이용해 Set을 바로 변환한다.
  new_arr = Array.from(new Set(arr)); // 얕은복사

  // 나의 코드 Set()객체를 얻은뒤 반복분을 통해 값을 배열에 넣었다.
  // let set = new Set(arr);
  // set.forEach(el =>{
  //   new_arr.push(el);
  // });
  return new_arr;
};
```

## 58번 배열내 최댓값 구하기
[코드 링크](./58_general.js)  
배열내에 최대값을 구하는 문제이다. 앞선 경우와 다르게 이번엔 음수도 포함한다.  
Math() 사용금지
```js
function answer(arr){
  // 나는 max의 초기화를 -Infinity를 사용했다.
  let max = -Infinity;

  // 강사님의 max조건 max에 음의 정수 최소값을 넣거나 배열의 첫값을 넣는다.
  // let max = Number.MIN_SAFE_INTEGER;
  // let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if(arr[i] > max) // 반복문을 통해 최대값을 구한다.
      max = arr[i];
  };

  return max;
};
```

## 59번 스팸메일
[코드 링크](./59_general.js)  
문자열에 대소문자 관계없이 advert라는 문구가 포함되면 true를 반환하는 함수를 만들어야한다.
```js
function answer(str){
  let spam_flag;
  str = str.toLowerCase(); // 입력받은 문자열을 모두 소문자로 만든다.
  spam_flag = str.includes('advert'); // 문자열에 advert라는 문구가 포함된다면 true를 반환 아니라면 false를 반환

  return spam_flag;
};
```

## 60번 배열 회전
[코드 링크](./60_general.js)  
`Array.reverse()`를 사용하지 않고 배열의 앞뒤를 바꾸는 문제이다.
```js
function answer(arr){
  let reverse = [];
  
  for (let i = 0; i < arr.length; i++) {
    reverse[i] = arr[arr.length-1-i]; // reverse[i]에 arr[arr길이-1-index]값을 넣어 역순삽입한다.
  }

  // 강사님의 코드: for문의 조건문을 바꾸어 배열을 역순 탐색했다.
  // for (let i = arr.length-1; i >= 0; i--) {
  //   reverse.push(arr[i]);
  // }

  return reverse;
};
```

## 61번 문자교정
[코드 링크](./61_general.js)  
주어진 문자열을 파스칼 케이스로 바꾸는 문제이다.  
```js
function answer(str) {
  let fix ='';
  // 입력받은 문자열을 공백을 기준으로 나누어 배열로 만든다.
  let strArr = str.split(' ');
  // 배열을 모든요소를 탐색
  for (let i = 0; i < strArr.length; i++) {
    // 배열의 첫글자를 toUpperCase()로 대문자로 만들고 뒤에 나머지를 잘라붙여 다시 배열에 넣는다.
    strArr[i] = strArr[i].charAt(0).toUpperCase() + strArr[i].substr(1);
    // 완성된 배열을 다시 공백을 포함하여 문자열에 더한다.
    fix += strArr[i]+' '; 
  };
  return fix;
};
```

## 62번 2차원 배열의 곱셈 합
[코드 링크](./62_general.js)  
2차원 배열을 전부 탐색하여 값을 모두 곱하는 문제이다.
```js
function answer(arr){
  let mul = 1;
  // 2중 for문
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      // 모든 값을 돌며 곱한다.
      mul*=arr[i][j];
    };
  };
  return mul;
};
```