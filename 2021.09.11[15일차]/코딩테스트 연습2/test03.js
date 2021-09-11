const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let num;

rl.on('line', line=>{

  num = Number(line);

  rl.close();
}).on('close',()=>{
  

  let newNum = 0;
  // 입력깂이 절대값 100,000이 넘으면 0출력
  if(Math.abs(num) > 100000 ){
    console.log(0);
  } else {
    // num이 0보다 작아질때 까지 진행
    while(Math.abs(num) > 0){
      // 새 숫자는 newNum*10 + num을 10으로 나눈 나머지
      newNum = (newNum*10) + (num%10);
      // num을 10으로 나누고 소수점을 버린다
      // num이 음수면 Math.floor에 의해 -1되므로 +1
      if(num < 0){
        num = Math.floor(num/10)+1;
      }else{
        num = Math.floor(num/10);
      }
    }
  }
  // 출력
  console.log(newNum);
  process.exit();
})