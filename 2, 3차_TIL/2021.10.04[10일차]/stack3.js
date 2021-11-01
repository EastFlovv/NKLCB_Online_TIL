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


Stack.prototype.push = function(element){
  return this.array.push(element);
};

Stack.prototype.pop = function(){
  return this.array.pop();
};

Stack.prototype.peak = function(){
  return this.array[this.array.length-1];
}

Stack.prototype.size = function(){
  return this.array.length;
}

Stack.prototype.indexOf = function(element, position=0){
  for (let i = position; i < this.array.length; i++) {
    if(this.array[i] == element)
      return i;
  }
  return -1;
}

Stack.prototype.includes = function(element){
  for (let i = 0; i < this.array.length; i++) {
    if(this.array[i] == element)
      return true;
  }
  return false;
}

let stack = new Stack([1, 2, 3]);
console.log(stack);
console.log('push:', stack.push(4));
console.log(stack);
console.log('peak:', stack.indexOf(2));
console.log(stack);
console.log('pop:', stack.pop());
console.log(stack);
console.log('size:', stack.size());