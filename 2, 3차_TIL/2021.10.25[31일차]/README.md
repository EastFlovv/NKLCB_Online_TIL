# 2021.10.25 [31일차]

leetCode에서 medium문제 풀이를 했다.  
올라간 난이도 때문에 문제의 정답률이 많이 내려가고 한 문제를 푸는데도 시간이 많이 걸리기 시작했다.  
지금은 stack풀이를 하는데 문제들이 죄다 알것 같으면서도 뭔가 한걸음 부족한 느낌이다.  
내일은 오늘 못푼문제들을 다시 한번 풀어봐야할것같다. 오늘은 컨디션이 안좋은지 제대로 머리가 돌지 않는다.

## 공부한 내용

- 리트코드 문제풀이 Medium 난이도 도전

## 학습 결과물
학습 결과물은 같이 포함된 파일에 동봉되었으며 각 TIL의 목록별 소제목에 링크가 달려있다.

### 강의 학습 현황

\> 리트코드 문제풀이

## 581. Shortest Unsorted Continuous Subarray
배열안에서 크기순으로 정렬되지 않은 연속 배열이 포함되어 있을수도 있다.  
이 부분의 크기를 반환하는 문제 없다면 0을 반환
```js
 let findUnsortedSubarray = function(nums) {
  let answer = 0;
  let start = false;
  let Sidx = 0;
  let Eidx = 0;
  let arr = new Array(...nums);
  arr.sort((x,y)=> x-y); // 새 배열은 정렬을 하여 기존 배열과 비교한다
  while(arr.length !== 0){ // 두 배열을 pop하며 비교
    let AP = arr.pop();
    let NP = nums.pop();
    if(AP !== NP && !start) { // 처음으로 다르면 시작인덱스를 저장
      Sidx = arr.length;
      start = true; // 재배열 시작 
    }
    if(AP !== NP && start) Eidx = arr.length; // 마지막으로 틀리는 지점을 끝 인덱스로 저장
    // 처음 틀리는 지점, 마지막 틀리는 지점의 인덱스 값으로 구하기
  }
  if(Sidx !== 0 || Eidx !== 0) answer = Sidx - Eidx + 1; // 두 수의 차이로 값을 구한다
  else answer = Sidx - Eidx;
  return answer;
};

findUnsortedSubarray([2,6,4,8,10,9,15]);
```

## 678. Valid Parenthesis String
주어진 문자열은 (, ), *을 가지고 있다 *은 (, )와 공백으로 치환될 수 있으며 주어진 문자열이 완벽한 괄호쌍을 가지면 true 아니라면 false를 반환하는 문제
```js
 let checkValidString = function(s) {
  let answer = true;
  let stack1 = []; // 괄호를 저장하는 스택
  let stack2 = []; // 별을 저장하는 스택
  for(let i = 0; i < s.length; i++){
    if(s[i] === '(') stack1.push(i); // 여는 괄호는 저장
    else if(s[i] === '*') stack2.push(i); // 별은 무조건 저장
    else if(s[i] === ')' && stack1.length !== 0) stack1.pop(); // 닫는 괄호라면 stack1을 pop
    else if(s[i] === ')' && stack1.length === 0 && stack2.length !== 0) stack2.pop(); // stack1이 비어있는데 닫는 괄호가 나오면 stack2를 pop
    else { // 위의 조건을 실행 할 수 없다면 false
      answer = false;
      break;
    }
  }
  
  if(stack1.length > stack2.length) answer = false; // 여는 괄호가 *의 수보다 많으면 false
  while(stack1.length !== 0){ // stack1을 비울때까지 반복
    if(stack1.pop() > stack2.pop()) { // stack1의 인덱스 값이 stack2보다 크면 논리적으로 불가능한 괄호이다 false
      answer = false;
      break; 
    }
  }
  
  return answer;
};
```

## 못푼 문제 리뷰

## 402. Remove K Digits
숫자 문자열과 지워야할 글자수 K를 준다.  
이떄 숫자에서 K개의 글자를 제거한 후의 최소값을 출력하는 문제
```js
let removeKdigits = function(num, k) {
  let stack = [];
  stack.push(Number(num[0])); // 스택에 수를 채운다

  for(let i = 1; i < num.length; i++){
    let now = Number(num[i]);
    if(stack[stack.length-1] <= now) stack.push(now);
    else { // 현재 넣어둔 수가 새로 넣을 수보다 크면 pop하고 push
     stack.pop();
     stack.push(now);
      k--;
    }
    
    // 문제 되는 부분 21을 넣으면 1이 되는것이 아니라 10이 출력된다.
    if(k === 0 || i !== num.length-1) {
      stack.push(Number(num.substr(i+1)));
      break;
    }
  }

  while(k > 0){
    stack.pop();
    k--;
  }


  // console.log(stack);
  // console.log("" + Number(stack.join('')));
  if(stack.length === 0) return "0";
  else return "" + Number(stack.join(''));
};
```

## 456. 132 Pattern
주어진배열이 1,3,2의 크기순 패턴을 가지고 있는지 확인 하는 문제
```js
 let find132pattern = function(nums) {
 
  let answer = false;
  
  for(let i = 1; i < nums.length-1; i++){
    num1 = Math.min(...nums.slice(0, i)); // 기준값을 기준으로 왼쪽은 최솟값을 고르면 된다.
    // 반대로 우측은 최댓값을 고르면 될 줄 알았다. 우측의 최댓값이 기준값보다 크면 생기는 문제를 해결하지 못했다. filter를 통해 지워보려 했으나 잘 되지 않았다.
    num2 = Math.max(...(nums.slice(i+1, nums.length).filter(el=>el<nums[i])));
    
    if(num1 < nums[i] && nums[i] > num2 && num1 < num2) {
      answer = true;
      break;
    }
  }
  
  
  return answer;
  
};
```

## 735. Asteroid Collision
주어진 배열은 양수가 -> 방향으로 음수가 <- 방향으로 움직이는 운석의 수를 나타낸다.  
두 운석이 부딪힐때 수가 같으면 둘다 사라지고 수가 다르면 작은쪽이 사라진다.  
남는 운석의 배열은?
```js
// 두가지 방법을 시도해보았으나 둘다 실패
let asteroidCollision = function(asteroids) {
  let answer = [];
  let state = false;
  
//   for(let i = 0; i < asteroids.length; i++){
//     if(state === false) answer.push(asteroids[i]); // 음수 시작 처리
//     if(answer[answer.length-1] > 0) state = true; // 양수가 들어오면 어느 한쪽은 같이 살 수 없다 음수가 다 죽이지 않는한
//     if(state) { // state가 true일때
//       if(answer[answer.length-1]) state = false; // 음수가 되면 다시 false
//       if(asteroids[i] > 0) answer.push(asteroids[i]); // 양수는 계속 넣는다.
//       if(asteroids[i] < 0){ // 음수가 들어오면
//         if(Math.abs(asteroids[i]) === answer[answer.length-1]) asnwer.pop(); // 같으면 둘다 삭제
//         if(Math.abs(asteroids[i]) > answer[answer.length-1]) { // 음수가 더 크면 일단 삭제
//           answer.pop();
//         }
//         if(Math.abs(asteroids[i]) < answer[answer.length-1]) continue;
//       }
//     }
    
    
//   }
  
  for(let i = 0; i < asteroids.length; i++){
    if(answer.length !== 0 && answer[answer.length-1] > 0 && asteroids[i] < 0){
       if(answer[answer.length-1] > asteroids[i] * -1) continue;
       if(answer[answer.length-1] === asteroids[i] * -1) answer.pop();
       if(answer[answer.length-1] < asteroids[i] * -1) {
         answer.pop();
         answer.push(asteroids[i]);
       }
    }else answer.push(asteroids[i]);
  }
  //연속된 값의 처리?
  //일차적으로 부딪히는 운석간의 처리는 성공했으나 그 다음에 남은 운석끼리 부딪힐떄의 결과를 도출해내지 못하고 있다
  
  return answer;
};
```

## 880. Decoded String at Index
문자와 숫자로 이루어진 문자열이 들어온다.  
숫자는 각각 한자리만 대표하며 문자열이 숫자만큼 반복됨을 의미한다.  
그렇게 완성한 문자열의 J번째 글자를 반환하는 문제이다.
```js
// 예제는 통과했으나 문자열이 지나치게 길어질 경우 런타임 에러가 발생한다. 해결법을 찾지못해 미루고 만 문제
let decodeAtIndex = function(s, k) {
  let answer = '';
  let str = '';
  let stack = [];
  for(let i = 0; i < s.length; i++){
    if(isNaN(Number(s[i]))) str += s[i];
    else {
      str = str.repeat(Number(s[i]));
      // console.log(str);
    }
    if(str.length > k) { // 지나친 입출력예외조건
      answer = str[k-1];
      break;
    }
  }
  answer = str[k-1];
  return answer;
};
```