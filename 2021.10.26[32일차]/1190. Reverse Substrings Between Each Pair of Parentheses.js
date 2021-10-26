/**
 * @param {string} s
 * @return {string}
 */
let reverseParentheses = function(s) {
  let stack = [];
  let str = [];
  let letter = null;
  for(let i = 0; i < s.length; i++){
    if(s[i] === ")"){
      while(letter !== "("){
        letter = stack.pop();
        if(letter === "(") continue;
        str.push(letter);
      }
      stack.push(...str);
      str = [];
      letter = null;
    }else{
      stack.push(s[i]);
    }
  }
  return stack.join('')
};
reverseParentheses("(u(love)i)");