# 2021.10.17 [23일차]

오늘은 이진트리 문제와 DFS문제를 중심으로 풀었다.  
어제 이진트리 문제에서 많이 힘들어 하기도 했고 재귀의 사용이 아직 익숙치 않아 가능 한 한 모든 문제를 재귀로 풀었다.  
어제 못푼 문제 또한 예시 케이스를 통과하여 제출을 했는데 반례를 하나 얻어 통과하지 못했다.  
문제는 이 반례가 왜 틀렸는지 아직 이해가 되지 않는다 이진트리의 종류를 더 면밀히 살펴보며 무엇이 잘못 되었는지 알아봐야겠다.

## 공부한 내용

- 리트코드 문제풀이

## 학습 결과물
학습 결과물은 같이 포함된 파일에 동봉되었으며 각 TIL의 목록별 소제목에 링크가 달려있다.

### 강의 학습 현황

\> 리트코드 문제풀이


## 100. Same Tree
두 이진트리가 같은 모양이면 true 아니라면 false를 반환하는 문제
```js
function recursive(p, q){ // 재귀로 푼다 DFS
  if(p === null && q === null) return true; // 끝노드가 둘다 null이면 true
  if(p === null || q === null) return false; // 끝노드가 둘중 하나만 null이면 false
  if(p.val !== q.val) return false; // r값이 다르면 false
  
  return recursive(p.left, q.left) && recursive(p.right, q.right) // 양쪽으로 재귀하며 모든 조건이 true이면 true반환
  
}

let isSameTree = function(p, q) {
  return recursive(p, q);
};
```

## 101. Symmetric Tree
주어진 이진트리가 대칭을 이루고 있으면 true 아니라면 false를 반환한다.
```js
function recursive(nodeL, nodeR){ // 재귀로 풀었다 DFS
  if(nodeL === null && nodeR === null) return true; // 끝 노드가 둘다 null이면 true
  if(nodeL === null || nodeR === null) return false; // 두 노드의 끝이 하나만 null이라면 false
  if(nodeL.val !== nodeR.val) return false; // 값이 다르면 false
  
  return recursive(nodeL.left, nodeR.right) && recursive(nodeL.right, nodeR.left); // 비교할때 대칭되게 비교한다
};

let isSymmetric = function(root) {
  return recursive(root.left, root.right)
};
```

## 104. Maximum Depth of Binary Tree
해당 이진트리의 깊이를 구하는 문제
```js
function recursive(node, level = 0){ // 재귀를 이용한 DFS기법으로 푼다
  if(node === null) return level; // node가 끝까지 가면 level을 반환 (종료조건)
  level++; // 깊이를 들어갈때 마다 level을 +1
  let depL = recursive(node.left, level); // 왼쪽으로 재귀
  let depR = recursive(node.right, level); // 오른쪽으로 재귀
  
  return depL > depR ? depL : depR; // 두 재귀값중 더 깊은 값을 반환
};

let maxDepth = function(root) {
  return recursive(root);
};
```

## 111. Minimum Depth of Binary Tree
이진트리의 깊이중 가장 작은 깊이를 반환
```js
function recursive(node, level = 0){
  if(node === null) return level; // 끝노드 도달시 level 반환
  let depL = recursive(node.left, level+1); // 왼쪽으로 재귀 진행
  let depR = recursive(node.right, level+1); // 오른쪽을 재귀 진행
 
  if(node.right === null)  return depL; // 노드의 오른쪽이 없으면 왼쪽 반환
  if(node.left === null)  return depR; // 노드의 왼쪽이 없으면 오른쪽 반환
  
  return Math.min(depL, depR); // 둘중 더 작은 값을 반환
};

//  2
//   3
//    4
//     5
//      6

// 리프노드중 가장 작은 값을 반환?
let minDepth = function(root) {
  return recursive(root);
};
```

## 112. Path Sum
리프 노드로 진행하며 만나는 노드들의 합이 target값과 같다면 true를 반환, 그렇지 않다면 false를 반환
```js
function recursive (node, targetSum, sum = 0){
  if(node === null) return false; // 시작 노드가 null일때 false
  sum += node.val; // sum에 node의 값을 더한다
  if(node.left === null && node.right === null) return targetSum === sum; // 리프노드에 도착하면 target과 sum이 같은지 boolean형태로 반환한다.
  
  return recursive(node.left, targetSum, sum) || recursive(node.right, targetSum, sum); // 재귀한 경우의 수 중 하나라도 true가 있으면 true 반환
}


let hasPathSum = function(root, targetSum) {  
  return recursive(root, targetSum)
};
```

## 144. Binary Tree Preorder Traversal
이진 트리를 전위순회 하여 배열로 출력
```js
function recursive(node, stack = []){
  if(node === null) return []; // 빈 노드에 도착시 빈배열 반환
  stack.push(node.val); // NLR 순서중 N을 push
  recursive(node.left, stack); // 왼쪽으로 재귀
  recursive(node.right, stack); // 오른쪽으로 재귀
  return stack; // stack을 반환
}

let preorderTraversal = function(root) {
  return recursive(root);
};
```


## 145. Binary Tree Postorder Traversal Easy
이진 트리를 후위순위 하여 배열로 출력
```js
function recursive(node, stack = []){
  if(node === null) return []; // 빈 노드에 도착시 빈배열 반환
  recursive(node.left, stack); // 왼쪽으로 재귀
  recursive(node.right, stack); // 오른쪽으로 재귀
  stack.push(node.val); // LRN 순서중 N을 push
  return stack; // stack을 반환
};
let postorderTraversal = function(root) {
  return recursive(root);
};
```

## 226. Invert Binary Tree
이진 트리를 좌우 반전하여 반환하는 문제
```js
function invert(node){
  if(node === null) return null; // 끝노드 도달시 null반환
  
  // 노드의 좌, 우를 변경
  let tmp = node.left; 
  node.left = node.right;
  node.right = tmp;
  
  invert(node.left); // 왼쪽으로 재귀
  invert(node.right); // 오른쪽으로 재귀
  return node; // invert된 이진트리를 반환
}

let invertTree = function(root) {
  return invert(root);
};
```