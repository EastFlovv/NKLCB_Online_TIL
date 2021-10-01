# 2021.10.01 [7일차]

오늘은 어제 마무리하지 못한 배열 문제풀이와 백준의 수학문제를 풀어 복습을 진행했다.  
프로그래머스에서 문제를 풀고 싶었는데 주제별 찾기가 없는것 같아 백준으로 복습했다.  
오늘 푼 문제는 대개 강사님과 나의 풀이가 같아 내가 잘 풀고있다는것을 알아 좋았다.  
문제는 배열 마지막 문제였는데 머리속으론 어떻게 해야할지 알고 있으나 막상 코드로 옮겨 만들려고 하니 맘처럼 되지 않아 꽤나 힘든 시간을 보냈다.  
결국 강사님의 코드를 보고 따라하여 문제를 풀었지만 스스로 풀지 못했다는것이 너무 아쉽다.  
그후로 백준 문제를 풀었는데 백준문제는 보기보다 문제를 푸는데 소요되는 시간측정에도 신경을 써야하는 문제가 종종나와 최적화에 중점을 두면서 풀었다.  
실제로 몇문제는 시간초과가 나와 다시풀어야만 했다.  

문제풀이에 시간이 생각보다 오래걸려 작성한 내용이 많이 부실하게 느껴진다.  
어떻게 해야 이러한 코딩테스트 문제를 빠르고 쉽게 풀 수 있을지 고민해봐야 할것같다.

## 공부한 내용
- 시간복잡도를 줄이기 위해 이중 for문처럼 보이는 문제도 일반 for문으로 고칠수 있다면 고쳐야한다.
- `fill()`함수를 통한 이중 for문을 만들땐 두 새 `Array()`사이에 `.map()`함수를 통해 만들어야한다.
- % 와 / 연산을 통해 수의 각 자리수를 구할수 있다.
- 재귀 함수를 사용하여 반복적인 규칙을 가진 문제를 해결 할 수 있다. (백준 2775)
- BigInt를 사용해 큰 수를 처리 할 수 있다. 이때 `toString()`을 하게되면 뒤에 붙은 n이 사라진다.

## 학습 결과물
학습 결과물은 같이 포함된 파일에 동봉되었으며 각 TIL의 목록별 소제목에 링크가 달려있다.

### 강의 학습 현황

\> 자바스크립트 자료구조 '8.Two Sum' ~ 자료구조 '12. 달팽이 만들기' + 백준 문제풀이


## 강좌를 통한 배열 문제풀이

[Two Sum](./question8.js)  
[OX 퀴즈](./question9.js)  
[벽돌 올기기](./question10.js)  
[숫자 빈도수 구하기](./question11.js)  
[달팽이 만들기](./question12.js)  



## 백준 문제풀이

### 1193
각 분수의 모와 자의 합은 대각선을 기준으로 같다.  
그리고 짝수번째, 홀수번째 대각선인지에 따라 분자가 큰수에서 시작할지, 분모가 큰수에서 시작할지 결정한다.  
이러한 특징을 잡아내 다음과 같은 코드로 풀어냈다.
```js
const fs = require('fs');
const input = fs.readFileSync('./data.txt').toString();
// const input = fs.readFileSync('/dev/stdin').toString();

let num = Number(input);
let count = 0;
let total = 0;
while(true){
  count++;
  if(num - count > 0)
    num -= count;
  else{
    total = count+1;
    break;
  }
};
// console.log(count, num);
// 짝수인가? 참 : 거짓
count%2 == 0? 
  console.log(`${num}/${total-num}`): 
  console.log(`${total-num}/${num}`);
```

### 1712
일단 판매대금이 고정 생산 비용보다 작거나 같으면 흑자전환을 할 수 없으므로 무조건 -1을 리턴한다.  
하지만 그렇지 않다면 판매대금-생산비용의 값을 고정설비비용으로 나누어 몫만든다.  
그렇게 만든 몫에서 1대를 더 팔면 그떄부터 흑자전환이므로 +1을 하여 값을 출력한다.
```js
const fs = require('fs');
const input = fs.readFileSync('./data.txt').toString().split(' ');
// const input = fs.readFileSync('/dev/stdin').toString().split('\n');

// console.log(input)

// 받은 수를 Number로 변환
let data = input.map((e)=>{
  return Number(e);
});
// console.log(data)
// 손해밖에 못보면 count = -1

let BEP = data[0]/(data[2]-data[1]);

data[1]>=data[2]?
  console.log(-1):
  console.log(parseInt(BEP) + 1);
```

### 2292
벌집의 수는 중앙에서 멀어질수록 등차수열의 만큼의 테두리를 갖는다.  
이러한 특성을 이용해 목표지점의 수에서 1을 빼고 6으로 나눈 수를 등차수열로 쫒아가 나눈 수가 이동한 수를 넘기면 출발지점인 1의 발판값인 1을 더해서 값을 출력한다.
```js
const fs = require('fs');
const input = fs.readFileSync('./data.txt').toString();
// const input = fs.readFileSync('/dev/stdin').toString();

let num = Number(input);
let count = 0;
num = (num-1)/6;
// 이동한 횟수를 구한다
while(num > 0){
  count++;
  num -= count;
};
// 시작 칸 1을 더해서 출력
console.log(count+1);
```


### 2775
한 집에 사람이 살기 위해선 자신의 아래층의 1호수부터 자신의 호수까지의 사람수만큼 입주해야 한다.  
이말인 즉 자신의 같은층의 앞호수 + 자신의 바로 아래층 같은 호수의 값이 자신의 값이 된다.  
이러한 특징은 모든 층이 가지고 있으므로 재귀함수를 이용하여 값을 찾아낸다.
```js
const fs = require('fs');
const input = fs.readFileSync('./data.txt').toString().split('\n');
// const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const T = Number(input.shift());
// console.log(T);

function peoples(l, r){
  if(l == 0 || r == 1)
    return r;
  else
    return peoples(l-1, r)+ peoples(l, r-1);
};

for (let i = 0; i < T; i++) {
  let level = Number(input.shift());
  let room = Number(input.shift());
  console.log(peoples(level, room));
}
```


### 2839
5로 보다 작고 3으로 나눌수 없는 수의 경우 바로 -1을 출력한다.  
그 외의 경우 5kg포대의 수를 줄여가며 3kg으로 값을 나누어 보며 무한 루프한다.  
5키로 포대를 줄여가며 3키로 포대로 모든 설탕을 포장했다면 5키로와 3키로 포대의 수를 더해 출력하고 그렇지 않아 5키로 포대의 수가 -1로 갈 경우 -1을 출력하고 break하여 반복문을 탈출한다.
```js
const fs = require('fs');
const input = fs.readFileSync('./data.txt').toString();
// const input = fs.readFileSync('/dev/stdin').toString().split('\n');
let kg = Number(input);
// console.log(kg);

let five = parseInt(kg/5);
let last = kg%5;

if(last%3 == 0){
  console.log(five + last/3);
}else if(five == 0){
  console.log(-1);
}else{
  while(true){
    five--;
    last +=5;
    if(five == -1){
      console.log(-1);
      break;
    }else if(last % 3 == 0){
      console.log(five + last/3);
      break;
    }

  }
}

```


### 2869
달팽이는 마지막 순간에 정상에 닿으면 더이상 떨어지지 않으므로 목표높이-잠자기전 이동거리를 하여 남은거리를 측정한다.  
이렇게 측정된 높이를 잠자며 올라가는 거리로 나누어 나오는 값을 올림처리하여 반환한뒤, 이 값에 마지막 낮의 날짜인 1을 더해 출력한다.
```js
const fs = require('fs');
const input = fs.readFileSync('./data.txt').toString().split(' ');
// const input = fs.readFileSync('/dev/stdin').toString().split('\n');

let data = input.map(x=>Number(x));
let day = 1;
// data[0] // 올라가는 높이
// data[1] // 떨어지는 높이
// data[2] // 막대의 높이
day += Math.ceil((data[2]- data[0]) / (data[0]-data[1]));
console.log(day);
```

### 10250
이 문제는 모든 고객이 높이를 먼저 우선한 뒤 넓이를 차지하므로 높이를 이용하여 층수와 호수를 찾아낸다.  
높이값은 고객번호를 층값으로 나눈 나머지로 구하고, 나눈 몫을 올림하여 고객의 호수를 찾아낸다.  
단 호수와 층수가 String형태로 붙어야 하므로 출력시 빈 문자열을 앞에 붙여 출력해야 한다.
```js
const fs = require('fs');
const input = fs.readFileSync('./data.txt').toString().split('\n');
// const input = fs.readFileSync('/dev/stdin').toString().split('\n');

let T = Number(input.shift());
label = 0;
// console.log(T);
for (let i = 0; i < T; i++) {
  let data = input[i].split(' ');
  data = data.map(x => Number(x));
  // console.log(data);

  let client = data[2];
  let height = data[0];
  let Y = client%height? client%height : height;
  let X = Math.ceil(client/height);
  if(X < 10) X = '0'+X;
  console.log(''+Y+X);
}
```

### 10757
값이 매우 크므로 BigInt를 사용해 값을 구한뒤 toString()하여 문자열로 바꾸면 BigInt의 n이 사라져 출력된다.
```js
const fs = require('fs');
const input = fs.readFileSync('./data.txt').toString().split(' ');
// const input = fs.readFileSync('/dev/stdin').toString().split('\n');

// console.log(BigInt(input[0]));
// console.log(BigInt(input[1]));
let num = (BigInt(input[0])+BigInt(input[1])).toString();
console.log(num);
```
