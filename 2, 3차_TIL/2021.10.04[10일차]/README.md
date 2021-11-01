# 2021.10.04 [10일차]

스태과 큐에 대해 배웠다.  
스택과 큐는 자바스크립트의 배열을 중심으로 다룰 수 있어 보기보다 익히기는 쉬웠다.  
다만 스택과 큐를 이용한 문제풀이에선 제한된 스텍과 큐의 움직임을 이용해 문제를 풀려고 하다보니 어려움이 많았다.  
내일은 스택과 큐 문제를 풀어보고 과제를 마무리 하여 제출해야겠다.  

## 공부한 내용

- 스택에 대해 배웠다.  
- 스택은 선입후출의 방식을 가진 자료 구조이다.
- 뒤로가기, Ctrl+Z, 괄호검사 등에서 스택 자료구조를 활용한다.
- 스택의 자료구조는 제한적인 움직임을 제외하면 배열로 구현할 수 있어 새롭게 익힐만한 메서드는 딱히 없었다. 예약된 메서드가 아닌 주어진 개념을 배열로 만드는 것이기 떄문이다.
- 자료구조 큐에 대해 배웠다.
- 큐는 스택과 다르게 선입선출 구조를 가진 자료구조이다.
- 큐는 스택과 대부분의 메서드 구조를 공유한다.
- 큐는 스택과 다르게 큐 전체를 지우는 clear()메서드가 존재한다.
- 큐의 삽입/제거문을 최적화 할 경우 시간복잡도가 O(n)에서 O(1)로 줄어든다.


## 학습 결과물
학습 결과물은 같이 포함된 파일에 동봉되었으며 각 TIL의 목록별 소제목에 링크가 달려있다.

### 강의 학습 현황

\> 자바스크립트 자료구조 '32. 스택' ~ 자료구조 '41. 큐 최적화'

## 스택
나중에 넣은 데이터가 먼저 나오는 LIFO(Last In First Out)기반의 선형 자료구조이다.  
- 구현 메서드
  데이터 전체 획득 Stack.getBuffer()  
  비어있는지 확인 Stack.isEmpty()  
  추가 Stack.push()  
  삭제 Stack.pop()  
  마지막데이터 조회 Stack.peek()  
  크기확인 Stack.size()  
  데이터위치 Stack.indexOf()  
  존재여부확인 Stack.includes()  

Ctrl + Z, 웹사이트의 뒤로가기 등이 Stack구조를 사용한다.

## 스택의 구현
스택은 배열의 쌓이는 형태의 배열로 보는것이 좋다.  
실제로 구현시 배열의 형태를 띄고 있다. 배열 자료형과 메서드를 지원하는 자바스크립트에서는 구현하기 쉬운편이다.
### 스택의 선언
```js
function Stack(array){ // 스택은 배열로 선언한다.
  this.array = array ? array : [];
};
```

### 스택의 데이터 셋 반환
```js
Stack.prototype.getBuffer = function(){
  // array.slice()는 매개변수가 없을때 배열 전체를 복사하여 반환한다.
  return this.array.slice();
};
```

### 객체 내 데이터 존재 여부
```js
//isEmpty(): 객체 내 데이터 존재여부
Stack.prototype.isEmpty = function(){
  return this.array.length === 0; // 스택이 비었으면 true를 반환
};
```

### 스택에 값 추가
```js
// 스택이 배열의 형태를 띄고 있으므로 배열의 메서드 사용
Stack.prototype.push = function(element){
  return this.array.push(element); // 매개변수를 push()한다.
};
```

### 스택에 값 삭제
```js
Stack.prototype.pop = function(){
  return this.array.pop(); // pop()을 통해 가장 뒤의 값을 삭제하고 반환한다.
};
```

### 스택의 맨 끝 값 확인
```js
Stack.prototype.peak = function(){
  return this.array[this.array.length-1]; // pop()과는 다르게 배열에서 값을 삭제하지 않는다.
}
```

### 스택의 크기 확인
```js
Stack.prototype.size = function(){
  return this.array.length; // 스택의 크기 = 배열의 길이
}
```

### 스택에서 지정값의 위치찾기
```js
Stack.prototype.indexOf = function(element, position=0){
  for (let i = position; i < this.array.length; i++) { //전체 탐색
    if(this.array[i] == element) // 지정된 값이 있다면
      return i; // 인덱스 반환
  }
  return -1; // 없다면 -1리턴
}
```

### 스택에 해당 요소가 있는지 알아보기
```js
Stack.prototype.includes = function(element){
  for (let i = 0; i < this.array.length; i++) { // 전체 탐색
    if(this.array[i] == element) // 지정된 요소가 있으면
      return true; // true를 반환
  }
  return false; // 조건에 맞는게 없다면 return false
}
```

## 스택 문제풀이

### 기차운행
기차가 지정된 순서로 나갈 수 있다면 true, 그렇지 않다면 false를 반환하는 문제이다.
```js
function answer(train){ // 기차가 나가길 원하는 순서
  let stack = []; // 스택 선언
  let num = 0;
  
  for (let i = 0; i < train.length; i++) { // 입력받은 기차순서의 배열만큼 반복
    while(stack.isEmpty() || stack.peak() < train[i]){ // 스택이 비었거나 제일 위의 값이 train배열의 i인덱스 값과 같다면
      stack.push(++num); // num+1을 한뒤 스택에 값을 추가
    }
    
    if(stack[stack.length-1] === train[i]){ // 스택의 마지막 인덱스의 값이 train의 i인덱스와 값이 같다면
      stack.pop(); // 스택에서 값을 추출
    }else{
      return false; //위의 조건이 만족되지 않으면 불가능한 순서이다. false
    }

  }
  return true; // 무사히 반복문을 수행했다면 true반환
}
```

### 괄호법
괄호가 제대로 되어있는지 확인하는것이야 말로 스택이 사용되는 대표적인 예이다.  
괄호가 제대로 되어 있지 않은 경우 빈 배열을 제대로 되어있다면 짝지어진 괄호의 인덱스를 묶어서 출력
```js
function answer(str){
  let result = []; // 결과를 반환할 배열 선언
  
  let stack =[]; // 스택선언
  for (let i = 0; i < str.length; i++) { // 문자열 전체 탐색
    if(str[i] == '('){ // 열린 괄호를 만났다면
      stack.push(i); // 스택에 인덱스를 push()
    }else if(str[i] == ')'){ // 닫는 괄호를 만났다면
      if(stack.isEmpty()) return []; // 스택이 비어있으면 잘못된 괄호, 빈배열 반환
      result.push([stack.pop(), i]); // 비어있지않다면 스택에서 pop한 열린괄호의 인덱스와 현재(닫는괄호)인덱스를 배열로 result에 더한다
    }
  }
  // 문자열 전체 탐색 종료
  if(!stack.isEmpty()) return []; // 스택이 비어있지 않다면 (열린 괄호 남음) 빈배열 반환
  return result; // 이상이 없다면 result를 반환한다.
}
```

### 접시 꺼내기
순서대로 들어가는 접시를 주어진 순서대로 꺼낼수 있다면 push를 0으로 pop을 1로 변환하여 배열로 출력, 불가능하다면 빈배열을 반환해야한다.
```js
function answer(str){ 
  let result = []; // 결과를 저장할 배열
  let stack = []; // 스택선언
  let dish = str.split("").sort().join(''); // 순서대로 들어갈 접시를 정렬하여 문자열로 다시 변환
  let dish_index = 0;

  for (let i = 0; i < str.length; i++) { // 입력받은 문자열 전체탐색
    while(stack.isEmpty() || stack.peak() < str[i]){ // 스택이 비었거나 최상단의 값이 str의 i인덱스 값보다 작을때 까지 반복
      stack.push(dish[dish_index++]); // 스택에 정렬한 dish문자열의 dish_index값을 넣고 dish_index를 +1
      result.push(0); // result에 0을 넣는다 (push가 일어남)
    }

    if(stack.isEmpty() || stack.peak() > str[i]){ // 스택이 비었거나 최상단의 값이 str의 i인덱스 값보다 크다면
      return []; // 일어날 수 없는 순서 빈배열 반환
    }else{ // 그렇지 않다면 
      stack.pop(); // 스택을 pop한다
      result.push(1); // 결과에 1을 저장 (pop일어남)
    }
  }
  return result; // 결과 배열을 반환한다.
}
```

### 기린의 시야
모든 기린이 볼 수 있는 다른 기린의 수를 출력한다.
```js
function answer(giraffe){
  let result = 0;
  let stack = []; // 스택선언

  giraffe.push(Number.MAX_SAFE_INTEGER); // 입력받은 배열에 최고 정수를 넣어 종료조건으로 만듦

  for (let i = 0; i < giraffe.length; i++) { // 모든 기린의 수만큼 반복
    while(!stack.isEmpty() && stack.peak()['h'] < giraffe[i]){ // 스택이 비어있지 않고 스택의 최상단의 객체의 기린키 h가 기린의 키인 giraffe[i]보다 작다면
      //높이계산
      result += i - stack.pop()['i']-1; // 결과에 현재 인덱스에서 스택의 객체 인덱스에서 1을 뺸 값을 더한다.
    }
    stack.push({h: giraffe[i], i: i}); // 위의 조건을 만족하지 않는다면 기린의 키와 인덱스를 스택에 추가
  }
  return result; // 결과를 반환한다.
}
```

### 괄호 짝짓기
주어진 괄호에 따라 수식을 계산한다. 괄호 셋이 올바르지 않다면 0을 반환
```js
function answer(str){
  let result =0; // result는 결과값
  // '(' *2, '[' *3, ')' /2, '] /3'
  // '()', '[]' 두값을 더함
  let stack = []; // 스택선언
  let temp = 1; // 곱할 값
  for (let i = 0; i < str.length; i++) { // 문자열 전체탐색
    let mark = str[i]; // 추출한 괄호를 mark에 답는다
    switch(mark){ // switch를 통해 분기함
      case "(": // 열린괄호일경우
        temp *= 2; // temp에 2를 곱한다
        stack.push(mark); // 스택에 push
        break;
      case "[": // 열린 대괄호일경우
        temp *= 3; // temp에 3을 곱한다.
        stack.push(mark); // 스택에 push
        break;
      case ")": // 닫힌 괄호
        if(stack.isEmpty() || stack.peak() != '('){ // 배열이 비었거나 스택 최상단의 괄호가 열린 괄호가 아니라면
          return 0; // 올바른 괄호셋이 아님, 0 반환
        }
        
        if(str[i-1] == '('){ // 만약 열리자 마자 닫힌것이라면
          result += temp; // temp를 result에 더한다.
        }
        stack.pop(); // 스택은 pop
        temp /= 2; // temp를 2로 나눈다
        break;
      case "]": // 닫힌 대괄호
        if(stack.isEmpty() || stack.peak() != '['){// 배열이 비었거나 스택 최상단의 괄호가 열린 대괄호가 아니라면
          return 0; // 올바른 괄호셋이 아님, 0 반환
        }
        
        if(str[i-1] == '['){ // 만약 열리자 마자 닫힌것이라면
          result += temp; // temp를 result에 더한다.
        }
        stack.pop(); // 스택은 pop
        temp /= 3; // temp를 2로 나눈다
        break;
    }
  }// 반복문 종료

  if(!stack.isEmpty()) return 0; // 만약 일련의 과정이 끝난 뒤 배열에 값이 남았다면 올바른 괄호셋이 아니다. 0 반환

  return result; // 결과를 반환
}
```

## 큐
먼저 넣은 데이터가 먼저 나오는 FIFO(First In First Out)기반의 선형 자료구조이다.  
- 구현 메서드
데이터 전체 획득 Queue.getBuffer()  
비어있는지 확인 Queue.isEmpty()  
데이터 추가 Queue.enqueue()  
데이터 삭제 Queue.dequeue()  
첫번째 데이터 Queue.front()  
데이터 사이즈 Queue.size()  
데이터 전체 삭제 Queue.clear()  

## 큐 구현

### 큐 선언
```js
function Queue(array){
  this.array = array?array:[]; // 큐 또한 스택 처럼 배열구조를 가진다.
};
```

### 큐의 데이터 셋 반환
```js
Queue.prototype.getBuffer = function(){
  // 스택과 동일하게 데이터 셋을 얻을 수 있다.
  return this.array.slice();
};
```

### 큐가 비었는지 확인
```js
Queue.prototype.isEmpty = function(){
  return this.array.length === 0;  // 스택과 동일한 코드를 사용한다.
};
```

### 큐 삽입
```js
Queue.prototype.enqueue = function(element){
  return this.array.push(element); // 요소의 추가는 스택과 같다 push()사용
}
```

### 큐 삭제
```js
Queue.prototype.dequeue = function(){
  return this.array.shift(); // 배열요소의 앞쪽 인덱스 값을 삭제하는 shift연산을 사용해 삭제하고 값을 반환한다.
}
```

### 큐의 맨 앞 요소 확인
```js
Queue.prototype.front = function(){ // 스택의 peak과 같다.
  return this.array.length === 0?undefined:this.array[0]; // 길이가 0이라면 undefined, 그렇지 않다면 배열의 0번 인덱스 값을 반환한다.
}
```

### 큐의 크기 확인
```js
Queue.prototype.size = function(){
  return this.array.length; // 배열의 길이가 큐의 크기이다.
}
```

### 큐 초기화
```js
Queue.prototype.clear = function(){
  this.array = []; // 배열을 빈배열로 재선언하여 큐를 초기화 시킨다.
}
```

## 큐 최적화
방식 개선: enqueue / dequeue방식을 push / shift에서 index로 변경 (shift는 O(n), index는 O(1))  
shift는 내부적으로 전체배열을 탐색하기때문에 시간이 오래걸린다.
10만개의 큐를 삽입/삭제 했을때 시간차이 크게 발생한다.

### 큐 선언 최적화
```js
function Queue(array){ // 마치 이중 연결리스트 처럼 tail과 head를 선언
  this.array = array?array:[];
  this.tail = array ? array.length:0;
  this.head = 0;
};
```

### 큐 삽입 최적화
```js
Queue.prototype.enqueue = function(element){
  return (this.array[this.tail++] = element); // 배열의 끝에 tail을 넣고 값을 추가 그 후 tail은 +1
};
```

### 큐 삭제 최적화
```js
Queue.prototype.dequeue = function(){
  if(this.tail === this.head) return undefined; // 빈 배열이면 undefined
  let element = this.array[this.head]; // 요소는 배열의 0번 인덱스 값
  delete this.array[this.head++]; // 예약어 delete를 통해 값을 삭제하고  head를 +1한다
  return element; // 요소 값을 반환
}
```