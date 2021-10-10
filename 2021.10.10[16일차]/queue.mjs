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
//삽입
Queue.prototype.enqueue = function(element){
  return this.array.push(element);
}
//삭제
Queue.prototype.dequeue = function(){
  return this.array.shift();
}
// 맨 앞요소 확인
Queue.prototype.front = function(){
  return this.array.length === 0?undefined:this.array[0];
}
// 사이즈
Queue.prototype.size = function(){
  return this.array.length;
}
// 큐 초기화
Queue.prototype.clear = function(){
  this.array = [];
}

let queue = new Queue([1, 2, 3]);
console.log(queue);
queue.enqueue(4);
console.log(queue);
queue.dequeue();
console.log(queue);
console.log(queue.front());
console.log(queue.front());
console.log(queue.front());
console.log(queue.size());
console.log(queue.clear());
console.log(queue);

export {Queue};