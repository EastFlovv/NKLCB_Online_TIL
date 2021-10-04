// Queue() 생성자
// function Queue(array){
//   this.array = array?array:[];
// };
function Queue(array){
  this.array = array?array:[];
  this.tail = array ? array.length:0;
  this.head = 0;
};

//getBuffer(): 객체 내 데이터 셋 반환
Queue.prototype.getBuffer = function(){
  return this.array.slice();
};

Queue.prototype.isEmpty = function(){
  return this.array.length === 0;
};
//삽입
// Queue.prototype.enqueue = function(element){
//   return this.array.push(element);
// }
Queue.prototype.enqueue = function(element){
  return (this.array[this.tail++] = element);
};

//삭제
// Queue.prototype.dequeue = function(){
//   return this.array.shift();
// }
Queue.prototype.dequeue = function(){
  if(this.tail === this.head) return undefined;
  let element = this.array[this.head];
  delete this.array[this.head++];
  return element;
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