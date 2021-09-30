function answer(num){
  let result = '';
  
  for (let i = 0; i < num; i++) {
    let star = ' '.repeat(num-i-1) + '*'.repeat(i*2+1) + '\n';
    result += star;
  }

  return result;
};

let input = [
 3, 5, 7
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i+1}\n`);
  console.log(answer(input[i]));
}