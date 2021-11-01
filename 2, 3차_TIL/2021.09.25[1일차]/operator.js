console.log('---------산술연산자---------');
// 덧셈연산자
console.log(10+21);
// 뺄셈 연산자
console.log(10-21);
// 곱셈 연산자
console.log(10*21);
// 나눗셈 연산자
console.log(100/21);
// 몫
console.log(parseInt(100/21));
// 나머지 연산자
console.log(10%21);
// 제곱연산자
console.log(10**2);

console.log('---------대입연산자---------');
// 대입연산자
let num1 = 123;
let num2 = 456;
let str1 = 'hello';
let str2 = 'world';
let num3, str3;

num3 = num1+num2;
str3 = str1+str2;

console.log(num3);
console.log(str3);

console.log('---------복합대입연산자---------');
// 복합 대입 연산자
num1 += num2; // num1 = num1 + num2
console.log(num1);
num1 -= num2; // num1 = num1 - num2
console.log(num1);
num1 *= num2; // num1 = num1 * num2
console.log(num1);
num1 /= num2; // num1 = num1 / num2
console.log(num1);
num1 %= num2; // num1 = num1 % num2
console.log(num1);

console.log('--------증감연산자---------');
// 증가 감소 연산자
// 증감 연사자의 위치에 따라 증감의 순서를 정할 수 있다.
num4 = 10;
console.log(++num4);
console.log(num4--);
console.log(num4);

console.log('--------비교연산자---------');
console.log('Z' > 'A');
console.log('ZA' > 'AAA');
console.log('Hello' < 'Hi');
console.log('Hello' >= 'Helloo');

console.log('5' <= 10);
console.log(true == 1);
console.log(true === 1);
console.log(true != 1);
console.log(true !== 1);

// 논리 연산자
// 좌항과 우항의 피연산자 간 논리 값을 연산하여 참, 거짓을 결과로 얻는 연산자
console.log('--------논리연산자---------');

console.log(true || false);
console.log(Boolean(0 || false));
console.log(Boolean(123 || false));
console.log(Boolean(123 && 0));
console.log(Boolean(true && false));
console.log(Boolean(true && 3));
console.log(Boolean(0 && false));
console.log(!false);
console.log(!123);
console.log(!0);