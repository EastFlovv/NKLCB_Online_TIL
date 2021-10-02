# 2021.10.02 [8일차]

오늘은 자료구조중 연결리스트에 대해 공부했다.  
연결리스트란 각각의 노드 객체가 다음 노드의 정보를 담고있어 순차적으로 연결된 자료구조이다.  
연결리스트의 종류로는 일반, 이중, 원형 연결리스트가 있는데 그중 오늘은 일반 연결리스트와 이중 연결리스트의 공부를 진행했다.  
이중 연결리스트의 경우 그 모양이 마치 블록체인과 비슷한 것 같았다.  
코드를 따라하면서도 이해가 되지 않는 부분이 많이 강의를 여러번 돌려보며 봐야했다.  
특히 현재 이중연결리스트의 insert()에서 몇가지 문제를 겪고있다.

## 공부한 내용
- 자바스크립트는 prototype을 통해 객체를 복사한다.
- 연결리스트는 data와 다음 객체를 향한 pointer를 가진 노드들의 연결형태이다.
- 연결리스트는 일반 연결리스트, 이중연결리스트, 원형연결리스트가 있다.
- 생성자로 연결리스트의 선언, 노드 선언을 할 수 있다.
- '생성자명.prototpye.메서드명'에 함수를 선언해 메서드를 생성 할 수 있다.
- 연결리스트의 연결 자체는 마치 제3의 변수를 이용한 두수의 위치 바꾸기와 비슷하다.
- 연결리스트의 삭제는 이전 연결리스트의 포인터를 삭제하고자 하는 연결리스트가 가리키는 노드에 연결하면 된다.
- 이중 연결리스트는 연결리스트가 일방향으로만 참조하는것과 다르게 이전의 노드도 참조한다.
- 따라서 이중연결리스트는 노드의 삽입 삭제시 두개의 포인터를 조작해야 한다.

## 학습 결과물
학습 결과물은 같이 포함된 파일에 동봉되었으며 각 TIL의 목록별 소제목에 링크가 달려있다.

### 강의 학습 현황

\> 자바스크립트 자료구조 '13. 프로토 타입' ~ 자료구조 '23. 이중 연결리스트 구현하기'(진행중)


## 프로토 타입(prototype)

어떠한 객체가 만들어지기 위해 객체의 모태가 되는 원형이다.  
자바스크립트는 일반적인 객체지향 언어와는 다르게, 프로토타입을 이용한 복사(cloning)를 통해 새로운 객체를 생성한다.  
일반적인 객체 생성 방식은 속성은 생성자에서 메서드는 프로토타입에서 정의한다.

## 연결리스트
각 노드가 데이터와 포인터를 가지며, 한 줄로 연결되어있는 방식으로 데이터를 저장하는 자료구조이다.
- 구현 메서드  
노드 개수: LinkedList.size()  
비어있는지 확인: LinkedList.isEmpty()  
노드 출력: LinkedList.printNode()  
노드 추가: LinkedList.apeend() ,LinkedList.insert()  
노드 삭제: LinkedList.remove(), LinkedList.removeAt()  
데이터 위치 확인: LinkedList.indexOf()  

## 연결리스트 구현

### 노드 구현
```js
function Node(data){ // 데이터를 값으로 받음
  this.data = data; // 데이터를 저장
  this.next = null; // 다음 노드의 자리
};
```

### 연결리스트 구현
```js
function LinkedList(){
  this.head = null; // 연결리스트의 시작
  this.length = 0; // 연결리스트의 길이
};
```

### 연결리스트 내 노드 개수 확인
```js
LinkedList.prototype.size = function(){ //연결리스트의 prototype에 size()함수를 추가
  return this.length; // 연결리스트의 length를 반환한다.
};
```

### 연결리스트 안의 노드 존재여부 확인
```js
LinkedList.prototype.isEmpty = function(){
  return this.length === 0; // 길이가 0이면 true 아니면 false를 반환한다.
};
```

### 연결리스트의 노드 출력
```js
LinkedList.prototype.printNode = function(){ 
  //변수 node에 연결리스트의 head(시작)를 넣는다. node가 null이될때까지 반복, 다음 node는 현재 node 객체의 next 속성을 가져온다.
  for(let node = this.head; node != null; node = node.next){ 
    process.stdout.write(`${node.data} -> `); // 마지막 노드의 next가 null 이므로 모든 객체 출력
  }
  console.log('null');
}
```

### 노드 추가
```js
LinkedList.prototype.append = function(value){
  let node = new Node(value); // 새 노드를 생성해 node변수에 넣는다.
  let current =this.head; // current변수에 연결리스트의 head를 넣는다.
  if(this.head == null){ // head가 노드가 아닌 null 이라면
    this.head = node; // 현재 node를 head에 넣는다.
  }else { // 그렇지 않다면
    while(current.next != null){ //current객체의 next속성이 null이 될떄까지 반복
      current= current.next; // current는 다음 노드를 가져온다.
    }; // current가 마지막 노드에 도달하면 멈춤
    current.next = node;  // current의 다음 노드로 node변수를 넣는다.
  }
  this.length++; // 연결리스트의 길이 1증가
}
```

### 노드 추가 (중간삽입 가능)
```js
LinkedList.prototype.insert = function(value, position=0){ // 별도의 position을 주지않으면 0으로 초기화
  if(position <0 || position> this.length){ // position이 0보다 작거나 연결리스트의 길이보다 크다면
    return false; // 실행하지 않는다.
  }

  let node = new Node(value), // node변수에 새 노드 할당
    current = this.head, // current는 연결리스트의 시작이다.
    index = 0, // index는 0으로 초기화
    prev; // prev는 선언만 한다.

    if(position == 0){ // position이 0이라면 맨 앞 노드로 추가 하기
      node.next = current; // 새 노드의 next속성에 current (head)를 담는다.
      this.head = node; // 연결리스트의 head는 새 노드이다.
    }else { // postition이 있다며
      while(index++ < position){ // index가 postion보다 작다면 반복한다. 조건문 판별후 position은 +1
        prev = current; // prev변수에 현재 current의 노드를 담는다.
        current = current.next; // current의 다음 노드를 담는다.
      } // position에 index가 도달
      node.next = current; // 새 노드의 다음 노드는 current이다.
      prev.next = node; // prev의 다음 노드는 새 노드이다.
    }
  this.length++; // 길이 1 증가
  return true; // insert()가 정상적으로 실행됨
}
```

### 노드 삭제 (값으로 삭제)
```js
LinkedList.prototype.remove = function(value){
  let current = this.head; // current를 연결리스트의 시작으로 만든다.
  prev = current; // prev는 current를 갖는다.
  while(current.data != value && current.next!=null){  // current의 값이 vaule와 다르고 currentrk 끝노드가 아니라면 계속 반복한다.
    prev = current; // prev는 current의 현재 노드를 갖는다.
    current = current.next; // current는 다음노드를 갖는다.
  } // 둘중 한 조건을 만족하여 while탈출
  if(current.data != value){ // 현재 current의 data가 지우고자 하는 value와 다르다면
    return null; // 이 메서드는 실행되지 않는다.
  }
  if(current === this.head){ // current가 연결리스트의 시작 지점이라면
    this.head = current.next; // current의 다음 노드에 head를 연결한다.
  }else{ // 그렇지 않다면
    prev.next = current.next; // prev의 다음노드로 current의 다음노드를 지정한다.
  } // 참조를 잃은 객체는 가비지 컬렉터에 의해 삭제된다.
  this.length--; // 길이 -1
  return current.data; // 지운 current의 값을 반환
}
```

### 노드 삭제 (인덱스로 삭제)
```js
// removeAt(): position 위치 노드 삭제
LinkedList.prototype.removeAt = function(position = 0){
  if(position < 0 || position >=this.length){ // 인덱스가 맞지 않다면 실행 안함
    return null;
  }

  let current = this.head, // 초기화
    index =0,
    prev;
    // 지우고자 하는 index가 0이라면 head를 current의 다음 노드로 연결한다.
    if(position == 0) this.head = current.next; 
    else{ // 그렇지 않다면
      while(index++ < position){ // index가 원하는 값에 도달할때까지 반복
        prev = current; // prev는 현재 노드를
        current = current.next; // current는 다음 노드를 갖는다
      }// 반복문 탈출
      prev.next = current.next;  // prev의 next가 current의 다음 노드를 가리키게 한다.
    }
    this.length--; // 길이 -1
    return current.data; // 지원 current의 값을 반환
};
```


## 이중 연결리스트
각 노드가 데이터와 포인터를 가지며, 두 줄로 연결되어 있는 방식으로 데이터를 저장하는 자료구조이다.  
- 구현 메서드
노드 개수: DoubleLinkedList.size()  
비어있는지 확인:  DoubleLinkedList.isEmpty()  
순차출력: DoubleLinkedList.printNode()  
역출력: DoubleLinkedList.printNodeInverse()  
노드추가: DoubleLinkedList.append(), DoubleLinkedList.insert()  
노드삭제: DoubleLinkedList.remove(), DoubleLinkedList.removeAt()  
데이터 위치 확인:DoubleLinkedList.indexOf()  

### 이중 연결리스트의 노드 구현
```js
// 이중 연결리스트의 노드는 next뿐 아니라 이전 노드를 담을 prev속성도 가진다.
function Node(data){
  this.data = data;
  this.next = null;
  this.prev = null;
};
```

### 이중 연결리스트의 구현
```js
// 연결리스트 또한 head외에 tail을 가진다.
function DoubleLinkedList(){ 
  this.head = null;
  this.tail = null;
  this.length = 0;
};
```

### 이중 연결리스트의 크기 확인
```js
// 일반 연결리스트와 같음
DoubleLinkedList.prototype.size = function(){
  return this.length;
};
```

### 이중 연결리스트의 노드 존재여부 확인
```js
// 일반 연결리스트와 같다
DoubleLinkedList.prototype.isEmpty = function(){
  return this.length === 0;
};
```

### 이중 연결리스트의 출력
```js
// 일반 출력은 일반 연결리스트와 같다
DoubleLinkedList.prototype.printNode = function(){
  process.stdout.write(`head -> `);
  for (let node = this.head; node != null; node = node.next) {
    process.stdout.write(`${node.data} -> `);
  }
  console.log('null');
};
```

### 이중 연결리스트의 역출력
이중 연결리스는 역출력할 수 있다.
```js
DoubleLinkedList.prototype.printNodeInverse = function(){
  let temp = []; // 배열 선언
  process.stdout.write(`null <- `);
  // node에 이중 연결리스트의 tail을 담고 이전 노드가 없을때 까지 반복한다.
  for (let node = this.tail; node != null; node = node.prev) {
    temp.push(node.data); // 연결리스트의 노드를 역순으로 배열에 push()
  }
  // 배열에 들어있는 노드를 다시 역순출력한다.
  for (let i = temp.length-1; i >= 0; i--) {
    process.stdout.write(`${temp[i]} <- `)
  }
  console.log('tail');
};
```

### 이중 연결리스트의 노드 추가
```js
DoubleLinkedList.prototype.append = function(value){
  let node = new Node(value); // 새 노드를 선언한다.

  if(this.head === null){ // 연결리스트에 노드가 없다면
    this.head = node; // 연결리스트의 head는 node이다
    this.tail = node; // 연결리스트의 tail도 node이다
  }else { // 노드가 존재한다면
    this.tail.next = node; //이 연결리스트의 tail노드의 다음값으로 새 노드를 넣는다
    node.prev = this.tail; //새 노드의 prev속성에 이 연결리스트의 tail노드를 넣는다.
    this.tail = node; // 새 노드가 이 연결리스트의 tail로 지정된다.
  }
  this.length++; // 길이 +1
};
```

이 이후의 이중 연결리스트의 insert()에서 현재 position의 값에 따른 중간 삽입에서 어려움을 겪고있다.  
연결리스트의 나머지 내용은 다음 TIL에 이어서 한다.