# 2021.10.09 [15일차]

오늘은 트리에 대해 공부했다.  
트리를 이용한 구조 자체가 정렬에서도 꽤나 쓰이는것으로 알고 있는데 예전에 잠깐 배웠던 내용이였지만 역시나 오랫만에 보니 기억안나는것 투성이였다.  
자료구조의 강의가 상당히 양이 많은데 알고리즘 보다 예상 수업일수가 짧은것은 난이도의 문제이겠지만 내일정도면 자료구조 공부도 끝날것 같다.  
깜짝테스트는 잠시 바쁜일이 있어 제 시간에 오지 못해 못풀었지만 수업만큼은 열심히 들어 정규 테스트는 모두 좋은 성적을 받기위해 더 열심히 해야겠다.

## 공부한 내용

- 딕셔너리와 해시를 이용해 시간복잡도를 크게 줄일 수 있다.
- 이진트리의 개념에 대해 배웠다. 생긴것이 마치 이중 연결리스트 처럼 생겼다고 느껴졌다. 물론 이중 연결리스트 처럼 하위 요소가 상위요소로 탐색을 이어갈 순 없다.
- 따라서 하위 요소를 살펴보고 다시 상위 요소로 돌아올 수 있도록 재귀를 사용한다.  
- 이진 탐색 트리의 생김새에 따라 포화 이진트리, 완전 이진트리, 정 이진트리, 편향 이진트리, 균형 이진트리로 구분 할 수 있다.
- 이진 트리를 활용하여 탐색, 정렬등을 빠르게 수행 할 수 있다.
- 이진 트리의 순회 방법은 전위, 중위, 후위 순회와 층별 순회가 있다.
- 전, 중, 후위 순회는 코드의 순서만 다를 뿐 같은 코드를 사용하지만, 층별 순회는 큐를 사용하여 순회한다.
- 이진 탐색 트리를 활용하여 현재 노드를 기준으로 왼쪽에는 작은 값을 오른쪽엔 큰 값을 입력한다.
- 이진 탐색 트리를 사용하면 편향 이진트리가 이닌 이상 최소, 최댓값을 구하거나 특정 목표값을 찾을때 시간을 크게 줄일 수 있다.
- 이진 탐색 트리에서 값을 삭제할때 자식 노드의 수에 따라 삭제 방법이 다르다.

## 학습 결과물
학습 결과물은 같이 포함된 파일에 동봉되었으며 각 TIL의 목록별 소제목에 링크가 달려있다.

### 강의 학습 현황

\> 자바스크립트 비선형 자료구조 '38. 딕셔너리, 해시테이블 문제풀이 - 출석체크' ~ '55. 이진 탐색 트리(4)' 

## 딕셔너리, 해시테이블 문제풀이

### 출석체크
두개의 배열을 받아 공통되는 데이터를 첫번째 배열의 순서에 맞춰 출력한다.
```js
// Dictionary를 사용
function answer(class_1, class_2) {
  let result = [];
  // 내 코드 - 시간복잡도 O(n^2)
  // class_1.forEach(element => {
  //   if(class_2.includes(element))
  //     result.push(element);
  // });

  // 강사님 코드 시간복잡도 O(n)
  //class_2에 대한 key-value형태로 저장 -> 학생이 있는지 없는지 확인
  let temp = new Dictionary();
  for (let i = 0; i < class_2.length; i++) {
    temp.set(class_2[i]); //Dictionary에 class_2의 값을 추가
  };
  
  //class_1 for class_2 diction 학생 있는지 없는지 유무를 통해 빠르게 확인가능
  for (let i = 0; i < class_1.length; i++) {
    if(temp.has(class_1[i])) result.push(class_1[i]); // 해당 딕셔너리의 값이 class_1에 있으면 class_1의 값을 result로 push
  }
  return result; // 반환
};
```
### 숫자카드
첫번째 배열에 숫자 카드의 배열을, 두번째 배열은 목표값을 가진 배열을 준다.  
첫 배열에 목표값이 있는 경우 두번째 배열과 인덱스를 맞춰 몇개의 카드가 있는지 출력한다.
```js
// 출력에 중요한 get메서드
HashTable.prototype.get = function(key){
  let index = this.hashCode(key); // 두번쨰 배열의 키를 해시화한다
  return this.table[index] === undefined ? 0 : this.table[index]; // 해당값이 존재하면 값(해시에 저장된 카드의 개수)을 리턴 아니라면 0을 리턴
}

function answer (card, select){
  let result =[];
  let ht = new HashTable(); // 해시테이블 선언
  // card 내 숫자카드가 몇개인지 count
  for (let i = 0; i < card.length; i++) {
      // 카드 숫자별 count
      ht.put(card[i]); // 해시에 카드의 값을 넣는다
  }

  // select 내 숫자카드가 1번의 count한 배열에 몇개 있는지 확인
  for (let i = 0; i < select.length; i++) {
    // 1번에서 구한 숫자 카드가 있는경우 카드갯수를 없는경우 0
    result.push(ht.get(select[i]));
  }

  return result;
}
```

### 백신접종
선형 조사법 해시테이블을 사용하는 문제, 선형 조사법 해시테이블로 데이터를 삽입후 각자 어디에 위치해있는지 위치를 꺼낸다.  
```js
HashTable.prototype.put = function(key){
  let index = this.hashCode(key); // 해시화
  let startIdx = index; // 스타트인덱스를 선언
  do{
    if(this.table[index] === undefined){ // 해당 인덱스가 비어있다면 값을추가
      this.table[index] = new Element(key, index+1);
      this.length++;
      return true; // 리턴 (반복문 증단)
    }
    index = (index+1)%this.size; // 인덱스 증가
  }while(index !== startIdx) // 모든 배열을 탐색
};

HashTable.prototype.get = function(key){
  let index = this.hashCode(key);
  let startIdx = index;
  do{
    if(this.table[index] !== undefined && this.table[index].key === key){ // 해당 인덱스가 비어있지 않고 해당 데이터의 key가 목표 key와 같다면
      return this.table[index].value; // 해당 노드의 value를 리턴
    }
    index = (index+1)%this.size; // 인덱스 증가
  }while(index !== startIdx) // 모든 배열을 탐색
  return undefined; // 값이 없다면 리턴
}


function answer(name){
  let result = [];
  ht = new HashTable(name.length); // 해시테이블 선언

  // put loop
  for (let i = 0; i < name.length; i++) {
    ht.put(name[i]); // 해시테이블에 데이터 추가
  }
  // get loop
  for (let i = 0; i < name.length; i++) {
    result.push(ht.get(name[i])); // 해시테이블에서 테이터 얻어와 result에 추가
  }

  return result; // 반환
}
```

## 트리
그래프의 일종으로 두 노드 사이의 하나의 간선만 연결되어 있는 최소 연결과 계층형태의 비선형 자료구조이다.  
- 트리의 구조 및 용어  
노드(node): 하나 이상의 값을 갖는 객체 단위  
간선(edge): 두 노드를 연결하는 선  
루트 노드: (Root node) 부모가 없는 최상위 노드  
단말 노드: (Leaf node) 자식이 없는 노드  
부모 노드: (Parent node) 특정 sub-tree 내에서의 상위노드  
자식 노드: (Child node) 특정 sub-tree 내에서의 하위노드  
형제: (Sibling) 같은 부모를 가지는 노드  

### 트리의 특징
주요 특징: '최소 연결 트리'로 불린다, 계층모델, 방향 비순환 그래프(DAG: Directed Acyclic Graph)의 한 종류이다.  
트리 종류: 이진트리, 이진 탐색 트리, AVL 트리, 힙(Heap)  

- 노드 크기(size): 자신을 포함한 모든 자손 노드의 개수
- 노드 깊이(depth): 루트에서 특정 노드에 도달하기 위한 간선의 개수
- 노드레벨 (level): 트리의 특정 깊이를 가지는 노드의 집함
- 노드 차수 (degree): 노드가 지닌 가지의 수
- 트리 차수 (tree degree): 트리의 최대 차수
- 트리 높이(height): 루트 노드에서 가장 깊숙이 있는 노드의 길이

## 트리 순회
트리 구조에서 각각의 노드를 정확히 한번씩 체계적인 방법으로 방문하는 과정이다.  
- 필요용어  
N (Node): 해당 노드를 방문한다.   
L (Left): 왼쪽 서브 트리로 이동한다.  
R (Right): 오른쪽 서브 트리로 이동한다.  

- 순회방식  
전위 순회 (Pre-order): N-L-R  
중위 순회 (In-order): L-N-R  
후위 순회 (Post-order): L-R-N  
층별 순회 (Level-order): 낮은 Level부터 순차적으로 순회  

### 전위 순회
전위 순회 방법
1. 노드르 방문한다.
2. 왼쪽 서브트리를 전위 순회한다.
3. 오른쪽 서브트리를 전위 순회한다.  

의사코드
```
preorder(node)
  print node.value
  if node, left =/= null then preorder(node.left)
  if node, right =/= null then preorder(node.right)
```

### 중위 순회
중위 순회 방법
1. 왼쪽 서브트리를 중위 순회한다.
2. 노드를 방문한다.
3. 오른쪽 서브트리를 중위 순회한다.

의사코드
```
preorder(node)
  if node, left =/= null then inorder(node.left)
  print node.value
  if node, right =/= null then inorder(node.right)
```

### 후위 순회
후위 순회 방법  
1. 왼쪽 서브트리를 후위 순회한다.
2. 오른쪽 서브트리를 후위 순회한다.
3. 노드를 방문한다.

의사코드
```
preorder(node)
  if node, left =/= null then inorder(node.left)
  if node, right =/= null then inorder(node.right)
  print node.value
```

### 층별 순회
층별 순회 방법: 낮은 level부터 순차적 조회한다.
1. root노드를 방문한다.  
2. level이 증가  
3. 왼쪽에서 오른쪽 순으로 방문한다.  

의사코드
```
levelorder(root)
  q.enqueue(root)
  while not q.empty do
  node := q.dequeue()
  print node.value
  if node.left =/= null q.enqueue(node.left)
  if node.right =/= null q.enqueue(node.right)
```

## 이진트리
각각의 노드가 최대 두개의 자식노드를 가지는 트리 자료구조이다.  
- 활용방식  
  검색과 정렬: 이진 탐색트리와 이진 힙(Heap)구현에 사용한다.  
  허프만 코딩: 연관분기 구조 위한 데이터 표현에 활용한다.

- 이진트리의 종류  
  포화 이진트리 (Perfect binaray tree)  
  완전 이진트리 (Complete binaray tree)  
  정 이진트리 (Full binaray tree)  
  편향 이진트리 (Skewed binaray tree)  
  균형 이진트리 ( Balanced binaray tree)  

### 포화 이진 트리
모든 레벨의 노드가 가득 채워져 있는 트리이다.  
특징: Leaf노드를 제외한 모든 자식은 2개의 노드를 보유한다.  
노드의 개수: n = 2^h -1

### 완전 이진 트리
마지막 레벨 전까지 노드가 가득 채워져 있고, 마지막 레벨은 왼쪽부터 순차적으로 채워져 있는 트리이다.  
특징: 배열을 사용해 효율적인 표현이가능하다.  
노드의 개수: n < 2^h-1

### 정 이진 트리
모든 노드가 0개 또는 2개의 자식 노드만 갖는 트리이다.  
특징: proper 또는 plane트리 라고도 불린다.  
노드의 개수: n <= 2^h-1

### 편향 이진 트리
왼쪽 혹은 오른쪽으로 편향되게 치우쳐있는 트리이다.  
특징: 각각의 높이에 하나의 노드만 존재한다.  
노드의 개수: h

### 균형 이진 트리
삽입/삭제가 이루어 질 때, 왼쪽 서브 트리와 오른쪽 서브 트리의 높이 차를 1 이하로 맞추는 이진 탐색트리이다.  
특징: 서브트리 높이 차이가 항상 1 이하로 유지한다.  
균형 트리의 종류: AVL트리, Red-Black트리, B트리, B+트리, B*트리

## 이진 트리 순회
각각의 노드가 최대 두개의 자식 노드를 가지는 트리자료구조를 순회하는 방법이다.  
- 구현 메서드  
노드추가: BinaryTree._insertNode(), BinaryTree.insert()  
전위 순회: BinaryTree._preOrderTraverseNode(), BinaryTree.preOrderTravere()  
중위 순회: BinaryTree._inOrderTraverseNode(), BinaryTree.inOrderTravere()  
후위 순회: BinaryTree._postOrderTraverseNode(), BinaryTree.postOrderTravere()  
층별 순회: BinaryTree.levelOrderTraverse()  

### 이진트리의 구현
```js
function Node(value){ // 이진트리에 들어갈 노드
  this.value = value;
  this.left = null;
  this.right = null;
};

// BinaryTree() 시작 노드인 root를 저장하기 위한 생성자
function BinaryTree(){
  this.root = null;
};

// _insertNode() 재귀로 트리를 순회하며 노드추가 (내부사용)
BinaryTree.prototype._insertNode = function (node, value){
  // 현재값과 비교
  // 작으면 왼쪽, 크면 오른쪽
  // 왼쪽 오른쪽에 left, right pointer 비어있다면 추가할 노드를 연결
  // 비어있지 않다면 하위 노드에서 다시 비교하도록 넘김

  if(node === null){
    node = new Node(value); // 빈 노드면 들어간다
  }
  //left
  if(value < node.value){ // 새 값이 현재 노드보다 작으면 왼쪽으로
    node.left = this._insertNode(node.left, value);
  }
  //right
  if(value > node.value){ // 새 값이 현재 노드보다 크다면 오른쪽으로
    node.right = this._insertNode(node.right, value);
  }
  return node;
}
// insert() 노드 추가
BinaryTree.prototype.insert = function(value){
  this.root = this._insertNode(this.root, value);
}
```

### 전위 순회 구현
```js
// 전위 순회
BinaryTree.prototype._preOrderTraverseNode = function(node, callback){
  if(node === null){
    return; // 현재 노드가 null이면 되돌아옴
  }
  callback(node); //노드출력 N
  node.left = this._preOrderTraverseNode(node.left, callback); // 왼쪽 진입 L
  node.right = this._preOrderTraverseNode(node.right, callback); // 오른쪽 진입 R
}

BinaryTree.prototype.preOrderTraverse = function (callback){
  this._preOrderTraverseNode(this.root, callback); // 콜백으로 출력을 넣는다
}
```

### 중위 순회 구현
전위 순회와 순서만 바꾸면 된다.
```js
BinaryTree.prototype._inOrderTraverseNode = function(node, callback){
  if(node === null){
    return;
  }
  this._inOrderTraverseNode(node.left, callback); // 왼쪽 진입 L
  callback(node); //노드출력 N
  this._inOrderTraverseNode(node.right, callback); // 오른쪽 진입 R
}
```
### 후위 순회 구현
전위 순위와 순서만 바꾸면 된다.
```js
BinaryTree.prototype._postOrderTraverseNode = function(node, callback){
  if(node === null){
    return; 
  }
  this._postOrderTraverseNode(node.left, callback); // 왼쪽 진입 L
  this._postOrderTraverseNode(node.right, callback); // 오른쪽 진입 R
  callback(node); //노드출력 N
}
```
### 층별 순회 구현
층별 순회는 큐를 사용한다.  
각 층의 노드를 큐에 넣고 큐의 노드를 삭제하면서 하위 노드를 불러와 큐에 추가하는 방식을 사용한다.
```js
// Queue
function Queue(array){
  this.array = array ? array: [];
};

Queue.prototype.isEmpty = function(){
  return this.array.length === 0;
}

Queue.prototype.enqueue = function(element){
  return this.array.push(element);
}

Queue.prototype.dequeue = function(){
  return this.array.shift();
}

// 층별 순회
BinaryTree.prototype.levelOrderTraverse = function(callback){
  let q = new Queue(); // 큐를 선언
  let node; // 노드 선언
  q.enqueue(this.root); // root를 큐에 넣는다
  while(!q.isEmpty()){ // 큐가 빌때까지 반복
    node = q.dequeue(); // node는 dequeue한 노드
    callback(node); // node를 불러온다
    if(node.left!==null) q.enqueue(node.left); // 노드의 left에 값이 있다면 큐에 left 노드를 삽입
    if(node.right!==null) q.enqueue(node.right); // 노드의 right에 값이 있다면 큐에 right 노드를 삽입
  }
}
```

## 이진 탐색 트리 (Binary Search Tree)
현재 노드를 기준으로 왼쪽에는 작은 값, 오른쪽은 큰 값으로 정렬해 놓는 이진 트리 기반 자료구조이다.  
- 구현 메서드  
노드 추가: BinarySearchTree._insertNode(), BinarySearchTree.insert()  
노드 탐색(최대값): BinarySearchTree._maxNode(), BinarySearchTree.max()  
노드 탐색(최소값): BinarySearchTree._minNode(), BinarySearchTree.min()  
노드 탐색(특정값): BinarySearchTree._searchNode(), BinarySearchTree.search()  
노드 삭제: BinarySearchTree_findMinNode(), BinarySearchTree.removeNode(), BinarySearchTree.remove()  

## 이진 탐색 트리 구현
앞서 본 이진트리의 구현 자체가 이진 탐색트리의 구현이다. 코드는 다음과 같다.
```js
// _insertNode() 재귀로 트리를 순회하며 노드추가 (내부사용)
BinaryTree.prototype._insertNode = function (node, value){

  if(node === null){ // 비었다면 삽입
    node = new Node(value);
  }
  //left
  if(value < node.value){ // 작으면 왼쪽
    node.left = this._insertNode(node.left, value);
  }
  //right
  if(value > node.value){ // 크면 오른쪽
    node.right = this._insertNode(node.right, value);
  }
  return node;
}
// insert() 노드 추가
BinaryTree.prototype.insert = function(value){
  this.root = this._insertNode(this.root, value);
}
```

### 이진 탐색 트리의 최솟값, 최댓값 구하기
최댓값과 최솟값을 구하는 방법은 노드의 진행 방향만 다를 뿐 원리는 같다.  
최댓값을 구하는 코드는 주석으로 첨부
```js
// 최소값 찾기
//_minNode(): 반복문으로 트리를 순회하며 최솟값 노드 탐색
BinarySearchTree.prototype._minNode = function(node){
  if(node === null){
    return null; // 노드가 비었다면 null을 리턴
  }

  while(node && node.left !== null){ // 노드가 존재하고 노드의 left에 값이 있다면 반복
  // while(node && node.right !== null)
    node = node.left; // 더 작은 노드인 left로 이동
    // node = node.right;
  }

  return node.value; // 노드를 반환한다
}

//min(): 최솟값 노드 탐색
BinarySearchTree.prototype.min = function(){
// BinarySearchTree.prototype.max = function()
  return this._minNode(this.root);
  // return this._maxNode(this.root);
}
```

### 특정 값을 찾는 이진 탐색
```js
// _SearchNode(): 재귀로 트리를 순회하며 값을 만족하는 노드 탐색
BinarySearchTree.prototype._searchNode = function (node, value){
  if(node === null){
    return false; // 노드가 비었다면 false
  }

  if(node.value === value) { // 노드의 value가 목표값과 같다면
    return true; // true 리턴
  }else if(node.value > value){ // 목표값이 노드의 값보다 작다면
    return this._searchNode(node.left, value); // 왼쪽 노드로 이동한다
  }else if(node.value < value){ // 목표값이 노드의 값보다 크다면
    return this._searchNode(node.right, value); // 오른쪽 노드로 이동한다
  }
}
// search(): value 노드 탐색
BinarySearchTree.prototype.search = function(value){
  return this._searchNode(this.root, value)
}
```

### 이진 탐색 트리에서의 값 삭제
이진 탐색트리에서 값을 삭제할떄 해당 노드의 자식노드가 몇개인지에 따라 삭제하는 방법이 다르다.  
```js
//_findMinNode(): 반복문으로 트리를 순회하며 최솟값을 보유한 노드 탐색/반환
// 자식이 2개일 떄 사용한다
BinarySearchTree.prototype.findMinNode = function(node){
  while(node && node.left !== null){
    node = node.left;
  }
  return node;
}

// _removeNode(): 재귀로 트리를 순회하며 값을 만족하는 노드를 찾고 삭제
BinarySearchTree.prototype._removeNode = function(node, value){
  if(node === null) return null; // 노드가 null 이라면 null 반환
  if(node.value === value){ // 목표값이 현재 노드값과 같을때
    // case1: 자식 0개
    if(node.left === null && node.right === null){
      node = null; // 자식이 0개면 그냥 삭제한다
    }
    // case2: 자식 1개
    else if (node.left === null){ // 자식이 한개일 경우 자신의 위치에 자식을 놓고 본인은 삭제
      node = node.right;
    }else if (node.right === null){ // 좌우 전부 검사한다
      node = node.left;
    }
    // case3: 자식 2개
    else{ // 자식이 두개일 경우 우측 서브트리에서 최솟값을 자신의 위치에 놓는다
      let aux = this.findMinNode(node.right); // 우측서브트리의 최솟값을 aux로 선언
      node.value = aux.value; // 현재 값을 aux값으로 교체한다
      node.right = this._removeNode(node.right, aux.value); // aux의 원래 위치 노드를 제거한다
    }
  // 노드값이 목표값과 다르다면
  }else if (node.value > value){  // 목표값이 노드보다 작으면 왼쪽으로 탐색
    node.left = this._removeNode(node.left, value)
  }else if (node.value < value){ // 목표값이 노드보다 크면 오른쪽으로 탐색
    node.right = this._removeNode(node.right, value)
  }
  return node; // 노드를 반환한다
};

// remove(): 노드 삭제
BinarySearchTree.prototype.remove = function(value){
  this.root = this._removeNode(this.root, value);
};
```