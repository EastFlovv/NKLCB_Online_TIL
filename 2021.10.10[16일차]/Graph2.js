// 방향 그래프
// Graph(): edge object 객체 저장을 위한 생성자
// key: vertex
// value: list 형태로 연결된 vertex를 표현하여 edge연결관계 표현
function Graph(){
  this.edge = {};
}

// addVertex(): 정점 추가
Graph.prototype.addVertex = function (v){
  this.edge[v] = [];
}

// addEdge(): 간선 추가
Graph.prototype.addEdge = function(v1, v2){
  this.edge[v1].push(v2);
}

// removeEdge(): 간선 삭제
Graph.prototype.removeEdge = function(v1, v2){
  if(this.edge[v1]){
    let idx = this.edge[v1].indexOf(v2);

    if(idx != -1){
      this.edge[v1].splice(idx, 1);
    }

    if(this.edge[v1].length === 0){
      delete this.edge[v1];
    }
  }
}

// removeVertex(): 정점 삭제
Graph.prototype.removeVertex = function (v){
  if(this.edge[v] === undefined) return;

  let length = this.edge[v].length;
  let connectedVertex = [...this.edge[v]];
  for (let i = 0; i < length; i++) {
      this.removeEdge(v, connectedVertex[i]);
  }
}



let graph = new Graph();
let vertices = ["A", 'B', "C", "D", "E"];

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

console.log(graph.edge);

graph.removeEdge("B", "F");
graph.removeEdge("B", "E");
console.log(graph.edge);

graph.removeVertex("D");
console.log(graph.edge);