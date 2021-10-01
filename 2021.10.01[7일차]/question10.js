function answer(bricks){
  let result = 0;
  let avg = 0;
  bricks.forEach(element => {
    avg += element;
  });
  avg /= bricks.length;
  
  bricks.forEach(element => {
    if(element < avg){
      result += avg-element;
    };
  });

  return result;
};

let input = [
  [5, 2, 4, 1, 7, 5],
  [12, 8, 10, 11, 9, 5, 8],
  [27, 14, 19, 11, 26, 25, 23, 15]
];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i+1} ${answer(input[i])}`)
}