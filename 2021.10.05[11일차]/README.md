# 2021.10.05 [11일차]
오늘은 스택 복습을 위해 백준에서 단계별 문제풀이 스택을 풀었다.  
총 5문제를 도전하였는데 올바르게 완성한줄 알았던 코드가 계속 시간초과나 틀렸다고 나와 상당히 힘들었다.  
더 많은 문제를 살펴보고 싶었는데 문제마다 뭔가 잘 안돼 계속 시도 해보는 와중에 시간이 너무 많이 흐르고 말았다.  
더 많은 문제를 풀고 싶은데 실력이 부족해 아직 효율이 나오지 않고 있다.
디버깅을 통해 값의 변화와 조건에 따른 분기를 모두 살펴보고 있으나 몇몇 문제는 여전히 해결하지 못하고 있다.


## 공부한 내용

- 스택문제 풀이를 도전해보았다.  
- 10828번은 명령어를 받아 스택을 구현하는 문제이다. switch문을 통해 구현하였는데 시간초과가 나왔다.  
제한시간이 0.5초여서 swith문이 문제인가 했으나 인터넷 검색에 따르면 switch문이 속도가 낮은 편이 아니라고 해 상당히 곤란을 겪고있다. (못푼문제 1)
- 10773번은 0이 아닌 수가 들어오면 그 수를 push하고 0이 들어오면 pop한다.  
그 후 스택에 남아있는 수를 모두 더해 출력한다.  
제한시간도 널널하고 상당히 풀기 쉬운 문제였다.
- 9012번은 괄호 검사 문제이다.  
괄호 검사 자체는 별로 어렵지 않았다 주어진 조건문에 따라 열린 괄호는 push 닫힌괄호가 나왔을때 pop한 값과 비교하여 쌍이 아니라면 break하여 틀린 예제임을 알린다.  
물론 모들 과정이 끝난 후 스태이 비어있는지 확인을 통해서도 올바른 괄호인지 검사해야한다.
- 1874번은 너무 복잡하게 풀어서 한참을 헤맨 문제이다.  
스택에 정수를 쌓는 방법을 너무 복잡하게 생각하여 숫자가 정렬된 배열을 생성후 인덱스 값을 따로주어 인덱스 값을 오르내리며 탐색하고 탐색값을 비교하여 스택에 넣는 방식을 썼는데  
분기해야할 조건이 너무 많고 사소한 오류들로 인해 코드가 길어지면서 도저히 손을 댈 수 없는 상태가 됬다.  
결국 모두 지우고 다시 풀어 풀어낼 수 있었다.
- 4949번은 대괄호와 소괄호를 동시에 검사하는 문제이다.  앞선 문제와 다르게 이 문제는 여러 시도를 했음에도 불구하고 아직까지 해결하지 못하고 있는데, 처음에는 시간초과로 인해 문제가 풀리지 않는줄 알았다.  
하지만 split을 통해 문자열을 줄이고 다시 해보니 vsCode에서는 답이 잘 나오는데 제출을 하면 계속 틀렸다고 한다.  
vsCode로 볼떈 정답이 나오니 정확한 원인을 모르고 있어 더욱 답답하다.


## 학습 결과물
학습 결과물은 같이 포함된 파일에 동봉되었으며 각 TIL의 목록별 소제목에 링크가 달려있다.

### 강의 학습 현황

\> 자바스크립트 스택 문제 풀이


## 10828 (시간초과)
```js
const T = input.shift(); // 테스트 케이스
let stack = new Stack(); // 스택 생성
for (let i = 0; i < T; i++) { // 테스트케이스만큼 반복한다
  let data =input[i].split(' ').filter((el)=>el!=''); // 공백으로 문자열을 배열로 저장한 뒤 빈 배열을 삭제한다.
  // console.log(data);
  switch(data[0]){ // 명령어를 switch문에 넣는다
    case 'push': // push명령 수행
      stack.push(data[1]);
      break;
    case 'pop': // pop명령 수행
      console.log(stack.pop(data[1]));
      break;
    case 'size': // size명령 수행
      console.log(stack.size());
      break;
    case 'empty': // empty명령 수행
      console.log(stack.empty());
      break;
    case 'top': // top명령 수행
      console.log(stack.top());
      break;
  }
} // 값은 제대로 나오나 시간초과가 일어남
```

## 10773
```js
const T = input.shift(); // 테스트 케이스
let stack = []; // 스택 선언
let result = 0; // 결과를 저장할 변수

for (let i = 0; i < T; i++) {
  let num = Number(input[i]); // 값을 받는다
  if(num != 0){ // 0이 아니면
    stack.push(num); // push
  }else stack.pop(); // 0이면 pop
};

stack.forEach(el => { // 남은 값을 더한다
  result += el; 
});

console.log(result);  // 출력
```

## 9012

```js
const T = input.shift(); // 테스트 케이스
let arr = []; // 스택 선언
for (let i = 0; i < T; i++) {
  let str = input[i].split(''); // 문자열을 배열로 만듦
  let result = "YES"; // 출력할 상태 초기화
  arr = []; // 스택 초기화
  
  for (let j = 0; j < str.length; j++) {
    mark = str[j]; // 괄호를 받는다
    if(mark == '('){ //열린 괄호면 push
      arr.push(mark);
    }else if(mark == ')'){ // 닫힌괄호
      if(arr[arr.length-1] != "(") { // 열린괄호 없으면 NO
        result = 'NO';
        break;
      }else{ // 아니라면 pop
        arr.pop();
      };
    };
  }

  if(arr.length != 0 && result == 'YES'){ // 빈배열이 아니면 ( 이 남아있으므로 NO
    result = 'NO';
  }

  console.log(result); // 결과 출력
}
```


## 1874
```js
const T = input.shift(); // 테스트 케이스
let count = 0; // 스택에 넣을 정수값
let stack = []; // 스택 선언
let answer = ''; 
for (let i = 0; i < T; i++) {
  let target = Number(input[i]); // target값을 받는다
  if(count < target){ // target이 현재 스택의 최대 숫자보다 크면
    while(target > count){ // 최대 숫자가 타겟과 같아질떄 까지 반복 
      stack.push(++count); // 정수값을 +1한뒤 push
      answer += '+\n'; // answer에 +와 개행을 넣는다
    }
    if(count == target){ // count와 target이 같다면 pop
      stack.pop();
      answer += '-\n'; // answer에 -와 개행 추가
    }
  }else{ // target이 현재 스택의 최대숫자보다 크지 않다면
    if(target == stack[stack.length-1]){ // 타겟이 스택의 peek값과 같다면
      stack.pop(); // pop
      answer += '-\n'; // -해준다
    }else{ // peek값과 타겟이 다르다면 존재할 수 없는 순서
      answer = 'NO'; // answer를 No로 초기화
      break; // 반복문을 탈출한다
    }
  }
}
console.log(answer); // answer를 출력
```

## 4949(틀림)
```js
for (let i = 0; i < input.length; i++) { 
  let stack = []; // 스택 선언
  let result = 'yes'; // 결과 값 초기화
 
  if(input[i] == '.') continue; // .하나만 들어온 경우 입력값이 없으므로 coutinue로 넘긴다
  let str = input[i].split('').filter(el=>{ // 긴 문자열을 괄호만 찾아 배열로 반환
    if(el == '(' || el == ')' || el == '[' || el == ']') return el;
  });
  str.forEach(el => { // 배열 요소를 탐색한다
    if(el == '(' || el == '['){ // 열린 괄호라면 push
      stack.push(el);
    }else if(el == ')'){ // 닫힌 소괄호일때
      if(stack[stack.length-1] == '('){ // peek값이 열린 소괄호면 pop
        stack.pop();
      }else{ // 그렇지 않다면 그냥 닫힌 소괄호를 push해버린다
        stack.push(el);
      }
    }else if(el == ']'){ // 마찬가지로 닫힌 대괄호
      if(stack[stack.length-1] == '['){ // peek값이 열린 대괄호면 pop
        stack.pop();
      }else{
        stack.push(el); // 그렇지 않다면 그냥 push해버린다.
      }
    }
  })

  if(stack.length != 0) result = 'no'; // 올바른 배열이 아닐경우 마구잡이로 push된 스택에 의해 길이가 0이 아니게 되므로 result는 no
  console.log(result); // result를 출력한다
}
// vsCode에서 동작 시켰을때는 정답이 나온다, 하지만 백준에 제출하면 계속 틀렸다고 나온다.
```