// Node(): data와 point를 가지고 있는 객체
function Node(data){
  this.data = data;
  this.next = null;
};

function CircularLinkedList(){
  this.head = null;
  this.length = 0;
};

// size(): 연결리스트 내 노드 개수 확인
CircularLinkedList.prototype.size = function(){
  return this.length;
};

// isEmpty(): 객체 내 노드 존재 여부 파악
CircularLinkedList.prototype.isEmpty = function(){
  return this.length === 0;
};

CircularLinkedList.prototype.append = function(value){
  let node = new Node(value),
    current = this.head;

  if(this.head == null)
    this.head = node;
  else{
    // head를 만날때까지 진행
    while(current.next != this.head){
      current= current.next;
    }
    current.next = node;
  }
  node.next = this.head;
  this.length++;
};

CircularLinkedList.prototype.printNode = function(){
  process.stdout.write(`${this.head.data} -> `);
  if(this.length != 0){
    for (let node = this.head.next; node != this.head; node = node.next) {
      process.stdout.write(`${node.data} -> `);
    }
  }
  console.log('null');
}

CircularLinkedList.prototype.insert = function(value, position = 0){
  if(position < 0 || position > this.length){
    return false;
  };

  let node = new Node(value),
    current = this.head,
    index = 0,
    prev;
  
  if(position === 0){
    node.next = current;
    if(this.isEmpty()){
      current = node;
    }else{
      while(current.next != this.head){
        current = current.next;
      }
    }
    this.head = node;
    current.next = this.head;
  }else{
    while(index++ < position){
      prev = current;
      current = current.next;
    }
    prev.next=node;
    node.next = current;
    if(node.next === null){
      node.next = this.head;
    }
  }
  this.length++;
  return true;
}

CircularLinkedList.prototype.remove = function(value){
  let current = this.head,
    prev = current,
    data;

  while(current.data != value && current.next != this.head){
    prev = current;
    current = current.next;
  }

  if(current.data != value){
    return null;
  }

  data = current.data
  if(current === this.head){
    while(current.next != this.head){
      current = current.next;
    }
    this.head = this.head.next;
    current.next = this.head;
  }else{
    prev.next = current.next;
  }
  this.length--;
  return data;
}


CircularLinkedList.prototype.removeAt = function(position=0){
  if(position<0||position>=this.length){
    return null;
  }
  let current = this.head,
    index = 0,
    prev,
    data;

  if(position === 0){
    data = current.data;
    while(current.next != this.head){
      current = current.next;
    }
    this.head = this.head.next;
    current.next=this.next;
  }else{
    while(index++ < position){
      prev = current;
      current = current.next;
    }
    data = current.data;

    prev.next = current.next;
  }

  this.length--;
  return data;
}
  

let cll = new CircularLinkedList();
cll.append(1);
cll.append(10);
cll.append(100);
cll.printNode();
cll.insert(2, 1);
cll.insert(3, 3);
cll.printNode();

console.log(cll.removeAt(100));
cll.printNode();
console.log(cll.removeAt(1));
cll.printNode();
console.log(cll.removeAt(2));
cll.printNode();
console.log(cll.size());