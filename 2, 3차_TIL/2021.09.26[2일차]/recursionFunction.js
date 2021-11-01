// 재귀함수
function recursion(num){
  if(num == 0) return;
  recursion(num-1);
  console.log(`recursion level ${num}`);
}
recursion(5);

// 재귀함수를 이용한 수 더하기 0부터 N까지의 더하기
function recursion2(num){
  if(num == 0) return 0;
  return num += recursion2(num-1)
}
console.log(recursion2(5));

// 재귀함수를 이용한 팩토리얼
function recursion3(num){
  if(num == 0) return 1;
  return num *= recursion3(num-1)
}
console.log(recursion3(5));