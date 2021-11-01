/**
 * @param {string} s
 * @return {string}
 */
 let decodeString = function(s) {
  let answer = '';
  let stack = []; // 스택 사용
  for(let i =0; i < s.length; i++){
    // input 조건
    if(s[i] !== ']') stack.push(s[i]);
    // output 조건
    if(s[i] === ']'){
      // 반복문 저장
      let str = '';
      // 반복문 배열
      let arr = []
      // 반복횟수 저장
      let repeatNum = '';
      
      let now = stack.pop();
      while(now !== '['){
        arr.push(now); // 닫힐때까지 더한다
        now = stack.pop();
      }
       
      while(Number(stack[stack.length-1]) >= 0){
        repeatNum += stack.pop();
      }
      repeatNum = Number(repeatNum.split('').reverse().join(''));

      str = arr.reverse().join(''); // 원래 순서로 돌림
      str = str.repeat(Number(repeatNum)); // 지정된 순서만큼 반복 입력
      stack.push(str); // 스택에 삽입
    }
  }
  // console.log(stack);
  // console.log(stack.join(''));
  return stack.join('');
};

console.log(decodeString("10[leetcode]"));
console.log(decodeString("3[z]2[2[y]pq4[2[jk]e1[f]]]ef"));