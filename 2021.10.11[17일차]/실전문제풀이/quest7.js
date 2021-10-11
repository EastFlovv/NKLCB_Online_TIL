// 가장 먼 노드
// https://programmers.co.kr/learn/courses/30/lessons/49189?language=javascript#

function Graph(){
  this.edge = {};
  this.visited = {};
}

Graph.prototype.addVertex = function(v){
  this.edge[v] = [];
  this.visited[v] = 0;
}

Graph.prototype.addEdge = function(v1, v2){
  this.edge[v1].push(v2);
  this.edge[v2].push(v1);
}

function solution(n, edge) {
  
  let g = new Graph();
  for(let i = 1; i <= n; i++){
      g.addVertex(i);
  }
  for(let i = 0; i < edge.length; i++){
      g.addEdge(edge[i][0], edge[i][1]);
  }
  // console.log(g);
  
  let queue = [];
  queue.push([1, 1]); // 첫번째는 vertex정보, 두번째는 최단경로 수치
  g.visited[1] = 0;
  while(queue.length != 0){
      let [n, c] = queue.shift();
      
      if(g.visited[n]) continue;
      
      g.visited[n] = c;
      for(let i = 0; i < g.edge[n].length; i++){
          if(!g.visited[g.edge[n][i]]){
              queue.push([g.edge[n][i], c + 1]);
          }
      }
  }
  // console.log(g.visited);
  
  let d = Object.values(g.visited);
  let max = Math.max(...d);
  
  return d.reduce((pre, val) => pre + (val === max ? 1: 0) , 0);
}