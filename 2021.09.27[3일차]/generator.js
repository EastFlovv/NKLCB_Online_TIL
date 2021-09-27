function FishBread(flavor, price){
  this.flavor = flavor;
  this.price = price;
  this.base = 'flour';
};

let bread_1 = new FishBread('cream', 1200);
let bread_2 = new FishBread('redbean', 800);

console.log(bread_1);
console.log(bread_2);

// new.target

function User(name){
  if(!new.target){ // new를 안붙이면 new를 붙인 자기 자신을 호출하여 undefined 예방
    return new User(name);
  }
  console.log(new.target);
  this.name = name;
};

let user_1 = new User('man'); // [Function: User]
let user_2 = User('man2'); // undefined
console.log(user_1);
console.log(user_2); // undefined