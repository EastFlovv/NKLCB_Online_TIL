/**
 * @param {number} n
 * @return {number[]}
 */
 let countBits = function(n) {
  let answer = [];
  
  for(let i = 0; i <= n; i++) answer.push(i.toString(2));
  console.log(answer);
  for(let i = 0; i <= n; i++){
    let count = answer[i].split('').filter((el)=> el === '1').length;
    answer[i] = count;
  }
  
  return answer;
};