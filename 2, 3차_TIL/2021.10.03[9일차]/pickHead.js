function Node(data) {
  this.data = data;
  this.next = null;
}

function LinkedList() {
  this.head = null;
}

function answer(n, m, k) {
  let result = [];

  // CircularLinkedList 제작
  let ll = new LinkedList();
  let current, prev;
  for (let i = 1; i <= n; i++) {
    current = new Node(i);

    if (i === 1) ll.head = current;
    else prev.next = current;

    prev = current;
  }
  current.next = ll.head;
  // Start Node위치 선정
  current = ll.head;
  while (--m) {
    prev = current;
    current = current.next;
  }

  // 후보자중 k만큼 움직이며 제거 / 하나가 남을 때 까지
  let count;
  while (current.next != current) {
    result.push(current.data);
    prev.next = current.next; // 현재노드 삭제 이전노드 연결
    // k만큼 이동
    count = k;
    while (count--) {
      prev = current;
      current = current.next;
    };
  };
  result.push(current.data);
  return result;
}



let input = [
  [8, 2, 3],
  [10, 2, 3],
  [20, 5, 7]
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i+1} `);
  console.log(answer(input[i][0], input[i][1], input[i][2]));
};