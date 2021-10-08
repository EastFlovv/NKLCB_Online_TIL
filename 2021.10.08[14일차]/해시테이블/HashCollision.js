// const HASH_SIZE = 37;
const HASH_SIZE = 1137;

// Element() key, value 저장을 위한 생성자
function Element(key, value){
  this.key = key;
  this.value = value;
}
// HashTable() 생성자
function HashTable(){
  this.table = new Array(HASH_SIZE);
  this.length = 0;
}

// hashCOde() 해시함수
HashTable.prototype.hashCode = function(key){
  let hash = 0;
  for (let i = 0; i < key.length; i++) {
    hash += key.charCodeAt(i);
  }
  return hash % HASH_SIZE;
};


//size() 크기 반환
HashTable.prototype.size = function(){
  return this.length;
}

// print() 데이터셋 출력
HashTable.prototype.print = function(){
  for (let i = 0; i < this.table.length; i++) {
    if(this.table[i])
      console.log(i+" -> "+ this.table[i].key + ': ' + this.table[i].value);
  }
}


// 충돌해결 djb2 해시 함수
HashTable.prototype.djb2 = function(key){
  let hash = 5381; // seed
  for (let i = 0; i < key.length; i++) {
    hash = hash*33 + key.charCodeAt(i);
  }
  return hash % HASH_SIZE;
};
// put() 데이터 추가
HashTable.prototype.put = function(key, value){
  // let index = this.hashCode(key);
  let index = this.djb2(key);
  console.log(`key: ${key} -> index: ${index}`);

  if(this.table[index] !== undefined)
    return false;
  
  this.table[index] = new Element(key, value);
  this.length++;
  return true;
}


let ht = new HashTable();
// console.log(ht);
ht.put('Ana', 123);
ht.put('Donnie', 234);
ht.put('Sue', 345);
ht.put('Jamie', 456);
ht.put('Paul', 567);

console.log(ht.size());
ht.print();