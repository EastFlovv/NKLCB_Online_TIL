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

function answer(str){
  let result = [];
  
  let stack =[];
  for (let i = 0; i < str.length; i++) {
    if(str[i] == '('){
      stack.push(i);
    }else if(str[i] == ')'){
      if(stack.isEmpty()) return [];
      result.push([stack.pop(), i]);
    }
  }
  // 스택이 비어있지 않으면 빈객체 반환
  if(!stack.isEmpty()) return [];
  return result;
}


let input = [
  '(a+b)',
  '(a*(b+c)+d)',
  '(a*(b+c)+d+(e)',
  '(a*(b+c)+d)+e)',
  '(a*(b+c)+d)+(e*(f+g))'
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i+1} `);
  console.log(answer(input[i]));
};