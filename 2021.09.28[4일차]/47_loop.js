function answer(s, e){
  let sequence = [];
  sequence.push(s);
  sequence.push(e);
  while(true){
    let num1 = sequence[sequence.length-2];
    let num2 = sequence[sequence.length-1];
    if(num1 - num2 >= 0){
      sequence.push(num1-num2);
    }else break;
  }
  return sequence;
};

let input = [
  [9, 3],
  [6, 3],
  [13, 7]
];
for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i+1} `);
  console.log(answer(input[i][0], input[i][1]));
}