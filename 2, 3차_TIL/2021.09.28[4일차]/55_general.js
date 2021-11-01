function answer(user){
  let permit;

  permit = user.height >= 150; // 리턴값이 true, false

  // if(user.height < 150)
  //   permit = false;
  // else
  //   permit = true;

  return permit;
};

input = [
  {name: 'john', age: 27, height: 181},
  {name: 'alice', age: 12, height: 148},
  {name: 'bob', age: 24, height: 156}
];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i+1} ${answer(input[i])}`);
};