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

function answer(train){
  let stack = [];
  let num = 0;
  
  for (let i = 0; i < train.length; i++) {
    
    while(stack.isEmpty() || stack.peak() < train[i]){
      stack.push(++num);
    }
    
    if(stack[stack.length-1] === train[i]){
      stack.pop();
    }else{
      return false;
    }

  }
  return true;
}

let input = [
  [1,2,3],
  [3,2,1],
  [3,1,2]
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i+1} `);
  console.log(answer(input[i]));
}