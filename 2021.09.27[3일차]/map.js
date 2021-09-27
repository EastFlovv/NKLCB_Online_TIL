let map = new Map();

map.set('name', 'eastflow');
map.set(123, 456);
map.set(true, 'bool_type');
console.log(map);

console.log(map.get(123)); // 456
console.log(map.get(true)); // 'bool_type'
console.log(map.get('name')); // 'eastflow'
map.delete(123); // delete 123=>456
console.log(map);

map.clear(); // clear map
console.log(map);
map.set(123, 789).set(false, 'boolean').set('banana', 'aplle'); // 한번에 여러개를 set을 메소드 체이닝 가능, set의 return value가 map이기 때문
console.log(map);

// Map loop
console.log('-------------map loop--------------');
// Map init
let juice = new Map([
  // [key, value],
  ['strawberry', 5000],
  ['banana', 4000],
  ['coffee', 3500],
]);
console.log(juice);

for (let item of juice.keys()){ //keys(), values()
  console.log(item);
};

for(let entity of juice){ // == .entries()
  console.log(entity);
}

// Map <-> Object
console.log('-------------Map <-> Object--------------');
console.log(juice);
let juice_obj = Object.fromEntries(juice);
console.log(juice_obj);
let juice_kv = Object.entries(juice_obj);
console.log(juice_kv);
let juice_map = new Map(juice_kv);
console.log(juice_map);