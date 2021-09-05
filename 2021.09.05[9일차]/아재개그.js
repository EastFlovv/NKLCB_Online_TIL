const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let puzzle = new Array();
let realpuzzle = new Array();
let input2;

rl.setPrompt("");
rl.prompt();

rl.question('input quzzle >>> ', input =>{
  //퍼즐의 값을 input하면 사용하기 위한 값을 제외하고 모두 걸러내 puzzle에 배열로 넣는다.
  puzzle = input.split(/\]|\[|\,|\'|" "/).filter(el => el!='' || el!='');
  let k=0;
  // realpuzzle에 2차원 배열로 다시 넣는다.
  for (let i = 0; i < 4; i++) {
    let row = new Array;
    for (let j = 0; j < 4; j++) {
      row.push(puzzle[k]);
      // console.log('row >> ', row);
      k++;
    }
    realpuzzle[i] = row;
    
  }
  console.log(realpuzzle);
  input2 = rl.prompt();
  
  rl.close();
});

// rl.on('line', line => {
//   let q = 0;
//   switch(q){
//     case 0:
//       console.log('input quzzle >>> ');
//       rl.prompt();
//       q++;
//       continue;
//     case 1:
//       console.log('input word >>> ');
//       rl.prompt();

      
      
//   }


//   rl.close();
// }).on('close', ()=>{
//   process.exit();
// });