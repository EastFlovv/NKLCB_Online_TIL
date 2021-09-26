# 2021.09.26 [2일차]

오늘도 JavaScript기본문법을 공부했다.  
아는 내용도 있고 잘 사용하지 않아서 놓치고 있던 내용도 있었다.  
공부하던중 크게 놀란것이 배열이 Hash객체라는것이였다.  
아직 기초문법을 가르치는 단계라서 연습문제 난이도가 그렇게 어렵지는 않다.

## 공부한 내용

- 반복문 `for`와 `while`을 배웠다.
- 반복문을 제어하기 위한 `break`, `continue`, `Label`을 배웠다.  
- 함수의 정의와 함수의 선언과 호출에 대해 배웠다.  
- 자기 자신을 호출하는 재귀함수를 배웠다.  
- 함수의 매개변수로 전달되기 위한 함수는 콜백함수이다.  
- 콜백함수를 매개변수로 사용하느 함수는 고차함수이다.  
- `method`는 객체내의 함수이다.  
- Number타입의 속성과 메서드의 종류 그리고 그 사용법을 배웠다.
- String타입의 속성과 메서드의 종류 그리고 그 사용법을 배웠다
- 문자열을 가공하거나 변환하여 여러 값을 얻는 방법을 배웠다.
- 배열에 대해 배웠다. JS의 배열은 일반적인 연속성을 가진 dense array가 아닌 sparse array이다.

## 학습 결과물
학습 결과물은 같이 포함된 파일에 동봉되었으며 각 TIL의 목록별 소제목에 링크가 달려있다.

### 강의 학습 현황

\> 자바스크립트 기초문법 '18. 반복문' ~ '30. Array' 

## 반복문
[실습 파일 for.js](./for.js)
## for
선언문, 조건문, 증감문의 형태로 이루어져있다.  
조건문이 fail되기 전까지 코드블록을 반복적으로 수행한다.  
선언문,조건문,증감문 자리에 공백을 입력할 수 있다.

### for문의 확장
- for...in 반복문  
객체의 key, value형태를 반복하여 수행하는데 최적화 된 유형이다.  
처음부터 마지막 객체까지 객체의 키 개수만큼 반복한다.
```js
for(key in object){

}
```
- for...of반복문  
Collection객체 자체가 Symbol.iterator속성을 가지고 있어야 동작 가능한 유형이다.  
ES6에 새로 추가된 Collection기반의 반복문이다.  
```js
for(variable of iterable){
  
}
```

## while
[실습파일 while.js](./while.js)  
조건문이 참일때 코드블록을 계속해서 반복 수행하는 반복문이다.  
for문에 비해 선언문과 증감문 없이 loop를 수행한다. 무한 loop등의 수행에 많이 사용한다.  
최소 한번의 수행을 보장하는 do..while반복분도 존재한다.  

```js
do{
  console.log('do.. while loop');
  i = 0;
}while(i > 1000)
```


## 반복문의 제어
[실습파일 loopControl.js](./loopControl.js)  
### break
반복문 수행시 코드블록을 탈출할때 사용되는 식별자이다.  
다중 반복문일 경우 가장 안쪽의 반복문을 종료시킨다.  
Label을 통하여 다중 반복문을 한번에 종료할 수 있다.  

### continue
반복문 수행시 코드블록의 실행을 해당 라인에서 중지하고 블록코드를 종료시킨후 반복문 내 명시된 조건판단으로 돌아간다.  

### Label
프로그램내 특정 영역을 지정하여 별로 이름을 붙이는 식별자이다.  
break, continue를 사용하는 반복문안에서만 사용가능하며 break, continue지시자 위에 있어야한다.  
프로그램의 가독성과 logic을 망치므로 사용하지 않는것을 권장한다.

## 함수
[실습파일 function.js](./function.js)  
함수는 다수의 명령문을 코드블록으로 감싸고, 하나의 실행단위로 만든 코드의 집합이다.  
유사한 동작을 하는 코드를 하나로 묶어 범용성을 확대시킨 블록코드이다.  
함수는 정의 부분과 호출부분으로 구성되어 있다.  
함수는 가급적 한가지 일만 하며, 매개변수는 최대 3개 이내로 작성을 권장한다.  


### 함수의 정의
```js
function 함수이름 (매개변수){
  코드실행
  return 반환결과
}
```
### 함수의 호출
```js
함수이름 (매개변수);
```

### default value
자바스크립트 함수는 매개변수와 인수의 갯수가 일치하는지 확인하지 않는다.  
ES6에 도입된 기본값을 통해 undefined 변수가 들어올 경우 사용할 값을 초기화 지정 가능하다.

```js
function printXY(x, y =10){
  console.log(`x = ${x}, y = ${y}`);
}
printXY(5); // x = 5, y = 10
```

### dynamic parameters
지정된 매개변수가 없으나 실제 들어오는 매개변수를 제어할 수 있다.  
```js
function dynamicPrint(){
  console.log(arguments[0], arguments[1]);
}
dynamicPrint(1,2,3,4,5); // 1 2
```

### 함수의 반환
함수는 return을 통해 값을 반환하며 return할 경우 이후의 코드는 실행되지 않는다.

```js
function func(num){
  return num + 1;
  console.log(num); // 작동하지 않음
}
```

## 연습문제
[실습파일 loopPractice.js](./loopPractice.js)  

## 재귀함수
[실습파일 recursionFunction.js](./recursionFunction.js)  
함수 스스로 자신을 참조해 호출하면서 동일한 코드가 계속적으로 수행되는 함수 호출방법이다.  
재귀함수는 특정 조건이 됐을때, 자신을 그만 호출되도록 제한하는 exit code가 필요하다.  
탈출코드가 없으면 무한루프에 빠질 수 있기때문이다.  

## 콜백함수와 고차함수
[실습파일 callbackFunction.js](./callbackFunction.js)  
콜백함수란 다른함수의 매개변수로 전달되어 수행되어지는 함수이다.  
고차함수란 매개변수를 통해 함수를 받아 호출하는 함수이다. (콜백함수를 실행하는 함수)  

### call by value
값에 의한 복사로 함수 내에서 매개변수 값을 변경시켜도 영향이 미치지 않는다.
원시타입을 매개변수로 넘겼을때 발생한다.
```js
let a =1;
let add = funtion(b)=>{b+b+1;};
add(a);
console.log(a); // 1
```

### call by reference
주소에 대한 복사로 함수내에에서 매개변수 내 값을 변경시키면 원본데이터에도 영향을 받는다.
객체타입을 매개변수로 넘겼으때 발생한다.
```js
var a = {v:1};
var add = function (b)=>{b.v = b.v+1;};
add(a);
console.log(a.v); // 2
```
## 연습문제
[실습파일 functionPractice.js](./functionPractice.js)  

## method
[실습파일 method.js](./method.js)  
### 함수의 표현  
다양한 방법으로 함수의 정의가 가능하며 함수표현식처럼 함수를 정의하여 변수에 저장가능하다.
```js
// 함수 선언식
function add1(x, y){
  return x + y;
}

// 함수 표현식
const add2 = function (x, y) {
  return x + y;
}

// 화살표 함수
const add3 = (x, y) => x + y;
```

### 함수 저장
배열의 요소 혹은 객체의 속성에 함수를 정의하여 저장가능하다.  
```js
// 배열요소에 함수 저장
let list = [
  'john',
  27,
  function hellofunc(){ //function선언
    console.log('hello');
  }
];
// 객체요소에 함수 저장
let object = {
  name : 'john',
  age : 27,
  // method
  hellofunc(){ // function선언이 없다.
    console.log('hello');
  }
};
```
### method
객체에 저장된 값이 함수인 경우, 이를 매서드(method)라고 부른다.  
변수가 객체의 주소값을 가지고 있고 객체 또한 함수의 주소값을 가지고있는것이다.  

### this
메서드에서 객체 내부의 속성값을 접근할 수 있는 지시자이다.  
this를 사용하는 method는 추가 가능하며, 이 떄 this는 runtime에 결정되어 호출한 객체에 따라 다르다.  
```js
let obj = {
  name: 'kim',
  age: 27,
  hello() {
    console.log('hello ' +
     this.name) // this.name -> 'kim'
  },
};
```

## Number
[실습파일 number.js](./number.js)  
자바스크립트에서 일반적인 숫자는 64비트 형식의 IEEE-754표준기반 형태로 저장되는 자료형이다.  
10진수 외에도 16진수, 2진수, 8진수의 다양한 진수 사용한다.  
16진수(HExadecimal)표기: 0xFF  
8진수(Octal)표기: 0o71  
2진수(Binary)표기: 0b1101  

### 대표상수값
[MAX|MIN]_VALUE, [MAX|MIN]_SAFE_INTEGER, {POSITIVE|NEGATIVE}_INFINITY , NaN

### 대표메서드
문자열로 변환: Number.toString()  
특정 자리수까지 제한하여 숫자 표현: Number.toFixed(), Number.toPercision()  
타입확인 Number.isNaN(), Number.isFinite()  

### 지수/진법

- 지수 표기법
아주큰 숫자나 아주 작은 숫자를 표기하기위해 지수표기법(e)으로 0의개수를 대체 표기가능하다.
```js
let billion_1 = 1000000000 // 10억
let billion_2 = 1e9 // 10억
```

- 진법표기  
진법표기를 지원하기 위해 0x(16진수), 0o(8진수), 0b(2진수)로 N진수 표기가능하다.
```js
console.log(0x0f); // 15
```


### 상수값
지수로 표기되는 양수 최대 최소값: Number.MAX_VALUE, Number.MIN_VALUE  
안전하게 표기되는 최대/최소값 : Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER  
무한대 양수/ 음수값: Number.POSITIVE_INFINITY, Number.NEGERTIVE_INFINITY  
부동소수점 산술에서 정의되지 않거나 표현할수 없는 값으로 해석될 수 있는 데이터 유형: Number.NaN  


### Number 형변환
Number -> String|  
--|
Number.toString() |
String(Number)|
 Number + ""

### 자리수 표현
소수의 자리수 길이를 제한: `Number.toFixed(pos)`  
```js
let num = 123.456;
console.log(num.toFixed(1)); // 123.4
```
정수와 소수의 자리수를 합한 길이로 제한: `Number.toPrecision(pos)`  
```js
let num = 123.456;
console.log(num.toPrecision(4)); // 123.4
```


### Number자료형 확인
부동 소수점 산술에서 정의되지 않거나 표현할수없는값(NaN)인지 확인: `Number.isNaN()`  
```js
// 들어오는 값이 isNaN에 포함되는지 아닌지를 판별
console.log(Number.isNaN(0.123)); // NaN가 아니므로 false
console.log(Number.isNaN(111/'aaa')); // NaN이므로 true
```
정상적인 유한수인지 확인: `Number.isFinite()`

```js
// 유한수인지 판별
console.log(Number.isFinite(-123)); // true
console.log(Number.isFinite(Infinity)); // false
console.log(Number.isFinite('hello')); // false
```

### 정수와 실수 형변환
정수로 변환하는 방법 (N진수로 명시적 변환도 가능): `Number.parseInt()`  
실수로 변환하는 방법: `Number.parseFloat()`
```js
console.log(Number.parseInt('123ab')); // 123 숫자만 추출하여 출력
console.log(Number.parseFloat('1.24em')); // 1.24 숫자만 추출하여 출력
```


## string
[실습파일 string.js](./string.js)  
텍스트길이에 상관없이 문자열 형태로 저장되는 자료형이다.  
자바스트립트에서는 글자 하나만 저장할수 있는 `char`자료형이 없다.  
자바스크립트에서 문자열은 페이지 인코딩 방식과 상관없이 항상 UTF- 16형식을 따른다.  
### 대표속성과 메소드
대표속성과 메서드| 표현
--|--
문자열 길이 | String.length
문자열 접근 | String.charAt(index), String.charCodeAt(index)
문자열 검색 | String.index.Of(), String.lastIndexOf(), String.includes(), String.startsWith() 등
문자열 변환 | String.toUpperCase(), String.toLowerCase()
문자열 치환 | String.replace()
문자열 추출 | String.slice(), String.substring(), String.substr();
문자열 분할 | String.split()

### 문자 정의 / 표기

- 정의방법  
`string`정의방법은 `""`, `''`, `String()`이 있고, 문자열과 변수 혼합 방법 표현 ` `` `이 있다.  

- 문자표기
다양한 문자표기방법으로  
Linefeed: `(\n)`  
Carriage return: `(\r)`  
Backslash: `(\\)`  
Tab: `(\t)`  
Unicode: `(\u{})`
이 있다.
```js
// 개행
// /n, /r은 다르나 윈도우에선 혼합하여 하나의 new line을 처리하고 있다.
console.log('line\nfeed');
console.log('line\rfeed');
// \표현
console.log('\\n');
// Tab
console.log('String\ttab');
// unicode
console.log('unicode\u{1F60D}');
```  


### 문자열 길이/접근

- 문자열 길이
문자열 길이 확인 방법 `String.length`  

- 문자 접근  
문자열 내 개별 문자 접근방법: `String.charAt(index)`, `String.charCodeAt(index)`, `String[index]`

## 문자열 변환

### 문자열 검색/ 변환

- 문자열 검색  

문자열검색(index) | 문자열검색(bool)
--|--
String.indexOf(substr, pos), String.lastIndexOf(substr,pos) | String.includes(substr, pos), String.startsWith(substr, pos), String.endsWith(substr, pos)

### 문자열 대소문자 변환
대소문자 변환: `String.toUpperCase()`, `String.toLowerCase()`
```js
// 대소문자 변경
let txt2 = 'HeLLo woRld';
// 모두 대문자
console.log(txt2.toUpperCase()); // HELLO WORLD
// 모두 소문자
console.log(txt2.toLowerCase()); // hellow world
```

## 문자열 치환
처음 만나는 요소 문자열 치환 (치환된 문자열 반환): `String.replace (origin_str, change_str)`
정규표현식 활용 문자열 치환: 치환 문자열에 정규 표현식 기입

## 문자열 추출
위치기반 문자열 추출: `String.slice(start, end)`, `String.substring(strat, end)`
길이기반 문자열 추출: `String.substr(strat,length)`


## 문자열 분할
배열로 문자열 분할: `string.split(Separator, limit)`


## 배열
[실습파일 array.js](./array.js)  
여러 개체값을 순차적으로 나열한 자료구조이며 알고리즘 내 사용빈도가 높다.  
배열내 값을 요소라고 하며, 배열요소는 index로 접근한다.  

### 대표속성과 메서드
배열크기 및 배열여부 확인: `Array.length()`, `Array.isArray()`  
배열추가/삭제: `Array.push()`, `Array.pop()`, `Array.shift()`, `Array.unshift()`, `Array.splice()`, `Array.slice()`등  
배열탐색: `Array.indexOf()`, `Array.lastindexOf()`, `Array.include()`  
배열변형 (callback 미사용): `Array.sort()`, `Array.reverse()`, `Array.join()`


### 배열선언 / 접근 / 속성

배열선언: `new Array()` 혹은 `[]`를 통해 선언하며, 사이즈 혹은 값을 입력하여 초기화도 가능하다.  
접근방법: `Array[index]`의 index를 통해 접근한다.
배열속성: `Array.length`를 통해 배열요소의 개수 확인 가능하다.
```js
let arr1 = new Array(10);
let arr2 = [];
```


### 배열의 실체
자바스크립트에서 배열은 다른언어에서 말하는 일반적 배열이 아닌 Hash기반의 객체이다.  
메모리가 연속적인 밀집배열이 아닌 비 연속적인 희소배열이다.  

### 배열타입확인 및 요소삭제

배열타입확인방법: `Array.isArray(value)`  
배열 일부 요소 삭제: `delete array[index]` (삭제해도 배열사이즈가 그대로인 문제점이 있다.)
```js
// 배열 타입확인과 삭제
let num = 123.456;
let str = 'str';
let fruits = ['apple', 'banana', 'cherry'];
console.log(Array.isArray(num)); // false
console.log(Array.isArray(str)); // false
console.log(Array.isArray(fruits)); // true
console.log(fruits); // ['apple', 'banana', 'cherry']
console.log(fruits.length); // 3
delete fruits[1];
console.log(fruits); // ['apple', <1 empty item>, 'cherry']
console.log(fruits.length); // 3
```