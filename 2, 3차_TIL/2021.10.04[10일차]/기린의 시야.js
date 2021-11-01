if(!Array.prototype.peak){
  Array.prototype.peak = function(){
    return this[this.length-1];
  };
}

if(!Array.prototype.isEmpty){
  Array.prototype.isEmpty = function(){
    if(this.length==0){
      return true;
    }
    return false;
  }
}

function answer(giraffe){
  let result = 0;
  let stack = [];

  giraffe.push(Number.MAX_SAFE_INTEGER);

  for (let i = 0; i < giraffe.length; i++) {
    while(!stack.isEmpty() && stack.peak()['h'] < giraffe[i]){
      //높이계산
      result += i - stack.pop()['i']-1;
    }
    stack.push({h: giraffe[i], i: i});
  }


  return result;
}

let input = [
  [10, 3, 7, 4, 12, 2],
  [7, 4, 12, 1, 13, 11, 12, 6],
  [20, 1, 19, 18, 15, 4, 6, 8, 3, 3]
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i+1} `);
  console.log(answer(input[i]));
}