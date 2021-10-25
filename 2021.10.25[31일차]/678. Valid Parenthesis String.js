/**
 * @param {string} s
 * @return {boolean}
 */
 let checkValidString = function(s) {
  let answer = true;
  let stack1 = [];
  let stack2 = [];
  for(let i = 0; i < s.length; i++){
    if(s[i] === '(') stack1.push(i);
    else if(s[i] === '*') stack2.push(i);
    else if(s[i] === ')' && stack1.length !== 0) stack1.pop();
    else if(s[i] === ')' && stack1.length === 0 && stack2.length !== 0) stack2.pop();
    else {
      answer = false;
      break;
    }
  }
  
  if(stack1.length > stack2.length) answer = false;
  while(stack1.length !== 0){
    if(stack1.pop() > stack2.pop()) {
      answer = false;
      break; 
    }
  }
  
  return answer;
};

console.log(checkValidString("(((((*(()((((*((**(((()()*)()()()*((((**)())*)*)))))))(())(()))())((*()()(((()((()*(())*(()**)()(())"));