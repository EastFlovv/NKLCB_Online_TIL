function solution(people, limit) {
  let answer = 0;
  const peoples = people.sort((x,y)=> x-y);
  const boat = [];
  // 가장 가벼운 사람을 넣고 뒤에서부터 검사를 진행
  while(peoples.length){
    // 가장 가벼운 사람 탑승
    boat.push(peoples.shift());
    // 가장 무거운 사람부터 순차적으로 검사 함께 탈 수 없다면 무조건 혼자탄다
    for(let i = peoples.length-1; i >= 0; i--){
      // 혼자 탄다
      if(peoples[i] > limit - boat[0]){
        peoples.pop();
        answer++;
      }else{ // 함께 탄다
        boat.pop();
        peoples.pop();
        answer++;
        break;
      }
    }
    // 가장 가벼운사람이 혼자 탈 경우
    if(boat.length) {
      boat.pop();
      answer++;
    }
  }
  // 반환
  return answer;
}

console.log(solution([70, 80, 50], 100))