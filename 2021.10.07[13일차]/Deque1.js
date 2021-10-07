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

let dq = new Deque([1,2,3]);
console.log(dq);
let data = dq.getBuffer();
console.log(data === dq.array);
console.log(data);
console.log(dq.isEmpty());
