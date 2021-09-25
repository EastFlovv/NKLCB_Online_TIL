let user = {
  name : 'eastflow',
  age : 27
};

// 전개 연산자를 이용한 복사
// let admin = {...user};

// Object.assign을 통한 복사
// let admin = Object.assign({}, user);

// for문을 이용한 복사
// let admin ={};
// for (let key in user){
//   admin[key] = user[key];
// };

admin.name = 'park';
admin.age= 30;

console.log(user);
console.log(admin);