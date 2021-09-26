// question 01
// 반복문 for를 이용하여 0부터 10까지의 정수 중 짝수의 합을 구한뒤 출력하는 코드를 작성하시오
const UNTIL_NUM = 10;
let sum = 0;

for (let i = 0; i <= UNTIL_NUM; i++) {
  // i를 2로 나눈 나머지가 0이면 더한다.
  if(i%2 == 0){
    sum+= i;
  }
}
console.log(`1번문제의 답 : ${sum}`);

// question 02
// 반복문 for 2개를 이용하여 2~9단까지 출력해주는 코드를 작성하시오
console.log('2번문제의 답 :');
for (let i = 2; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    console.log(`${i} x ${j} = ${i*j}`);
  }
}