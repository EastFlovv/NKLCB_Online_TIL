// https://programmers.co.kr/learn/courses/30/lessons/42883?language=javascript

function solution(number, k) {
  let stack = [];
  
  for(let i = 0; i < number.length; i++){
      while(stack.length !== 0 && stack[stack.length-1] < number[i]){
          stack.pop();
          
          if(--k == 0) 
              return stack.join("") + number.substr(i, number.length-1);
      }
      stack.push(number[i]);
  }
  
  return stack.jpin("").substr(0, stack.lenth-k);
}