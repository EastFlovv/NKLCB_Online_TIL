// break
let text = '';
for(let i = 0; i < 10; i++){
  // i가 3이되면 반복문 탈출
  if(i===3) break;
  text+=i;
}
console.log(text);

// continue
text = '';
for (let i = 0; i < 10; i++) {
  // i가 짝수면 코드를 진행하지 않고 조건문으로 돌아감
  if(i%2 == 0) continue;
  text += i;
}
console.log(text);

// Label
end: for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    console.log(i, j, i*j);
    break end;
  }  
}