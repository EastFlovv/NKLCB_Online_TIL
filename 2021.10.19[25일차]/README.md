# 2021.10.19 [25일차]

오늘은 연결리스트 문제와 해시테이블 문제를 풀었다.  
연결리스트 자체가 트리보다 쉬운 개념인것 같다 요 근래 트리 문제를 풀며 머리를 혹사 시켜놨더니 연결리스트문제가 생각보다 쉽게 풀렸다.  
다만 237번 문제가 조금 이해하기 힘든 문제였는데 인터넷을 뒤져보고 혼자 왜 그렇게 되는지 생각해보면서 연결리스트의 구조에 대한 이해를 더 잘 할 수 있게 되었다.  
해시 테이블 문제의 경우는 처음보다 해시테이블을 잘 이용할 수 있게 되었고 이전에 배열을 이용해 풀던 요소들도 이젠 문제의 의도대로 해시테이블을 이용해 풀 수 있게 되었다.  
특히 290번인 ward pattern의 경우 2단계에 들어오면서 테스트에 자주 나온 문제인데 처음엔 배열로 풀었고 그 다음 나왔을때는 배열과 해시테이블을 섞어서 그리고 이번엔 완전히 해시테이블만 사용하여 풀어냈다.  

## 공부한 내용

- 리트코드 문제풀이

## 학습 결과물
학습 결과물은 같이 포함된 파일에 동봉되었으며 각 TIL의 목록별 소제목에 링크가 달려있다.

### 강의 학습 현황

\> 리트코드 문제풀이

## 141. Linked List Cycle
주어진 연결리스트가 순환 연결리스트면 true 아니라면 false를 반환한다.
```js
// 두 포인터의 속도차이를 이용해 순환여부를 판별한다
let hasCycle = function(head) {
  if(head === null) return false; // 빈 연결리스트는 false
  let pointer1 = head; // pointer 1
  let pointer2 = head.next; // pointer 2
  let answer = true;
  
  while(true){
    if(pointer1 === null || pointer2 === null) { // 두 포인터가 null이라면 false
      answer = false;
      break;
    }
    // 두 포인터를 다음 노드로 전진
    pointer1 = pointer1.next;
    pointer2 = pointer2.next;
    
    if(pointer2 === null){ // pointer2가 null이라면 순환하지 않는다 false
      answer = false;
      break;
    }
    
    if(pointer2.next === null) { // pointer2의 다음 요소가 null이라면 순환하지 않는다 false
      answer = false;
      break;
    }
    pointer2 = pointer2.next; // pointer2가 null과 만날 환경이 아니면 한번 더 next로 이동한다
    if(pointer1 === pointer2) break; // pointer1과 pointer2가 같은 값이 나오면 break
  }
  
  return answer;
};
```

## 203. Remove Linked List Elements
연결리스트와 값을 준다.  
연결리스트에 지정값이 있으면 그 요소만 삭제 시킨 뒤 연결리스트를 출력한다
```js
let removeElements = function(head, val) {
  // 빈리스트 -> null 출력
  if(head === null) return null;
  let prev = null;
  let node = head;
  
  while(node !== null){
    // 첫요소 지우기
    if(prev === null && node.val === val){
      head = head.next; // head는 다음 요소로
    }else if (node.next === null && node.val === val){ // 끝 요소 지우기
      prev.next = null; // 맨 끝 요소의 다음값이 지울값이므로 null
    }else if(node.val === val){ // 중간값 지우기
      prev.next = node.next; // 이전값을 다음값으로 연결
    }else{ // 지우는게 없을때
      prev = node; // 지울게 없으면 prev는 현재노드로
    }
    node = node.next; // 조건에 관계없이 node는 다음 요소로 할당한다
  }
  // head반환
  return head;
};
```

## 206. Reverse Linked List
연결리스트를 뒤집는 문제  
재귀를 이용하여 풀었다.
```js
function recursive(node){
  // 종료 조건
  if(node === null) return null;
  if(node.next === null) return node;
  
  // 재귀
  let list = recursive(node.next); //
  
  // 새 노드
  let tmp = new ListNode(node.val); // new
  
  // 포인터를 list의 끝으로
  let pointer = list;
  while(pointer.next !== null){
    pointer = pointer.next;
  }
  // 첫노드를 리스트의 끝노드로
  pointer.next = tmp;
  //리스트 반환
  return list;
}

let reverseList = function(head) {
    return recursive(head);
};
```

## 234. Palindrome Linked List
연결리스트가 회문의 모습을 띄면 true 아니라면 false를 반환하는 문제
```js
let isPalindrome = function(head) {
  let answer = true;
  let arr = [];
  while(head !== null) { // 연결리스트 전체 탐색
    arr.push(head.val); // 연결리스트의 값을 배열로 옮긴다
    head = head.next;
  }
  
  let left = 0; // 왼쪽 포인터
  let right = arr.length-1; // 오른쪽 포인터
  
  while(left < right){ // 왼쪽이 오른쪽 보다 작다면 계속반복
    if(arr[left] !== arr[right]){ // 회문이 아니면 false
      answer = false;
      break;
    } 
    left++; // 두 포인터가 중앙으로 이동
    right--;
  }
  return answer;
};
```

## 237. Delete Node in a Linked List
연결리스트에서 매개변수로 지정된 노드만을 삭제 시키는 문제
```js
let deleteNode = function(node) {
  node.val = node.next.val;
  node.next = node.next.next;
  // node = node.next와는 무엇이 다른가?
  /*
  node = node.next는 단순히 현재 노드를 다음 노드로 할당할 뿐 연결리스트의 head자체에는 아무런 영향을 끼치지 못한다.

  반면 node.val과 node.next를 고치게 되면, head가 가지고 있는 다음 노드의 주소값은 그대로 이므로 원활히 목표 노드를 지우고 다음 노드로 넘어갈 수 있다.

  물론 참조를 잃어버린 목표 node는 가비지 컬렉터에 의해 메모리에서 삭제될것이므로 메모리 걱정은 하지 않아도 될것이다.
  */
};
```

## 876. Middle of the Linked List
주어진 연결리스트의 중앙부터 맨 끝까지 연결리스트 형식으로 반환하는 문제
```js
let middleNode = function(head) {
  // 투 포인터 이용
  let slow = head;
  let fast = head;
  while(true){
    if(fast.next === null) break; // 종료조건
    // 이동한다
    slow = slow.next;
    fast = fast.next;
    if(fast.next === null) break; // 종료조건
    fast = fast.next; // 빠른 포인터만 이동
  }
  return slow; // 빠른 포인터가 끝에 도달하면 slow포인터는 전체길이의 반만큼 움직였으므로 중앙잉다. slow포인터를 반환
};
```

## 202. Happy Number
해피 넘버란 수의 각 자리를 제곱하여 더하는것을 반복해 최종적으로 1이 나오는 수를 말한다.  
아무리 많이 반복되도 1이 될 가능성이 있는 수와 달리 특정한 패턴을 반복한다면 절대 1이 될 수 없으므로 이를 예외처리하는 코드를 짰다.
```js
let isHappy = function(n) {
  let answer = true;
  let hashTable = {}; // 해시테이블 사용
  let key = n;
  
  while(true){ // 계속 반복
    let value = 0;
    let nums = key.toString().split(''); // 주어진 수를 문자열로 만들어 split
    for(let i = 0; i < nums.length; i++){
      value += Math.pow(Number(nums[i]), 2); // value는 각 수를 제곱한 수의 합이다
    }
    // true
    if(value === 1) break; // value가 1이면 break
    // false
    if(hashTable[key]) { // value가 이미 해시테이블에 있는 값이면 순환하므로 false
      answer = false;
      break;
    }
    hashTable[key] = value; // 해시테이블에 값을 할당
    key = value; // value는 key가 된다
  }
  return answer;
};
```

## 205. Isomorphic Strings
word pattern과 같은 문제 두 문자의 각 철자가 서로 1대1 매칭된다면 true 아니라면 false
```js
let isIsomorphic = function(s, t) { // 양방향 검사 필요
  let answer = true; // 두개의 해시테이블 사용
  let hashTableS = {};
  let hashTableT = {};
  
  for(let i = 0; i < s.length; i++){ // 둘 다 undefined면 값을 입력
    if(hashTableS[s[i]] === undefined && hashTableT[t[i]] === undefined) {
      hashTableS[s[i]] = t[i];
      hashTableT[t[i]] = s[i];
    } // 둘중 하나라도 값이 다르면 false
    else if(hashTableS[s[i]] !== t[i] || hashTableT[t[i]] !== s[i]) answer = false;
  }
  
  return answer;
};
```

## 217. Contains Duplicate
배열안에 중복되는 수가 있다면 true 아니라면 false, 해시에 분류된 문제지만 배열로 풀었다.
```js
let containsDuplicate = function(nums) {
  let answer = false;
  nums.sort((x,y)=>x-y); // 배열을 정렬
  for(let i = 0; i < nums.length-1; i++){ // 다음요소와 값이 다르면 true
    if(nums[i] === nums[i+1]) answer = true;
  };
  
  return answer;
};
```

## 229. Majority Element II
주어진 배열의 길이가 n일때 n/3을 초과하는 횟수로 나오는 수들을 반환하는 문제
```js
let majorityElement = function(nums) {
  let answer = [];
  let appear = nums.length/3; // 기준값
  let hash = {}; // 해시테이블
  
  for(let i = 0; i < nums.length; i++){ // 값이 처음이면 1로 초기화 있다면 값을 증가
    if(hash[nums[i]] === undefined) hash[nums[i]] =1;
    else hash[nums[i]]++;
  }
  // 해시 안에서 value가 appear보다 큰 요소가 있다면 해당 key를 배열로 삽입
  for(const key in hash){
    if(hash[key] > appear) answer.push(key);
  }
  return answer; // 배열 반환
};
```

## 290. Word Pattern
테스트에서 자주 풀던 그 문제, 205번과 사실상 거의 같은문제이다.
```js
let wordPattern = function(pattern, s) {
  // 두 해시
  let hash1 = {};
  let hash2 = {};
  // 반환값
  let answer = true;
  // 문자세트를 배열로 전환
  let pat = pattern.split('');
  let str = s.split(' ');
  // 길이가 다르면 false
  if(pat.length !== str.length) return false;
  // 해시를 이용한 비교
  for(let i = 0; i < pat.length; i++){
    if(hash1[pat[i]] === undefined && hash2[str[i]] === undefined) {
      hash1[pat[i]] = str[i];
      hash2[str[i]] = pat[i];
    }
    else if(hash1[pat[i]] !== str[i] || hash2[str[i]] !== pat[i]) answer = false;
  }
  
  return answer;
};
```

## 349. Intersection of Two Arrays
두 배열을 비교해 중복되는 값을 반환하는 문제
```js
let intersection = function(nums1, nums2) {
  let answer = [];
  for(let i = 0; i < nums1.length; i++) {
    if(nums2.includes(nums1[i])) answer.push(nums1[i]); //배열 1, 2를 includes()메서드를 통해 중복값만 새 배열에 담는다.
  }
  
  answer = Array.from(new Set(answer)); // Set을 통해 중복값을 제거
  
  return answer;
};
```