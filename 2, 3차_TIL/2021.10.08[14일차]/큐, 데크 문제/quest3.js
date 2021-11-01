// 프린터 출력
function Queue(){
  this.array = [];
};

Queue.prototype.enqueue = function(element){
  this.array.push(element);
};

Queue.prototype.dequeue = function(element){
  return this.array.shift();
};

Queue.prototype.front = function(){
  return this.array[0];
};

Queue.prototype.max = function(){
  return Math.max(...this.array);
};

function answer(priorities, select){
  let result = -1;
  let count = 0;
  let vq = new Queue();
  let pq = new Queue();
  for (let i = 0; i < priorities.length; i++) {
    vq.enqueue(i);
    pq.enqueue(priorities[i]);
  }

  while(true){
    //출력
    if(pq.front() == pq.max()){
      count++;
      //확인
      if(vq.front() == select){
        result = count;
        break;
      }else{
        vq.dequeue();
        pq.dequeue();
      }
    }else{//순서변경
      vq.enqueue(vq.dequeue());
      pq.enqueue(pq.dequeue());
    };
  };

  return result;
};


let input = [
  [[3], 0],
  [[3, 4, 5, 6], 2],
  [[1, 1, 5, 1, 1, 1], 0]
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i][0], input[i][1]));
}