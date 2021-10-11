//프린터
function Queue(){
  this.array = [];
}

Queue.prototype.enqueue = function (element){
  this.array.push(element);
}
Queue.prototype.dequeue = function (){
  return this.array.shift();
}
Queue.prototype.front = function (){
  return this.array[0];
}
Queue.prototype.max = function (){
  return Math.max(...this.array);
}

function solution(priorities, location) {
  let answer = 0;
 
  let vq = new Queue();
  let pq = new Queue();
  
  for(let i = 0; i<priorities.length; i++){
      vq.enqueue(i);
      pq.enqueue(priorities[i]);
  }
  
  let count = 0;
  while(true){
      if(pq.front() === pq.max()){
          count++;
          
          if(vq.front() === location){
              
              answer = count;
              break;
          }else{
              vq.dequeue();
              pq.dequeue();
          }
      }else{
          vq.enqueue(vq.dequeue());
          pq.enqueue(pq.dequeue());
      }
  }
  
  return answer;
}