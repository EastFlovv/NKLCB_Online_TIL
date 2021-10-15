// https://programmers.co.kr/learn/courses/30/lessons/43238?language=javascript

function solution(n, times) {
  let high = n * Math.max.apply(null, times);
  let low = 0;
  let mid, pass;
  
  while(low <= high){
      mid = Math.floor((low+high)/2);
      pass = times.reduce((sum, time)=> (sum += Math.floor(mid/time)), 0);
                          
      if(n <= pass) high = mid-1;
      else low = mid+1;
  }
  
  return low;
}