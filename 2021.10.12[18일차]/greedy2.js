// 프로그래머스 42862번
// 체육복
function solution(n, lost, reserve) {
  let losted = [...lost].filter((x) => !reserve.includes(x));
  let reserved = [...reserve].filter((x)=> !lost.includes(x));
  let answer = n-losted.length;
  
  let db = {};
  for(let i = 0; i < reserved.length; i++){
      db[reserved[i]] = true;
  }
  
  losted = losted.sort((x,y)=>x-y);
  
  for(let i = 0; i < losted.length; i++){
      if(db[losted[i] - 1]){
          answer++;
          db[losted[i] - 1] = false;
      }else if(db[losted[i]+1]){
          answer++;
          db[losted[i]+1] = false;
      }
  }
  return answer;
}

console.log(solution(5, [2, 4], [1, 3, 5]));
