# 2021.10.06 [13일차]

오늘은 leetcode홈페이지로 가서 Stack과 연결리스트 문제를 풀었다.  
외국 사이트라 모두 영어로 되있는게 처음엔 좀 당황스러웠지만 그렇게 어려운 설명이 있지는 않았고 오히려 몇몇 문제의 경우 솔루션을 제공하기도 하고 본인이 직접 테스트케이스를 입력해 볼수 있는 등 아주 편리하고 다양한 정보를 제공해주는 코딩 연습사이트였다.  
스택을 통해 괄호찾기같은 기본문제를 비롯해 빗물받기와 같은 특이한 문제까지 풀어볼수 있었다.  
입출력이 까다롭고 문제가 적은 백준에 비해 훨씬 좋은 사이트 같다.

## 공부한 내용

- 2진수를 10진수로 바꿀때 지나치게 큰 2진수의 경우 오버플로우가 발생하여 값이 제대로 출력되지 않을수 있으니 string형태에서 변환해야한다.  
- 주어진 조건에 따라 스택과 연결리스트를 작성 할 수 있다.  
- 배열검사의 경우 균형이 맞지 않는 경우 굳이 특별한 조작을 하지않고 값을 push해버려 배열이 빈 배열이 되지 못하게 해 구별 할 수 있다.
- 배열의 높이에 따라 그 사이의 공간을 구하는 경우 이중 반복문을 사용시 시간이 너무 오래걸려 시간초과가 났다.  
따라서 O(n)의 시간복잡도를 가진 코드를 작성해 높이값을 두개의 변수로 컨트롤 해 구했다. (스택 42번)
- 스택의 경우 배열의 형태를 갖기에 커스텀 스택도 쉽게 제작가능
- 연결리스트의 경우 값을 이동 시켜야 할때 생각보다 많은 조작이 필요하다.  
매번 노드를 넣어 작성하려고 시도 했지만 지나치게 복잡해져 배열을 이용해 손쉽게 풀었다.(연결리스트 1472번)



## 학습 결과물
학습 결과물은 같이 포함된 파일에 동봉되었으며 각 TIL의 목록별 소제목에 링크가 달려있다.

### 강의 학습 현황

\> 자바스크립트 스택, 연결리스트 문제 풀이 (leetCode)


## 스택 leetCode 20번
```js
// 전형적인 괄호검사 문제이다.
 let isValid = function(s) {
  let stack = [];
  for(let i =0; i <s.length; i++){
    let mark = s[i];
    if(mark == '(' || mark == '[' || mark == '{')  // 여는 괄호면 push
      stack.push(mark);
    else{
      if(mark == ')'){ // 짝이 있는 닫는 괄호는 pop
        if(stack[stack.length-1] == '(')
          stack.pop();
        else
          stack.push(mark); // 짝이 없다면 push
      }else if(mark == ']'){
         if(stack[stack.length-1] == '[')
          stack.pop();
        else
          stack.push(mark);
      }else{
         if(stack[stack.length-1] == '{')
          stack.pop();
        else
          stack.push(mark);
      }
    }
  }
  if(stack.length != 0) // 배열의 길이가 0이 아니면 불완전 괄호이므로 false
    return false;
  else return true; // 0이면 true
};
```

## 스택 leetCode 42번
```js
// 배열이 가지는 높이에 따라 생기는 틈에 빗물이 몇칸 쌓이는지 알아내는 문제
let trap = function(height) {
  let water = 0; // 물의 총량
  let r = height.length-1; // 우측에서 이동
  let l = 0; // 좌측에서 이동
  let r_max = 0; // 우측 최고높이
  let l_max = 0; // 좌측 최고높이
  
  while(l<r){
    if(height[l] < height[r]){ // 왼쪽 높이가 오른쪽 높이보다 작으면 왼쪽 이동
      //left
      if( height[l] >= l_max){ // 현재 배열값이 최대값보다 높으면 최대값 갱신
        l_max = height[l];
      }else{ // 그렇지 않다면 최고 높이와 현재 높이의 차이를 물에 저장
        water += l_max - height[l];
      }
      l++; // 좌측 이동
    }else{ // 우측기준 이동
       if(height[r] >=r_max){ // 배열값이 최대 보다 높으면 갱신
        r_max = height[r];
      }else{
        water += r_max - height[r]; // 그렇지 않다면 물 저장
      }
      r--; // 우측 이동
    }
    
  }
  return water; // 물의 총량 출력
};
```

## 스택 leetCode 442번
```js
// 중복된 수 찾기, 시간복잡도는 O(n)으로 제한
let findDuplicates = function(nums) {
  // 입력받은 배열을 정렬한다.
  nums = nums.sort((x, y)=> x-y);
  let answer = [];  // 새 배열
  for(let i = 0; i < nums.length-1; i++){ //전체길이-1 만큼 탐색
    if(nums[i] === nums[i+1]) // 현재값이 다음값과 같다면
      answer.push(nums[i]); // 새 배열에 현재값 추가
  }
  return answer; // 값을 출력
};
```

## 스택 leetCode 1021번
```js
//제일 외각의 괄호를 버리고 내부의 괄호를 출력 (()) -> ()
let removeOuterParentheses = function(s) {

let stack =[];
let answer = [];
let str = '';

for(let i=0; i < s.length; i++){ 
  if(s[i] == '('){ // 여는괄호이면
    stack.push('('); // 스택에 추가
    answer.push('('); // 답으로 제출할 배열에도 추가
  }else{ // 여는 괄호가 아니면
    stack.pop(); // 스택 pop
    answer.push(')'); // 답 배열에도 추가
    if(stack.length === 0){ // 스택의 길이가 0이라면 완전히 닫힘
      answer.pop(); // 맨 뒤값 제거
      answer.shift(); // 맨 앞값 제거
      str += answer.join(''); // 문자열로 변환하여 삽입
      answer = []; // 배열 초기화
    }
  }
}
return str; // 문자열 출력
};
```

## 스택 leetCode 1381번
```js
// 커스텀 스택
let CustomStack = function(maxSize) {
  this.maxSize = maxSize; // 배열과 맥스 사이즈 선언
  this.array = [];
};

CustomStack.prototype.push = function(x) { // push명령
  if(this.array.length < this.maxSize) // 길이가 최대길이보다 작을때 push한다
    this.array.push(x);
};

CustomStack.prototype.pop = function() {
  if(this.array.length === 0){ // 스택이 비었을떄 pop하면
    return -1; // -1반환
  }else{
    return this.array.pop(); // 비지 않았으면 pop
  }
};


CustomStack.prototype.increment = function(k, val) {
  if(k > this.array.length){ // k가 스택보다 길면
    for(let i = 0; i < this.array.length; i++){ // 스택만큼 반복
      this.array[i] += val; // 모든 요소에 val을 더한다
    }
  }else{
    for(let i = 0; i < k; i++){ // k만큼 반복하면서
      this.array[i] += val; // val을 더한다
    }
  }
};
```

## 스택 leetCode 1614번
```js
// 주어진 조건에 맞추어 작동하는 예시를 보고 함수를 완성할것
let maxDepth = function(s) {
  // 괄호의 깊이를 구하는 문제
  let stack = [];
  let number = 0;
  for(let i = 0; i < s.length; i++){ //전체 탐색
    let mark = s[i];
    if(mark ==='('){ // 열린 괄호열은 push
      stack.push(mark);
      if(stack.length > number) number = stack.length; // 스택의 길이가 최대길이가 되면 number값 갱신
    }else if(mark === ')'){
      if(stack[stack.length-1] === '('){
        stack.pop(); // 닫힌 괄호는 pop한다
      }
    }
  }
  return number; // number가 최대 깊이, 반환한다
};
```

## 연결리스트 leetCode 1290번
```js
// 주어진 배열의 수를 하나로 합쳐 얻은 2진수를 10진수로 반환하는 문제
 let getDecimalValue = function(head) {
  let str = ''; 
  while(head != null){ // 연결리스트가 null이 아니라면 반복
    str += head.val; // head의 value를 str에 입력
    head = head.next; // 헤드를 다음 노드로 이동
  };
  // console.log(str);
  return parseInt(str, 2); // 주어진 문자열을 10진수로 변환한다.
};
```

## 연결리스트 leetCode 1669번
```js
// 입력받은 두 값 사이의 list1의 노드를 제거하고 사이에 list2 연결리스트를 끼워 넣어 반환한다.
let mergeInBetween = function(list1, a, b, list2) {
  
  let head = list1; // 헤드에 리스트1을 추가
  let count = 0; // count는 0
  
  while(count++ !== a-1){ // couunt가 a보다 1작을때 까지 반복
    list1 = list1.next; // list1 는 다음 노드로 이동
  };
  
  let back = list1.next; // back에 남은 리스트를 저장
  list1.next = list2; // list1에 list2를 붙인다
  
  while(count++ != b+1){ // back을 b+1까지 진행
    back = back.next;
  };
  while(list1.next !== null){ // list1을 끝까지 진행
    list1 = list1.next;
  };
  
  list1.next = back; // list1의 뒤에 back노드를 붙인다
  return head; // head를 반환
};
```

## 연결리스트 leetCode 1472번

```js
/**
 * @param {string} homepage
 */
 var BrowserHistory = function(homepage) { // 새성자 히스토리
  this.homepage = [homepage]; // 홈페이지는 배열
  this.cur = 0; // 커서
};

BrowserHistory.prototype.visit = function(url) {
  if(this.cur+1 != this.homepage.length){ // 만약 커서 +1이 홈페이지 배열의 길이와 다르다면
    this.homepage.splice(this.cur+1); // 홈페이지 배열의 커서뒤쪽을 다 잘라낸다
  }
  this.homepage.push(url); // url을 배열에 넣는다
  this.cur++; // 커서 +1
  // console.log(this.homepage);
};

/** 
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.back = function(steps) {
  for(let i =0; i < steps; i++){ // 주어진 steps만큼 반복
    if(this.cur == 0){ // cur가 0이면 break (뒤로 갈곳이 없음)
      break;
    }
    this.cur--; // cur를 -1
  }
  return this.homepage[this.cur]; // 이동한 페이지를 반환한다
};

/** 
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.forward = function(steps) {
   for(let i =0; i < steps; i++){ // steps만큼 반복
    if(this.cur == this.homepage.length-1){ // 더 앞으로 갈 수 없다면 break
      break;
    }
    this.cur++; // cur를 +1
  }
  return this.homepage[this.cur]; // 이동한 페이지를 반환한다
};
```