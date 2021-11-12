function makeBiggestNumber(number, k) { // number : String, k = Number
  const stack = [];
  let delNumber = k;

  for (const value of number) {
    if (delNumber) {
      // stack이 비어있으면 NaN, NaN와 Number의 비교는 무조건 false
      if (value > stack[stack.length - 1]) {
        // 작은 수 가 앞에 있으면 지워내기
        while (value > stack[stack.length - 1] && stack.length) {
          stack.pop();
          delNumber--;
          // 여기서 delNumber가 0이 되면 중단해야함
          if (!delNumber) break;
        }
      }
    }
    stack.push(value);
  }
  // 모든 로직을 진행한 후 아직 지울 숫자가 남았다면 뒤부터 순서대로 삭제
  while(delNumber) {
    stack.pop();
    delNumber--;
  }
  // console.log(stack);
  return stack.join('');
}
console.log(makeBiggestNumber("1924", 2));
console.log(makeBiggestNumber("1000", 1));