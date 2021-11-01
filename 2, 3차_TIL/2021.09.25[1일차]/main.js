const fs = require("fs");
const input = fs.readFileSync("./input.txt", "utf-8");

// let a = input;

console.log(input); 

let name = 'eastflow';
const birth = '1995.08.15';

console.log(birth, name);

console.log('----------var, Hoisting-----------');
//var
console.log(name_2);
var name_2 = 'john';
console.log(name_2);

//hoisting
var name_3;
console.log(name_3);
name_3 = 'kim';
// let name_3 = 'kim';
console.log(name_3);

// 자료형
console.log('----------자료형-----------');
let str = 'hello world';
console.log(typeof str);
console.log(typeof undefined);
console.log(typeof 1);
console.log(typeof 456n);
console.log(typeof 456.123);
console.log(typeof true);
console.log(typeof Symbol('id'));
console.log(typeof null);
console.log(typeof Math);
console.log(typeof console.log);

console.log(`str is... ${str}`);

let obj = {
  name : 'ef',
  age: 27
};

console.log(obj);
console.log(typeof obj);
console.log(typeof obj.name);
console.log(typeof obj.age);

obj.weight = 50;
console.log(obj);
delete obj.age; // 객체의 내용 삭제
console.log(obj);

// 객체 복사의 문제
// 주소값을 공유한다

let obj2 = obj;
obj2.name ='k';
console.log(obj);
console.log(obj2);


// 얕은 복사
// for문을 이용한 객체복사
// object.assign()함수를 통한 복사
// ES6부터 지원하는 전개연산자(Spread Operator)를 사용한 복사
// 얕은 복사의 문제점 객체내의 다른객체가 있다면 복사되지 않는다

// 깊은복사
// 재귀함수를 이용한 깊은복사

