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

  



let cll = new CircularLinkedList();
cll.append(1);
cll.append(10);
console.log(cll);
cll.append(100);
cll.printNode();