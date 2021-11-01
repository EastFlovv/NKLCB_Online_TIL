// for문을 이용한 순열
let input = ['a', 'b', 'c'];
let count = 0;
function permutation(arr){
  // 첫번째 위치시킬 요소
  for (let i = 0; i < arr.length; i++) {
    // 두번째 위치시킬 요소
    for (let j = 0; j < arr.length; j++) {
      // 세번째 위치시킬 요소
      if(i == j)
        continue;
      for (let k = 0; k < arr.length; k++) {
        if(k != i && k !=j){
          console.log(arr[i], arr[j], arr[k]);
          count++;
        }
      }
    }
  }
  return ;
}
permutation(input);
console.log(count);

// 재귀를 이용한 순열
count = 0;

// s = 시작 인덱스, r = 끝 인덱스
function permutation2(arr, s, r){
  // 재귀 종료 조건
  if(s == r){
    count++;
    console.log(arr);
    return;
  };
  // 재귀
  for (let i = s; i < arr.length; i++) {
    // JS표현식: 구조 분해 할당
    [arr[s], arr[i]] = [arr[i], arr[s]]; // swap
    permutation2(arr, s+1, r);
    [arr[s], arr[i]] = [arr[i], arr[s]]; // 복귀
  };
};

permutation2(input, 0 ,2);
console.log(count);