// Node(): data와 point인 next, prev를 가지고 있는 객체
function Node(data){
  this.data = data;
  this.next = null;
  this.prev = null;
};
// LinkedList(): head와 tail, length를 가지고 있는 객체
function DoubleLinkedList(){
  this.head = null;
  this.tail = null;
  this.length = 0;
};

DoubleLinkedList.prototype.size = function(){
  return this.length;
};

DoubleLinkedList.prototype.isEmpty = function(){
  return this.length === 0;
};
//출력문
DoubleLinkedList.prototype.printNode = function(){
  process.stdout.write(`head -> `);
  for (let node = this.head; node != null; node = node.next) {
    process.stdout.write(`${node.data} -> `);
  }
  console.log('null');
};
//역출력문
DoubleLinkedList.prototype.printNodeInverse = function(){
  let temp = [];
  process.stdout.write(`null <- `);
  for (let node = this.tail; node != null; node = node.prev) {
    temp.push(node.data);
  }
  for (let i = temp.length-1; i >= 0; i--) {
    process.stdout.write(`${temp[i]} <- `)
  }
  console.log('tail');
};
DoubleLinkedList.prototype.append = function(value){
  let node = new Node(value);

  if(this.head === null){
    this.head = node;
    this.tail = node;
  }else {
    this.tail.next = node;
    node.prev = this.tail;
    this.tail = node;
  }
  this.length++;
};

// 삽입문
DoubleLinkedList.prototype.insert = function (value, position =0){
  if(position < 0 || position > this.length){
    return false;
  }
  let node = new Node(value),
    current = this.head,
    index = 0,
    prev;

    if(position === 0){
      if(this.head===null){
        this.head = node;
        this.tail = node;
      }else{
        node.next = current;
        current.prev = node;
        this.head = node;
      }
    }else if(position === this.length){
      current = this.tail;
      current.next = node;
      node.prev = current;
      this.tail = node;
    }else {
      while(index++ < position){
        prev = current;
        current = current.next;
      }
      node.next = current;
      prev.next = node;

      current.prev = node;
      node.prev = prev;
    }
    this.length++;
    return true;
}

//remove
DoubleLinkedList.prototype.remove = function(value){
  let current = this.head,
    prev = current;

  while(current.data != value && current.next != null){
    prev = current;
    current = current.next;
  };

  if(current.data != value){
    return null;
  };

  if(current === this.head){
    this.head = current.next;
    if(this.length === 1) this.tail = null;
    else this.head.prev = null;
  }else if(current === this.tail){
    this.tail = current.prev;
    this.tail.next = null;
  }else {
    prev.next = current.next;
    current.next.prev = prev;
  }
  this.length--;
  return current.data;
}




let dll = new DoubleLinkedList();

dll.insert(1);
dll.insert(10);
dll.insert(100);
dll.printNode();
dll.printNodeInverse();

dll.insert(2, 1);
dll.insert(3, 3);
dll.printNode();
dll.printNodeInverse();


dll.remove(1);
dll.printNode();
dll.printNodeInverse();
dll.remove(10);
dll.printNode();
dll.printNodeInverse();
dll.remove(3);
dll.printNode();
dll.printNodeInverse();

// console.log(dll);