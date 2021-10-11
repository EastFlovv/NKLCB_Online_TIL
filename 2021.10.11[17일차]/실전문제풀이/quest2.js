// 완주하지 못한 선수

// 강사님의 코드
function solution(participant, completion) {
  let answer = '';
  let p, d = {};
  
  for(let i = 0; i < completion.length; i++){
      p = completion[i];
      if(d[p]) d[p]++;
      else d[p] = 1;
  }
  
  for(let i = 0; i < participant.length; i++){
      p = participant[i];
      if(!d[p]) return p;
      d[p]--;
  }
  
  
  return answer;
}

// 나의 코드
function solution(participant, completion) {
  var answer = '';
  
  participant.sort();
  completion.sort();
  for(let i = 0; i<completion.length; i++){
      if(participant[i] !== completion[i]){
          answer = participant[i];
          break;
      }
  }
  if(answer == '') answer = participant[participant.length-1];
  return answer;
}