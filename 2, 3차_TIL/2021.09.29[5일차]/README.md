# 2021.09.29 [5일차]

오늘은 코딩을 하기위해 필요한 수학개념에 대해 알게되었다.  
고등학교때 잠깐 보고 지나간 순열과 조합도 다시 공부하게 되었고 재귀를 이용한 점화식의 사용을 할 수 있게 되었다.  
빅오 표기법의 경우 원래 알고는 있었지만 이번 강의를 통해 좀 더 쉽게 이해하게 됬다.
그 외에는 모두 문제풀이였는데 바로 해답을 보지않고 문제를 풀려고 하다보니 시간이 오래걸려 목표한 수학단원 끝내기엔 실패했다.

## 공부한 내용

- 빅오표기법에 대해 공부했다.  
시간복잡도는 낮을 수록 좋다. n^2이상의 복잡도는 사용하지 않는것이 좋다.
- 순열과 조합을 통해 경우의 수를 쉽게 구할수 있게 되었다.
- 재귀를 이용한 점화식으로 비슷한 작업의 반복을 시간 복잡도를 높이지 않고 진행할 수 있다.
- 자바스크립트의 특수한 문법인 구조분해 할당에 대해 알게되었다.  
강의 진행중에 이해가 되지 않는 코드여서 직접 찾아보았다.
- 실전 문제 풀이를 진행하며 삼항연산자를 많이 연습할 수 있었다. 
- `repeat()`메서드에 대해 알게되었다. 코드 최적화가 중요하다는것을 알게되었다.

## 학습 결과물
학습 결과물은 같이 포함된 파일에 동봉되었으며 각 TIL의 목록별 소제목에 링크가 달려있다.

### 강의 학습 현황

\> 자바스크립트 수학 '1. Overview' ~ '16. 실전 문제 풀이(기본)' 직사각형 별찍기

## 기본 수학이론
이번 단원에선 알고리즘 복잡도(시간복잡도), 경우의 수 (순열과 조합), 점화식을 배운다.  

- 알고리즘 복잡도 (시간 복잡도)  
입력 크기의 값에 대해 단위연산을 몇 번 수행하는지 계산하여, 알고리즘의 수행시간을 평가하는 방법이다.  

- 경우의 수  
어떤 사건 혹은 일이 일어날 수 있는 경우의 가짓수를 수로 표현한다.
완전탐색으로 경우의 수를 푸는 알고리즘으로는 순열, 조합, 중복순열등이 있다.

- 점화식  
점화식(재귀식)이란 수열에서 이웃하는 두개의 항 사이에 성립하는 관계를 나타내는 관계식이다.

## 알고리즘 복잡도

- 알고리즘 평가지표
  - 정확성
  - 작업량
  - 메모리사용량
  - 최적성
  - 효율성 (시간복잡도, 공간복잡도)

### 시간복잡도
입력 크기의 값에 대해 단위연산을 몇 번 수행하는지 계산하여, 알고리즘의 수행시간을 평가하는 방법이다.  
- 3가지 점근적 표현법  
O(빅오) : 최악의 상황을 고려하여 성능 측정 결과 표현  
&Theta;(세타) : 평균적인 경우에서의 성능 ㅈ측정 결과 표현  
&Omega;(오메가) : 최선의 상황일떄의 성능 측정 결과 표현  


좋음 | O(1) - O(log n) - O(n) - O(n log n) - O(n^2) - O(2^n) - O(n!) | 나쁨

### 빅오 표기 예제
```js
function big_o(n){
  let sum = 0; // 1회
  sum = n *2; // 1회
  return sum; // 1회
}
  // 3회(상수) -> O(1)
```

```js
function big_o(arr, n){
  let sum = 0; // 1회
  for (let i = 0; i < arr.length; i++) { // n회
    sum += arr[i];
  };
  return sum; // 1회
}
  // n+2-> O(n)
```

```js
function big_o(arr, n){
  let sum = 0; // 1회
  for (let i = 0; i < arr.length; i++) { 
    for (let j = 0; j < arr.length; j++) { // n*n = n^2
      sum += arr[i][j];      
    };
  };
  return sum; // 1회
}
  // n^2 + 2-> O(n^2)
```

```js
function big_o(n){
  let sum = 0; // 1회
  for (let i = 0; i < arr.length; i*2) { // n/2회
    sum += arr[i];
  };
  return sum; // 1회
}
  // n/2+2-> O(log n)
```

## 경우의 수
어떤 사건 혹은 일이 일어날 수 있는 경우의 가짓수를 수로 표현한다.  

- 완전탐색으로 경우의 수를 푸는 알고리즘  
  - 순열: 서로다른 n개의 원소중에서 r을 중복없이 골라 순서에 상관있게 나열하는 수 (nPr)  
  - 조합: 사로 달ㄴ n개의 원소중에서 r을 중복없이 골라 순서에 상관없이 나열하는 경우의수   (nCr)
  - 중복순열: 서로다른 n개의 원소중에서 r개를 중복있게 골라 순서에 상관있게 나열하는 경우의 수 (nH)  

## 순열
서로다른 n개의 원소중에서 r개를 중복없이 골라 순서에 상관있게 나열하는 경우의 수(nPr)
재귀와 for문을 통해 구현 가능, 보통 재귀를 많이 이용한다.
```js
// 재귀를 이용한 순열
let input = ['a', 'b', 'c'];
let count = 0;

// s = 시작 인덱스, r = 끝 인덱스
function permutation2(arr, s, r){
  // 재귀 종료 조건
  if(s == r){
    count++;
    console.log(arr);
    return;
  };
  // 재귀
  for (let i = s; i < arr.length; i++) {
    // JS표현식: 구조 분해 할당
    [arr[s], arr[i]] = [arr[i], arr[s]]; // swap
    permutation2(arr, s+1, r);
    [arr[s], arr[i]] = [arr[i], arr[s]]; // 복귀
  };
};

permutation2(input, 0 ,2);
console.log(count); // 6
```

## 조합
서로다른 n개의 원소중 r을 중복없이 골라 순서에 상관없이 나열하는 경우의 수(nCr)

```js
// 재귀를 이용한 조합
let input = [1, 2, 3, 4]; // 4C2
let count = 0;
let output = [];
count = 0;
function combination2(arr, data, s, idx, r){
  if(s==r) {
    count++;
    console.log(data);
    return;
  };
  for (let i = idx; arr.length-i >= r-s; i++) {
    data[s] = arr[i];
    combination2(arr, data, s+1, i+1, r);
  }
};

combination2(input, output, 0, 0, 2);
console.log(count); // 6
```

## 점화식 (재귀식)
[recurrence.js를 통해 점화식 예제를 확인하기](./recurrence.js)
점화식(재귀식)이란 수열에서 이웃하는 두개의 항 사이에 성립하는 관계를  나타내는 관계식이다.
- 대표적 점화식  
  - 등차수열: F(n) = F(n-1) + a
  - 등비수열: F(n) = F(n-1) * a
  - 팩토리얼: F(n) = F(n-1) * n
  - 피보나치 수열: F(n) = F(n-1) + F(n-2)


## 기본문제풀이
[수학 - 7강 문제풀이 링크](./question07.js)  
[수학 - 8강 문제풀이 링크](./question08.js)

##  실전 10번
형변환에 대해 물어보는 문제였다.  
풀이는 아래와 같다.  
```js
function solution(s) {
    let answer = Number(s);
    return answer;
}
```

## 실전 11번
짝수 홀수의 판별에 관한 문제이다.  
```js
function solution(num) {
    if(num%2 == 0)
        return 'Even';
    else return 'Odd';
}
```

## 실전 12번

`Date()`를 사용하는 문제이다. 나의 풀이는 주석처리 해두었다.
```js
function solution(a, b) {
    let day = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    let date = new Date(2016, a-1, b);
    // 나의 코드
    // let str ='2016';
    // a<10?a = '-0'+a:a = '-'+a;
    // b<10?b = '-0'+b:b = '-'+b;
    // str = str + a + b;
    // let date = new Date(str);
    return day[date.getDay()];
}
```

## 실전 13번
중복을 제거하고 조건에 맞는 수를 출력하는 문제이다.  
```js
function solution(nums) {
    let max = nums.length/2;
    let set = new Set(nums);
    // 종류의 수를 구해야 하므로 최대 가져갈 수 있는 수가 포켓몬의 종류보다 많다면
    // 포켓몬의 종류 수를 리턴, 아니면 맥스값을 리턴
    return max>set.size?set.size:max;
}
```

## 실전 14번
문자열을 다루는법에 대해 물어보는 질문이다.  
```js
function solution(s) {
  // 문자열을 자르는법중 substr사용
  return s.substr(Math.round(s.length/2)-1, s.length%2 == 0 ? 2 : 1);
}
```

## 실전 15번
정렬에 관련된 문제이다. `sort()`에 대한 공부가 더 필요할것 같다.
```js
function solution(strings, n) {
    return strings.sort((x, y)=>{
        return x[n] == y[n] ? (x > y ? 1 : -1) : (x[n] > y[n] ? 1 : -1)
    });
}
```

## 실전 16번
반복문을 통해 별을 찍는문제, 이중 for문의 사용에 관한 문제이다.  
코드 최적화에 관해 알게 되었다.
```js
process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
    
    for(let i = 0; i < b; i++){
        let str = '';
        for(let j = 0; j < a; j++){
            str += '*';
        }
        console.log(str);
    }
    // 최적화
    // const star = '*'.reapeat(a);
    // for(let i = 0; i < b; i++)
    //  console.log(star);

});
```