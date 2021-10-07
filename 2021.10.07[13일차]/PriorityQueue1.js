// Element(): 데이터와 우선순위를 저장하기 위한 생성자 함수
function Element(data, priority){
  this.data = data;
  this.priority = priority;
};

//PriorityQueue(): Element를 관리 하기위한 생성자 함수
function PriorityQueue() {
  this.array = [];
};

//getBuffer(): 객체 내 데이터셋 반환
PriorityQueue.prototype.getBuffer = function () { 
  return this.array.map(el=>el.data);
};

// isEmpty() 객체 내 데이터 존재여부 반환
PriorityQueue.prototype.isEmpty = function(){
  return this.array.length===0;
};

console.log(Object.getOwnPropertyDescriptors(Element.prototype));
console.log(Object.getOwnPropertyDescriptors(PriorityQueue.prototype));