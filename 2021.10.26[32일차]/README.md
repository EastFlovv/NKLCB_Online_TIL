# 2021.10.26 [32일차]

leetCode medium문제풀이  
stack문제인데도 이중 for문으로 푼 문제도 있다.  
medium난이도를 극복하기 위해 Monotonic Stack에 관해 공부 해봐야 할것같다.

## 공부한 내용

- 리트코드 문제풀이 Medium 난이도 도전

## 학습 결과물
학습 결과물은 같이 포함된 파일에 동봉되었으며 각 TIL의 목록별 소제목에 링크가 달려있다.

### 강의 학습 현황

\> 리트코드 문제풀이

## 739. Daily Temperatures
날짜별 기온이 적힌 배열을 받는다.  
당일보다 더 높은 기온이 나오는 일차까지의 거리를 배열로 반환할것
```js
let dailyTemperatures = function(temperatures) {
  let arr = new Array(temperatures.length).fill(0); // 0으로 초기화
  
  for(let i = 0; i < arr.length-1; i++){ // 이중 for문 사용
    for(let j = i+1; j < arr.length; j++){
      if(temperatures[j] > temperatures[i]) { // 자신보다 높은 값이 나오면 배열에 거리를 추가
        arr[i] = j-i;
        break; // break로 해당 요일 탈출
      }
    }
  }
  return arr;
};
```

## 901. Online Stock Span
자신의 앞선 요소중 자기보다 작거나 같은 수의 갯수를 배열로 반환
```js
let StockSpanner = function() {
  this.stack = new Array(); // 스택선언
};

StockSpanner.prototype.next = function(price) {
  let span = 0; // 거리
  this.stack.push(price); // 스택에 price입력
  this.stack.forEach((el)=>{ // 모든 요소 탐색
    if(el <= price) span++; // 자신보다 작거나 같은 값을 만나면 span +1
    else if(el > price) span = 0; // 큰값을 만나면 span은 0
  });
  return span; //span을 리턴
};
```

## 962. Maximum Width Ramp
수의 배열중 자신의 값보다 이후에 나오는 값이 큰 경우 길이를 늘린다.  
이때 최대 길이를 반환하는 문제

```js
let maxWidthRamp = function(nums) {
  let leng = 0;
  let max = 0;
  for(let i = 0; i < nums.length-1; i++){ // 이중 for문 사용
    for(let j = i+1; j < nums.length; j++){
      if(nums[j] >= nums[i]) {
        leng = j; // 자신보다 크면 leng을 증가
        if(max < j-i) max = j-i; // 최대값 갱신
      }
    }
    leng = 0; // 기준 위치가 바뀌면 leng을 0으로 초기화
  }
  return max;
};
```

## 1190. Reverse Substrings Between Each Pair of Parentheses
괄호를 기준으로 글을 역순 출력하는 문제
```js
let reverseParentheses = function(s) {
  let stack = []; // 스택
  let str = []; // 글 저장
  let letter = null;
  for(let i = 0; i < s.length; i++){
    if(s[i] === ")"){ // 닫는 괄호일때
      while(letter !== "("){ // 여는 괄호가 나올때까지 반복
        letter = stack.pop(); // letter는 stack에서 pop한 값
        if(letter === "(") continue; // 여는 괄호면 continue
        str.push(letter); // str에 값을 더한다
      }
      stack.push(...str); // 더한값을 스택에 다시 넣는다 (스택구조상 뒤집혀서 나옴)
      str = []; // str 초기화
      letter = null; // letter 초기화
    }else{
      stack.push(s[i]); // 여는괄호가 아니면 모조리 push
    }
  }
  return stack.join('') // 합쳐서 문자열로 반환
};
```