# 2021.10.03 [9일차]

오늘은 어제 하던 연결리스트를 이어서 공부했다.  
일반 연결리스트 까지는 이해하기 쉬웠으나 이중연결리스트와 원형 연결리스트가 조금 까다로웠다.  
특히 원형 연결리스트는 순환하는 형태임을 알고 있는데 자꾸 사소한 부분에서 노드의 조건이나 변수를 잘못적어 실행되지 않는 코드를 만들어 버리고서는 한참을 고치는데 소비하곤 했다.  
아직 연결리스트의 사용이 익숙치 않은 탓 인것 같다.  
내일은 스택과 큐를 마무리하고 연결리스트, 스택 큐와 관련된 여러문제를 풀어 익숙해져야겠다.

## 공부한 내용

- 이중 연결리스트는 노드가 이전 노드와 다음 노드의 주소를 모두 가지는 형태의 양방향 연결 노드이다.  
- 이중연결리스트의 노드의 추가시 양방향의 연결을 고려하여 연결해야 한다.  
- 이중연결리스트의 노드 삭제시 이전 노드의 다음 노드 주소를 삭제하는 노드의 다음 노드 주소로 연결해주어야 한다. 반대로 삭제 노드의 다음노드의 이전 노드주소를 삭제노드의 이전 노드의 주소로 할당해주어야 한다.
- 연결리스트에서 참조를 잃은 노드는 가비지 콜렉터에 의해 자동으로 삭제된다.
- 원형 연결리스트는 마지막 노드가 다음노드로 연결리스트의 head로 지정된 노드를 가리키는 순환형 연결리스트이다.
- 원형 연결리스트의 여러 조건을 설정 할때 끝노드를 지칭할떈 다음노드를 null이 아닌 연결리스트의 head를 지칭하여 조건을 만들어야한다.

## 학습 결과물
학습 결과물은 같이 포함된 파일에 동봉되었으며 각 TIL의 목록별 소제목에 링크가 달려있다.

### 강의 학습 현황

\> 자바스크립트 자료구조 '23. 이중 연결리스트 구현하기' ~ 자료구조 '31. 연결리스트 문제풀이-대표선출'


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


### 노드추가 insert
```js
DoubleLinkedList.prototype.insert = function (value, position =0){
  if(position < 0 || position > this.length){ // 범위 밖의 position이 들어오면 false
    return false;
  }
  let node = new Node(value), // 새 노드 생성
    current = this.head, // current는 head
    index = 0,
    prev;

    if(position === 0){  // position이 0이고
      if(this.head===null){ // 연결리스트가 빈 상태라면
        this.head = node; // 연결리스트 head는 새 노드
        this.tail = node; // 연결리스트 tail은 새 노드
      }else{ // 연결리스트가 비지 않았다면
        node.next = current; // 노드의 next에 current 삽입
        current.prev = node; // current의 prev에 새 노드 삽입
        this.head = node; // 연결리스트의 head는 새 노드를 가리킨다
      }
    }else if(position === this.length){ // position이 0이 아니고 연결리스트의 길이 와 같다면 (연결리스트 끝)
      current = this.tail; // current는 연결리스트의 tail
      current.next = node; // current의 next는 새노드 (끝에 새노드)
      node.prev = current; // 새 노드의 이전 요소로 current를 넣는다.
      this.tail = node; // 연결리스트의 tail은 새 노드를 가리킴
    }else { // position이 연결리스트의 끝과 시작이 아니라면
      while(index++ < position){ // index가 position과 같아질때까지 반복
        prev = current; // prev에 current 할당
        current = current.next; // current에는 다음 요소를 할당
      } // index == position
      node.next = current; // 새 노드의 다음값은 current
      prev.next = node; // prev의 다음 값은 새 노드

      current.prev = node; // current의 이전 값은 새 노드
      node.prev = prev; // 새 노드의 이전값은 prev
    }
    this.length++; // length +1
    return true;
}
```

### 노드 삭제 remove (value)
```js
DoubleLinkedList.prototype.remove = function(value){
  let current = this.head, // current는 head
    prev = current; // prev는 current

  while(current.data != value && current.next != null){ // current의 값이 목표값이 아니면서 current가 마지막 요소가 아니라면 반복
    prev = current; // prev에 current할당
    current = current.next; // current에 다음 노드인 current.next할당
  }; // 반복종료

  if(current.data != value){ // 만약 current의 값이 목표 값과 다르다면
    return null; // 목표값이 연결리스트에 없으므로 null반환
  };

  if(current === this.head){ // current가 연결리스트의 haed라면
    this.head = current.next; // 연결리스트의 haed는 current의 다음 노드
    if(this.length === 1) this.tail = null; // 연결리스트의 길이가 1이라면 연결리스트의 tail은 null
    else this.head.prev = null; // 그렇지 않다면 연결리스트의 haed의 prev는 null
  }else if(current === this.tail){ // current가 연결리스트의 haed가 아닌 tail이라면
    this.tail = current.prev; // tail은 current의 이전값을 가짐
    this.tail.next = null; // tail의 다음 노드는 null
  }else { // 그외에 지울 노드가 시작과 끝이 아니라면
    prev.next = current.next; // prev의 다음값은 current의 다음값
    current.next.prev = prev; // current의 next의 prev는 prev를 할당
  } // 가비지 컬렉터가 참조가 사라진 노드를 지운다
  this.length--; // length -1
  return current.data; // current의 data를 반환
}
```

### 노드 삭제 removeAt (index)
```js
DoubleLinkedList.prototype.removeAt = function(position =0){ // 인덱스 기반의 삭제
  if(position < 0 || position >= this.length){ // postion에 올바른 값이 들어오지 않는다면 false
    return false;
  }
  let current = this.head, // current는 연결리스트의 head
    index = 0,
    prev;
  
  if(position === 0){ // 목표 위치가 0이라면
    this.head = current.next; // 연결리스트의 haed를 current.next로 할당
    if(this.length ===1) this.tail = null; // 연결리스트의 길이가 1이라면 연결리스트의 tail은 null
    else this.head.prev =  null; // 그렇지 않다면 연결리스트 head의 prev는 null
  }else if (position === this.length-1){ // position이 연결리스트의 끝이라면
    current = this.tail; // current는 연결리스트의 tail
    this.tail = current.prev; // tail은 current노드의 prev 노드를 가리킴
    this.tail.next = null; // tail의 다음 노드는 null
  }else{ // 목표 위치가 시작과 끝이 아니라면
    while(index++ < position){ // index를 position과 같아질때까지 반복
      prev = current; // prev 에 current를 할당
      current= current.next; // current에 current의 다음 노드를 할당
    } // 반복종료
    prev.next = current.next; // prev의 next는 current의 next를 가리킴
    current.next.prev = prev; // current의 next노드가 갖는 prev는 prev를 가리킴
  }
  this.length--; // 길이 -1
  return current.data; // current의 값을 반환함
}
```

### 데이터 위치 확인
```js
DoubleLinkedList.prototype.indexOf = function(value){ // 목표값의 index를 찾는다
  let current = this.head, // current는 연결리스트의 haed를 할ㅇ당
    index = 0;
  while(current != null){
    if(current.data === value){ //목표값에 도달하면
      return index; // 인덱스 반환
    }
    index++; // 인덱스 증가
    current = current.next; // current는 다음 노드로 이동
  }
  return-1 //끝까지 진행해서 null을 만나면 -1리턴  
}
```



## 원형 연결리스트
각 노드가 데이터와 포인터를 가지며, 원형 형태로 연결되어있는 방식으로 데이터를 저장하는 자료구조이다.  
- 구현 메서드  
노드 개수: CircularLinkedList.size()  
비어있는지 확인: CircularLinkedList.isEmpty()  
노드 추가: CircularLinkedList.append() CircularLinkedList.insert()  
노드 삭제: CircularLinkedList.remove() CircularLinkedList.removeAt()  
데이터 위치 확인: CircularLinkedList.indexOf()  
노드 출력: CircularLinkedList.printNode()  

### 노드 추가
```js
CircularLinkedList.prototype.append = function(value){ // 값을 추가
  let node = new Node(value), // 새 노드 선언
    current = this.head; // current에 연결리스트의 head할당

  if(this.head == null) // 연결릿트가 비어있다면
    this.head = node; // head는 새 노드를 가리킴
  else{ // 그렇지 않다면
    while(current.next != this.head){ // current의 다음노드가 연결리스트의 head일때까지 반복
      current= current.next; // current는 다음노드로 이동
    } // 반복문 종료
    current.next = node; // current의 다음 노드는 새노드
  }
  node.next = this.head; // 새 노드의 다음 노드로 연결리스트의 head를 할당
  this.length++; // 길이 +1
};
```

### 노드 추가 insert
```js
CircularLinkedList.prototype.insert = function(value, position = 0){
  if(position < 0 || position > this.length){ // 유효한 범위 밖의 position값이 들어오면 false
    return false;
  };

  let node = new Node(value), // 새노드와 current, index초기화
    current = this.head,
    index = 0,
    prev;
  
  if(position === 0){ // 목표 인덱스가 0이라면
    node.next = current; // 새노드의 다음 노드는 current
    if(this.isEmpty()){ // 비어있는 연결리스트라면
      current = node; // current는 새 노드
    }else{ // 빈 연결리스트가 아니라면
      while(current.next != this.head){ // current의 다음 노드가 연결리스트의 head일때까지 반복
        current = current.next; // current를 다음노드로 진행
      }
    }
    this.head = node; // 연결리스트의 head는 새 노드
    current.next = this.head; // current의 다음 노드는 head
  }else{ // 목표인덱스가 0이 아니라며
    while(index++ < position){ // index를 목표 position까지 반복
      prev = current; // prev에 current할당
      current = current.next; // current를 다음노드로
    }
    prev.next=node; // prev의 다음 노드는 새 노드
    node.next = current; // 새 노드의 다음노드는 current
    if(node.next === null){ // 새 노드의 다음 노드가 null이라면 (맨끝노드)
      node.next = this.head; // 새 노드의 다음 노드는 연결리스트의 head
    }
  }
  this.length++; // length +1
  return true;
}
```

### 연결리스트 삭제
```js
CircularLinkedList.prototype.remove = function(value){
  let current = this.head,
    prev = current,
    data;

  while(current.data != value && current.next != this.head){ // current의 data가 목표값과 다르고 current가 마지막 노드가 아니라면 계속 반복
    prev = current; // prev에 current노드 할당
    current = current.next; // current노드는 다음 노드로 진행
  } // 반복종료

  if(current.data != value){ //current의 값이 목표값과 다르다면
    return null; // 지울것이 없으므로 null 리턴
  }

  data = current.data // data는 current의 data
  if(current === this.head){ // current가 연결리스트의 head라면
    while(current.next != this.head){ // current의 다음 노드가 head가 될때까지 반복
      current = current.next; // current를 다음 노드로 진행
    }
    this.head = this.head.next; // head는 head에 할당된 노드의 다음 노드
    current.next = this.head; // current의 다음 노드는 head
  }else{ // current가 연결리스트의 head가 아니라면
    prev.next = current.next; // prev의 다음 노드가 current의 다음노드를 가리킴
  }
  this.length--; // length-1
  return data; // 값 반환
}
```

### 연결리스트의 노드 삭제 (인덱스 기반)
```js
CircularLinkedList.prototype.removeAt = function(position=0){
  if(position<0||position>=this.length){ // 유효한 인덱스값이 아니면 false
    return null;
  }
  let current = this.head, // 초기화
    index = 0,
    prev,
    data;

  if(position === 0){ // position이 0이라면
    data = current.data; // data는 current의 data값으로 할당
    while(current.next != this.head){ // current의 다음 노드가 연결리스트의 head가 될때까지 반복
      current = current.next; // current노드를 다음 노드로 진행
    } // 반복 종료
    this.head = this.head.next; // 연결리스트의 head에 head의 다음 노드를 할당
    current.next=this.next; // current의 다음 노드에 연결리스트의 다음 노드를 할당
  }else{ // position이 0이 아니며
    while(index++ < position){ // index가 position과 같아질때까지 반복
      prev = current; // prev에 current 노드 할당
      current = current.next; // current는 다음 노드로 진행
    } // 반복종료
    data = current.data; // data는 current의 data

    prev.next = current.next; // prev의 다음 노드는 current의 다음노드
  }

  this.length--; // length-1
  return data; // 값 반환
}
```

### 데이터 위치 확인
```js
CircularLinkedList.prototype.indexOf = function(value){
  let current = this.head,
    index = 0;

    do{ // do while로 최소 한번은 진행
      if(current.data === value){ // current의 값이 목표값과 같다면
        return index; // 인덱스 반환
      }
      index++; // 인덱스 증가
      current = current.next; // current는 다음 노드를 할당
    }while(current != this.head); // current의 다음 노드가 연결리스트의 head가 될때까지 반복
    return -1; // 만족하는 조건이 없으면 return -1
};
```

## 연결리스트 문제

### 열차연결
연결리스트의 append를 할 수 있는지 물어보는 문제이다.  
내 풀이도 정답이 나오긴 했으나 강사님의 풀이가 더 간결하고 보기 좋다.
```js
// 강사님의 풀이과정
 let current, prev;
  for (let i = 0; i < arr.length; i++) {
    current= new Train(arr[i]);

    if(i === 0){
      ll.head = current;
    }else{
      prev.next = current;
    }
    prev = current;
  }
  return ll;
}

```
나의 풀이과정
```js
for (let i = 0; i < arr.length; i++) {
  for (let i = 0; i < arr.length; i++) {
    // current는 flag
    let current = ll.head;
    // 새 노드
    let node = new Train(arr[i]);
    // 리스트가 비어있다면 노드가 헤드
    if(ll.head == null) ll.head = node;
    else{
      // 다름 노드가 null이 아니라면
      while(current.next != null){
        // current는 다음노드로
        current = current.next;
      }
      // 끝 노드에 오면 다음노드에 새 노드 삽입
      current.next = node;
    }
  }
  // 연결리스트 반환
  return ll;
}
```

### 서류 정리
연결리스트의 연결상태를 바꾸는 문제
```js
function answer(ll){
  let current = ll.head;
  let prev = null;
  let next;

  while(current != null){ // current가 null이 될때까지 반복한다
    next = current.next; // next에 current의 next노드를 저장함
    current.next = prev; // current의 next에 prev를 할당함
    prev = current; // prev에 current를 할당함
    current = next; // current에 다시 next를 할당하면 바뀜
  } // current는 next를 next는 current.next를 current.next는 prev(null)을 가져오므로 결국 current는 null이됨
  ll.head = prev; // 연결리스트의 head에 prev할당

  return ll; // 연결상태가 뒤바뀐 연결리스트를 리턴
}
```

### 대표 선출
연결리스트를 만든 뒤, 일정한 조건에 따라 노드를 하나씩 제거하는 문제
```js
function answer(n, m, k) {
  let result = []; // 결과값을 저장할 배열

  // CircularLinkedList 제작
  let ll = new LinkedList(); // 연결리스트 선언
  let current, prev;
  for (let i = 1; i <= n; i++) {
    current = new Node(i); // current는 새 노드

    if (i === 1) ll.head = current; // 시작이라면 head는 current
    else prev.next = current; // 아니라면 prev의 다음 노드로 current를 할당

    prev = current; // prev에 새노드인 current 할당
  }//모든 노드 연결 완료
  current.next = ll.head; // current의 다음 노드는 연결리스트의 head
  // Start Node위치 선정
  current = ll.head; // current를 연결리스트의 head로 선언
  while (--m) { // 시작지점만큼 이동
    prev = current; // prev에 current노드 할당
    current = current.next; // current는 다음 노드로 진행
  }

  // 후보자중 k만큼 움직이며 제거 / 하나가 남을 때 까지
  let count; 
  while (current.next != current) { // 노드가 하나 남을때까지 반복
    result.push(current.data); // current노드의 값을 result배열에 담음
    prev.next = current.next; // 현재노드 삭제 이전노드 연결
    count = k; // 이동 할 거리를 count에 할당
    // k만큼 이동
    while (count--) {
      prev = current; // prev에 current노드 할당
      current = current.next; // current노드는 다음 노드로 진행
    };
  };
  result.push(current.data); // 마지막 노드를 배열에 추가
  return result; // 결과 배열 출력
}
```