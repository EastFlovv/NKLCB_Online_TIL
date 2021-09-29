// for문을 이용한 조합
let input = [1, 2, 3, 4]; // 4C2
let count = 0;

function combination(arr){
  for (let i = 0; i < arr.length; i++) {
    for (let j = i+1; j < arr.length; j++) {
      count++;
      console.log(arr[i], arr[j]);
    }
  }
};

combination(input);
console.log(count);

// 재귀를 이용한 조합
let output = [];
count = 0;
function combination2(arr, data, s, idx, r){
  if(s==r) {
    count++;
    console.log(data);
    return;
  };
  for (let i = idx; arr.length-i >= r-s; i++) {
    data[s] = arr[i];
    combination2(arr, data, s+1, i+1, r);
  }
};

combination2(input, output, 0, 0, 2);
console.log(count);