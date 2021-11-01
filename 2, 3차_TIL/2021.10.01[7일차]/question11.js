function answer(x, y){
  let result = Array(10).fill(0,0, 11);

  for(i = x; i <= y; i++){
    let num = i;
    while(num > 0){
      let idx = num %10;
      result[idx]++;
      num = parseInt(num/10);

    }
  }
  return result;
};

let input = [
 [129, 137],
 [1412, 1918],
 [4159, 9182]
];

for (let i = 0; i < input.length; i++) {
  console.log(answer(input[i][0], input[i][1]))
}