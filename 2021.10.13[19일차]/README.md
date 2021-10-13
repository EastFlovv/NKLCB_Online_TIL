# 2021.10.13 [19일차]

오늘은 내일의 정기 테스트와 2일뒤의 비정기 테스트를 대비한 문제풀이를 했다. 실제로 도전하다가 못 푼 문제도 많았고 성공하는데 오랜 시간이 걸리는 문제도 있었다.  
하지만 문제를 결국 풀어냄으로써 몇가지 헷깔리던 문제 유형에 대해 잘 알게 되었고 정확하게 이해하지 못했던 것들도 잘 알게되었다.  
직접 사용해보고 체험해봄으로써 이전에 풀지 못했던 문제를 풀 수 있게 되고 또 다른 영역에 있어서 이전에 시도하지 못했던 접근법의 접근하는게 매우 재미있다.  
실제로 풀지못한 문제중에는 파일로 남기지 않은 것도 많다.

## 공부한 내용


## 학습 결과물
학습 결과물은 같이 포함된 파일에 동봉되었으며 각 TIL의 목록별 소제목에 링크가 달려있다.

### 강의 학습 현황

\> leetCode문제풀이

## 릿코드 1번 two sum
강의 시간에 풀었던 문제로 기억한다. 배열 안에서 두 수를 더해 타겟값을 만들 수 있으면 두 수의 인덱스를 반환하는 문제
```js
 let twoSum = function(nums, target) {
  let answer = [];
  
  for(let i = 0; i < nums.length; i++){ // 이중 for문을 이용해 같은 배열 내의 두 수를 비교한다.
    for(let j = i+1; j < nums.length; j++){
      if(nums[i] + nums[j] === target) answer = [i, j];
    }
  }
  return answer;
};
```

## 릿코드 4번
두 배열을 하나로 합쳐 홀수라면 중앙의 수, 짝수하면 중앙의 두 수의 평균값을 산출하는 문제
```js
 let findMedianSortedArrays = function(nums1, nums2) {
  let answer = 0;
  let arr = nums1.concat(nums2); // 두 배열을 합친다 
  arr.sort((x,y)=>x-y); // 정렬
  
  if(arr.length%2 == 1) answer = arr[Math.floor(arr.length/2)]; //홀수라면 중앙의 수를 구한다
  else { // 짝수하면
    answer = (arr[arr.length/2] + arr[arr.length/2 -1])/2; // 중앙의 두 수의 평균을 구한다
  }
  return answer; // 반환
};
```

## 릿코드 11번
배열을 입력받아 각 수를 높이로 삼고, 최고 크기의 사각형이 가지는 넓이를 반환
```js
 let maxArea = function(height) {
  let max = 0; // 최대 넓이
  let left = 0, right = height.length-1; // 좌, 우 플래그
  
  while(left < right){ // 플래그가 만나기 전까지 계속 반복
    // 높이는 두 수중 낮은 값을 가진다
    let h = height[left] <= height[right] ? height[left] : height[right];
    // 넓이는 두 플래그 사이의 길이 * 두 배열값중 낮은 길이
    let now = h * (right-left);
    // 최대값 갱신 
    if (now > max) max = now;
    // 인덱스 이동-> 두 높이중 더 낮은값을 중앙으로 이동
    if(height[left] <= height[right]) left++;
    else right--;
  }
  
  return max; // 최대 넓이 반환
};
```

## 릿코드 13번
로마자를 10진수로 바꾸는 문제, 해시테이블과 예외처리를 할 배열을 이용하여 값을 산출한다.
```js
 let romanToInt = function(s) {
  let answer = 0;
  let hash = { // 해시 테이블에 key-value형태로 값을 등록
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000,
  };
  // 특수한 경우 6가지
  let unNormal = ['CM', "CD", "XC", 'XL', "IX", "IV"];
  // 반복문 시작
  for(let i = 0; i < s.length; i++){
    // 현재글자 + 다음글자가 특수한 경우라면
    if(unNormal.includes(s[i]+s[i+1])){
       answer = answer + hash[s[i]]*-1;  // 현재 글자의 값은 음수로 변경
    }else { // 그외엔 현재값을 모두 더한다
      answer += hash[s[i]];
    }
  } // 정답 반환
  return answer;
};
```

## 릿코드 225번
주어진 코드에 스택을 구성하는 코드를 작성하면 된다.
```js
let MyStack = function() {
  this.array = [];
};
MyStack.prototype.push = function(x) {
  this.array.push(x);
};

MyStack.prototype.pop = function() {
  return this.array.pop();
};

MyStack.prototype.top = function() {
  return this.array[this.array.length-1];
};

MyStack.prototype.empty = function() {
  return this.array.length === 0
};
```

## 릿코드 232번
주어진 코드에 큐를 구성하는 코드 작성하기
```js
let MyQueue = function() {
  this.array = [];
};

MyQueue.prototype.push = function(x) {
  this.array.push(x);
};

MyQueue.prototype.pop = function() {
  return this.array.shift();
};

MyQueue.prototype.peek = function() {
  return this.array[0];
};

MyQueue.prototype.empty = function() {
  return this.array.length === 0;
};
```

## 릿코드 387번
주어진 문자열에서 중복으로 등장하지 않는 첫 글자가 나오는 인덱스를 반환한다.
```js
 let firstUniqChar = function(s) {
  let answer = -1;
  let hash = {}; // 해시테이블로 문제를 푼다
  for(let i = 0; i < s.length; i++){
    if(hash[s[i]] === undefined) hash[s[i]] = 1; // 글자가 처음 등장하면 해시에 글자를 key로 등록하고 값을 1로 초기화 한다.
    else hash[s[i]] += 1; // 중복 등장시 해시의 값을 1 증가시킨다.
  };
  
  for(let i = 0; i < s.length; i++){ // 문자열을 다시 반복
    if(hash[s[i]] === 1){ // 해당 글자가 가지는 해시key의 value가 1이라면 해당 인덱스를 반환한다
      answer = i;
      break;
    }
  };
  return answer;
};
```

## 릿코드 933번
라우터는 최근 3000의 시간만큼의 요청의 갯수를 센다.  
ping이 들어올때 3000시간 이내의 요청의 갯수를 리턴하는 문제
```js
let RecentCounter = function() { // 라우터는 배열
  this.array = [];
};

RecentCounter.prototype.ping = function(t) { // ping 메서드
  this.array.push(t); // 라우터에 핑이 들어온 시간을 넣는다
  for (let i = 0; i < this.array.length; i++) { // 라우터에 3000시간이 넘게 지난 요소는 값을 null로 바꾼다
    if(this.array[i] < t-3000) this.array[i] = null;
  }
  
  let answer = this.array.filter(el => el !== null); // null로 변한 값들을 배열에서 제거
  return answer.length; // 최근 요소를 가지고 있는 배열의 길이를 반환한다.
};
```

## 릿코드 1700번
원모양 샌드위치와 사각형모양의 샌드위치가 있고 학생들은 선호하는 모양의 샌드위치가 아니면 먹지 않는다.  
샌드위치는 무조건 맨위의 하나만 가져가야하면 자신이 선호하는 샌드위치가 아니라면 줄 맨끝으로 돌아간다.  
샌드위치를 먹지 못하는 학생의 수를 구하라.
```js
 let countStudents = function(students, sandwiches) {
  // 원 샌드위치 0
  // 네모 샌드위치 1
  //원하는것을 먹을때까지 순환 원하는게 없다면 못먹은 사람수 반환
  
  let starve = 0;  // 굶는 사람 수
  while(starve != students.length){ // 굶는 사람수가 학생 배열과 다르다면 반복
    if(students[0] === sandwiches[0]){ // 먹고 싶은게 있으면 학생과 샌드위치 제거
      students.shift(); 
      sandwiches.shift();
      starve = 0; // 굶는 사람수를 초기화
    }else{ // 먹고 싶은게 없으면 학생이 줄로 돌아감
      students.push(students.shift());
      starve++; // 굶는 사람수 + 1
    }
  }
  return starve; // 반환
};
```