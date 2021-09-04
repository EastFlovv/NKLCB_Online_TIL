const { ReadStream } = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let puzzle = new Array([4][4]);


rl.question('input quzzle >>> ', input =>{
  // this.puzzle = input.split(/\]|\[|\,|\'|" "/);
  this.puzzle = input.split(/\]|\[|\,|\'|" "/).filter(el => el!='' || el!='');
  
  console.log(this.puzzle);
  console.log(typeof(this.puzzle));
  // console.log(this.puzzle[1]);
  rl.close();
});

// rl.on('line', line => {

//   const puzzle = new Array([]);


//   rl.close();
// }).on('close', ()=>{
//   process.exit();
// });