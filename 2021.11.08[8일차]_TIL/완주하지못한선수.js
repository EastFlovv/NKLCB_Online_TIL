// https://programmers.co.kr/learn/courses/30/lessons/42576
function solution(participant, completion) {
  // 두 배열을 모두 해시로 만듦
  // 다른 해시의 키를 반환
  let answer = '';
  const parHash = {};
  const comHash = {};

  // 전체 참가자 목록
  participant.forEach(el => {
    parHash.hasOwnProperty(el) ? parHash[el]++ : parHash[el] = 1;
  });

  // 완주자 목록
  completion.forEach(el => {
    comHash.hasOwnProperty(el) ? comHash[el]++ : comHash[el] = 1;
  });

  // 정답찾기
  for(const name in parHash){
    // 완주자 목록에 이름이 없거나, 숫자가 달라야함
    if(comHash.hasOwnProperty(name) === false || comHash[name] !== parHash[name]) answer = name;
  }
  return answer;
}