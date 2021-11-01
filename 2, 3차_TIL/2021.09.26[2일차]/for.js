// output : 0, 1, 2
for (let i = 0; i < 3; i++) {
  console.log(i);
}
// output : none
for (let i = 10; i < 3; i++) {
  console.log(i);
}

let num = 0;
// output : 0, 1
for (; num < 2;) {
  console.log(num++);
}

// 이중for문

for (let i = 0; i < 3; i++) {
  for(let j = 0; j < 3 ; j++){
    console.log(i, j, i+j);
  }  
}

// for .. of
let lang = 'javascript';
let text = '';
for (let x of lang) {
  text+=x;
  console.log(x);
}
console.log(text);