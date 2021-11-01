function answer(mark){
  let result = 0;
  let score = 0;

  mark.forEach(element => {
    if(element == 0)
      score = 0;
    else
      result += ++score;
  });

  return result;
};

let input = [
  [1, 0, 1, 1, 1, 0, 1, 1, 0, 0],
  [1, 1, 0, 1, 1, 0, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 0, 0, 1, 1, 0]
];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i+1} ${answer(input[i])}`)
}