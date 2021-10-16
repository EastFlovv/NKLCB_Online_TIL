# 2021.10.16 [22일차]

오늘은 정렬 문제와 이진트리 문제를 풀었다.  
정렬문제는 나름 풀만 했는데 이진트리 문제는 이상하게 풀기가 너무 어려웠다.  
특히 이진트리를 재귀를 통해 풀때, 재귀를 한 값을 리턴 시키는 방법이 너무 헷깔렸다.  
어떻게든 방법을 찾아 어거지로 푼 문제도 있고 한참을 고민한 끝에 푼 문제도 있다.  
못푼 문제는 이진트리를 다시 공부하여 풀어봐야겠다.

## 공부한 내용

- 리트코드 문제풀이

## 학습 결과물
학습 결과물은 같이 포함된 파일에 동봉되었으며 각 TIL의 목록별 소제목에 링크가 달려있다.

### 강의 학습 현황

\> 리트코드 문제풀이

## 정렬 문제 풀이

## 88. Merge Sorted Array
두개의 배열과 두 수를 쌍으로 입력받아 배열을 입력받은 값 만큼 뽑아 배열1에 만들어야 하는 문제
```js
let merge = function(nums1, m, nums2, n) {
  
  nums1.splice(m); // 첫 배열을 m만큼 자른다
  for(let i = 0; i < n; i++){
    nums1.push(nums2[i]); // num2를 n만큼 num1에 push한다
  }
  nums1.sort((x, y) => x-y); // 완성한 배열을 정렬
};
```

## 169. Majority Element
배열에서 주류를 이루는 수를 반환하는 문제
```js
 let majorityElement = function(nums) {
  let flag = nums.length/2; // flag -> 플래그를 넘는 개수의 수가 있으면 그 수가 주류 수
  let now, answer;
  let count = 0;
  nums.sort((x,y)=>x-y); // 수를 정렬한다.
  for(let i = 0; i < nums.length; i++){
    if(i === 0 || now !== nums[i]){ // i가 0이거나 now가 nums[i]와 다르다면
      now = nums[i]; // now는 nums[i]
      count = 0; // count는 0이 된다
    } 
    if(now === nums[i]) count++; // now와 nums[i]가 같으면 count를 증가
    if(count >= flag) answer = now; // count가 flag가 같거나 크면 답은 now
    
  }
   
   return answer;
};
```

## 242. Valid Anagram
아나그램이면 true 아니면 false를 구하는 문제
```js
let isAnagram = function(s, t) {
  let arr1 = s.split('').sort(); // arr1을 정렬
  let arr2 = t.split('').sort(); // arr2를 정렬
  let isAna = true // isAna를 true로 설정
  for(let i = 0; i < arr1.length; i++){
    if(arr1[i] !== arr2[i] || arr1.length !== arr2.length) {
      isAna = false; // 문자가 다르면 isAna를 false로 바꿈
      break;
    }
  }
  return isAna; // isAna를 반환
};
```

## 268. Missing Number
배열에 사라진 수를 찾아 출력한다. 배열 최대수는 배열의 길이
```js
 let missingNumber = function(nums) {
  let answer;
  nums.sort((x,y)=>x-y); // 오름 차순 정렬
  if(nums[nums.length-1] !== nums.length) answer = nums.length; // num.length-1이 nums.length값과 다름다면 answer는 nums.length
  else{ // 그렇지 않다면
    for(let i = 0; i < nums.length; i++){
      if(nums[i]!==i) { // 인덱스와 값이 다르다면
        answer = i; // answer는 i
        break;
      }
    }
  }
  return answer;
};
```

## 94. Binary Tree Inorder Traversal
이진 트리를 중위 순회하여 배열로 출력하는 문제
```js
function recursive (node){
  if(node === null) return '';
  let str = '';
  // 순위하는 값 앞에 k를 붙여 하나의 문자열로 만든다
  str += 'k' + recursive(node.left);
  str += 'k' + node.val;
  str += 'k' + recursive(node.right);
  return str;
}
let inorderTraversal = function(root) {
    
  let answer = recursive(root);
  return answer.split('k').filter(el => el!=''); // 결과 문자열을 k로 스플릿 하고 빈 배열을 삭제
};
// 재귀를 이용해서 풀었으나 구분자 k를 이용해 어거지로 풀어냄 어떻게 해야 제대로 된 값 전달이 가능할지?
```

## 1022. Sum of Root To Leaf Binary Numbers
0과 1로 된 이진 트리를 탐색하여 리프노드에 도달했을때 완성된 이진수를 십진수로 바꾸어 합한 값을 리턴
```js
 function recursive (node, str, sum){
  let num1 = 0, num2 = 0;
  // DFS원리 이용, str에 node값을 더한다
  str += node.val;
  // 종료조건 + 재귀조건
  if(node.left !== null) // 왼쪽이 null이 아니면 재귀
    num1 = recursive(node.left, str, sum);
  if(node.right !== null) // 오른쪽이 null이 아니면 재귀
    num2 = recursive(node.right, str, sum);
  if(node.left === null && node.right === null) return parseInt(str, 2); // 양쪽다 못가면 10진수로 고쳐서 리턴
  
  return num1 + num2; // num1과 num2를 합쳐서 리턴
}

let sumRootToLeaf = function(root) {
  let str = '';
  let sum = 0;
  return recursive(root, '', sum);
};
```