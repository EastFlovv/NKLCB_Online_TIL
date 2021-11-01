/**
 * @param {string} s
 * @return {string}
 */
 let smallestSubsequence = function(s) {
  // 모노스택
  let stack = [];
  let now;
  for(let i = 0; i < s.length; i++){
    let now = s[i];
    if(stack[stack.length-1] > now && !stack.includes(now)){
      while(stack[stack.length-1] > now && stack.length !== 0){
        stack.pop();
      }
    }else if(stack[stack.length-1] > now && stack.includes(now)) continue;
    else stack.push(now);
  }
  console.log(stack);
  return stack.join('');
};

smallestSubsequence("cbacdcbc");