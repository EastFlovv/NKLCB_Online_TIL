//백신접종
function Element(key, value){
  this.key = key;
  this.value = value;
}

function HashTable(size){
  this.size = size;
  this.table = new Array(this.size);
  this.length = 0;
}

HashTable.prototype.hashCode = function(key){
  let hash = 0;
  for (let i = 0; i < key.length; i++) {
    hash += key.charCodeAt(i);
  }
  return hash%this.size;
}

HashTable.prototype.put = function(key){
  let index = this.hashCode(key);
  let startIdx = index;
  do{
    if(this.table[index] === undefined){
      this.table[index] = new Element(key, index+1);
      this.length++;
      return true;
    }
    index = (index+1)%this.size;
  }while(index !== startIdx)
};

HashTable.prototype.get = function(key){
  let index = this.hashCode(key);
  let startIdx = index;
  do{
    if(this.table[index] !== undefined && this.table[index].key === key){
      return this.table[index].value;
    }
    index = (index+1)%this.size;
  }while(index !== startIdx)
  return undefined;
}

function answer(name){
  let result = [];
  ht = new HashTable(name.length);

  // put loop
  for (let i = 0; i < name.length; i++) {
    ht.put(name[i]);
  }
  // get loop
  for (let i = 0; i < name.length; i++) {
    result.push(ht.get(name[i]));
  }

  return result;
}

let input =[
  ['Mana', 'Naomi', 'Lelia', 'Morris', 'Madonna'],
  ['Oliver', 'Mabel', 'Nero', 'Rei', 'Kara', 'Jordan', 'Nami'],
  ['Ruby', 'Robin', 'Jordan', 'Kori', 'Rei', 'Madonna', 'Justin', 'Maya', 'Lakia', 'Kali']
]

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i]));
}