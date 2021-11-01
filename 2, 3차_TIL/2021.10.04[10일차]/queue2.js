// Queue() 생성자
function Queue(array){
  this.array = array?array:[];
};

//getBuffer(): 객체 내 데이터 셋 반환
Queue.prototype.getBuffer = function(){
  return this.array.slice();
};

Queue.prototype.isEmpty = function(){
  return this.array.length === 0;
};

Queue.prototype.enqueue = function(element){
  return this.array.push(element);
}
Queue.prototype.dequeue = function(){
  return this.array.shift();
}

let queue = new Queue([1, 2, 3]);
console.log(queue);
queue.enqueue(4);
console.log(queue);
queue.dequeue();
console.log(queue);