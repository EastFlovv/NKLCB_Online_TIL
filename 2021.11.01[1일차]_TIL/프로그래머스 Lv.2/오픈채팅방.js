// https://programmers.co.kr/learn/courses/30/lessons/42888
function solution(record) {
  const answer = [];
  // 해시 테이블 사용
  const hTable = {};
  // 해시 테이블로 닉네임 최종결정
  for (let i = 0; i < record.length; i++) {
    const recNow = record[i].split(' '); // 공백으로 기록을 배열화
    if (recNow[0] === "Enter" || recNow[0] === "Change") {
      const uid = recNow[1];
      const nickname = recNow[2];
      hTable[uid] = recNow[nickname]; // 반복문을 모두 수행하면 유저의 최종 닉네임이 남는다
    }
  }

  for (let i = 0; i < record.length; i++) {
    const recNow = record[i].split(' '); // 공백으로 기록을 배열화
    switch (recNow[0]) { // 입장과 퇴장만 기록함
      case "Enter":
        answer.push(`${hTable[recNow[1]]}님이 들어왔습니다.`);
        break;
      case "Leave":
        answer.push(`${hTable[recNow[1]]}님이 나갔습니다.`);
        break;
      default:
        break;
    }
  }
  return answer;
}

solution(["Enter uid1234 Muzi", "Enter uid4567 Prodo","Leave uid1234","Enter uid1234 Prodo","Change uid4567 Ryan"]);