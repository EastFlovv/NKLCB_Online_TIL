// Deque() 초기 속성값 설정을 위한 생성자 함수
function Deque(array = []){
  this.array = array;
};

// getBuffer() 객체 내 데이터 반환
Deque.prototype.getBuffer = function(){
  return this.array.slice();
};
// isEmpty() 데이터 비었는지 확인
Deque.prototype.isEmpty = function(){
  return this.array.length === 0;
};

// pushFront() 앞쪽 데이터 추가
Deque.prototype.pushFront = function(element){
  return this.array.unshift(element);
};
// pushBack() 뒤쪽 데이터 추가
Deque.prototype.pushBack = function(element){
  return this.array.push(element);
};
// popFront() 앞쪽 데이터 제거
Deque.prototype.popFront = function(){
  return this.array.shift();
};
// popBack() 뒤쪽 데이터 제거
Deque.prototype.popBack = function(){
  return this.array.pop();
};

//front() 가장 첫 데이터 반환
Deque.prototype.front = function(){
  return this.array.length === 0 ? false:this.array[0];
};

//back() 가장 끝 데이터 반환
Deque.prototype.back = function(){
  return this.array.length === 0 ? false: this.array[this.array.length-1];
};

//size() 큐내 데이터 갯수 확인
Deque.prototype.size = function(){
  return this.array.length;
};

//clear() 큐 초기화
Deque.prototype.clear = function(){
  return this.array = [];
};

let dq = new Deque([1,2,3]);
console.log(dq);
dq.pushFront(4);
console.log(dq);
dq.pushBack(10);
console.log(dq);
console.log(dq.front());
console.log(dq.back());
console.log(dq.size());