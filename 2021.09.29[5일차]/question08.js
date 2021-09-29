function answer(a, b, c){
  let lost= 0;
  let arr = [a, b, c];
  arr.sort((x,y)=>x-y);
  // console.log(arr);
  if((arr[1]-arr[0]) == (arr[2]-arr[1])*2){
    lost += arr[0]+(arr[2]-arr[1]);
  }else if((arr[1]-arr[0])*2 == (arr[2]-arr[1])){
    lost += arr[1]+(arr[1]-arr[0]);
  };

  // 강사님 풀이
  // 1. get d -> 등차값 찾기
  // let d = 0;
  // for (let i = 1; i < arr.length; i++) {
  //   d += arr[i]-arr[i-1];
  // };
  // d /= arr.length;
  // 2. 빈 index찾기
  // let index = arr[2]-arr[1]>arr[1]-arr[0]? 2: 1;
  // 3. 이전값 + d
  // lost = num[0]+d*index;

  return lost;
};

let input = [
  [1, 7, 10],
  [3, 8, 18],
  [11, 2, 5]
];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i+1} ${answer(input[i][0], input[i][1], input[i][2])}`);
};