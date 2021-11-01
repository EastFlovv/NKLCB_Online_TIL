//CircularQueue() 초기 속성값 설정을 위한 생성자 함수
function CircularQueue(array = [], size = 5){
  this.array = array;
  this.size = array.length > size ? array.length : size;
  this.length = array.length;
  this.head = 0;
  this.tail = array.length;
};

// getBuffer() 객체 내 데이터 셋 반환
CircularQueue.prototype.getBuffer = function(){
  return this.array.slice();
};

//isEmpty() 데이터 비어 있는지 확인
CircularQueue.prototype.isEmpty = function(){
  return this.length == 0;
};

// isFull() 데이터 가득 찼는지 확인
CircularQueue.prototype.isFull = function(){
  return this.length == this.size;
};

let cq = new CircularQueue([1,2,3]);
console.log(cq);

console.log(cq.isEmpty());
console.log(cq.isFull());
console.log(cq.getBuffer());