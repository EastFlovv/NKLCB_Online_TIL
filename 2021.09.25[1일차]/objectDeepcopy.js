let user = {
  name : 'eastflow',
  age : 27,
  sizes: {
    height: 170,
    weight: 50
  }
};
// 얕은 복사는 객체내의 객체가 주소값을 공유한다
// let admin = {...user};
// admin.sizes.height++;
// admin.sizes.weight++;
// console.log(user);
// console.log(admin);

// 객체의 깊은 복사
// 객체의 얕은 복사시 객체내의 객체는 복사될때 값이 아닌 주소값이 복사된다.
// 따라서 얕은 복사로 객체를 복사시 객체내의 객체값을 변경시키면 다른 객체의 값도 같이 변경되게 된다.



// Deepcopy
// 재귀함수를 이용한 깊은 객체복사



// .JSON객체를 이용한 깊은 복사, stringify는 객체를 문자열로 변환하는데 이떄 원본객체와의 참조가 끊긴다.
// 원본 객체 -> string -> 새 객체
let admin = JSON.parse(JSON.stringify(user));
admin.sizes.height++;
admin.sizes.weight++;
console.log(user);
console.log(admin);