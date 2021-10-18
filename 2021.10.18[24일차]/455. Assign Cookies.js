/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
let findContentChildren = function(g, s) {
  let answer = 0;
  // 두 배열을 정렬
  g.sort((x,y) => x-y);
  s.sort((x,y) => x-y);
  
  // 조건에 만족하면 둘다 shift, 조건에 맞지않으면 쿠키만 shift
  while(true){
    if(s.length === 0 || g.length === 0) break; // 어느 한 배열이 끝을 보면 answer반환
    if(s[0] < g[0]) s.shift();
    else if(s[0] >= g[0]) {
      g.shift();
      s.shift();
      answer++;
    }
  }
  
  return answer;
};

console.log(findContentChildren([1,2,3], [1,1]));