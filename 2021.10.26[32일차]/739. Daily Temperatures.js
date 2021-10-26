/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
 let dailyTemperatures = function(temperatures) {
  let arr = new Array(temperatures.length).fill(0);
  
  for(let i = 0; i < arr.length-1; i++){
    for(let j = i+1; j < arr.length; j++){
      if(temperatures[j] > temperatures[i]) {
        arr[i] = j-i;
        break;
      }
    }
  }
  return arr;
};