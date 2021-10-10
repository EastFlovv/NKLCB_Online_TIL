function Graph(){
  this.edge = {};
  this.visited = {};
}

// addVertex(): 정점 추가
Graph.prototype.addVertex = function (v){
  this.edge[v] = [];
  this.visited[v] = false;
}

// addEdge(): 간선 추가
Graph.prototype.addEdge = function(v1, v2){
  this.edge[v1].push(v2);
}

// print(): 현재 Graph 연결 상태 출력
Graph.prototype.print = function(){
  for(let vertex in this.edge){
    let neighbors = this.edge[vertex];
    if(neighbors.length === 0) continue;
    process.stdout.write(`${vertex} -> `);
    for (let j = 0; j < neighbors.length; j++) {
      process.stdout.write(`${neighbors[j]} `);
    }
    console.log();
  }
}

// dfs(): DFS탐색
Graph.prototype.dfs = function (startVertex){
  this._dfsRecursiveVisit(startVertex);
}

// _dsfRecursiveVisit(): 재귀를 이용한 DFS탐색
Graph.prototype._dfsRecursiveVisit = function(vertex){
  // 종료조건
  if(this.visited[vertex]) return;

  // 재귀호출을 하면서 수행해야할 코드
  this.visited[vertex] = true;
  console.log(`visit "${vertex}"`);

  let neighbors = this.edge[vertex];
  for (let i = 0; i < neighbors.length; i++) {
    this._dfsRecursiveVisit(neighbors[i]);
  }
}

let graph = new Graph();
let vertices = ["A", 'B', "C", "D", "E", "F", "G", "H", "I"];

for (let i = 0; i < vertices.length; i++) {
  graph.addVertex(vertices[i]);
}

graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("A", "D");
graph.addEdge("C", "G");
graph.addEdge("D", "G");
graph.addEdge("D", "H");
graph.addEdge("B", "E");
graph.addEdge("B", "F");
graph.addEdge("E", "I");

graph.print();
console.log();

graph.dfs("A");