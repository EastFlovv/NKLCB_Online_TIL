let alpha = ['a', 'b', 'c'];

for (let i = 0; i < alpha.length; i++) {
  console.log(alpha[i]);
}

for(let element of alpha){ // value 반환
  console.log(element);
}

for(let key in alpha){ // key반환
  console.log(alpha[key]); // key로 value반환
}