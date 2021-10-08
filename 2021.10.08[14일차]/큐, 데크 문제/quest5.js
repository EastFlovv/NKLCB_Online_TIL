// 데크 만들기

function Dequeue(){
  this.array = [];
};

Dequeue.prototype.pushFront = function(element){
  this.array.unshift(element);
}

Dequeue.prototype.pushBack = function(element){
  this.array.push(element);
}

Dequeue.prototype.popFront = function(){
  return this.isEmpty() ? -1 : this.array.shift();
}

Dequeue.prototype.popBack = function(){
  return this.isEmpty() ? -1 : this.array.pop();
}

Dequeue.prototype.isEmpty = function(){
  return this.size() === 0 ? 1 : 0;
}

Dequeue.prototype.size = function(){
  return this.array.length;
}

Dequeue.prototype.front = function(){
  return this.isEmpty() ? -1 : this.array[0];
}

Dequeue.prototype.back = function(){
  return this.isEmpty() ? -1 : this.array[this.array.length -1];
}


function answer(cmds){
  let result = [];
  let dequeue = new Dequeue();
  for (let i = 0; i < cmds.length; i++) {
    let mark = cmds[i].split(' ');
    switch(mark[0]){
      case 'push_front':
        dequeue.pushFront(Number(mark[1]));
        break;
      case 'push_back':
        dequeue.pushBack(Number(mark[1]));
        break;
      case 'pop_front':
        result.push(dequeue.popFront());
        break;
      case 'pop_back':
        result.push(dequeue.popBack());
        break;
      case 'front':
        result.push(dequeue.front());
        break;
      case 'back':
        result.push(dequeue.back());
        break;
      case 'empty':
        result.push(dequeue.isEmpty());
        break;
      case 'size':
        result.push(dequeue.size());
        break;
    }
  }


  return result;
};

let input = [
  ['push_back 1', 'push_front 2', 'pop_front', 'pop_back', 'pop_front'],
  ['push_back 3', 'push_front 4', 'push_back 5', 'push_front 6', 'front', 'back', 'pop_front', 'size', 'empty'],
  ['push_back 7', 'push_front 8', 'front', 'back', 'size', 'empty', 'pop_front', 'pop_back', 'pop_front', 'size', 'empty', 'pop_back', 'push_front 9', 'empty', 'front']
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i]));
}