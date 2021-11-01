// 큐만들기
// Queue() 생성자
// function Queue(array){
//   this.array = array?array:[];
// };
// Queue.prototype.isEmpty = function(){
//   return this.array.length === 0;
// };
//삽입
// Queue.prototype.enqueue = function(element){
//   return this.array.push(element);
// }
//삭제
// Queue.prototype.dequeue = function(){
//   return this.array.shift();
// }
// 맨 앞요소 확인
// Queue.prototype.front = function(){
//   return this.array.length === 0?undefined:this.array[0];
// }
// 사이즈
// Queue.prototype.size = function(){
//   return this.array.length;
// }

function answer(cmds){
  let queue = [];
  let answer = [];
  for (let i = 0; i < cmds.length; i++) {
    let order = cmds[i].split(' ');
    switch(order[0]){
      case 'enqueue':
        queue.push(Number(order[1]));
        break;
      case 'dequeue':
        queue.length == 0 ? answer.push(-1) : answer.push(queue.shift());
        break;
      case 'empty':
        queue.length == 0 ? answer.push(1) : answer.push(0);
        break;
      case 'front':
        queue.length == 0 ? answer.push(-1) : answer.push(queue[0]);
        break;
      case 'back':
        queue.length == 0 ? answer.push(-1) : answer.push(queue[queue.length-1]);
        break;
      case 'size':
        answer.push(queue.length);
        break;
    }
  }
  return answer;
}

let input = [
  ['enqueue 1', 'enqueue 2', 'dequeue', 'dequeue', 'dequeue'],
  ['enqueue 3', 'enqueue 4', 'enqueue 5', 'enqueue 6', 'front', 'back', 'dequeue', 'size', 'empty'],
  ['enqueue 7', 'enqueue 8', 'front', 'back', 'size', 'empty', 'dequeue', 'dequeue', 'dequeue', 'size', 'empty', 'dequeue', 'enqueue 9', 'empty', 'front']
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1}`);
  console.log(answer(input[i]));
}