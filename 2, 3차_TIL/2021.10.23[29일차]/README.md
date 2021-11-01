# 2021.10.23 [29일차]

면담을 통해 LeetCode에서 Medium난이도의 문제를 풀어보는것이 좋을것 같다는 조언을 받았다.  
그래서 오늘은 LeetCode에서 Medium난이도의 스택 문제를 풀어보았다.  
난이도가 Easy에서 Medium으로 올라간 만큼 문제들의 요구 조건이 훨씬 많아졌고 난이도도 올라갔다.  
하지만 한문제를 제외하고는 솔루션 없이 결국 풀어냈으며 몇가지 문제는 해결하지 못했다.

## 공부한 내용

- 리트코드 문제풀이 Medium 난이도 도전

## 학습 결과물
학습 결과물은 같이 포함된 파일에 동봉되었으며 각 TIL의 목록별 소제목에 링크가 달려있다.

### 강의 학습 현황

\> 리트코드 문제풀이

## 71. Simplify Path 
주어진 문자열을 UNIX 운영체제의 경로명이라고 할때 주어진 조건대로 이동한 최종 위치를 반환
```js
let simplifyPath = function(path) {
  let answer = '/';
  let stack = [];
  // 기존 경로를 /로 나누어 배열화
  let orders = path.split('/').filter(el => el !== '');
  
  // 반복문
  for(let i = 0; i < orders.length; i++){
    if(orders[i] === '.') continue; // 현재위치를 가리키면 continue
    else if (orders[i] === '..'){ // 상위 폴더로 이동
      if(stack.length === 0) continue; // 상위 폴더가 없으면 continue
      stack.pop(); // 있으면 pop
    }
    else stack.push(orders[i]); // 그 외는 경로를 더함
  }
  answer += stack.join('/'); // 스택을 /로 구분하여 하나의 스트링으로 만들고 answer에 더함
  return answer; // 반환
};
```

## 114. Flatten Binary Tree to Linked List
주어진 이진 트리를 우측 편향 이진트리로 바꾸는 문제
```js
function recursive(node){
  // 종료 조건
  if(node === null) return null;
  // 끝 탐색을 위한 tail
  let tail = node;
  
  let L = recursive(node.left);
  let R = recursive(node.right);
  // 노드의 우측에 왼쪽 노드 붙임
  node.right = L;
  // 왼쪽 노드를 비움
  node.left = null;
  // tail을 끝까지 보낸다
  while(tail.right){
    tail = tail.right;
  }
  // tail의 우측에 기존의 R을 붙임
  tail.right = R;
  // node를 리턴
  return node;
}


let flatten = function(root) {
  recursive(root);
};
```

## 143. Reorder List
주어진 연결리스트를 앞쪽에서 하나 뒤쪽에서 하나, 번갈아 가며 재배치 한다.  
새로운 연결리스트를 반환해서는 안되고 기존 연결리스트를 수정해야 한다.  
연결리스트의 next가 객체의 주소를 가리키므로 연결리스트의 값을 따로 저장하여 객체의 값을 변경했다.
```js
// 선형 연결리스트를 head에서 하나 tail에서 하나씩 연결하는 방식으로 재 정렬한다
let reorderList = function(head) {
  let stack =[];
  let node = head
  while(node){
    stack.push(node.val);
    node = node.next;
  }
  console.log(stack);
  let left = 0;
  let right = stack.length-1;
  node = head;
  // value 변경
  // 기존 linkedList가 참조 하는것은 주소값
  for(let i = 0; i < stack.length; i++){
    if(i % 2 === 0) node.val = stack[left++];
    else node.val = stack[right--];
    node = node.next;
  }
}
```

## 150. Evaluate Reverse Polish Notation
후위 연산식을 계산하는 문제이다.
```js
let evalRPN = function(tokens) {
  // 후위 연산식 문제
  let stack = [];

  for(let i = 0; i < tokens.length; i++){
    if(isNaN(tokens[i])) { // 부호가 들어오면
      let num1 = stack.pop(); // 두 수를 새 변수에 담는다
      let num2 = stack.pop();
      // 계산식
      switch(tokens[i]){ // 부호에 따라 계산을 진행하고 다시 stack에 집어넣음
        case '+':
          stack.push(num2 + num1);
          break;
        case '-':
          stack.push(num2 - num1);
          break;
        case '*':
          stack.push(num2 * num1);
          break;
        case '/':
          stack.push(parseInt(num2 / num1));
          break;
      }
    }else // 부호가 아니면 모두 push
      stack.push(Number(tokens[i]));
  } // 마지막에 남은 값을 리턴한다
  return stack.pop();
};
```

## 331. Verify Preorder Serialization of a Binary Tree
전위 순회로 입력된 이진트리의 배열을 줄때, 이 이진트리가 제대로 된 이진트리인지 출력하는 문제이다
```js
let isValidSerialization = function(preorder) {
  let arrows = 1; // 이진트리의 시작
  let nodes = preorder.split(','); // 입력받은 배열값들
  
  if(nodes[0] === '#') { // 첫 노드가 공백일때
    return nodes.length === 1 ? true : false; // 공백 혼자면 true 하위값이 있으면 false
  }
  
  for(let i = 0; i < nodes.length; i++){ // 그외
    if(nodes[i] !== '#') arrows++; // 빈 노드가 아니면 arrow를 하나 증가
    else arrows--; // 빈노드는 arrow삭제
    // 노드가 없는데 추가로 입력할때
    if(arrows === 0 && i < nodes.length-1) return false; // 노드가 0일때 i가 노드의 남은 수보다 적으면 false
  }
  
  return arrows === 0 ? true : false; // arrow가 0이면 true
};
```

## 394. Decode String
대괄호 안에 있는 문자열을 대괄호 앞의 수만큼 반복하여 새 문자열을 만든다
```js
let decodeString = function(s) {
  let answer = '';
  let stack = []; // 스택 사용
  for(let i =0; i < s.length; i++){
    // input 조건
    if(s[i] !== ']') stack.push(s[i]);
    // output 조건
    if(s[i] === ']'){ // 닫는 괄홀를 만났을때
      // 반복문 저장
      let str = '';
      // 반복문 배열
      let arr = []
      // 반복횟수 저장
      let repeatNum = '';
      
      let now = stack.pop();
      // 여는괄호가 나올때까지
      while(now !== '['){
        arr.push(now); // 닫힐때까지 더한다
        now = stack.pop();
      }
      // 반복횟수를 찾기 위한 숫자를 구한다
      while(Number(stack[stack.length-1]) >= 0){
        repeatNum += stack.pop();
      }
      // string을 반복
      repeatNum = Number(repeatNum.split('').reverse().join(''));

      str = arr.reverse().join(''); // 원래 순서로 돌림
      str = str.repeat(Number(repeatNum)); // 지정된 순서만큼 반복 입력
      stack.push(str); // 스택에 삽입
    }
  }
  // console.log(stack);
  // console.log(stack.join(''));
  return stack.join('');
};
```