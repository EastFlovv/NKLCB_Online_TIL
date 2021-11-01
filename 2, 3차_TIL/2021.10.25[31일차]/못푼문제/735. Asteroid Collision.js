/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
 let asteroidCollision = function(asteroids) {
  let answer = [];
  let state = false;
  
//   for(let i = 0; i < asteroids.length; i++){
//     if(state === false) answer.push(asteroids[i]); // 음수 시작 처리
//     if(answer[answer.length-1] > 0) state = true; // 양수가 들어오면 어느 한쪽은 같이 살 수 없다 음수가 다 죽이지 않는한
//     if(state) { // state가 true일때
//       if(answer[answer.length-1]) state = false; // 음수가 되면 다시 false
//       if(asteroids[i] > 0) answer.push(asteroids[i]); // 양수는 계속 넣는다.
//       if(asteroids[i] < 0){ // 음수가 들어오면
//         if(Math.abs(asteroids[i]) === answer[answer.length-1]) asnwer.pop(); // 같으면 둘다 삭제
//         if(Math.abs(asteroids[i]) > answer[answer.length-1]) { // 음수가 더 크면 일단 삭제
//           answer.pop();
//         }
//         if(Math.abs(asteroids[i]) < answer[answer.length-1]) continue;
//       }
//     }
    
    
//   }
  
  
  
  
  for(let i = 0; i < asteroids.length; i++){
    if(answer.length !== 0 && answer[answer.length-1] > 0 && asteroids[i] < 0){
       if(answer[answer.length-1] > asteroids[i] * -1) continue;
       if(answer[answer.length-1] === asteroids[i] * -1) answer.pop();
       if(answer[answer.length-1] < asteroids[i] * -1) {
         answer.pop();
         answer.push(asteroids[i]);
       }
    }else answer.push(asteroids[i]);
  }
  //연속된 값의 처리?
  
  return answer;
};