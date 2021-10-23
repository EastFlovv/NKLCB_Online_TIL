/**
 * @param {string} s
 * @return {string}
 */
 let removeDuplicateLetters = function(s) {
  let stack = [];
  
  // 단순 정렬이 아님
  // 기존의 순서를 유지하되 최대한 사전순을 유지할것
  
  for(let i = 0; i < s.length; i++){
    if(stack.includes(s[i])) continue;
    else stack.push(s[i]);
  };
  
  stack.sort();
  return stack.join('');
};