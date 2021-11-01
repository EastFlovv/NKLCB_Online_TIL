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
  let result =0;
  // '(' *2, '[' *3, ')' /2, '] /3'
  // '()', '[]'현재값 유지
  let stack = [];
  let temp = 1;
  for (let i = 0; i < str.length; i++) {
    let mark = str[i];
    switch(mark){
      case "(":
        temp *= 2;
        stack.push(mark);
        break;
      case "[":
        temp *= 3;
        stack.push(mark);
        break;
      case ")":
        if(stack.isEmpty() || stack.peak() != '('){
          return 0;
        }
        
        if(str[i-1] == '('){
          result += temp;
        }
        stack.pop();
        temp /= 2;
        break;
      case "]":
        if(stack.isEmpty() || stack.peak() != '['){
          return 0;
        }
        
        if(str[i-1] == '['){
          result += temp;
        }
        stack.pop();
        temp /= 3;
        break;
    }
  }

  if(!stack.isEmpty()) return 0;

  return result;
}

let input = [
  '(()[[]])',
  '[][]((])',
  '(()[[]])([])'
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i+1} `);
  console.log(answer(input[i]));
}