/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
 let removeKdigits = function(num, k) {
  let stack = [];
  stack.push(Number(num[0]));

  for(let i = 1; i < num.length; i++){
    let now = Number(num[i]);
    if(stack[stack.length-1] <= now) stack.push(now);
    else {
     stack.pop();
     stack.push(now);
      k--;
    }
    
    // 문제 되는 부분
    if(k === 0 || i !== num.length-1) {
      stack.push(Number(num.substr(i+1)));
      break;
    }
  }

  while(k > 0){
    stack.pop();
    k--;
  }


  // console.log(stack);
  // console.log("" + Number(stack.join('')));
  if(stack.length === 0) return "0";
  else return "" + Number(stack.join(''));
};

console.log(removeKdigits("21", 1));