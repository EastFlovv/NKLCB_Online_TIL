const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');
// const input = fs.readFileSync('./ex.txt').toString().split('\n');

const T = input[0];

for (let i = 1; i < input.length; i++) {
  let data = input[i].split(' ');
  console.log(Number(data[0]) + Number(data[1]));
}