function answer(arr){
  let reverse = [];

  for (let i = 0; i < arr.length; i++) {
    reverse[i] = arr[arr.length-1-i];
  }

  // for (let i = arr.length-1; i >= 0; i--) {
  //   reverse.push(arr[i]);
  // }

  return reverse;
};

let input = [
  [1, 2, 3, 4],
  [-1, 6, 'hello', -15],
  ['apple', 'banana', 'mango']
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i+1}`);
  console.log(answer(input[i]));
};