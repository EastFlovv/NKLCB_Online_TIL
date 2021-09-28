# 네카라쿠배 온라인 프론트엔드 TIL 문서

1차 결과물은 새 파일에 모아두고 2차 TIL을 작성합니다.

## 1차 결과물 링크
[1차 학습 결과물 살펴보기](https://goofy-pike-2843c1.netlify.app/)  
[1차 TIL README.md 보기](https://github.com/EastFlovv/NKLCB_Online_TIL/tree/master/1%EC%B0%A8_TIL)

## 2차 각 일차별 TIL 상세보기(링크)

1. [2021.09.25[1일차] TIL](https://github.com/EastFlovv/NKLCB_Online_TIL/tree/master/2021.09.25%5B1%EC%9D%BC%EC%B0%A8%5D)
1. [2021.09.26[2일차] TIL](https://github.com/EastFlovv/NKLCB_Online_TIL/commit/eeff49d887ca6455880f7f867d831c6377fdb594)
1. [2021.09.27[3일차] TIL](https://github.com/EastFlovv/NKLCB_Online_TIL/tree/master/2021.09.27%5B3%EC%9D%BC%EC%B0%A8%5D)
1. [2021.09.28[4일차] TIL](https://github.com/EastFlovv/NKLCB_Online_TIL/tree/master/2021.09.28%5B4%EC%9D%BC%EC%B0%A8%5D)

## 2021.09.25 [1일차]

코딩 테스트 통과를 위한 본격적인 JavaScript 수업을 듣기 시작했다.  
기존에 알던 내용이지만 기초일수록 순간적으로 기억이 나지 않는 경우가 있어 차근차근 공부 해 기초를 확실히 다질 생각이다.  
네카라쿠배 2차로 진출하면서 기존 TIL파일을 수정해 쓰기 위해 1차 TIL파일을 폴더로 정리하고 기존 방식대로 2차 TIL을 작성한다.

## 공부한 내용

- 코딩테스트가 주로 어떤 문제를 내는지 그리고 어떤 플랫폼에서 연습할 수 있는지 알게되었다. 백준에서만 연습하던 나에게 큰 도움이 됬다.  
- 자바스크립트의 사용을 위해 Node.js가 무엇인지 배웠다. 
- 기본 입출력에 대해 배웠다. fs모듈을 통한 파일 읽기와 console.log()를 통한 출력을 했는데 강사님이 소개해주신 code runner확장자가 루트폴더가 아닌곳에서 실행한 fs모듈 사용시 경로 오류를 일으키는것 같다 이에 대한 해결 방법을 꽤 많이 찾아봤으나 C++에 대한 대답이 주류여서 해결하지 못하였다.  
따라서 입출력 실습의 확인은 node 'js파일명' 명령어를 통해 실행했다. 
- 변수와 상수에 차이를 공부했다. 
- 호이스팅에 대해 알게되었다. 예전에 JS를 처음배울때 변수 선언을 var로 하라고 배웠었는데 현재는 let을 권장하고 있다. 하지만 나는 let과 var를 둘다 사용하면서 큰 차이를 느끼지 못했는데 호이스팅에 대해 알게되면서 let을 권장하는 이유를 알게되었다.
- 자료형과 객체타입에 대해 알게 되었다.
- 객체타입을 공부하며 객체의 복사에 대해 알게 되었다. 특히 얕은 복사와 깊은 복사에 대해 공부하면서 깊은 복사의 JSON을 이용해 문자열을 다시 객체로 만드는 복사를 보고 꽤 놀랐다.
- 형변환에 대해 공부하였다.  
- 산술연산자, 대입연산자, 비교논리 연산자에 대해 공부하게 되었다.  
- scope에 대해 배웠다. scope는 JS를 공부하면서 처음 접하게 되었는데 실제로 이것을 사용해본적이 없어 상당히 흥미롭게 보며 배웠다.
- 조건문 if와 switch를 공부했다.

## 학습 결과물
학습 결과물은 같이 포함된 파일에 동봉되었으며 각 TIL의 목록별 소제목에 링크가 달려있다.

### 강의 학습 현황

\> 자바스크립트 기초문법 '강의소개' ~ '17. 연습문제' 

## 2021.09.26 [2일차]

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

## 2021.09.27 [3일차]
어제에 이어 자바스크립트 문법을 공부해 기초문법과정을 끝냈다.  
Collection과 iterator속성 Map, Set은 생소한 개념이였지만 막상 익혀보니 그렇게 어렵지 않았다. 남은것은 연습문제 풀기이다.  
TIL제출 후에 연습문제를 풀기 시작해서 내일 마무리한뒤 수학과정까지 해야겠다.

## 공부한 내용

- 배열에 값을 추가/삭제하는 등의 배열 조작법을 익혔다. 배열을 반복문을 통해 사용할 수 있다.  
- 배열을 탐색하는 메서드들을 익혔다.  
- 고차함수 sort, map, find, filter등을 배웠다. 특히 sort의 문제점과 한계점을 극복하는 방법을 배웠다.
- 객체의 틀을 미리 만들어 두고 쉽게 새 객체를 만들수 있는 생성자를 배웠다.
- Collection에 대해 배웠다.
- Map은 key-value형태로 자료를 저장할 수 있는 Collection이다.
- Set은 value만 사용하여 자료를 저장하는 Collection이다.
- Built-in객체 Math를 통해 여러 수학 함수를 사용할 수 있다. 이를 통해 수를 더 쉽게 다룰 수 있다.
- Built-in객체 Date를 통해 날짜를 가져오고 삽입하는등 여러 함수를 사용할 수 있다. 이를 이용해 benchmark로 여러 모듈의 성능 측정을 할 수 있다.
- 다차원 배열에 대해 배웠다. 주로 사용하는 다차원 배열은 2차원 배열이다.
- 2중 for문을 통해 2차원 배열을 모두 탐색할 수 있다.

## 학습 결과물
학습 결과물은 같이 포함된 파일에 동봉되었으며 각 TIL의 목록별 소제목에 링크가 달려있다.

### 강의 학습 현황

\> 자바스크립트 기초문법 '31. 배열조작' ~ '41. N차원 Array' 

## 2021.09.28 [4일차]

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