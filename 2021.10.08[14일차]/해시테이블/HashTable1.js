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

let ht = new HashTable();
console.log(ht);

console.log(ht.hashCode('Ana'));
console.log(ht.hashCode('Sue'));
console.log(ht.hashCode('paul'));