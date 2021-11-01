// forEach
// use for loop
let nums = [1,2,3];
for (let i = 0; i < nums.length; i++) {
  console.log(nums[i]);
};
// use forEach
nums.forEach((el)=>{
  console.log(el);
});

// map()
//use for loop
nums = [1,2,3,4,5];
let use_for_loop=[];
for (let i = 0; i < nums.length; i++) {
  use_for_loop.push(nums[i]*2);
};
console.log(use_for_loop);

// use map()
let use_map = nums.map((el)=>{
  return el*2;
})
console.log(use_map);

// find()
let users = [
  {name: 'kim', age:22, job: false},
  {name: 'lee', age:25, job: false},
  {name: 'park', age:27, job: true},
];

let find_job = users.find((user)=>{
  return user.job == false;
});

console.log(find_job);

let find_age = users.find((user)=>{
  return user.age > 23;
});
console.log(find_age);

// reduce()
let call_count=0;
console.log('result\tvalue\tindex');
// acumulator의 첫값으로 최초 0번인덱스를 넣음
let sum = nums.reduce((accumulator, item, index, array)=>{
  console.log(accumulator,'\t\t', item, '\t\t', index);
  call_count++;
  return accumulator+item;
}, 0); // 콜백뒤에 initial value를 넣어 0번인덱스 부터 시작 할 수 있다.
console.log(call_count);
console.log(sum);