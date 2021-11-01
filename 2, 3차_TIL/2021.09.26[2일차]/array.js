let arr1 = new Array(10);
let arr2 = [];

console.log(arr1);
console.log(arr2);

let fruits = ['apple', 'orange', 'melon'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);

fruits[1]= 'kiwi';
console.log(fruits);

// JS array is Hash object
arr2[0]= 'one';
arr2[1]= 'two';
console.log(arr2.length);
console.log(arr2);
console.log(Object.getOwnPropertyDescriptors(arr2));
arr2['once']= 'once';
console.log(arr2);
console.log(arr2.length);
console.log(Object.getOwnPropertyDescriptors(arr2));

// 배열 타입확인과 삭제
let num = 123.456;
let str = 'str';

console.log(Array.isArray(num));
console.log(Array.isArray(str));
console.log(Array.isArray(fruits));
console.log(fruits);
console.log(fruits.length);
delete fruits[1];
console.log(fruits);
console.log(fruits.length);