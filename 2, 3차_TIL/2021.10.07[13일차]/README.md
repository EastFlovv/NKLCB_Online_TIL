# 2021.10.07 [13일차]

오늘은 비선형 자료구조 공부를 시작했다.  
오랫만에 복습이 아닌 진도를 나가니 큐에 대한 이해가 떨어져 뒤로 돌아가 강의를 다시 봐야했다.  
우선 순위 큐는 큐의 값이 객체형태로 되어있고 이 객체 안에 우선순위를 뜻하는 값이 있어 이 값에 따라 내용을 배치하는 형태의 큐이다.  
원형 큐의 경우 배열이 시작과 끝이 정해져있지않고 (개념적으로, 물리적으론 정해져있다), head와 tail이라는 두 플래그를 사용해 순환하도록 하는 형태이다.  
데크는 배열의 앞, 뒤 모두 입출력이 가능한 형태의 자료구조인데 사실상 자바스크립트에서 사용하는 배열이 데크의 형태를 띄고 있는것 같다.  

## 공부한 내용

- 우선순위 큐는 우선순위를 가진 객체를 값으로 쓰는 큐이다. 우선순위에 따라 추가되는 값의 위치가 바뀐다.
- 우선순위 큐의 데이터 추가시 splice함수를 통해 두 객체 사이에 새로운 객체를 추가한다.
- 원형 큐의 경우 개념적을 순환하는 형태의 큐를 의미한다.
- 실제 원형큐는 메모리 상으론 원형이 아니다.  
- 원형큐를 사용하기 위해선 head와 tail 두개의 플래그를 사용하며 원형큐의 size를 통한 나머지 연산으로 head와 tail이 증가해도 전체 크기를 넘어가지 않게 한다.
- 데크는 배열의 입출력을 앞, 뒤 양쪽으로 할 수 있는 자료구조이다.
- 자바스크립트의 배열이 데크의 모양을 띄고있다. 구현하기는 매우 쉬운편이다.

## 학습 결과물
학습 결과물은 같이 포함된 파일에 동봉되었으며 각 TIL의 목록별 소제목에 링크가 달려있다.

### 강의 학습 현황

\> 자바스크립트 비선형 자료구조 '1. 우선순위 큐' ~ '14. 큐, 데크의 문제풀이 - 카드 뽑기' 

## 우선순위 큐 (Priority Queue)
우선순위를 고려하여 먼저나온 데이터가 먼저 나오는 FIFO(First In First Out) 기반의 선형 자료구조이다.  
우선순위 정렬방식은 배열 기반, 연결리스트 기반, 힙(Heap )기반 등의 정렬 방식이 존재한다.  
- 구현메서드  
데이터 전체 획득: PriorityQueue.getBuffer()  
데이터가 비어있는지 확인: PriorityQueue.isEmpty()  
데이터 추가: PriorityQueue.enqueue()  
데이터 삭제: PriorityQueue.dequeue()  
첫번쨰 데이터 확인:  PriorityQueue.front()  
데이터 사이즈 확인: PriorityQueue.size()  
데이터 전체삭제: PriorityQueue.clear()  


## 우선순위 큐의 구현

### 우선순위 큐의 노드
```js
// 데이터와 우선순위를 저장하기 위한 생성자 함수
function Element(data, priority){ // 매개변수는 데이터와 우선순위
  this.data = data; // 초기화 한다
  this.priority = priority; // 초기화한다
};
```

### 우선순위 큐 선언
```js
function PriorityQueue() {
  this.array = []; // 우선순위 큐는 배열이다
};
```

### 객체내의 데이터 셋 반환
```js
PriorityQueue.prototype.getBuffer = function () { 
  return this.array.map(el=>el.data); // 요소의 data값만 추출하여 새로운 배열을 전달한다.
};
```

## 데이터 추가
```js
PriorityQueue.prototype.enqueue = function(data, priority){ // 데이터와 우선순위를 받는다
  let element = new Element(data, priority);  // 객체화
  let added = false; // 더해졌는지 여부

  for (let i = 0; i < this.array.length; i++) {
    if(element.priority < this.array[i].priority){ // 현재 객체의 우선순위가 비교객체보다 높다면 (값이 낮다면)
      this.array.splice(i, 0, element); // 비교객체의 앞에 추가
      added = true; // 더했다고 선언
      break; // 반복중단
    }
  }
  if(!added){ // 만약 아직 더하지 않았다면
    this.array.push(element); // 맨끝에 값을 추가
  }

  return this.array.length; // 전체 길이를 반환
};
```

### 데이터 삭제
```js
PriorityQueue.prototype.dequeue = function(){
  return this.array.shift(); // shift() 연산으로 삭제하며 값을 반환
};
```

### 첫데이터 반환
```js
PriorityQueue.prototype.front = function(){
  // 길이가 0이면 undefined, 그렇지 않으면 0번 배열 객체의 data값 반환
  return this.array.length == 0 ? undefined : this.array[0].data; 
};
```

### 데이터 갯수 반환
```js
PriorityQueue.prototype.size = function(){
  return this.array.length; // 배열의 갯수 반환
};
```

### 큐 초기화
```js
PriorityQueue.prototype.clear = function(){
  this.array = []; // 배열을 새로 초기화
}
```

## 원형 큐 (Circular Queue)
원형 형태를 가지며, 먼저 넣은 데이터가 먼저 나오는 FIFO 기반의 선형 자료구조이다. 
head와 tail을 이용하여 현재 머릿값과 꼬리값을 알아내 두 값이 빙빙 돌며 자료를 추가한다.
- 구현 메서드  
데이터 꽉 찼는지 확인: Circular.isFull()  
데이터가 비어있는지 확인: Circular.isEmpty()  
데이터 추가: CircularQueue.enqueue()  
데이터 삭제: CircularQueue.dequeue()  
데이터 반환: CircularQueue.getBuffer()  
첫번쨰 데이터 반환: CircularQueue.front()  
큐의 사이즈 반환: CircularQueue.size()  
큐 전체삭제: CircularQueue.clear()  

## 원형 큐의 구현

### 원형 큐 노드
```js
function CircularQueue(array = [], size = DEFAULT_SIZE){ // 배열과 전체 길이가 매개변수
  this.array = array; // 배열 초기화
  this.size = array.length > size ? array.length : size; // 전체길이가 배열보다 길면 배열 길이로 초기화, 그렇지 않으면 전체길이인 size를 길이로 초기화
  this.length = array.length; // length는 배열의 길이
  this.head = 0; // head는 0
  this.tail = array.length; // taile은 배열의 길이
};
```

### 객체 내 데이터 셋 반환
```js
CircularQueue.prototype.getBuffer = function(){
  return this.array.slice(); // 배열을 통채로 복사해서 반환
};
```

### 데이터가 가득 찼는지 확인
```js
CircularQueue.prototype.isFull = function(){
  return this.length == this.size; // 데이터의 길이가 size와 같다면 가득찬것
};
```

### 데이터 추가
```js
CircularQueue.prototype.enqueue = function(element){
  if(this.isFull()) return false; // 큐가 가득 찼으면 false

  this.array[this.tail%this.size] = element; // array의 tail을 size로 나눈 나머지(끝)에 값을 추가
  // this.tail++;
  this.tail = (this.tail +1)  % this.size; // tail을 1증가, 전체 size로 나머지 연산하여 tail이 최대길이로 안나가게함
  this.length++; // 전체길이 증가
  return true; // true반환
};
```

### 데이터 삭제
```js
CircularQueue.prototype.dequeue = function(){
  if(this.isEmpty()) return undefined; // 큐가 비었으면 undefined반환

  let element = this.array[this.head % this.size]; // 요소는 맨 앞 값
  delete this.array[this.head % this.size]; // 맨 앞 값을 지운다
  // this.head++;
  this.head = (this.head +1)  % this.size; // 헤드값을 1증가
  this.length--; // 전체길이 -1

  return element; // 삭제한 요소를 반환
};
```

### 첫데이터 보기
```js
CircularQueue.prototype.front = function(){
  // 길이가 0이면 undefined, 그렇지 않다면 배열[head]값을 꺼내온다
  return this.length == 0? undefined : this.array[this.head]; 
};
```

### 큐 초기화
```js
CircularQueue.prototype.clear = function(size = DEFAULT_SIZE){ // 모든 값을 초기화 한다.
  this.array = [];
  this.size = size;
  this.length = 0;
  this.head = 0;
  this.tail = 0;
};
```
## 데크 (Deque)
Double-Ended Queue의 약자로, 삽입과 삭제가 양쪽 끝에서 모두 발생할 수 있는 선형 자료 구조이다.  
자바스크립트가 가진 배열이 큐의 형태를 가지고 있는것 같다.  
- 구현 메서드  
데이터 전체 획득: Deque.getBuffer()  
데이터 비어있는지 확인: Deque.isEmpty()  
데이터 추가: Deque.pushFront(), Deque.pushBack()  
데이터 삭제: Deque.popFront(), Deque.popBack()  
첫번째 데이터 반환: Deque.front()  
끝 데이터 반환: Deque.back()  
데크의 사이즈: Deque.size()  
데크 전체삭제: Deque.clear()  

## 데크의 구현

### 데크 선언
```js
function Deque(array = []){
  this.array = array; // 배열로 선언한다
};
```

### 데크의 데이터 반환
```js
Deque.prototype.getBuffer = function(){
  return this.array.slice(); // 전체를 잘라서 반환
};
```

### 데크의 데이터 추가
```js
// 앞쪽 데이터 추가 unshift()
Deque.prototype.pushFront = function(element){
  return this.array.unshift(element);
};
// 뒤쪽 데이터 추가 push()
Deque.prototype.pushBack = function(element){
  return this.array.push(element);
};
```

### 데크의 데이터 삭제
```js
// 앞쪽 데이터 제거 shift()
Deque.prototype.popFront = function(){
  return this.array.shift();
};
// 뒤쪽 데이터 제거 pop()
Deque.prototype.popBack = function(){
  return this.array.pop();
};
```

### 데크의 데이터 확인
```js
// 가장 첫 데이터 반환
Deque.prototype.front = function(){
  return this.array.length === 0 ? false:this.array[0]; // 비었으면 false
};

// 가장 끝 데이터 반환
Deque.prototype.back = function(){
  return this.array.length === 0 ? false: this.array[this.array.length-1]; // 비었으면 false
};
```

## 큐 문제풀이

### 큐만들기
강사님의 큐를 만들기 위한 여러 생성자와 메서드를 일일히 구현했다.  
하지만 나는 그 큐에 들어가는 연산을 통채로 함수 안에 구현했다.
```js
//나의 코드
function answer(cmds){
  let queue = [];
  let answer = [];
  for (let i = 0; i < cmds.length; i++) {
    let order = cmds[i].split(' '); // 커멘드를 잘라 order에 배열로 저장
    switch(order[0]){ // order[0]은 명령어
      case 'enqueue':
        queue.push(Number(order[1])); //order[1]를 수로 변환하여 answer에 push
        break;
      case 'dequeue': // dequeue는 shift연산이다. answer에 push
        queue.length == 0 ? answer.push(-1) : answer.push(queue.shift()); 
        break;
      case 'empty': // 비었다면 1 아니라면 0, answer에 push
        queue.length == 0 ? answer.push(1) : answer.push(0);
        break;
      case 'front': // queue의 0번 인덱스값 answer에 push
        queue.length == 0 ? answer.push(-1) : answer.push(queue[0]);
        break;
      case 'back': // queue의 맨 끝값 answer에 push
        queue.length == 0 ? answer.push(-1) : answer.push(queue[queue.length-1]);
        break;
      case 'size': // 큐의 길이 answer에 push
        answer.push(queue.length);
        break;
    }
  }
  return answer; // 반복문을 통해 배열이 된 결과 값을 반환
}
```

### 카드 뽑기
문제가 이해가 안됬었는데 막상 이해하고 보니 별로 어려운 문제가 아니였다.  
```js
// 주석처리 된것은 나의 코드
function answer(num){
  let answer = [];
  let cards = new Queue(); // 카드는 새로운 큐 (배열형태로 초기화 되어있음)
  // let cards = new Array(7);
  for (let i = 0; i < num; i++) {
    cards.enqueue(i+1); // enqueue하여 배열에 값 추가하여 초기화
    // cards.push(i+1);
  }
  
  while(true){ // 무한루프
    answer.push(cards.dequeue()); // answer에 맨 앞 값 추가
    if(cards.array.length != 0){ // 큐의 길이가 0이 아니면 아래를 진행
      cards.enqueue(cards.dequeue()); // 맨 앞값을 맨 뒤로 보냄
    }else break; // 큐의 길이가 0이면 break
  };

  // while(true){
  //   answer.push(cards.shift());
  //   if(cards.length != 0){
  //     temp = cards[0];
  //     cards.shift();
  //     cards.push(temp);
  //   }else break;
  // };

  return answer; // 결과값을 반환
}
```