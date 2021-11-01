let arr = [
  [101,102,103],
  [201,202,203],
  [301,302,303]
];

console.log(arr);
console.log(arr[0]);
console.log(arr[0][0]);

let arr2 = arr.pop();
console.log(arr.length);
console.log(arr2);
console.log(arr);

let arr3 = arr.push([401,402,403]); // return value는 array의 길이
console.log(arr.length); // 3
console.log(arr3); // 3
console.log(arr);

// 2차원 배열 반복
console.log('-----loop');
for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    console.log(arr[i][j]);
  };
};

let fruits = [
  ['banana', 50],
  ['apple', 150],
  ['cherry', 30]
];

for (let i = 0; i < fruits.length; i++) {
  console.log(`fruits: ${fruits[i][0]}, amount: ${fruits[i][1]}`);
};