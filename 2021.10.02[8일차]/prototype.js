// 생성자 속성 정의
function Person(name, age){
  this.name = name;
  this.age = age;
};

//prototype을 이용한 Person 메서드 정의
Person.prototype.isAdult = function(){
  return this.age > 18;
};

// 객체 생성
const p1 = new Person('bob', 26);
const p2 = new Person('alice', 16);

console.log(p1);
console.log(p2);
// console.log(Object.getOwnPropertyDescriptors(p1));

console.log(p1.isAdult());
console.log(p2.isAdult());