// 함수 선언식
function add1(x, y){
  return x + y;
}

// 함수 표현식
const add2 = function (x, y) {
  return x + y;
}

// 화살표 함수
const add3 = (x, y) => x + y;


const add4 = add1;
console.log(add4(1,2));

// 내용은 같지만 같은 객체가 아니다
console.log(add1 == add2);
// 같은 객체
console.log(add1 == add4);

// console.log(Object.getOwnPropertyDescriptors(add1));
// console.log(Object.getOwnPropertyDescriptors(add2));
// // 화살표 함수는 더 간결하게 생성된다.
// console.log(Object.getOwnPropertyDescriptors(add3));
// // add1과 name 객체의 value가 같다.
// console.log(Object.getOwnPropertyDescriptors(add4));

// 함수 저장
let list = [
  'john',
  27,
  function hellofunc(){
    console.log('hello');
  }
];

let object = {
  name : 'john',
  age : 27,
  // method
  hellofunc(){
    console.log('hello');
  }
};

function hello_func(){
  console.log('hello');
}

list[2]();
object.hellofunc();
hello_func();

console.log(typeof list[2]);
console.log(typeof object.hellofunc);
console.log(typeof hello_func);

// method
console.log('----------------');
function funA(){
  console.log('A');
}
function funB(){
  console.log('B');
}

let obj2 = {
  name: 'east',
  age: 27,
  func: funA,
};

funA();
funB();
obj2.func();
console.log(obj2.func == funA);

obj2.func = funB;
obj2.func();
console.log(obj2.func == funB);

// this
console.log('---------this---------')
let user = {name: 'park'};
let admin = {name: 'lee'};
function hi(){
  console.log('hello '+ this.name);
}

user.func = hi;
admin.func = hi;
user.func();
admin.func();