/**
 * @param {number} numRows
 * @return {number[][]}
 */
let generate = function(numRows) {
  let answer = [];
  
  for(let i = 0; i < numRows; i++){
    let secArr = [];
    for(let j = 0; j < i+1; j++){
      if(j === 0 || j === i) secArr.push(1);
      else secArr.push(answer[i-1][j-1] + answer[i-1][j]);
    }
    answer.push(secArr);
  }
  return answer;
};

console.log(generate(5));