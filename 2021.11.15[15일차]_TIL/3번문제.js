function solution (n){ // n is number
  // 이진 변환
  const binary = n.toString(2);
  console.log(binary);
  // 0의 갯수를 셀 count
  let count = 0;
  let max = 0;
  // 1이 하나만 있으면 0리턴
  if(!binary.lastIndexOf("1")) return 0;
  // 반복문
  for(let i = 0; i < binary.length; i++){
    // 0이면 count 증가 1을 만나면 count와 max를 비교하여 대입하고 count 초기화
    if(+binary[i]){
      if(count > max) max = count;
      count = 0;
    }else count++;
  }
  // max+1 리턴
  return max+1;
}

console.log(solution(16));
console.log(solution(11));
console.log(solution(513));
console.log(solution(65537));
console.log(solution(524289));
console.log(solution(8388609));
console.log(solution(67108865));
console.log(solution(67108865));