import { Stack } from "./stack.mjs";

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
  this._dfsLoopVisit(startVertex);
}

// _dfsLoopVisit() 스택을 이용한 DFS 탐색
Graph.prototype._dfsLoopVisit = function(vertex){
  let stack = new Stack();
  stack.push(vertex);

  while(!stack.isEmpty()){
    let vertex = stack.pop();
    if(this.visited[vertex]){
      continue;
    }

    this.visited[vertex] = true;
    console.log(`visit "${vertex}"`);

    let neighbors = this.edge[vertex];
    for (let i = neighbors.length-1; i >= 0; i--) {
      stack.push(neighbors[i]);
    }
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