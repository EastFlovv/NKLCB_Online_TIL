import { LinkedList } from "./linked_list.mjs"; // 연결리스트 파일 연결

const HASH_SIZE = 37;

// Element() key, value 저장을 위한 생성자
function Element(key, value){
  this.key = key;
  this.value = value;
};

//  ChainingHashTable() 생성자
function ChainingHashTable(){
  this.table = new Array(HASH_SIZE);
  this.length = 0;
};

// hashCode() 해시함수
ChainingHashTable.prototype.hashCode = function(key){
  let hash = 0;
  for (let i = 0; i < key.length; i++) {
    hash += key.charCodeAt(i);
  }
  return hash % HASH_SIZE;
};

// clear()
ChainingHashTable.prototype.clear = function(){
  this.table = new Array(HASH_SIZE);
  this.length = 0;
}

// size()
ChainingHashTable.prototype.size = function(){
  return this.length;
}

let cht = new ChainingHashTable();
console.log(cht);

let ll = new LinkedList();
ll.append(new Element('Ana', 123));
console.log(ll);