// https://programmers.co.kr/learn/courses/30/lessons/72410
function solution(new_id) {
  let answer = '';
  let reg = /\w|.|-/;
  // 1, 2단계
  let str = new_id.toLowerCase().split('').filter(el => el.match(reg)).join('');
  // console.log(str);
  // 3단계
  reg = /.{2}/;
  while(1){
      str = str.replace(reg, '.');
      if(!str.match(reg)) break;
  }
  // console.log(str);
  // 4단계
  reg = /^.|.$/;
  while(1){
      str = str.replace(reg, '');
      if(!str.match(reg)) break;
  }
  // console.log(str);
  // 5단계
  if(!str) str += 'a';
  // console.log(str);
  // 6단계
  reg = /.$/;
  if(str.length > 15) str = str.substring(0, 15).replace(reg, '');
  // console.log(str);
  // 7단계
  while(str.length < 3) str += str[str.length-1];
  // console.log(str);
  answer = str;
  return answer;
}