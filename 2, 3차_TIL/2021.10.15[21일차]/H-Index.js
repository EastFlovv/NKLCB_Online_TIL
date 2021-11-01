// https://programmers.co.kr/learn/courses/30/lessons/42747?language=javascript

function solution(citations) {
  let answer = 0;
  citations.sort((x,y)=>y-x); // 내림차순 정렬
  // for(let i = 0; i < citations.length; i++){
  //     if(citations[i] >= i+1){
  //         answer = i+1;
  //     }
  // }
  
  while(answer + 1 <= citations[answer]) answer++;

  return answer;
}

console.log(solution([3, 0, 6, 1, 5]));