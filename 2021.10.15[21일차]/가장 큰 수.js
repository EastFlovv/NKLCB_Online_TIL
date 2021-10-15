// https://programmers.co.kr/learn/courses/30/lessons/42746?language=javascript

function solution(numbers) {
  let answer = numbers.map((n)=> n+"").sort((x,y)=>(y+x)-(x+y)).join("");
  return answer.split(0).join("") ? answer : "0";
}

console.log(solution([3, 30, 34, 5, 9])); 