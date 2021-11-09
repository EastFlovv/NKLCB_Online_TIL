function solution(numbers) {
  // Array.sort((x,y)=> x-y) : 오름차순 정렬
  // x-y가 양수이면 바꾼다
  // 문자열 비교를 해야함
  // map은 조건에 맞춘 배열을 반환한다
  // 뒤 + 앞이 앞+뒤보다 크면 바꿔야함 x = 뒤+앞 y = 앞+뒤
  const answer = numbers.map(el => el+'').sort((x,y)=> (y+x) - (x+y)).join('');
  return answer.split('0').join('') ? answer : '0';
}