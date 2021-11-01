# 2021.10.21 [27일차]

오늘은 동적 계획법 문제를 중심으로 풀었다.  
동적 계획법을 사용할때 메모이제이션 기법으로 풀어보려고 했는데 아직 내가 메모이제이션을 완벽히 이해하지는 못한것 같다.  
메모이제이션을 실행할 배열을 만들긴 했는데 이를 재귀문 안으로 넣는것 자체가 조금 힘들었던것 같다. 결국 다른 방법으로 문제를 풀었다.  
못푼문제의 경우 출력에서의 문제가 있는것 같다 문제에서 요구하는 형태를 만들었으나 이를 리턴하면 빈 배열이 출력되고 있다.

## 공부한 내용

- 리트코드 문제풀이

## 학습 결과물
학습 결과물은 같이 포함된 파일에 동봉되었으며 각 TIL의 목록별 소제목에 링크가 달려있다.

### 강의 학습 현황

\> 리트코드 문제풀이

## 9. Palindrome Number
주어진 문자열이 대칭인지 판별하는 문제
```js
let isPalindrome = function(x) {
  let str = x.toString(); // 주어진 문자열
  let str2 = str.split('').reverse().join('');  // 문자열을 뒤집는다
  return str === str2; // 두개를 비교
};
```

## 53. Maximum Subarray
주어진 배열에서 연속된 요소들의 합중 최고값을 구한다
```js
let maxSubArray = function(nums) {
  // 연속된 배열속 합계
  // 음수로만 안간다면 +값
  let sum = 0;
  let max = 0;
  for(let i = 0; i < nums.length; i++){
    sum += nums[i];
    if(sum > max) max = sum;
    if(sum < 0) sum = 0;
  }
  
  // 음수로 이루어진 배열이 반례 -> 가장 큰 음수 하나만 출력
  if(max <= 0 && Math.max(...nums) !== 0){
    return Math.max(...nums);
  }
  
  return max;
};
```

## 70. Climbing Stairs
한칸 혹은 두칸씩만 움직일 수 있는 사람이 n개의 계단을 올라갈 수 있는 경우의 수
```js
// 메모이제이션으로 풀어보려했으나 실패
// 피보나치의 모형을 띄고 있다.
let climbStairs = function(n) {
  let d = new Array(n+1).fill(0);
  d[0] = 1;
  d[1] = 1;
  for(let i = 1; i <= n; i++){ // 피보나치로 풀었다
    d[i] = d[i-1] + d[i-2];
  };
  return d[n];
};

console.log(climbStairs(5));
```

## 118. Pascal's Triangle
파스칼 트라이앵글의 높이를 주면 높이만큼의 파스칼 트라이 앵글을 출력
```js
let generate = function(numRows) {
  let answer = [];
  
  for(let i = 0; i < numRows; i++){ // 높이
    let secArr = [];
    for(let j = 0; j < i+1; j++){ // 가로
      if(j === 0 || j === i) secArr.push(1); // 맨끝이면 1을 입력
      else secArr.push(answer[i-1][j-1] + answer[i-1][j]); // 그 외는 위층의 값을 가져와 구한다
    }
    answer.push(secArr);
  }
  return answer;
};
```

## 119. Pascal's Triangle II
파스칼 트라이 앵글의 높이값을 줄때 해당 높이의 행만 출력
```js
// 앞선 문제에서 코드를 일부 고치기만 하면 된다
let getRow = function(rowIndex) {
  let answer = [];
  
  for(let i = 0; i < rowIndex+1; i++){
    let secArr = [];
    for(let j = 0; j < i+1; j++){
      if(j === 0 || j === i) secArr.push(1);
      else secArr.push(answer[i-1][j-1] + answer[i-1][j]);
    }
    answer.push(secArr);
  }
  return answer[rowIndex];
};
```

## 121. Best Time to Buy and Sell Stock
배열을 일차별 주식의 가격을 나타낸다. 최고 수익을 올릴 수 있는 경우의 이익을 반환한다.  
이득을 볼 수 없으면 0을 반환
```js
let maxProfit = function(prices) {
  let buy = Number.MAX_SAFE_INTEGER; 
  let sell = 0;
  let max = 0;
  let profit = [];
  for(let i = 0; i < prices.length; i++){
    if(prices[i] > sell) sell = prices[i];
    if(prices[i] < buy) { // 새 최저 구매가가 생기면 모든것을 갱신
      buy = prices[i];
      sell = 0;
      max = 0;
    }
    profit.push(sell-buy); // 모든 구매-판매의 경우를 배열에 저장
  }
  return Math.max(...profit) > 0 ? Math.max(...profit) : 0; // 배열의 맥스값이 0보다 크면 출력 아니면 0을 반환
};
```

## 338. Counting Bits
배열의 인덱스를 이진수로 표현하고 그 이진수의 1의 갯수를 배열로 반환하는 문제
```js
let countBits = function(n) {
  let answer = [];
  
  for(let i = 0; i <= n; i++) answer.push(i.toString(2)); // 배열의 인덱스를 모두 이진수로 입력
  for(let i = 0; i <= n; i++){
    let count = answer[i].split('').filter((el)=> el === '1').length; // 해당 이진수중 1의 갯수를 다시 배열에 넣는다
    answer[i] = count;
  }
  
  return answer; // 배열을 반환
};
```

## 392. Is Subsequence
두 문자열이 주어질때 두번쨰 문자열에서 글자를 지워 첫번쨰 문자열을 만들수 있으면 true를 반환한다.
```js
let isSubsequence = function(s, t) {
  let pointer1 = 0;
  let pointer2 = 0; // 투포인터 사용
  
  let answer = true;
  
  while(true){
    if(pointer1 === s.length) break; // 첫번째 포인터가 끝까지 가면 break
    if(pointer2 === t.length && pointer1 < s.length) { // 두번째 포인터가 끝까지 가고 첫번째 포인터가 끝까지 못갔다면 false
      answer = false;
      break;
    }
    
    if(s[pointer1] === t[pointer2]){ // 두 문자열의 철자가 같으면 포인터가 같이 이동
      pointer1++;
      pointer2++;
    }else pointer2++; // 아니라면 포인터2만 이동
  }
  return answer;
};
```

## 509. Fibonacci Number
피보나치 수열을 만드는 문제, 메모이제이션 문제였으나 구현에 실패했다.
```js
let fib = function(n) {
  let answer = new Array(n+1).fill(0);
  for(let i = 1; i <= n; i++){
    if(i <= 2) answer[i] = 1;
    else answer[i] = answer[i-1] + answer[i-2];
  }
  return answer[n];
};
```