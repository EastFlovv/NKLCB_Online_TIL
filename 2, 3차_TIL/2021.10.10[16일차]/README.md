# 2021.10.10 [16일차]

오늘은 자바스크립트의 그래프 자료구조들에 대해 공부했다.  
그래프 자료구조는 별다른 상 하위 없이 노드들간의 간선을 통해 관계를 갖는 자료구이다.  
특히 이런 자료구조중 코딩 테스트의 단골문제인 DFS, BFS, 이진트리를 이용하는 Heap을 주력으로 공부했는데, 예전에는 어렵게 느껴졌던 요소들이 막상 알고보니 그렇게 어렵지 않게 느껴져 당황스러웠다.  
실전문제를 더 풀어서 특히 BFS, DFS는 완전히 내것으로 만들고 싶다.

## 공부한 내용
- 정점과 간선으로 구성된 그래프 자료구조에 대해 배웠다.  
- 그래프 자료구조는 방향그래프, 무방향 그래프를 비롯한 다양한 종류가 있다.
- 그래프는 인접행렬과, 인접리스트를 이용해 표현한다.
- DFS는 한 쪽 노드를 끝까지 파고들고 돌아오는 깊이 우선 탐색 기법이다.
- DFS는 스택과 재귀를 통해 구현 할 수 있으며 최단거리 탐색은 안될 수 있다.
- BFS는 큐와 스택을 이용해 구현하며 최단거리 탐색에 아주 요효하다.
- 깊이기 깊을 경우 BFS는 저장 공간이 아주 많이 필요 할 수 있다.
- Heap은 완전 이진트리로 구성된 자료구조이며 최대힙, 최소힙이 존재한다.
- 최소 힙은 root로 갈 수록 작은수가, 최대힙은 높은 수가 위치한다.
- 항상 완전 이진트리의 모습을 유지해야하는 힙의 경우 삽입 삭제등의 연산이후에 반드시 정렬 시퀸스를 실행해야한다.


## 학습 결과물
학습 결과물은 같이 포함된 파일에 동봉되었으며 각 TIL의 목록별 소제목에 링크가 달려있다.

### 강의 학습 현황

\> 자바스크립트 비선형 자료구조 '56. 그래프' ~ '75. 힙(5)' 

## 그래프(Graph)
정점과 간선으로 구성되어 네트워크 구조를 추상화한 비선형 자료 구조이다.  
- 그래프 특징  
  정점(Vertex)과 간선(Edge)의 집합이다.  
  다양한 그래프 종류를 혼합하여 표현가능하다.  

- 그래프 종류
  - 방향 그래프 (Directed Graph): 간선에 특정 방향이 존재하는 그래프 (A->B로 표현, A에서 B로만 이동 가능)
  - 무방향 그래프(Undirected Graph): 간선에 특정 방향이 존재하지 않는 그래프 (A-B로 표현, 양방향 이동 가능)
  - 가중치 그래프(Weighted Graph): 간선에 비용이나 가중치가 할당된 그래프
  - 연결 그래프 (Connected Graph): 무방향 그래프에 있는 모든 정점쌍에 대해 항상 경로가 존재하는 그래프
  - 비연결 그래프 (Disconnected Grapph): 무방향 그래프에서 특정 점정쌍 사이에 경로가 존재하지 않는 그래프
  - 순환 그래프(Cycle): 단순 경로의 시작 정점과 종료 지점이 동일하여 순환 지점이 존재하는 그래프
  - 비순환 그래프(Acyclic Graph): 순환 지점이 존재하지 않는 그래프
 -  완전 그래프(Complete Graph): 그래프에 속해 있는 모든 정점이 서로 연결되어 있는 그래프

- 그래프 표현 방법  
  인접 리스트 (Adjaceny List): 정점에 연결된 다른 정점을 리스트로 표현한다.  
  인접 행렬 (Adjacency Matrix): 정점에 연결된 다른 정점을 정점x정점 크기의 매트릭스로 표현한다.  

- 구현 메서드  
  정점/간선 추가: Graph.addVertex(), Graph.addEdge()  
  정점/간선 삭제: Graph.removeVertex(), Graph.removeEdge()  
  정점/간선 개수, 그래프 출력: Graph.sizeVertex(), Graph.sizeEdge(), Graph.print()  

## 그래프 구현하기

### 방향 그래프 구현
```js
// Graph(): edge object 객체 저장을 위한 생성자
function Graph(){
  this.edge = {};
}

// addVertex(): 정점 추가
Graph.prototype.addVertex = function (v){
  this.edge[v] = []; // 객체에 vertex를 키로 배열을 넣는다
}

// addEdge(): 간선 추가
Graph.prototype.addEdge = function(v1, v2){
  this.edge[v1].push(v2); // vertext에 v2값을 추가
}

// removeEdge(): 간선 삭제
Graph.prototype.removeEdge = function(v1, v2){
  if(this.edge[v1]){ // 정점이 있으면
    let idx = this.edge[v1].indexOf(v2);  // idx는 정점 안의 v2의 index값

    if(idx != -1){ // 값이 있으면
      this.edge[v1].splice(idx, 1);  // 삭제
    }

    if(this.edge[v1].length === 0){ // 정점안의 간선의 갯수가 0이면
      delete this.edge[v1]; // 정점을 삭제 (배열삭제)
    }
  }
}
```
### 무방향 그래프의 구현
값의 추가, 삭제에 코드를 추가한다.
```js
Graph.prototype.addEdge = function(v1, v2){ // 양방향으로 배열을 추가
  this.edge[v1].push(v2); // v1 -> v2
  this.edge[v2].push(v1); // v2 -> v1
}

// removeEdge(): 간선 삭제
Graph.prototype.removeEdge = function(v1, v2){ // 양방향으로 배열을 삭제한다.
  // v1 -> v2 삭제
  if(this.edge[v1]){
    let idx = this.edge[v1].indexOf(v2);

    if(idx != -1){
      this.edge[v1].splice(idx, 1);
    }

    if(this.edge[v1].length === 0){
      delete this.edge[v1];
    }
  }
  // v2 -> v1 삭제
  if(this.edge[v2]){
    let idx = this.edge[v2].indexOf(v1);

    if(idx != -1){
      this.edge[v2].splice(idx, 1);
    }

    if(this.edge[v2].length === 0){
      delete this.edge[v2];
    }
  }
}
```

### 그래프의 반환과 출력
```js
// sizeVertex(): vertex 개수 반환
Graph.prototype.sizeVertex = function (){
  return Object.keys(this.edge).length;
}

// sizeEdge(): edge 개수 반환
Graph.prototype.sizeEdge = function (vertex){
  return this.edge[vertex] ? Object.keys(this.edge[vertex]).length : 0;
}

// print(): 현재 Graph 연결 상태 출력
Graph.prototype.print = function(){
  for(let vertex in this.edge){ // edge안의 vertex(key)를 탐색
    let neighbors = this.edge[vertex]; // neighbors는 edge의 정점내의 간선 배열
    if(neighbors.length === 0) continue; // neigbors의 길이가 0이면 continue
    process.stdout.write(`${vertex} -> `); // 정점 출력
    for (let j = 0; j < neighbors.length; j++) { // 간선 출력 
      process.stdout.write(`${neighbors[j]} `);
    }
    console.log();
  }
}
```

## DFS (Depth First Search)
깊이 우선 탐색  
트리나 그래프 등에서 하나의 노드를 최대한 깊게 들어가면서 해를 찾는 탐색 기법이다.  
- 장/단점  
  장점:   
  인접한 후보 노드만 기억하면되므로 적은 기억공간을 소모한다.  
  노드가 깊은 단계에 있을 경우 빠르게 정답 산출한다.  
  단점:  
  선택한 경로가 답이 아닐 경우 불필요한 탐색을 할수 있다.  
  최단 경로를 구할 시 찾은 해가 정답이 아닌 경우가 발생한다.  

- 구현 메서드  
  재귀를 이용한 탐색: Graph._dfsResursiveVisit()  
  스택을 이용한 탐색: Graph._dfsLoopVisit()  

## DFS 구현하기

### 재귀를 이용한 DFS 구현
```js
function Graph(){ // 그래프에 방문 여부를 위한 객체 추가
  this.edge = {};
  this.visited = {};
}

Graph.prototype.addVertex = function (v){
  this.edge[v] = [];
  this.visited[v] = false; // 방문 여부의 기본값은 false
}

// dfs(): DFS탐색
Graph.prototype.dfs = function (startVertex){
  this._dfsRecursiveVisit(startVertex); // 시작인덱스가 들어오면 재귀함수를 실행
}

// _dsfRecursiveVisit(): 재귀를 이용한 DFS탐색
Graph.prototype._dfsRecursiveVisit = function(vertex){ // 재귀함수
  // 종료조건
  if(this.visited[vertex]) return; // 방문한 정점이면 리턴

  // 재귀호출을 하면서 수행해야할 코드
  this.visited[vertex] = true; // 방문 여부를 true
  console.log(`visit "${vertex}"`); //출력

  let neighbors = this.edge[vertex]; //방문한 정점의 간선배열을 가진다
  for (let i = 0; i < neighbors.length; i++) { // 간선 배열의 값을 모두 재귀
    this._dfsRecursiveVisit(neighbors[i]);
  }
}
```

### 스택을 이용한 DFS 구현
```js
import { Stack } from "./stack.mjs";
Graph.prototype.addVertex = function (v){
  this.edge[v] = [];
  this.visited[v] = false;
}
Graph.prototype.addEdge = function(v1, v2){
  this.edge[v1].push(v2);
}

Graph.prototype.dfs = function (startVertex){
  this._dfsLoopVisit(startVertex); // 스택을 이용한 DFS실행
}

// _dfsLoopVisit() 스택을 이용한 DFS 탐색
Graph.prototype._dfsLoopVisit = function(vertex){
  let stack = new Stack(); // 스택선언
  stack.push(vertex); // 시작 정점을 push

  while(!stack.isEmpty()){ // 스택에 아무것도 없을때 까지 반복
    let vertex = stack.pop(); // vertex는 스택의 pop값
    if(this.visited[vertex]){ // 방문한적 있다면 continue
      continue;
    }

    this.visited[vertex] = true; // 방문 여부 true로 전환
    console.log(`visit "${vertex}"`); // 출력

    let neighbors = this.edge[vertex]; // neighbors에 간선 배열 할당
    for (let i = neighbors.length-1; i >= 0; i--) {
      stack.push(neighbors[i]); // 간선 배열의 값들을 역순으로 스택에 push
    }
  }
}
```

## BFS (Breadth First Search)
너비 우선 탐색  
트리나 그래프 등에서 인접한 노드를 우선 방문 하면서 넓게 움직이며 해를 찾는 탐색 기법이다.  
- 장/단점  
  장점:  
  최단 경로 탐색에서 구한 해가 정답임을 보장한다.  
  단점:  
  경로가 매우 길어질 경우 탐색 범위가 증가하면서 DFS보다 많은 기억 공간이 필요하다.  

- 구현 메서드  
  큐를 이용한 탐색: Graph.bfs(), Graph._bfsLoopVisit()  
  최단 경로 탐색: Graph.shortestPath(), Graph.bfsShortestPath(), Graph._from_to_path()  


## BFS 구현
### 큐를 사용해 BFS에서 최단거리의 비용을 탐색하는 코드
```js
import { Queue } from "./queue.mjs";
// bfs(): BFS탐색
Graph.prototype.bfs = function(startVertex){
  this._bfsLoopVisit(startVertex);
}
// _bfsShortestPath(): 큐를 이용한 최단거리 비용탐색
Graph.prototype._bfsShortestPath = function(vertex){
  let queue = new Queue(); // 새로운 큐를 선언
  queue.enqueue(vertex); // 큐에 정점을 넣는다

  let distance = {}; //각 정점이 startVertex까지 걸리는 최단 거리 비용
  let pre_visit = {}; // 이전에 방문한 노드를 저장
  for (let vertex in this.edge) { // 전체 정점을 초기화
    distance[vertex] = 0;
    pre_visit[vertex] = null;
  }

  while(!queue.isEmpty()){ // 큐가 빌때까지 반복
    let vertex = queue.dequeue(); // dequeue한 값을 vertex에 저장
    
    this.visited[vertex] = true; // 방문여부 true
    console.log(`visit "${vertex}"`);
    
    let neighbors = this.edge[vertex]; // 간선을 neighbors에 할당
    for (let i = 0; i < neighbors.length; i++) { // 전체 반복
      if(!this.visited[neighbors[i]]){ // 방문한적 없는 정점이라면
        distance[neighbors[i]] = distance[vertex]+1; // 거리를 1증가
        pre_visit[neighbors[i]] = vertex; //vertex는 이전 방문 노드가 된다
        queue.enqueue(neighbors[i]); // 현재 neigbor[i]에 해당하는 정점을 큐에 삽입
      };
    }
  }
  return {distance, pre_visit}; // 방문거리와 마지막 방문 노드를 리턴
}
```

### 두 정점간 최단 거리를 구하는 코드
```js
import { Queue } from "./queue.mjs";
import { Stack } from "./stack.mjs";

// _from_to_path()
Graph.prototype._from_to_path = function (pre_visit, from, to){ // 이전 visit값과 from, to를 입력받음
  let stack = new Stack(); // 새 스택을 만든다
  for (let v = to; v !== from; v = pre_visit[v]) { // vertex가 from이 아니라면 계속반복
    stack.push(v); // vertext를 스택에 삽입
  }
  stack.push(from); // 마지막에 from을 삽입

  while(!stack.isEmpty()){ // 스택이 빌떄까지 반복한다
    let v = stack.pop(); // v는 stack의 pop값
    process.stdout.write(`${v} -> `) // 출력
  }
  console.log("end");
}

// shortestPath(): 다른 정점 간 최단 경로 탐색
Graph.prototype.shortestPath = function(startVertex){
  let result = this._bfsShortestPath(startVertex); // result로 각 시작 정점 으로부터 각 정점까지의 최단 거리를 받는다

  console.log(result.distance);
  console.log(result.pre_visit);

  for (let vertex in this.edge) { //모든 정점에 반복
    if(vertex === startVertex) continue; // 시작 정점일떈 하지 않는다
    this._from_to_path(result.pre_visit, startVertex, vertex); // 시작 정점에서 모든 정점까지의 최단 거리를 출력
  }
}
```

## 힙 (Heap)
최댓값 혹은 최솟값을 빠르게 찾기 위해 완전 이진트리 형태로 연산을 수행하는 자료구조이다.  
- 힙 대표속성  
  정렬: 각 노드의 값은 자식 노드가 가진 값보다 작거나 혹은 큰 순서대로 정렬한다.  
  형태: 트리의 형태는 완전 이진트리 모양을 한다.  

- 힙 종류  
  최소힙(Min Heap): 부모 노드의 값이 자식 노드의 값보다 작거나 같은 완전 이진 트리  
  최대힙(Max Heap): 부모 노드의 값이 자식 노드의 값보다 크거나 같은 완전 이진 트리  

- 힙 구현
  완전 이진 트리 성질을 만족하기 때문에 1차원 배열로 표현 가능
  현재노드: N, 부모 노드: N-1, 왼쪽 자식노드: (N\*2)+1, 오른쪽 자식 노드:(N\*2)+2;

- 구현 메서드
  노드 위치 계산: Heap.parentIndex(), Heap.leftChildIndex(), Heap.rightChildIndex()  
  노드 값 확인: Heap.parentIndex(), Heap.leftChildIndex(), Heap.rightChildIndex()  
  노드 추가/삭제 (추출): Heap.insert(), Heap.bubbleUp(), Heap.extract, Heap.bubbleDown()  

## 힙 구현

### 힙의 기본 구성 요소
```js
// Heap(): 배열 내 요소를 저장하기 위한 생성자
function Heap(){
  this.items =[]; // 힙은 배열로 선언한다
}
// swap(): 배열 내 두 요소 위치를 변경
Heap.prototype.swap = function(index, index2){
  let tmp = this.items[index1];
  this.items[index1] = this.items[index2];
  this.items[index2] = tmp;
};

// parentIndex(): 부모 노드 위치 반환
Heap.prototype.parentIndex = function(index){
  return Math.floor((index-1)/2);
}

// leftChildIndex(): 왼쪽 자식 노드의 위치 반환
Heap.prototype.leftChildIndex = function(index){
  return index*2+1;
}

// rightChildIndex(): 오른쪽 자식 노드의 위치 반환
Heap.prototype.rightChildIndex = function(index){
  return index*2+2;
}
// parent(): 부모 노드의 요소 값 반환
Heap.prototype.parent = function(index){
  return this.items[this.parentIndex(index)];
}

// leftChild(): 부모 노드의 요소 값 반환
Heap.prototype.leftChild = function(index){
  return this.items[this.leftChildIndex(index)];
}

// rightChild(): 부모 노드의 요소 값 반환
Heap.prototype.rightChild = function(index){
  return this.items[this.rightChildIndex(index)];
}

// peek(): 현재 정렬된 최소/최대 요소 값 반환
Heap.prototype.peek = function(){
  return this.items[0];
}

// size(): 현재 배열의 크기 반환
Heap.prototype.size = function(){
  return this.items.length;
}
```

### 최소힙의 구현
```js
// insert(): 신규 노드 추가
Heap.prototype.insert = function(item){
  this.items[this.size()]=item; // 가장 끝 인덱스에 값을 추가
  this.bubbleUp(); // 버블업을 통해 작은 값을 위로 올린다 (최소힙)
}

// bubbleUp(): 추가된 노드 위치 정렬
Heap.prototype.bubbleUp = function(){
  let index = this.size()-1; // 인덱스는 배열의 맨 끝 인덱스
  while(this.parent(index) && this.parent(index) > this.items[index]){ // 부모요소의 index가 있고 배열의 맨 끝값보다 부모의 값이 크다면반복
    this.swap(this.parentIndex(index), index) // 두 요소의 위치를 바꾼다
    index = this.parentIndex(index); // 인데스는 부모요소의 인덱스로 변경
  }
}
```

### 요소의 반환, 삭제
힙은 요소를 root부터 삭제하며 이후 가장 끝의 정점을 root에 놓고 버블 다운 한다
```js
// extract(): root 노드 반환 및 삭제
Heap.prototype.extract = function(){
  let item = this.items[0]; // 0번 배열값을 반환
  this.items[0] = this.items[this.size()-1]; // 배열 맨 끝 값을 0번 배열로 가져온다
  this.items.pop(); // 맨끝을 pop
  this.bubbleDown() // 요소를 버블 다운 규칙으로 재정렬
  return item;
}


// bubbleDown(): 대체된 root 노드 위치를 기준으로 정렬
Heap.prototype.bubbleDown = function(){
  let index = 0; // 인덱스는 0에서 출발
  while(this.leftChild(index) && (this.leftChild(index) < this.items[index] || this.rightChild(index) < this.items[index])){ // 왼쪽 자식노드가 존재하고, 왼쪽 자식 노드가 현재값보다 작거나 오른쪽 자식이 현재값 보다 작다면 반복
    let childIndex = this.leftChildIndex(index); // childIndex는 왼쪽 자식요소의 인덱스를 갖는다
    if(this.rightChild(index) && this.rightChild(index) < this.items[childIndex]){ // 오른쪽 자식요소가 존재하고 오른쪽 자식요소의 값이 왼쪽 값보다 작다면
      childIndex = this.rightChildIndex(index); //childIndex는 오른쪽 자식의 인덱스를 갖는다
    }

    this.swap(childIndex, index); //현재값과 선정된 자식값의 위치를 바꿈
    index = childIndex; // 현재 인덱스는 자식인덱스를 가짐
  }
}
```

### 최대힙의 구현
위의 최소힙 구현, 요소의 반환, 삭제의 부등호를 전부 반대 방향으로 바꾸면 최대힙을 구현한다.