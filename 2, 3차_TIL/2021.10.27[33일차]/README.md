# 2021.10.27 [33일차]

monotonic stack에 관한 공부  
모노 스택에 관한 공부와 관련 문제 풀이를 해보았다.  
모노 스택이란 스택을 단조롭게 만드는것을 말하는데 스택 문제중 모노 스택을 사용하는 문제들에 내가 특히 약해 모노스택에 공부하고, 관련 문제를 풀어보는 시간을 가져 보았다.  
거의 모든 문제가 정답에 근접한것 같은데 반례가 자꾸 나오는것으로 보아 약간의 깨달음을 얻으면 모노스택을 정복 할 수 있을것만 같다.  
오늘은 문제를 여러개 시도해 보았으나 결국 한문제도 풀지 못했다.

## 공부한 내용

- 리트코드 문제풀이 Medium 난이도 도전

## 학습 결과물
학습 결과물은 같이 포함된 파일에 동봉되었으며 각 TIL의 목록별 소제목에 링크가 달려있다.

### 강의 학습 현황

\> 리트코드 문제풀이


## 모노스택
모노스택은 스택을 단조롭게 만드는것을 의미한다.  
원소들이 증가하거나 감소하는 방향으로 존재하며 특정 원소를 제거하여 정렬하는 성질을 갖는다.  

- 모노스택의 예
  배열 [3, 4, 6, 4, 3, 4, 5, 6]이 있을때, 왼쪽에서 부터 오름차순으로 만들고자 한다.  
  7번부터 4번인덱스 까지는 이미 오름차순이다. [3, 4, 5, 6]  
  3번인덱스(4)로 인해 4, 5번 인덱스가 오름차순이 될 수 없음, 4번 제거 [4, 4, 5, 6]  
  2번 인덱스(6)으로 인해 7번 인덱스 까지 오름차순이 아님 제거 [6]  
  0, 1번 인덱스는 오름차순임 [3, 4, 6]  
  -> 모노 스택

## 75. Sort Colors(TwoPointer)
처음엔 병합 정렬로 풀었으나 원본을 바꿀 수 없어 투포인터로 다시 풀었다.  
반례로 [0]이 존재 시간초과가 나는데 이유를 모르겠다.
```js
// 반례 [0] -> 시간초과, 왜?
let sortColors = function(nums) {
  // 내부 라이브러리를 사용하지 않고 수를 정렬
  let left = 0;
  let right = nums.length-1;

  let n = 0;

  while(n < 2) { // 0을 왼쪽으로 그다음 1을 정렬 2는 자연스레 오른쪽으로 몰린다
    if(nums[right] === n && nums[right] !== nums[left]) [nums[left], nums[right]] = [nums[right], nums[left]];
    else if(nums[left] === n) left++;
    else right--;

    if(left === right) {
      n++;
      right = nums.length-1;
    }
  }
  // return nums;
};
```

## 1008. Construct Binary Search Tree from Preorder Traversal
전위 순회 배열을 중위순회로 바꾸는것, 빈 노드의 null처리가 되지 않아 정답으로 인정받지 못했다.
```js
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}


function inorderLeft(arr, head, prev){
  if(head === null){
    head = new TreeNode(arr.shift());
    if(arr[0] < head.val) head.left = inorderLeft(arr, head.left, head.val);
    if(arr[0] > head.val && arr[0] < prev) head.right = inorderLeft(arr, head.right, head.val);  
    return head;
  }
  prev = head.val;
  if(arr[0] < head.val) head.left = inorderLeft(arr, head.left, head.val);
  return head;
}

function inorderRight(arr, head, prev){
  if(head === null){
    head = new TreeNode(arr.shift());
    if(arr[0] < head.val) head.left = inorderRight(arr, head.left, head);
    if(arr[0] > head.val && prev.right !== null) head.right = inorderRight(arr, head.right, head);  
    return head;
  }
  prev = head;
  if(arr[0] > head.val) head.right = inorderRight(arr, head.right, head);
  return head;
}



let bstFromPreorder = function(preorder) {
  let left = [];
  let right = [];
  let node = new TreeNode(preorder.shift());

  preorder.forEach(el => {
    if(el < node.val) left.push(el);
    else right.push(el);
  });
  
  console.log(left);
  console.log(right);

  let head = inorderLeft(left, node);
  head = inorderRight(right, node);
  console.log(head);
  return head;
};
```

## 1081. Smallest Subsequence of Distinct Characters
모노스택을 이용한 연습 풀이문제 주어진 문자열에서 사전순으로 가질 수 있는 가장 긴 문자열을 반환하는 문제
```js

// cbabc의 경우, a보다 큰 cb를 지우고 abc반환 성공
// cbacdcbc의 경우, acd이후에 c가 나오면서 a만 남고 나머지를 모두 지움, 이후 b를 받으면서 ab로 마무리가 되버림 -> 틀림

 let smallestSubsequence = function(s) {
  // 모노스택
  let stack = [];
  let now;
  for(let i = 0; i < s.length; i++){
    let now = s[i];
    if(stack[stack.length-1] > now && !stack.includes(now)){
      while(stack[stack.length-1] > now && stack.length !== 0){
        stack.pop();
      }
    }else if(stack[stack.length-1] > now && stack.includes(now)) continue;
    else stack.push(now);
  }
  console.log(stack);
  return stack.join('');
};
```

## 1574. Shortest Subarray to be Removed to Make Array Sorted
모노 스택을 이용해 주어진 배열을 오름차순으로 만들기 위해 지워야 할 숫자들의 최소수를 구하는 문제
```js
// 모노 스택 반례 [1,2,3,10,0,7,8,9]
// 중간에 0이 들어가면서 앞서 값을 형성하고있던 1,2,3을 지워 정답에서 멀어진다
// 예시로 제시된 1,2,3,10,4,2,3,5], [5,4,3,2,1]은 무사히 통과
// 어떤 예외처리를 해야하는지 감을 못잡겠다
let findLengthOfShortestSubarray = function(arr) {
  let answer = 0;
  let stack = [];
  
  for(let i = 0; i < arr.length; i++){
    if(stack.length === 0) stack.push(arr[i]);
    else if (stack[stack.length-1] > arr[i]){
      while(stack[stack.length-1] > arr[i]){
        stack.pop();
        answer++;
      }
      stack.push(arr[i]);
    }else stack.push(arr[i]);
    
  }
  return answer;
};
```