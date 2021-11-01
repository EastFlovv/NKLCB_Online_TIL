function answer(year){
  let yoon;
  if((year%4 == 0 && year % 100 != 0) || year % 400 == 0)
    yoon = true;
  else yoon = false;
  return yoon;
};

let input = [4, 100, 124, 247, 400];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i+1} ${answer(input[i])}`);
}