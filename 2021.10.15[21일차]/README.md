# 2021.10.15 [21일차]

오늘은 알고리즘의 마지막 단계인 실전문제풀이를 진행했다.  
정기테스트로 풀고 있는 문제들과는 난이도가 너무나도 달라 푸는데 어려움을 많이 겪었고 몇가지 문제는 결국 풀지 못했다. 또, 이전에 보았던 문제들의 테스트 케이스를 제공 받았는데 방법이 맞았을지라도 푸는 방법이 틀려 큰 수를 넣으면 시간이 너무나도 오래걸리는 케이스가 생긴 문제가 있다.  
문제에 시간 제한이 없다보니 주어진 예시조건을 만족하는 코드를 짜서 냈는데 결국은 내 스스로도 그러한 문제를 맞췄다고 하기엔 무리가 있다고 생각한다.  
코딩 연습을 더 해서 다양한 알고리즘의 사용법을 익혀야겠다.

## 공부한 내용

- 실전문제풀이 진행

## 학습 결과물
학습 결과물은 같이 포함된 파일에 동봉되었으며 각 TIL의 목록별 소제목에 링크가 달려있다.

### 강의 학습 현황

\> 자바스크립트 알고리즘 '24. 문제풀이 - 별찍기10' ~ 알고리즘 '31. 실전문제풀이 - N으로 표현'

## 별찍기 10
재귀를 이용한 분할 정복으로 특수한 모양의 별을 찍는 문제
```js
// 분할정복, 재귀
function star(n, mat, x, y) {
  //종료조건
  if(n==1) { // 더 작게 나눌 값이 없는 상태이면 *을 찍는다
    mat[y][x] = "*";
    return;
  }
  
  // 분할 정복을 위해 크기를 분할한다
  let size = Math.floor(n/3); // 3^n -> 3^(n-1)

  //전체 영역을 3*3의 섹션으로 나누어 처리
  for (let j = 0; j < 3; j++) {
    for (let i = 0; i < 3; i++) {
      // 중앙 섹션은 통채로 스킵한다
      if(i == 1 && j == 1) continue; // 안찍는 조건 (해당 섹션을 통채로 스킵)
      // 중앙 섹션이 아니라면 분할정복 재귀를 실행
      star(size, mat, x+i*size, y+j*size);
    }
  }
}
function solution(n){
  // 배열선언
  let mat = new Array(n).fill(0).map(()=>new Array(n).fill(" "));
  // 재귀
  star(n, mat, 0, 0);
  for (let i = 0; i < n; i++) {
    console.log(mat[i].join(""));
  }

};
```

## 실전문제풀이 - 가장 큰 수
수의 배열이 주어질 때 배열의 값을 조합하여 가장 큰 수를 만드는 문제
```js
function solution(numbers) {
  // 배열의 정렬은 모두 문자열로 처리하므로 두 수의 비교시 앞, 뒤로 바꿔 붙여보고 더 큰 조합이 되는 수를 앞으로 뺀다.
  let answer = numbers.map((n)=> n+"").sort((x,y)=>(y+x)-(x+y)).join("");
  // 모든 수가 0 이여서 00000.. 과 같은 수가 나올 경우 0으로 split하여 빈 배열이 나오면 0을 반환하고 그렇지 않다면 수를 그대로 반환한다
  return answer.split(0).join("") ? answer : "0";
}
```

## 실전문제풀이 - H-Index
배열에는 수가 주어지고 해당 배열에 주어진 값A와 그 이상의 값이 A값 만큼 존재할때, 그러한 값 중 최대값을 H-Index로 규정하고 이 값을 반환하는 문제이다.
```js
function solution(citations) {
  let answer = 0;
  citations.sort((x,y)=>y-x); // 내림차순 정렬
  for(let i = 0; i < citations.length; i++){ 
      if(citations[i] >= i+1){ // 현재 값이 다음값보다 크다면 answer는 i의 보다 크다. (내림차순으로 정해졌기 때문)
          answer = i+1;
      }
  }
  // 내림차순 정렬 후 다음과 같은 코드를 통해 한줄로도 표현 할 수 있다 
  // while(answer + 1 <= citations[answer]) answer++;

  return answer;
}
```

## 실전문제풀이 - 입국심사
주어진 수의 사람이 각 배열에 흩어져 입국심사를 받는다.  
각 심사는 배열에 입력된 값만큼의 시간이 흐른후 통과되는데, 이때 전체 소요시간의 최솟값을 구하라
```js
// 이분탐색
function solution(n, times) {
  let high = n * Math.max.apply(null, times); // 최대 시간
  let low = 0; // 최소시간
  let mid, pass;
  
  while(low <= high){
      mid = Math.floor((low+high)/2); // 중앙값 세팅
      pass = times.reduce((sum, time)=> (sum += Math.floor(mid/time)), 0); // 심사관이 정해진 시간동안 몇명을 처리 할 수 있는지 pass에 업데이트
                          
      if(n <= pass) high = mid-1; //pass가 n보다 크거나 같으면 처리 할 수 있으므로 범위를 줄인다
      else low = mid+1; // 그렇지 않다면 계속 반복을 이어나간다
  }
  
  return low; // 반복이 끝나면 low를 반환
}
```

## 실전문제풀이 - 큰 수 만들기
주어진 수 number에서 k개만큼의 수를 빼내 최대값을 만드는 문제이다.
```js
function solution(number, k) {
  let stack = []; // 스택선언
  
  for(let i = 0; i < number.length; i++){ // 모든 수를 탐색한다
      while(stack.length !== 0 && stack[stack.length-1] < number[i]){
          stack.pop(); //스택이 비어있지 않고 스택이 다음값보다 작으면 stack 값을 제거
          
          if(--k == 0) // 주어진 수 만큼 뺏다면
              return stack.join("") + number.substr(i, number.length-1); //스택의 값과 number에 남은 수를 붙여서 리턴
      }
      stack.push(number[i]); // 스택에 비교를 위한 현재 값을담는다
  }
  
  return stack.join("").substr(0, stack.lenth-k); // 배열을 모두 탐색후에 이곳에 왔다면 스택에 남은값에서 남은 k만큼의 수를 뒤에서 잘라 리턴
}
```

## 실전문제풀이 - N-Queen
주어진 수 N이 있을때 N*N의 체스판에 N개의 퀸이 서로를 공격하지 않는 위치에 놓을 수 있는 경우의 수를 반환하는 문제이다.
```js
// Q = (row = 1, col = 0)
// col = 1, row = 3
// 1, 2 (1,1 or 2,2 처럼 동일값일 경우 같은 대각선상에 있음)

function isPossible(arr, row, col){ // 조건을 만족하지 않으면 진행 안함 (백트래킹)
  for(let c = 0; c < col; c++){
      if(arr[c] === row) return false; // 세로 판단
      if(Math.abs(c-col) === Math.abs(arr[c] - row)) return false; // 대각선 판단
  }
  return true; // 두 요건 통과시 true
}

function dfs(n, arr, col){ // 깊이우선탐색
  if(col === n) return 1; // col이 n값과 같다면 1을 리턴
  
  let ret = 0;
  for(let row = 0; row < n; row++){ // 각 행마다 하나씩 놓아봄
      if(isPossible(arr, row, col)){ // 놓을 수 있는 공간이면
          arr[col] = row; // arr[col]에 Queen을 둔다
          ret += dfs(n, arr, col+1); // 깊이 탐색 진행
      }
  }
  return ret;
}

function solution(n) {
  return dfs(n, [], 0);
}
```

## 실전문제풀이 - 쿼드 압축 후 개수 세기
별찍기와 같이 분할정복을 통해 통합가능한 영역을 하나로 통합 시켜 통합 이후 노드의 갯수를 반환하는 문제이다.
```js
function dac(answer, arr, n, x, y){
  let count = [0, 0]; //0과 1의 갯수
  for(let j = y; j < y + n; j++){ // n번 만큼의 순회
      for(let i = x; i < x + n; i++){ // n번 만큼 순회
          count[arr[j][i]]++; // 자기 수에 맞게 수를 올림
      }
  }
  if(count[0]===0){ // 1로 압축 가능할때
      answer[1]++;
      return;
  }
  if(count[1]===0){ // 0으로 압축 가능할때
      answer[0]++;
      return;
  }
  // 재귀로 분할정복 (주변 4칸을 검사한다)
  dac(answer, arr, Math.floor(n/2), x, y);
  dac(answer, arr, Math.floor(n/2), x + Math.floor(n/2), y);
  dac(answer, arr, Math.floor(n/2), x, y + Math.floor(n/2));
  dac(answer, arr, Math.floor(n/2), x + Math.floor(n/2), y + Math.floor(n/2));
}

function solution(arr) {
  let answer = [0, 0]; // 0,0에서 시작한다
  
  dac(answer, arr, arr.length, 0, 0);
  
  return answer;
}
```

## 실전문제풀이 - N으로 표현
주어진 수 N과 사칙연산만을 이용하여 목표값 number를 표현할때 N을 최소로 사용하는 수를 반환하는 문제
```js
function solution(N, number) {
  // 중복을 없애기 위해 set을 사용
  const s = new Array(9).fill(0).map(()=> new Set()); // N: 1~9
  
  for(let i = 1; i < 9; i++){
      s[i].add(Number("".padStart(i, N))); // n = 1 -> 5, n =2 -> 55 ... ""를 지우고 i를 N번 반복하여 채운다
      
      for(let j = 1; j < i; j++){ // 사용되는 수만큼 반복
          for(const arg1 of s[j]){  // arg1은 연속된 5의 값들 5, 55, 555...
              for(const arg2 of s[i - j]){ // 기존 값에 사칙연산을 한다
                  s[i].add(arg1 + arg2);
                  s[i].add(arg1 - arg2);
                  s[i].add(arg1 * arg2);
                  s[i].add(Math.floor(arg1 / arg2)); // 나머지 무시
              }
          }
      }
      if(s[i].has(number)) return i; // s[i]가 목표값을 소지하면 사용한 수의 갯수인 i를 반환한다
  }
  
  
  return -1; // 해당 목표값을 만들 수 없다면 -1을 반환
}
```