// 기능개발 
// https://programmers.co.kr/learn/courses/30/lessons/42586?language=javascript

function solution(progresses, speeds) {
  let answer = [];
  
  let head = 0;
  let tail = progresses.length;
  let day = 0;
  let count;
  
  while(head != tail){
      count = 0;
      day++;
      for(let i = head; i < tail; i++){
          if(progresses[i] + speeds[i] * day <100) break;
          count++;
      }
      
      if(count){
          answer.push(count);
          head += count;
      }
  }
  
  return answer;
}