function answer(s, r, t){
  let index = -1;
  //등차수열
  let num;
  for (let i = 1; ; i++) {
    num = s + r *(i-1);
    // 매칭안됨
    if(num > t) break;
    // 매칭됨
    if(num == t){
      index = i;
      break;
    }
    // console.log(num);
  }

  //if문으로도 해결가능
  // if((t-s)%r == 0)
  // index =(t-s)/r+1;
  // else break;

  return index;
};

let input = [
  [1, 2, 7],
  [2, 3, 10],
  [3, 5, 23]
];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i+1} ${answer(input[i][0], input[i][1], input[i][2])}`);
};