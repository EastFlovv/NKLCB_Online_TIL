/**
 * @param {number[]} nums
 * @return {number}
 */
 let findUnsortedSubarray = function(nums) {
  let answer = 0;
  let start = false;
  let Sidx = 0;
  let Eidx = 0;
  let arr = new Array(...nums);
  arr.sort((x,y)=> x-y);
  while(arr.length !== 0){
    let AP = arr.pop();
    let NP = nums.pop();
    if(AP !== NP && !start) {
      Sidx = arr.length;
      start = true; // 재배열 시작 
    }
    if(AP !== NP && start) Eidx = arr.length;
    // 처음 틀리는 지점, 마지막 틀리는 지점의 인덱스 값으로 구하기
  }
  if(Sidx !== 0 || Eidx !== 0) answer = Sidx - Eidx + 1;
  else answer = Sidx - Eidx;
  return answer;
};

findUnsortedSubarray([2,6,4,8,10,9,15]);