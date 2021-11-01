// 콜백함수
function callback() {
  console.log('---callback function---');
}
// 고차함수 -> 콜백함수를 실행하는 함수
function higher_order_function(callback) {
  console.log('---higher order function---');
  callback();
}
// 호출
higher_order_function(callback);

// 콜백함수 예제
function add(x, y){
  return x+y;
}
function mul(x, y){
  return x*y;
}
function sub(x, y){
  return x-y;
}
function div(x, y){
  return x/y;
}
function calculator(callback, x, y){
  return callback(x, y);
}
console.log(calculator(add, 10, 20));
console.log(calculator(mul, 10, 20));
console.log(calculator(sub, 10, 20));
console.log(calculator(div, 10, 20));