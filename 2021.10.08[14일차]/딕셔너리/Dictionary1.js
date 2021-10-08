// Dictionary() 객체를 저장할 생성자
function Dictionary(items = {}){
  this.items = items;
};

//getBuffer() 모든 객체 반환
Dictionary.prototype.getBuffer = function(){
  return {...this.items};
};

//clear() 초기화
Dictionary.prototype.clear = function(){
  this.items = {};
}

//size() 크기 반환
Dictionary.prototype.size = function(){
  return Object.keys(this.items).length;
}


let dict = new Dictionary({age: 18, name: 'alice'});
console.log(dict);
console.log(dict.getBuffer());
console.log(dict.size());
dict.clear();
console.log(dict);