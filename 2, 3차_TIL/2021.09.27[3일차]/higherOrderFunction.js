// sort함수 문제점 극복
let nums = [1, -2, 4, 0, 10, 20, 12];
console.log(nums.sort());
console.log(nums.reverse());


// 오름차순
let ascending_order = function(x, y){
  // 코드 공용화
  if (typeof x === 'string') x = x.toUpperCase();
  if (typeof y === 'string') y = y.toUpperCase();
  // 코드 공용화
  // 두 변수를 받아 그 차가 0보다 큰 값으로 반환되면 두 값의 위치가 바뀜
  return x>y?1:-1;
};
// 내림차순
let descending_order = function(x, y){
  if (typeof x === 'string') x = x.toUpperCase();
  if (typeof y === 'string') y = y.toUpperCase();
  // 두 변수를 받아 그 차가 0보다 큰 값으로 반환되면 두 값의 위치가 바뀜
  return x<y?1:-1;
};

console.log(nums.sort(ascending_order));
console.log(nums.sort(descending_order));

//sort함수 한계점 극복

let words = ['apple', 'orange', 'melon', 'Orange'];
console.log(words.sort());
console.log(words.reverse());

console.log(words.sort(ascending_order));
console.log(words.sort( descending_order));
