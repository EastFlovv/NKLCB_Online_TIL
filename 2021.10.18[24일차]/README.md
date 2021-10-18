# 2021.10.18 [24일차]

오늘은 그리디 알고리즘과 연결리스트 문제에 도전했다.  
연결리스트 문제의 경우 상당히 스파게티 코드로 제작되었음에도 시간이 빠르게 나오는 문제가 있는 반면 어떤 문제는 정반대 이기도 해서 상당히 당황스러웠다.  
그리디 알고리즘은 오늘 특히 주의해서 풀었었는데 매 순간 최선을 선택하도록 알고리즘을 짜다보면 가끔씩 예외조건 한두개가 발목을 잡았다.  
특히 객체의 형태를 가진 요소들을 조작하는 경우 객체를 모두 소모하고 null이 되는 순간 짜여진 코드에 의해 null을 참조하게 되면서 온갖 에러를 일으키는게 당황스러웠다.  
문제 풀이 자체는 재미있으나 난이도가 높은 문제의 경우 심력을 상당히 소모해 많이 피곤하다.  
오늘 2차 일정의 마지막 정기테스트를 보았는데 4문제 모두 테스트 케이스를 잘 통과해 기분이 너무 좋다.  
특히 동적 프로그래밍 문제들을 의도에 맞게 잘 푼것 같다.

## 공부한 내용

- 리트코드 문제풀이

## 학습 결과물
학습 결과물은 같이 포함된 파일에 동봉되었으며 각 TIL의 목록별 소제목에 링크가 달려있다.

### 강의 학습 현황

\> 리트코드 문제풀이


## 21. Merge Two Sorted Lists
두 연결리스트를 오름차순으로 병합시키는 문제이다. 반복문에 의한 null값 참조떄문에 오류를 많이 일으켜 상당히 고전한 문제
```js
 let mergeTwoLists = function(l1, l2) {
  
  let answer;
  // 초기화
  if(l1 === null && l2 === null) return l1; // 둘다 빈 연결리스트면 l1반환
  // 한쪽만 빈 연결리스트면 반대쪽 반환
  if(l1 === null) return l2; 
  if(l2 === null) return l1;
  // 두 연결리스트의 노드값중 작은것을 answer연결리스트에 삽입
  if(l1.val <= l2.val){
    answer = new ListNode(l1.val, null);
    l1 = l1.next;
  }else{
    answer = new ListNode(l2.val, null);
    l2 = l2.next;
  }
  // root는 answer연결리스트의 head이다
  let root = answer;
  // 둘다 널이 아니면 반복
  while(!(l1 === null && l2 === null)){
    // console.log(`l1.next = ${(l1.next).val} l2.next = ${(l2.next).val}`);
    // l2가 null이면 l1을 answer로
    if(l2 === null){
      answer.next = l1;
      l1 = l1.next;
      answer = answer.next;
    }else if(l1 === null){ // l1이 null이면 l2를 answer에 붙인다
      answer.next = l2;
      l2 = l2.next;
      answer = answer.next;
    }else if(l1.val <= l2.val){ // 두 수중 더 작은값을 answer에 연결
      // console.log(`l1 in ${l1.val}`);
      answer.next = l1;
      l1 = l1.next;
      answer = answer.next;
    }else if (l1.val > l2.val){
      // console.log(`l2 in ${l2.val}`);
      answer.next = l2;
      l2 = l2.next;
      answer = answer.next;
    }
    
  }
  return root; // 완성된 연결리스트 반환
};
```

## 409. Longest Palindrome
주어진 문자열로 구성 할 수 있는 가장 긴 회문의 길이를 반환하는 문제, 아나그램처럼 글자의 순서를 바꿔도 된다. (대소문자는 구별)
```js
 let longestPalindrome = function(s) {
  // key-value 저장
  // 짝수 -> 모두 반환
  // 홀수는 한개만
  
  let letters = s.split(''); // 주어진 글을 배열로 저장
  let obj = {};
  let answer = 0;
  let odd = false; // 홀수 여부
  
  for(let i = 0; i < letters.length; i++){ // 주어진 key가 없다면 1로 초기화
    if(obj[letters[i]] === undefined) obj[letters[i]] = 1;
    else obj[letters[i]]++; // ket가 있다면 +1
  }
  
  // console.log(obj);
  
  for(const key in obj){
    if(obj[key] % 2 == 0) answer += obj[key]; // 모든 키를 검사하는데 value가 짝수라면 value를 answer에 더한다
    else {
      answer += (obj[key]-1); // 홀수라면 value에 -1을 하여 더한다
      odd = true; // odd를 true로 전환
    }
  }
  
  if(odd) answer++; // 홀수가 있었다면 1을 더한다
  return answer; // 반환
};
```

## 455. Assign Cookies
아이의 탐욕인자를 만족시키는 쿠기세트의 갯수를 반환하는 문제
```js
let findContentChildren = function(g, s) { // g는 탐욕인자, s는 쿠기세트의 수
  let answer = 0;
  // 두 배열을 정렬
  g.sort((x,y) => x-y);
  s.sort((x,y) => x-y);
  
  // 조건에 만족하면 둘다 shift, 조건에 맞지않으면 쿠키만 shift
  while(true){
    if(s.length === 0 || g.length === 0) break; // 어느 한 배열이 끝을 보면 answer반환
    if(s[0] < g[0]) s.shift();
    else if(s[0] >= g[0]) { // 아이가 만족하면 둘다 shift 만족못하면 쿠키세트 shigt
      g.shift();
      s.shift();
      answer++;
    }
  }
  
  return answer;
};
```

## 561. Array Partition I
주어진 배열의 값들을 두개씩 짝지어 비교해 더 작은수를 합하여 그 수 중 가장 큰 값을 반환하는 문제
```js
let arrayPairSum = function(nums) {
  let answer = 0;
  // 주어진 배열을 정렬한다
  nums.sort((x,y) => x-y);
  // 배열은 반드시 짝수개씩 주어지므로 짝수 인덱스의 값들을 더하면 그것이 답이다.
  for(let i = 0; i < nums.length; i++){
    if(i % 2 == 0) answer += nums[i];
  }
  return answer;
};
```

## 605. Can Place Flowers
주어진 모판은 한칸씩 여유를 두고 꽃을 심는다 주어진 수만큼의 꽃을 심을 수 있다면 true 아니라면 false를 반환
```js
 let canPlaceFlowers = function(flowerbed, n) {
  let count = 0;
  // 모판의 길이만큼 반복
  for(let i = 0; i < flowerbed.length; i++){
    // 한개짜리 예외 처리
    if(flowerbed.length === 1 && flowerbed[0] === 0) count++;
    // 모판의 시작
    if(i === 0 && flowerbed[0] === 0 && flowerbed[1] === 0) {
      flowerbed[i] = 1;
      count++;
    }// 모판의 끝
    else if (i === flowerbed.length-1 && flowerbed[i] === 0 && flowerbed[i-1] === 0){
      flowerbed[i] = 1;
      count++;
    }// 중간
    else if(flowerbed[i] === 0 && flowerbed[i-1] === 0 && flowerbed[i+1] === 0){
      flowerbed[i] = 1;
      count++;
    }
    
    // console.log(`i = ${i} flowerbed = ${flowerbed} count = ${count}`);
  }
  // 심은 숫자가 타겟넘버 n보다 크거나 같다면 true 아니라면 false
  return count >= n ? true : false;
}

// 코드를 더 간결하게 할 수 있지 않을까?
```