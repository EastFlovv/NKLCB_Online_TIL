import { LinkedList } from "./linked_list.mjs"; // 연결리스트 파일 연결

const HASH_SIZE = 37;

// Element() key, value 저장을 위한 생성자
function Element(key, value){
  this.key = key;
  this.value = value;
};

// ChainingHashTable() 생성자
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

// getBuffer()
ChainingHashTable.prototype.getBuffer = function(){
  let array = [];
  for (let i = 0; i < this.table.length; i++) {
    if(this.table[i]){
      let current = this.table[i].head;

      do{
        array.push(current.data);
        current = current.next;
      }while(current);
    };
  };
  return array;
};

// print()
ChainingHashTable.prototype.print = function(){
  for (let i = 0; i < this.table.length; i++) {
    if(this.table[i]){
      let current = this.table[i].head;
      process.stdout.write(`#${i}`);
      do{
        process.stdout.write(` -> ${current.data.key}: ${current.data.value}`);
        current = current.next;
      }while(current);
      console.log();
    };
  };
};

// put() 값 추가
ChainingHashTable.prototype.put = function(key, value){
  let index = this.hashCode(key);
  console.log(`key: ${key} -> index: ${index}`);
  
  if(this.table[index] === undefined){
    this.table[index] = new LinkedList();
  }

  this.table[index].append(new Element(key, value));
  this.length++;

  return true;
}

// get() 메서드 조회
ChainingHashTable.prototype.get = function(key){
  let index = this.hashCode(key);
  if(this.table[index] !== undefined && !this.table[index].isEmpty()){
    let current = this.table[index].head;

    do{
      if(current.data.key === key){
        return current.data.value;
      }
      current = current.next;
    }while(current);
  }
  return undefined;
};

// remove() 데이터 삭제
ChainingHashTable.prototype.remove = function(key){
  let index = this.hashCode(key);
  let element = undefined;

  if(this.table[index] !== undefined){
    let current = this.table[index].head;
    do {
      if(current.data.key === key){
        element = current.data;
        this.table[index].remove(current.data);
        this.length--;
        if(this.table[index].isEmpty()){ // 데이터가 없으면 링크드 리스트를 통채로 삭제
          delete this.table[index];
        }
      }
      current = current.next;
    } while (current);
  }
  return element;
}




let cht = new ChainingHashTable();
cht.put('Ana', 111);
cht.put('Donnie', 222); // collision
cht.put('Sue', 333);
cht.put('Jamie', 444); // collision
cht.put('Paul', 555);
// console.log(cht);
console.log();
cht.print();

// cht.print();
// console.log(cht.getBuffer());
// console.log(cht.get('Ana'));
// console.log(cht.get('Donnie'));
// console.log(cht.get('kral'));
console.log(cht.remove('Sue'));
console.log();
cht.print();
console.log(cht.remove('Jamie'));
console.log();
cht.print();

console.log(cht);