// Stack(): 생성자 함수
function Stack(array){
  this.array = array ? array : [];
};

//getBuffer(): 객체 내 데이터 셋 반환
Stack.prototype.getBuffer = function(){
  // array.slice()는 매개변수가 없을때 배열 전체를 복사하여 반환한다.
  return this.array.slice();
};

//isEmpty(): 객체 내 데이터 존재여부
Stack.prototype.isEmpty = function(){
  return this.array.length === 0; // 비었으면 true
};

let stack = new Stack();
console.log(stack);
let data = stack.getBuffer();
console.log(data === stack.array); // false
console.log(stack.isEmpty());