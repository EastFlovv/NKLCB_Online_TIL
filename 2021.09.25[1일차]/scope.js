let x = 1;
let y = 2;
let z = 100;

{
  let x = 3;
  let y = 4;
  console.log(x);
  console.log(y);
}

{
  let x = 5;
  let y = 6;
  let o = 7;
  console.log(x);
  console.log(y);
  console.log(z); // global
  console.log(o); // local
  {
    let x = 500;
    console.log('local in local');
    console.log(x);
    console.log(y);
    console.log(z);
  }
}


console.log(x);
console.log(y);
// console.log(o); ReferenceError: o is not defined