function answer(arr){
  let new_arr = [];

  new_arr = Array.from(new Set(arr)); // 얕은복사
  // let set = new Set(arr);
  // set.forEach(el =>{
  //   new_arr.push(el);
  // });
  return new_arr;
};

let input = [
  ['john', 'alice', 'alice'],
  ['Hello', 'hello', 'HELLO', 'hello'],
  ['kiwi', 'banana', 'mango', 'banana']
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i+1} `);
  console.log(answer(input[i]));
};