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


let dll = new DoubleLinkedList();
let node;
console.log(dll);

node = new Node(123);
dll.head = node;
dll.tail = node;
dll.length++;
console.log(dll);


node = new Node(456);
dll.tail.next = node;
node.prev = dll.tail;
dll.tail = node;
dll.length++;
console.log(dll);