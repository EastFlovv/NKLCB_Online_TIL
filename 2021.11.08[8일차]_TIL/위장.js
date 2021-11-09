// https://programmers.co.kr/learn/courses/30/lessons/42578
function solution(clothes) {
  let answer = 1;
  // 이차원 배열의 첫요소는 옷의 이름, 두번째 요소는 범주
  const spyClothes = {};

  clothes.forEach(el => {
    // 이미 분류가 존재하면 +1. 분류가 없으면 2로 초기화 (옷을 입는경우 + 안입는경우)
    el[1] in spyClothes ? spyClothes[el[1]]++ : spyClothes[el[1]] = 2;
  });

  // 모든 경우의 수 - 아무것도 안입는경우 (1)
  for(const cloth in spyClothes){ // ESLint에러 reduce와 Object.value를 쓴다면 해결 가능해보임
    answer *= spyClothes[cloth];
  }
  return answer-1;
}

console.log(solution([["yellowhat", "headgear"], ["bluesunglasses", "eyewear"], ["green_turban", "headgear"]]));