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

// 데이터 추가
LinearHashTable.prototype.put = function(key, value){
  let index = this.hashCode(key);
  let startIndex = index;

  console.log(`key: ${key}, index: ${index}`);
  do{
    if(this.table[index] === undefined){
      this.table[index] = new Element(key, value);
      this.length++;
      return true;
    }
    index = (index+1)%HASH_SIZE;
  }while(index!==startIndex);

  return false;
}


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



let lht = new LinearHashTable();
console.log(lht);

console.log(lht.put('Ana', 123));
console.log(lht.put('Donnie', 222));
console.log(lht.put('Sue', 333));
console.log(lht.put('Jamie', 444));
console.log(lht.put('Paul', 55));
console.log(lht);


// console.log(ht.put('karl', 3728));
// ht.put('Ana', 123);
// ht.put('Donnie', 234);
// ht.put('Sue', 345);
// ht.put('Jamie', 456);
// ht.put('Paul', 567);

// console.log(ht.size());
// ht.print();