let set = new Set();
let set2 = new Set([1,2,3,4,5,6,7,8,8,8]);
let set3 = new Set('hello');
console.log(set2); // 1,2,3,4,5,6,7,8
console.log(set3); // h,e,l,o

set.add(10).add(20).add(10).add(30); // 메소드 체이닝
console.log(set);

console.log(set.has(10)); // true
console.log(set.has(2)); // false

set.delete(10); // delete 10
set.delete(-1); // return false, not error
console.log(set); // 20, 30

// Set loop
console.log('----------Set loop----------');
console.log(set3);
for(item of set3){
  console.log(item);
};

for(item of set3.keys()){ // set은 key가 없어 value를 반환
  console.log(item);
};

for(item of set3.entries()){ // key = value
  console.log(item);
};