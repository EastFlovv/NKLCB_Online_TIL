# 2021.10.11 [17일차]

오늘은 어제 남겨둔 비선형 자료구조 문제의 풀이를 시작으로 트라이의 구현과 자료구조의 실전 문제풀이, 그리고 알고리즘을 시작했다.  
비선형 실전 문제풀이의 경우 내가 푼 내용도 있지만 문제 풀이에 실패한 경우에는 강사님의 코드를 배껴 코딩했기에 본문에는 따로 추가하지 않았다.  
하지만 내가 쓴 코드가 강사님의 코드와 비슷한 경우엔 남겨두었다.  
나는 BFS, DFS가 알고리즘인줄 알았는데 이것은 알고리즘이 아니고 알고리즘은 따로 있었다는게 조금 놀라웠다.  
오늘은 알고리즘에서 정렬에 대해 공부했는데 생각보다 정렬은 시간복잡도가 큰 경우가 많았다.  
정렬은 아주 많이 사용하는 알고리즘으로 있어서 확실하게 익혀야 할것같다.  
다만 궁금한 점은 시간복잡도가 낮은 머지정렬과 퀵정렬이 있는데 왜 다른정렬을 사용하는지에 대해선 조금 의문이다.

## 공부한 내용

- 트라이는 탐색트리의 일종으로 주로 문자열 탐색에 사용한다.
- 트라이를 통해 사전과 같은곳에서 단어를 빠르게 찾는 메커니즘을 구현 할 수 있다.
- 트라이의 삭제는 삽입, 탐색과 다르게 조금 어렵다.
- 알고리즘의 종류에는 정렬알고리즘, 분할 정복 알고리즘, 탐욕 알고리즘, 동적 계획법등이 있다.
- 정렬 알고리즘은 버블정렬, 삽입정렬, 선택정렬, 병합정렬, 퀵정렬이 있다.
- 이중 버블, 삽입, 선택정렬은 시간복잡도가 O(n^2), 병합, 퀵정렬은 시간복잡도가 O(n log n)이다.
- 버블 정렬은 뒤쪽부터 정렬, 선택 정렬은 앞쪽부터 정렬한다.
- 삽입 정렬은 이미 정렬이 되어있다고 가정하고 기준점 이하의 정렬을 계속 시프트 하여 뒤로 움직이고 현재값을 그 안에 기준에 맞춰 삽입한다.

## 학습 결과물
학습 결과물은 같이 포함된 파일에 동봉되었으며 각 TIL의 목록별 소제목에 링크가 달려있다.

### 강의 학습 현황

\> 자바스크립트 비선형 자료구조 '76. 트라이' ~ 알고리즘'5. 정렬(4)' +  비선형 자료구조 68, 69, 70 비선형 자료구조 문제풀이

## 비선형 문제풀이

### 후위 순회
입력값을 이진트리로 만들고 후위 순회하여 출력하는 문제
```js
BinaryTree.prototype.postSearch = function (node, result = []){
  if(node === null) return;
  // L-R-N순으로 재귀한다.
  this.postSearch(node.left, result);
  this.postSearch(node.right, result);
  result.push(node.value);
}
```
### 바이러스
DFS 탐색을 통해 간선이 연결되어 하나의 네트워크를 구축하는 경우 얼마나 많은 컴퓨터가 바이러스에 감염되었는지 출력하는 문제  
(무방향 그래프)
```js
function answer (v, e_list){
  let result = 0;

  // 그래프에 객체 배열 생성
  let g = new Graph();
  for (let i = 1; i <= v; i++) {  // 초기화
    g.addVertex(i);
  }
  // 값을 추가
  for (let i = 0; i < e_list.length; i++) {
    let e = e_list[i]; // 연결상태를 입력
    g.addEdge(e[0], e[1]);
  }
  // dfs실행
  g.dfs(1); // 1번 노드가 감염됨
  // true 갯수를 세어 result에 더하고 반환
  for (const vertex in g.visited) {
    result += g.visited[vertex] ? 1 : 0;
  }

  return result;
}

// DFS
Graph.prototype.dfs = function(vertex){
  if(this.visited[vertex]) return; // 방문된 노드면 리턴
  
  this.visited[vertex] = true; // 현재 노드를 방문 처리
  neighbors = this.edge[vertex]; // 연결된 노드들을 배열로 입력받는다.
  for (let i = 0; i < neighbors.length; i++) {
    this.dfs(neighbors[i]); // 다음 레벨의 노드로 탐색
  }
}
```

### 미로 찾기
미로를 찾는 문제 BFS를 사용하며, 입력받은 값을 2차원 배열로 만들고 모든 방향의 노드로 동시에 탐색한다.
```js
function answer(input){
  let result = -1;

  let size = input.length;
  let dir = [ // 탐색방향
    [1, 0], 
    [0, -1], 
    [-1, 0], 
    [0, 1]
  ];

  // 문자열 -> map(정수: 0, 1)
  let map = []; // 문자열을 이차원 배열로 만든다
  for (let i = 0; i < size; i++) {
    map[i] = [];
    for (let j = 0; j < size; j++) {
      map[i][j] = Number(input[i][j]);
    }
  }

  // 시작, 끝점 설정
  let s = [0, size-1]; // 출발점
  let e = [size-1, 0]; // 도착점

  // 시작 -> Queue
  let q = new Queue(); // 큐를 생성
  q.enqueue(new Node(s[0], s[1], 1)); // 큐에 노드를 추가한다
  // Queue 순회 == 끝 break
  // while (큐 값이 있을때 까지)
  while(!q.isEmpty()){ // 큐가 빌떄까지 진행
    let v = q.dequeue(); // 현재값을 삭제
    // 예외처리
    if(v.x < 0 || v.x >= size || v.y < 0 || v.y >= size) continue; // 탐색위치가 배열 범위의 밖이라면 conintue
    if(map[v.y][v.x]) continue; // 현재위치가 1 이면 조건문이 true, continue한다
    if(v.x === e[0] && v.y === e[1]) { // 0인 위치로 도착
      result = v.c; // result +1
      break; // 도착이면 break
    }
    // 방문처리
    map[v.y][v.x] = 1; // 현재 위치를 1로 바꾼다
    // 너비 탐색
    for (let i = 0; i < dir.length; i++) { // 전방향으로 너비 우선 탐색
      q.enqueue(new Node(v.x+dir[i][0], v.y+dir[i][1], v.c+1));
    }
  }
```

## 트라이 (Tire)
탐색 트리의 일종으로, 문자열이나 연관 배열을 저장하는데 사용되는 트리 자료구조이다.  

- 트라이 특징  
  문자열 검색에 특화된 자료구조이다.  
  문자열 길이가 M일경우 O(M)의 시간복잡도로 검색가능하다.

- 구현 메서드  
  데이터 추가: Trie.insert()  
  데이터 검색: Trie.search()  
  데이터 삭제: Trie.delete()  

## 트라이 구현
### 트라이의 구현과 문자열 추가
```js
// TrieNode(): 문자값과 끝 단어 표시를 위한 노드 생성자
function TrieNode(){
  this.children = {}; // 자식 노드를 저장 key: 문자., value: TrieNode
  this.endOfNode = false; // 단어 여부
}

// Trie(): 루트 노드 저장을 위한 생성자
function Trie(){
  this.root = new TrieNode();
}

// insert(): 문자열 추가
Trie.prototype.insert = function(word){
  let current = this.root; // root에서 부터 출발

  for (let i = 0; i < word.length; i++) { // 매개변수 word를 한글자씩 탐색한다
    let ch = word[i]; // ch는 문자
    let node = current.children[ch]; // node는 current의 ch키를 할당

    if(node === undefined){ // 해당 노드가 존재하지 않으면
      node = new TrieNode(); // 새 노드를 만든다
      current.children[ch] = node; // 현재 노드가 current의 자식노드가 된다
    }
    current = node; // current는 자식노드로 이동
  }
  current.endOfNode = true; // 반복문이 끝나면 단어의 끝이므로 endOfNode를 true로 바꿈
}
```

### 트라이에서 문자열의 검색
```js
// search(): 문자열 검색
Trie.prototype.search = function(word){
  let current = this.root; // root에서 출발

  for (let i = 0; i < word.length; i++) {
    let ch = word[i]; // ch는 한 글자
    let node = current.children[ch]; // node에 현재 노드의 ch를 할당
    
    if(node == undefined) return false; // 해당 노드가 없으면 false
    current = node; // 해당 노드가 있으면 current를 ch노드로 이동
  }
  return current.endOfNode; // 끝까지 갔을떄 endOfNode를 리턴(단어가 있으면 true 아니면 false)
}
```

### 트라이에서 문자열 삭제
```js
Trie.prototype.delete = function(word, current = this.root, index = 0){ // 단어, root, 인덱스를 매개변수로 받음
  // 종료 조건
  if(index === word.length){ // 인덱스가 단어의 길이와 같아지면 종료
    if(!current.endOfNode) return false; // 이때 endOfNode가 false면 false반환 (지울 문자열이 없음)
    // 지울 단어가 있다면
    current.endOfNode = false; // 현재 노드의 endOfNode를 false로 바꿈
    return Object.keys(current.children).length === 0; // Object.keys에서 현재 노드의 자식이 더 없다면 true 반환
  }

  let ch = word[index]; // 단어첫자
  let node = current.children[ch]; // 다음 글자

  if(node === undefined) return false; // 다음글자가 없으면 false

  let isDeleteNode = this.delete(word, node, index+1) && !node.endOfNode; // 다음 글자가 있고 현재 노드가 끝이 아니면 true
  if(isDeleteNode){ // 더 지울 단어가 있으면
    delete current.children[ch]; //자식 글자를 삭제
    return Object.keys(current.children).length === 0; // 완전히 지운게 맞으면 true
  }
  return false; // 지우지 못하면 false
}
```

## 알고리즘  
알고리즘의 종류  
- 정렬 알고리즘 (+ 이진탐색 알고리즘)
- 분할 정복 알고리즘: 겹치지 않는 서브 문제로 분할하여 하향식 접근법으로 문제를 푼다.  
- 탐욕 알고리즘: 현재 주어진 조건에서 최선의 해를 구한다. (+백트래킹: 답이 될수 없는 요소를 미리 제거한다.)  
- 동적 계획법: 상향식, 하향식, 메모리제이션 사용하는 특징을 가진다.  

## 정렬
배열 내 원소들을 번호순이나 사전 순서와 같이 일정한 순서대로 열거하는 알고리즘이다.  
대표정렬 알고리즘별 구현 함수
- 시간복잡도 O(n^2)
  - 거품 정렬(Bubble Sort): bubbleSort_1(), bubbleSort_3(), bubbleSort_3(), bubbleSort()  
  - 선택 정렬(Selection Sort): selectionSort()
  - 삽입 정렬(Insertion Sort): insertionSort()
- 시간복잡도 O(n log n)
  - 병합 정렬(Merge Sort): mergeSort()
  - 퀵 정렬(Quick Sort): quickSort()  
- 공통 함수: swap(), asscending(), descending()

### 정렬 알고리즘의 공통 함수 구현
```js
let swap = function(arr, idx_1, idx_2){ // 배열과 두 인덱스가 매개변수
  let temp = arr[idx_1]; // 새 변수에 값 1을 저장
  arr[idx_1] = arr[idx_2]; // 값 1의 자리에 값 2를 저장
  arr[idx_2] = temp; // 값2의 자리에 값1 저장
}

let ascending = function (x, y){
  return x > y; // 오름 차순
}

let desccending = function (x, y){
  return x < y; // 내림 차순
}
```



## 거품 정렬 (Bubble Sort)
서로 인접한 두 원소를 비교하면서 정렬하는 알고리즘  
평균 시간복잡도 O(n^2)  
알고리즘 동작 방식 : 뒤쪽부터 정렬
1. 인접 값 비교
2. 큰값이면 뒤로 교환
3. index = n, 매 반복마다 n-i만큼 반복

### 거품정렬 구현
가장 효율적인 코드만 TIL에 작성 상세한 코드는 소스코드에서 확인 할 수 있다.
```js
let bubbleSort_3 = function(arr){
  let swapped; // swapped 선언
  for (let i = 0; i < arr.length - 1; i++) { // 총 수행횟수
    swapped = false; // 바뀐것이 없기에 false로 둔다
    for (let j = 0; j < arr.length - i - 1; j++) { //버블 정렬을 통해 서로의 값을 확인
      if(arr[j] > arr[j+1]){ // 앞의 값이 뒤의 값보다 크다면
        swap(arr, j, j+1); // 바꾼다.
        swapped = true; // 바꿨으므로 swapped는 true
      }
    }
    if(!swapped) break; // 만약 swapped가 false라면 이미 정렬이 완료된 상태이므로 break
  }
}
```

## 선택 정렬 (Selection Sort)  
최솟값을 찾아 데이터 영역의 가장 앞으로 이동하는 방식을 반복하여 전체 데이터 영역을 정렬하는 알고리즘  
평균 시간 복잡도 O(n^2)  
알고리즘 동작 방식: 앞쪽부터 정렬  
1. 최소값을 찾는다
2. 정렬되지 않은 원소중 가장 앞쪽과 자리를 교체

### 선택 정렬의 구현
```js
let selectionSort = function(arr, compare){
  for (let i = 0; i < arr.length; i++) {
    let k = i; // 위치를 바꿀 현재 인덱스
    for (let j = i + 1; j < arr.length; j++) { /// j는 i를 제외한 나머지에서 최소값을 찾는다
      if(compare(arr[k], arr[j])) k = j; // 오름차순, 내림차순 결정, 최소값 결정
    }
    swap(arr, i, k); // 두값을 변경
  }
}
```

## 삽입정렬 (Insertion Sort)
이미 정렬된 데이터 영역과 비교하면서, 자신의 위치를 찾아 요소를 삽입하며 정렬하는 알고리즘  
평균 시간 복잡도 O(n^2)  
알고리즘 동작 방식: 요소를 뽑아 별도 공간에 저장하여 지정된 위치에 삽입  

### 삽입 정렬의 구현
```js
let insertionSort = function(arr, compare){
  for (let i = 1; i < arr.length; i++) { //0번 인덱스는 정렬됬다고 가정한다
    let temp = arr[i]; // temp에 기준인덱스 다음값을 넣음
    let j;
    for (j = i-1; j >= 0; j--) { 
      arr[j+1] = arr[j]; // 이미 정렬된 인덱스를 옮긴다
      if(compare(temp, arr[j])) break;  // 정렬규칙에 위배되는 값을 넘어갈것 같으면 break
    }
    arr[j+1] = temp; // temp를 한칸씩 뒤로 당겨 정렬한 값에 추가함
  }
}
```