/**
 * @param {string} s
 * @return {string}
 */
const removeDuplicateLetters = function (s) {
  const stack = [];

  // char a = 97 : 0
  // alpha배열에 알파벳 아스키값 % 97로 전체 갯수 입력
  const alpha = new Array(26).fill(0);
  for (let i = 0; i < s.length; i++) {
    const hash = s.charCodeAt(i) % 97;
    alpha[hash]++;
  }



  for (let i = 0; i < s.length; i++) {
    const now = s[i];
    const hash = s.charCodeAt(i) % 97;


    // 솔리드 처리 필요

    if (!stack.includes(now)) { // 현재값이 유일값이면 그냥 넣는다
      stack.push(now);
      alpha[hash]--;
    } // 유일 값이 아니라면?
    else { // 스택의 길이가 0이상, 스택 최상단이 현재값보다 큼, 해시테이블에 요소가 아직 남아있다면 반복하며 pop
      while (stack.length !== 0 && stack[stack.length - 1] >= now && alpha[stack[stack.length - 1].charCodeAt() % 97] !== 0) stack.pop(); // ESLint 줄당 글자수 제한 120

      // 해시 테이블 예제처리
      // 현재 값이 들어갈 수 없는 조건이면 continue
      const top = stack[stack.length - 1];
      if (alpha[top.charCodeAt() % 97] === 0 && stack.includes(now) === true) {
        alpha[hash]--;
        continue; // ESLint no-continue 활성화
      } else { // 들어 갈 수 있는 조건이면 들어간다
        stack.push(now);
        alpha[hash]--;
      }
    }
    console.log(stack);
  }












  // // 답을 만들자
  // for(let i = 0; i < s.length; i++){
  //   // 현재 값의 해시값
  //   let nowHash = s.charCodeAt(i)%97;
  //   // 현재값
  //   let now = s[i];
  //   // 추가된 종료조건
  //   if(alpha[nowHash] === 0) continue;

  //   // 자신이 이미 존재하거나 최상위 값이 현재값보다 크면 삭제를 시도
  //   // 그런데 최상위 값의 hash값이 0이면 삭제하지않음
  //   if(stack.includes(now) || stack[stack.length-1] >= now){ // 앞선 값이 자신보다 클때 앞선 값을 제거 시도
  //     // 지우는 경우는 3가지
  //     // 1. 모두지움
  //     // 2. 자신보다 작은 값을 만남
  //     // 3. 스택 최상위의 hash의 값이 0이 아님 : 조건을모두 만족하면 계속 pop
  //     while(stack.length !== 0 && stack[stack.length-1] >= now && alpha[stack[stack.length-1].charCodeAt()%97] !== 0) stack.pop();

  //     // 3번 사유로 멈춘경우 stack에 더하지 않고 continue + 스택이 비어있으면 안됨
  //     // 추가 되어야 할 조건 acd 에 b가 추가되는경우 b에 막혀 continue됨 자신이 전체 배열에 존재하는지도 체크
  //     if(stack.length !== 0 && alpha[stack[stack.length-1].charCodeAt()%97] === 0 && stack.includes(now) === true) {
  //       alpha[nowHash] = 0; // 건너 뛸 경우 더 넣을 수 없으므로 aplha에서 해쉬값을 모두 삭제
  //       continue;
  //     }
  //     else{
  //       stack.push(now); // 그 후 자신을 넣는다
  //       alpha[nowHash]--; // 해시 감소
  //     }
  //   }else {
  //     stack.push(now);
  //     alpha[nowHash]--; // 해시 감소
  //   }
  // }
  // console.log(stack);
};

removeDuplicateLetters("abacb");