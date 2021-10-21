/**
 * @param {number} rowIndex
 * @return {number[]}
 */
 let getRow = function(rowIndex) {
  let answer = [];
  
  for(let i = 0; i < rowIndex+1; i++){
    let secArr = [];
    for(let j = 0; j < i+1; j++){
      if(j === 0 || j === i) secArr.push(1);
      else secArr.push(answer[i-1][j-1] + answer[i-1][j]);
    }
    answer.push(secArr);
  }
  return answer[rowIndex];
};