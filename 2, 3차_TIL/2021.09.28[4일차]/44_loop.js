function answer(x, y){
  let result = [];
  if(x > y){
    let temp = y;
    y = x;
    x = temp;
  }
  for (let i = x; i <= y; i++) {
    result.push(i);
  };
  return result;
};

let input  = [
  [3, 7],
  [8, 3],
  [12, 10]
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i+1} `);
  console.log(answer(input[i][0],input[i][1]));
}