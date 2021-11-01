# 2021.10.14 [20일차]

오늘은 동적 계획법과, 최단 경로의 Dijkstra 알고리즘과 floyd-Warshall알고리즘을 배웠다.  
동적 계획법의 경우 이미 한번 계산된 값을 메모리에 넣어 놨다가 재활용 하므로써 시간을 줄이는 방법을 사용한다고 하는데 한번도 이런식으로 해본적이 없다보니 아직 사용하는데 있어 제대로된 코드를 떠올리기 힘든면이 있다.  
최단 경로를 구하는 Dijkstra알고리즘과 floyd-warshall알고리즘의 경우 여지껏 배운것중에 가장 어렵게 느껴진다.  
특히 Dijkstra알고리즘의 경우 기사 자격증을 딸 때, 분명히 공부했었는데 문제는 이 부분을 코드로 구현 할 일이 없다보니 막상 코드를 보고 따라하니 생소한 느낌이 강했다.  
floyd-warshall의 경우는 완전 처음 본 경우 였는데 모든 경우 경우의 수를 구하기 위해 사용하다보니 3중 for문을 사용하는것이 진땀이 날 정도로 어려웠다.  
아직은 이해가 완벽하지 않으나 내일 기출문제를 풀고 나중에 추가로 더 살펴보면서 잘 쓸 수 있도록 해야겠다.

## 공부한 내용

- 동적 계획법을 사용해 한번 계산된 값을 다시 계산하지 않고 메모리에서 꺼내쓸 수 있다.
- 동적 계획법의 자료 저장은 주로 배열을 사용한다.
- 최단경로 알고리즘은 Dijkstra, A*, Bellman-Ford, floyd-Warshall알고리즘이 있다.  
- Dijkstra알고리즘은 최소 비용으로 최단 경로를 가는 방법을 구하는 알고리즘이다.
- floyd-shall알고리즘은 동적 계획법을 활용하여 가능한 모든 정점의 쌍에 대해 최단 거리를 구하는 완전탐색 알고리즘이다.
- floyd-shall알고리즘은 음의 가중치가 있어도 사용이 가능하다.

## 학습 결과물
학습 결과물은 같이 포함된 파일에 동봉되었으며 각 TIL의 목록별 소제목에 링크가 달려있다.

### 강의 학습 현황

\> 자바스크립트 알고리즘 '16. 동적 계획법' ~ 알고리즘 '23. floyd-Warshall 알고리즘'

## 동적 계획법 (Dynamic Programming)
Memoization로 중복 연산을 방지하며, 작은 부분 문제로 큰 문제를 해결하며 해를 도출하는 알고리즘 설계 기법이다.  
- 동적 계획법 특징  
  부문 문제는 중복되며, 상위 문제 해결 시 재사용한다.  
  Memoization 기법을 사용한다. (동일한 계산을 반복할때, 이전에 계산한 값을 메모리에 저장하여 중복 연산 방지)

- 동적 계획법 구현 방식  
  - Top-down: 재귀를 통해 큰 문제를 작은 문제로 나눠 해결하며 해를 찾는 방법 (재귀에는 depth의 제한이 있다.)  
  - Bottom-up: 반복문을 통해 작은 문제부터 차례대로 해를 찾는 방법

### 구현 1
피보나치 수열을 통해 확인하는 Top-down방식의 동적 계획법
```js
function fibo_td(n, d = []){ // Memoization을 위한 d배열
  if(n < 2) return n; // 피보나치 종료문
  if(d[n]) return d[n]; // 배열에 이미 계산된 값이 있으면 값을 반환

  d[n] = fibo_td(n-1) + fibo_td(n-2); // d[n]은 재귀한 값들의 합
  return d[n]; // d[n]을 반환한다.
}
```


### 구현 2
피보나치 수열을 통해 확인하는 Bottom-up방식의 동적 계획법
```js
function fibo_bu(n, d = []) {
  d[0] = 0; // 피보나치 수열의 기본값
  d[1] = 1; // 피보나치 수열의 기본값

  for (let i = 2; i <= n; i++) {
    d[i] = d[i-1] + d[i-2]; // 값을 구하기 위한 점화식을 배열에 넣는다
  }
  return d[n]; // 목표배열의 값을 출력
}
```

## DP 문제풀이
### 거스름돈 2
동적 계획법을 활용하여 동전을 줄 수 있는 경우의 수를 모두 구한다.  
동전은 1, 2, 5원이 있다.
```js
function solution(n, money) {//n은 목표값 money는 동전의 배열
  let dp = new Array(n + 1).fill(0); // 모든 경우의 수를 0으로 초기화
  let answer = 0;
  dp[0] = 1; // 사용하지 않는 0번 인덱스를 1로 초기화
  
  for(let coin of money){ // coin은 사용할 동전
      for(let price = coin; price <= n; price++){ //price는 동전값부터 시작, n보다 작거나 같다면 값을 1씩 올리며 계속 반복한다
          dp[price] += dp[price-coin]; // 배열의[price]키에 price-coin의 값을 더한다.
      }

      // 1원일 경우 모두 하나씩 0번인덱스인 1의 값을 전부 가져온다
      // 2원부터는 자신이 사용가능한 경우에만 1원의 결과를 저장된 배열에서 가져와 자신의 경우와 합쳐 배열을 업데이트한다.
  }
  return dp[n] % 1000000007;
}
```

### 정수 삼각형
삼각형의 꼭대기부터 시작해 맨 아래까지 자신의 좌, 우 자식들을 더한값중 가장 큰 값을 반환한다.
```js
function solution (triangle){ // 삼각형 배열
  let answer = 0;
  let height = triangle.length; // 배열의 길이는 삼각형의 높이
  let d = Array(501) // d는 2차원 배열
    .fill(0)
    .map(()=> Array(501).fill(0));
  
  answer = d[0][0] = triangle[0][0]; 

  for (let i = 1; i < height; i++) { // 삼각형의 층을 내려가며 진행한다
    for (let j = 0; j <= i; j++) { // 한줄의 요소를 모두 검사
      if(j === 0) d[i][j] = d[i-1][j] + triangle[i][j]; // 왼쪽 끝일 경우 자신의 값과 그 윗값을 더함
      else if(j === i) d[i][j] = d[i-1][j-1] + triangle[i][j]; // 오른쪽 끝일경우 자신과 그 윗값을 더함
      else d[i][j] = Math.max(d[i-1][j-1], d[i-1][j]) + triangle[i][j]; // 중앙일경우 윗값중 더 큰수를 가져와서 더함

      answer = Math.max(answer, d[i][j]); // 모든 계산된 값중 가장 큰 값을 반환한다.
    }
  }

  return answer;
}
```

## 최단경로
가중 그래프에서 구성하는 간선 간 가중치 합이 최소가 되도록 최단 경로를 찾는 알고리즘이다.  
- 최단경로 알고리즘 유형  
  - Dijkstra 알고리즘: 단일 최단 경로 최소 비용 산출
  - A* 알고리즘: 휴리스틱 방법 사용한 탐색
  - Bellman-Ford 알고리즘: 음수 가중치 허용한 비용 산출
  - Floyd-Warshall 알고리즘: 동적 계획법 기반 고차원 기법

## Dijkstra 알고리즘
그래프에서 출발점과 도착점 사이의 최단 거리를 구하는 알고리즘이다.  
보통 단일 정점 간 최단 경로 산출시 사용, 도로 교통망이나 OSPF등의 네트워크 라우팅 프로토콜에 널리 이용한다.  
- 구현 메서드  
  정점 추가: ShortestPath.addVertex()  
  간선 추가: ShortestPath.addEdge()  
  다익스트라 알고리즘: ShortestPath._extractMin(), ShortestPath.dijkstra()  

### 공통 구현 모듈
```js
// ShortestPath(): edge Object 객체 저장을 위한 생성자
function ShortestPath(){
  this.edges = {}; // key - value
}

// addVertex(): 정점 추가 (간선 비용 표시를 위해 object형태로 저장)
ShortestPath.prototype.addVertex = function (vertex) {
  this.edges[vertex] = {};
}

// addEdge(): 간선 추가
ShortestPath.prototype.addEdge = function (srcVertex, dstVertex, weight) {
  this.edges[srcVertex][dstVertex] = weight;
  // 시작 노드, 끝노드 = 가중치
}
```

## Dijkstra 알고리즘 구현
```js
// extractMin(): 최단 거리 노드 탐색
ShortestPath.prototype._extractMin = function (queue, dist){ // 큐와 dist 배열을 입력받음
  let minDistance = Number.POSITIVE_INFINITY;
  let minVertex = null; 
  
  for (let vertex in queue) { // 큐의 노드를 모두 반복
    if(dist[vertex] <= minDistance){ // 큐의 가중치가 minDistance보다 작다면
      minDistance = dist[vertex]; // minDistance를 업데이트
      minVertex = vertex; // 현재 노드를 최소 거리 노드로 지정
    } 
  }

  return minVertex; // 최소 거리 노드를 반환한다.
}

// dijkstra(): 다익스트라 최단 경로 탐색
ShortestPath.prototype.dijkstra = function (start) { // start는 시작노드
  let queue = {};
  let dist = {};

  for (let vertex in this.edges) {
    dist[vertex] = Number.POSITIVE_INFINITY; // dist배열에는 각 노드의 가중치를 무한대호 초기화
    queue[vertex] = this.edges[vertex]; // 큐에는 노드를 넣는다
  };

  dist[start] = 0; // 시작점의 가중치를 0으로 변경
  while(Object.keys(queue).length !== 0){ // 큐가 비지 않았다면 계속 반복한다
    let u = this._extractMin(queue, dist); // extractMin을 실행한다.

    delete queue[u]; // 최소거리 노드를 큐에서 삭제

    for(let neighbor in this.edges[u]){ // 최소거리 노드의 이웃한 노드들을 반복
      let alt = dist[u] + this.edges[u][neighbor]; // alt는 최소거리 노드와 그 이웃들의 가중치의 합
      if(alt < dist[neighbor]) dist[neighbor] = alt; //alt가 기존에 가지고 있던 가중치보다 작으면 가중치를 alt로 업데이트
    }
  }

  for(let vertex in this.edges) // 갈 수 없는 경우(가중치가 무한인경우) 삭제
    if(dist[vertex] === Number.POSITIVE_INFINITY) delete dist[vertex];

  return dist; // 업데이트된 가중치를 가진 dist배열을 반환
};
```

## FLoyd-Warshall 알고리즘
동적 계획법을 활용해, 그래프에서 가능한 모든 정점 쌍에 대해 최단 거리를 구하는 알고리즘이다.  
음의 가중치가 있어도 사용 가능하며, 많은 수의 간선으로 이루어져 있는 밀집 그래프(Dense Graph)에 사용이 적합하다.  
- 구현 메서드  
  정점 추가: ShorsetPath.addVertex()  
  간선 추가: ShorsetPath.addEdge()  
  플로이드-워셜 알고리즘: ShorsetPath.floydWarshall()  

## FLoyd-Warshall 알고리즘 구현
```js
// floy-warshall(): 플로이드 워셜 최단 경로 탐색
ShortestPath.prototype.floydWarshall = function () {
  let dist = {};
  // 초기화
  for(let srcVertex in this.edges){ // 시작노드를 초기화
    dist[srcVertex] = {}; // 시작노드를 객체로 만든다
    for(let distVertex in this.edges){ // 전체 노드중 본인인 경우는 0 그 외에는 무한대로 초기화
      if(srcVertex === distVertex) dist[srcVertex][distVertex] = 0;
      else dist[srcVertex][distVertex] = Number.POSITIVE_INFINITY;
    }
  }
  for(let srcVertex in this.edges){ // 시작노드들을 반복
    for(let distVertex in this.edges[srcVertex]){ // 가중치 배열에 현재 간선의 정보 저장 (초기화)
      dist[srcVertex][distVertex] = this.edges[srcVertex][distVertex];
    }
  }
  // 3중 for문을 이용한 최소거리 누적 업데이트
  for(let minVertex in this.edges){ // minVertex가 최상단 이어야 한다.
    for(let srcVertex in this.edges){ // 시작 노드 반복
      for(let distVertex in this.edges){ // 가중치 노드 반복
        dist[srcVertex][distVertex] = Math.min( // 직접가는 방법 or 다른 노드를 거쳐서 가는 방법중 더 작은 값을 dist에 할당
          dist[srcVertex][distVertex],
          dist[srcVertex][minVertex] + dist[minVertex][distVertex]
        );
      }
    }
  }
  // Infinity 삭제 처리
  for(let srcVertex in this.edges){
    for(let distVertex in this.edges){
      if(dist[srcVertex][distVertex] === Number.POSITIVE_INFINITY)
        delete dist[srcVertex][distVertex];
    }
  }

  return dist; // dist를 반환
}
```