function Train(number){
  this.number = number;
  this.next = null;
};

function LinkedList(){
  this.head = null;
}

function answer(arr){
  let ll = new LinkedList();

  // 강사님 풀이
  let current, prev;
  for (let i = 0; i < arr.length; i++) {
    current= new Train(arr[i]);

    if(i === 0){
      ll.head = current;
    }else{
      prev.next = current;
    }
    prev = current;
  }
  
  // 나의 풀이
  // for (let i = 0; i < arr.length; i++) {
  //   // current는 flag
  //   let current = ll.head;
  //   // 새 노드
  //   let node = new Train(arr[i]);
  //   // 리스트가 비어있다면 노드가 헤드
  //   if(ll.head == null) ll.head = node;
  //   else{
  //     // 다름 노드가 null이 아니라면
  //     while(current.next != null){
  //       // current는 다음노드로
  //       current = current.next;
  //     }
  //     // 끝 노드에 오면 다음노드에 새 노드 삽입
  //     current.next = node;
  //   }
  // }
  // 연결리스트 반환
  return ll;
}



let input = [
  [4, 7, 1, 10, 6],
  [3, 10, 6, 9, 11, 3, 4],
  [5, 8, 7, 3, 4, 1, 2, 7, 10, 7]
];

LinkedList.prototype.printNode = function(){
  for (let node = this.head; node != null; node = node.next) {
    process.stdout.write(`${node.number} -> `);
  }
  console.log('null');
}


for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i+1} `);
  answer(input[i]).printNode();
};