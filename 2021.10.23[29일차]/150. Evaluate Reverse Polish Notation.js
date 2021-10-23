/**
 * @param {string[]} tokens
 * @return {number}
 */
let evalRPN = function(tokens) {
  // 후위 연산식 문제
  let stack = [];


  for(let i = 0; i < tokens.length; i++){
    if(isNaN(tokens[i])) {
      let num1 = stack.pop();
      let num2 = stack.pop();
      // 계산식
      switch(tokens[i]){
        case '+':
          stack.push(num2 + num1);
          break;
        case '-':
          stack.push(num2 - num1);
          break;
        case '*':
          stack.push(num2 * num1);
          break;
        case '/':
          stack.push(parseInt(num2 / num1));
          break;
      }
    }else 
      stack.push(Number(tokens[i]));
  }
  return stack.pop();
};

evalRPN(["4","13","5","/","+"]);