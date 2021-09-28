function answer(a, b, c, d){
  let result;
  let num1 = a/b;
  let num2 = c/d;
  if(num1 > num2)
    result = 1;
  else if (num1 < num2)
    result = -1;
  else if (num1 == num2)
    result = 0;

  return result;
};

let input = [
  [14, 2, 6, 6],
  [6, 7, 8, 9],
  [18, 2, 36, 4]
];
for (let i = 0; i < input.length; i++) {
  console.log(`#${i+1} ${answer(input[i][0], input[i][1], input[i][2], input[i][3])}`);
};