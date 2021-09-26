// 함수 선언식
function add(x, y){
  return x + y;
}

// 함수 표현식
const mul = function (x, y) {
  return x * y;
}

// 화살표 함수
const div = (x, y) => {x/y};

// 함수의 호출
let result = add(10, 20);
console.log(`add = ${result}`);

// 함수호출의 default value설정하기
function printXY(x, y =10){
  console.log(`x = ${x}, y = ${y}`);
}
printXY(10, 20);
printXY(5);

// 함수호출의 dynamic paramaters
function dynamicPrint(){
  console.log(arguments[0], arguments[1]);
}
dynamicPrint(1,2,3,4,5);
dynamicPrint(1);
dynamicPrint();

// 함수의 반환
// return을 사용해 함수의 결과를 반환한다.
function checkAge(age){
  if(age > 18) return true;
  else return false;
}
console.log(checkAge(14));
console.log(checkAge(24));