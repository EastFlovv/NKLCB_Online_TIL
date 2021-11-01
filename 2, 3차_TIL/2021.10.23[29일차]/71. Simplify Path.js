/**
 * @param {string} path
 * @return {string}
 */

// . 현재 위치
// .. 상위 위치
// / 로 구분


let simplifyPath = function(path) {
  let answer = '/';
  let stack = [];
  // 기존 경로를 /로 나누어 배열화
  let orders = path.split('/').filter(el => el !== '');
  
  // 반복문
  for(let i = 0; i < orders.length; i++){
    if(orders[i] === '.') continue; // 현재위치를 가리키면 continue
    else if (orders[i] === '..'){ // 상위 폴더로 이동
      if(stack.length === 0) continue; // 상위 폴더가 없으면 continue
      stack.pop(); // 있으면 pop
    }
    else stack.push(orders[i]); // 그 외는 경로를 더함
  }
  answer += stack.join('/'); // 스택을 /로 구분하여 하나의 스트링으로 만들고 answer에 더함
  return answer; // 반환
};