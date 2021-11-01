// Node(): data와 point를 가지고 있는 객체
function Node(data){
  this.data = data;
  this.next = null;
};

// LinkedList() : head와 length를 가지고 있는 객체
function LinkedList(){
  this.head = null;
  this.length = 0;
};

// size(): 연결리스트 내 노드 개수 확인
LinkedList.prototype.size = function(){
  return this.length;
};

// isEmpty(): 객체 내 노드 존재 여부 파악
LinkedList.prototype.isEmpty = function(){
  return this.length === 0;
};

let ll = new LinkedList();
console.log(ll);

ll.head = new Node(123);
ll.length++;
console.log(ll);

ll.head.next = new Node(456);
ll.length++;
console.log(ll);