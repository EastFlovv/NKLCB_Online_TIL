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



let ht = new HashTable();
console.log(ht);

ht.put('Ana', 100);
ht.put('bob', 50);
ht.put('chris', 30);
console.log(ht);

console.log(ht.get('Ana'));
console.log(ht.get('bob'));
console.log(ht.get('chris'));

console.log(ht.remove('Ana'));
console.log(ht.remove('chris'));
console.log(ht.remove('chris'));

console.log(ht);


// console.log(ht.hashCode('Ana'));
// console.log(ht.hashCode('Sue'));
// console.log(ht.hashCode('paul'));