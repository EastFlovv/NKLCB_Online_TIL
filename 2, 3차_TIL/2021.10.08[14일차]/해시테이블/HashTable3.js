const HASH_SIZE = 37;

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

// put() 데이터 추가
HashTable.prototype.put = function(key, value){
  let index = this.hashCode(key);
  console.log(`key: ${key} -> index: ${index}`);

  if(this.table[index] !== undefined)
    return false;
  
  this.table[index] = new Element(key, value);
  this.length++;
  return true;
}

// get() 데이터 조회
HashTable.prototype.get = function(key){
  return this.table[this.hashCode(key)];
};

// remove() 데이터 삭제
HashTable.prototype.remove = function(key){
  let element = this.table[this.hashCode(key)];
  if(element !== undefined){
    delete this.table[this.hashCode(key)];
    this.length--;
  };
  return element;
};

// clear() 초기화
HashTable.prototype.clear = function(){
  this.table = new Array(HASH_SIZE);
  this.length = 0;
};

//size() 크기 반환
HashTable.prototype.size = function(){
  return this.length;
}

// getBuffer() 데이터셋 반환
HashTable.prototype.getBuffer = function(){
  let array = [];
  for (let i = 0; i < this.table.length; i++) {
    if(this.table[i]){//값이 있으면
      array.push([this.table[i]]);
    }
  }
  return array;
};

// print() 데이터셋 출력
HashTable.prototype.print = function(){
  for (let i = 0; i < this.table.length; i++) {
    if(this.table[i])
      console.log(i+" -> "+ this.table[i].key + ': ' + this.table[i].value);
  }
}


let ht = new HashTable();
console.log(ht);

ht.put('Ana', 100);
ht.put('bob', 50);
ht.put('chris', 30);
// console.log(ht);

ht.print();
console.log(ht.getBuffer());
console.log(ht.size());
