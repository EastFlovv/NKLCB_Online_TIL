// 형변환
let us = 1e-6;
console.log(us.toString());
console.log(typeof us.toString());
console.log(typeof String(us));
console.log(typeof (us+""));

let num1 = 125.0;
let num2 = 123.456;

console.log(num1-num2);
// 소수점 자리제한
console.log((num1-num2).toFixed(3));
// 전체 자리제한
console.log((num1-num2).toPrecision(3));

// 들어오는 값이 isNaN에 포함되는지 아닌지를 판별
console.log(Number.isNaN(0.123));
// 숫자/문자는 NaN
console.log(Number.isNaN(111/'aaa'));
// 유한수인지 판별
console.log(Number.isFinite(-123));
console.log(Number.isFinite(Infinity));
console.log(Number.isFinite('hello'));


console.log(Number.parseInt('123ab')); // 123 숫자만 추출하여 출력
console.log(Number.parseFloat('1.24em')); // 1.24 숫자만 추출하여 출력