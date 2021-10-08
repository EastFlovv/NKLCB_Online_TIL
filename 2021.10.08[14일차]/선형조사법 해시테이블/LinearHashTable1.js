// const HASH_SIZE = 37;
const HASH_SIZE = 5;

// Element() key, value 저장을 위한 생성자
function Element(key, value){
  this.key = key;
  this.value = value;
}
// LinearHashTable() 생성자
function LinearHashTable(){
  this.table = new Array(HASH_SIZE);
  this.length = 0;
}

// hashCOde() 해시함수
LinearHashTable.prototype.hashCode = function(key){
  let hash = 0;
  for (let i = 0; i < key.length; i++) {
    hash += key.charCodeAt(i);
  }
  return hash % HASH_SIZE;
};
// clear() 초기화
LinearHashTable.prototype.clear = function(){
  this.table = new Array(HASH_SIZE);
  this.length = 0;
};

//size() 크기 반환
LinearHashTable.prototype.size = function(){
  return this.length;
}

// getBuffer() 데이터셋 반환
LinearHashTable.prototype.getBuffer = function(){
  let array = [];
  for (let i = 0; i < this.table.length; i++) {
    if(this.table[i]){//값이 있으면
      array.push([this.table[i]]);
    }
  }
  return array;
};

// print() 데이터셋 출력
LinearHashTable.prototype.print = function(){
  for (let i = 0; i < this.table.length; i++) {
    if(this.table[i])
      console.log(i+" -> "+ this.table[i].key + ': ' + this.table[i].value);
  }
}



let ht = new LinearHashTable();
console.log(lht);
// ht.put('Ana', 123);
// ht.put('Donnie', 234);
// ht.put('Sue', 345);
// ht.put('Jamie', 456);
// ht.put('Paul', 567);

// console.log(ht.size());
// ht.print();