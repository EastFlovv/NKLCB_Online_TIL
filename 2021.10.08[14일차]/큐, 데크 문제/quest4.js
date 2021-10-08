// 대표선출

function CircularQueue(size){
  this.array = new Array(size);
  this.size = this.array.length;
  this.length = 0;
  this.head = 0;
  this.tail = 0;
};

CircularQueue.prototype.enqueue = function (element){
  this.length++;
  this.array[this.tail++ % this.size] = element;
};

CircularQueue.prototype.dequeue = function(){
  this.length--;
  return this.array[this.head++ % this.size];
}

function answer(n, m, k){
  let result = [];
  //후보 세팅 (원형큐 초기화)
  let cq = new CircularQueue(n);
  for (let i = 1; i <= n; i++) {
    cq.enqueue(i);
  };

  // 첫 후보 제거 노드 위치로 설정
  cq.tail = cq.head = (n + m-1) % n; //n + 0 -1 = n-1

  //k만큼 움직이면서 후보 제거, 제거된것은 result에 추가
  let count;
  result.push(cq.dequeue());
  while(cq.length!=0){
    count = k-1;
    while(count--){
      cq.enqueue(cq.dequeue());
    }
    result.push(cq.dequeue());
  };

  return result;
};

let input = [
  [8, 2, 3],
  [10, 2, 3],
  [20, 5, 7]
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i][0], input[i][1], input[i][2]));
}