# 2021.10.08 [14일차]

오늘은 어제 못푼 문제에 이어, 딕셔너리와 해시테이블에 대해 공부했다.  
특히 해시의 경우 매우 관심있던 분야인데 이해하기 힘들어서 공부하기 힘들었던 분야인데 설명을 잘 해주셔서 이해가 잘됬다.  
특히 시간을 적게 써야하는 경우에 이 해시를 할 줄 몰라 문제를 못푼경우가 많았다.  
충돌을 막기위한 여러 해시테이블도 배워서 이젠 해시문제가 자신있다.  
내일은 비선형 자료구조에서 공부해야 할 내용이 많다.  
주말이니 빡세게 달려야겠다.  

## 공부한 내용

- 딕셔너리를 통해 객체를 이용한 자료구조를 사용할 수 있다.  
- 해시테이블을 이용해 O(1)의 시간복잡도로 빠른 동작을 만들 수 있다. 단 공간은 낭비가 심할 수 있고, 충돌에 의해 데이터가 소실될 수 있다.
- djb2해시테이블, 선형조사법 해시테이블, 체이닝 해시테이블을 통해 충돌을 줄이거나 없앨 수 있다.
- djb2는 임의의 시드를 넣고 해시에 값을 더할떄 고정된 값을 곱해 만든다.
- 선형조사법은 중복되는 해시가 있을때 다음 배열의 위치로 값을 더한다.
- 체이닝 해시테이블은 중복되는 해시가 있을때 같은 배열의 위치에 연결리스트로 값들을 더한다.
- 다른 JS파일을 JS파일에 import할 수 있다.
- export, import하는 두 파일 모두 확장자를 .mjs로 바꿔야한다.

## 학습 결과물
학습 결과물은 같이 포함된 파일에 동봉되었으며 각 TIL의 목록별 소제목에 링크가 달려있다.

### 강의 학습 현황

\> 자바스크립트 비선형 자료구조 '15. 프린터 출력' ~ '37. 체이닝 해시테이블 구현하기(5)' 

## 큐, 데크 문제풀기

### 3번 프린터 출력
지정된 우선순위에 따라 출력하는 프린터에서 목표로 정한 인덱스의 출력물이 나오는 순서를 도출하는 문제
```js
function answer(priorities, select){ // 우선순위(배열), 목표 인덱스
  let result = -1; 
  let count = 0;
  let vq = new Queue(); // 인덱스 큐
  let pq = new Queue(); // 우선순위 큐
  for (let i = 0; i < priorities.length; i++) {
    vq.enqueue(i); //인덱스의 값을 저장
    pq.enqueue(priorities[i]); // 인덱스의 우선순위를 저장
  }

  while(true){
    //출력
    if(pq.front() == pq.max()){ // 맨 앞이 우선순위와 같으면 출력한다
      count++;
      //확인
      if(vq.front() == select){ // 맨 앞 값이 목표값일때
        result = count; // result는 count
        break; // break
      }else{ // 아니면
        vq.dequeue(); // 두 큐에서 값을제거
        pq.dequeue();
      }
    }else{//순서변경
      vq.enqueue(vq.dequeue());
      pq.enqueue(pq.dequeue());
    };
  };

  return result; //값을 출력
};
```

### 4번 대표선출
이전에 풀었던 원탁에서 대표를 선출하는문제
```js
function answer(n, m, k){
  let result = [];
  //후보 세팅 (원형큐 초기화)
  let cq = new CircularQueue(n); 
  for (let i = 1; i <= n; i++) { 
    cq.enqueue(i); // 원형큐에 후보들을 넣는다
  };

  // 첫 후보 제거 노드 위치로 설정
  cq.tail = cq.head = (n + m-1) % n; //n + 0 -1 = n-1

  //k만큼 움직이면서 후보 제거, 제거된것은 result에 추가
  let count;
  result.push(cq.dequeue());
  while(cq.length!=0){ // 후보다 모두 없어질떄 까지 진행
    count = k-1; // 한번에 건너뛰는 수
    while(count--){
      cq.enqueue(cq.dequeue()); // count가 0(false)이 될때까지 맨 앞을 뒤로 봼
    }
    result.push(cq.dequeue()); // 맨 앞 값을 제거하여 결과 배열에 push
  };

  return result; // 결과 배열 출력
};
```

### 5번 데크 만들기
데크를 만들어 보고 지정된 명령을 수행 하도록 하는 문제
```js
//데크의 선언과 메서드 정의
function Dequeue(){
  this.array = [];
};

Dequeue.prototype.pushFront = function(element){
  this.array.unshift(element);
}

Dequeue.prototype.pushBack = function(element){
  this.array.push(element);
}

Dequeue.prototype.popFront = function(){
  return this.isEmpty() ? -1 : this.array.shift();
}

Dequeue.prototype.popBack = function(){
  return this.isEmpty() ? -1 : this.array.pop();
}

Dequeue.prototype.isEmpty = function(){
  return this.size() === 0 ? 1 : 0;
}

Dequeue.prototype.size = function(){
  return this.array.length;
}

Dequeue.prototype.front = function(){
  return this.isEmpty() ? -1 : this.array[0];
}

Dequeue.prototype.back = function(){
  return this.isEmpty() ? -1 : this.array[this.array.length -1];
}


function answer(cmds){
  let result = [];
  let dequeue = new Dequeue(); // 새 데크 생성
  for (let i = 0; i < cmds.length; i++) {
    let mark = cmds[i].split(' '); // mark에 명령어를 넣음
    switch(mark[0]){ // 명령어에 따라 분기함
      case 'push_front':
        dequeue.pushFront(Number(mark[1]));
        break;
      case 'push_back':
        dequeue.pushBack(Number(mark[1]));
        break;
      case 'pop_front':
        result.push(dequeue.popFront());
        break;
      case 'pop_back':
        result.push(dequeue.popBack());
        break;
      case 'front':
        result.push(dequeue.front());
        break;
      case 'back':
        result.push(dequeue.back());
        break;
      case 'empty':
        result.push(dequeue.isEmpty());
        break;
      case 'size':
        result.push(dequeue.size());
        break;
    }
  }
```

## 딕셔너리
key-value 형태로 다양한 자료형 개체를 저장하는 구조이다.  
- 구현 메서드  
전체개체획득 Dictionary.getBuffer()  
초기화 Dictionary.clear()  
크기변화 Dictionary.size()  
개체추가 Dictionary.set()  
삭제 Dictionary.remove()  
반환 Dictionary.get()  
여부 Dictionary.has()  
key,value 배열반환 Dictionary.keys(), Dictionary.values()  
고차함수 Dictionary.each()  

## 딕셔너리 구현
### 딕셔너리의 생성자
```js
// Dictionary() 객체를 저장할 생성자
function Dictionary(items = {}){
  this.items = items;
};
```
### 딕셔너리의 객체 반환
```js
//getBuffer() 모든 객체 반환
Dictionary.prototype.getBuffer = function(){
  return {...this.items}; // 스프레드 문법으로 객체드을 통채로 반환
};
```

### 딕셔너리의 초기화
```js
//clear() 초기화
Dictionary.prototype.clear = function(){
  this.items = {}; // 빈 객체 선언
}
```
### 딕셔너리의 크기 반환
```js
//size() 크기 반환
Dictionary.prototype.size = function(){
  return Object.keys(this.items).length; // Object.keys().length를 통해 객체가 가진 key의 갯수를 반환
}
```

### 딕셔너리의 개체 존재 여부 확인
```js
// has() 개체 존재여부확인 (key정보를 배열로 반환)
Dictionary.prototype.has = function(key){
  // return value in this.items;
  return this.items.hasOwnProperty(key); //items가 가진 속성을 key를 기준으로 탐색하여 반환
}
```

### 딕셔너리에 개체 추가
```js
// set() 개체 추가
Dictionary.prototype.set = function(key, value){ 
  this.items[key] = value; //key-value형태로 추가한다
}
```
### 딕셔너리의 개체 반환
```js
// get() 개체 반환
Dictionary.prototype.get = function(key){ // key값을 갖는 요소의 개체를 찾아 반환
  return this.has(key)? this.items[key]:undefined; //key를 가진 요소가 있으면 반환하고 아니면 undefined
}
```

### 딕셔너리의 개체 삭제
```js
// remove() 개체 삭제
Dictionary.prototype.remove = function(key){
  if(this.has(key)){ // 키값을 가진 요소가 있으면
    delete this.items[key]; // 삭제
    return true; // true반환
  }
  return false; // 없으면 false를 통해 함수 탈출
}
```

### 딕셔너리의 key들을 반환
```js
// keys() 모든 key값을 배열 형태로 반환
Dictionary.prototype.keys = function(){
  return Object.keys(this.items);
};
```
### 딕셔너리의 value값들을 반환
```js
// values() 모든 value값을 배열 형태로 반환
Dictionary.prototype.values = function(){
  let values = [];
  for(let k in this.items){
    if(this.has(k)) values.push(this.items[k]);
  }
  return values;
  // return Object.values(this.items);
}
```
### 고차함수를 이용하여 개체 이용하기
```js
// each() 고차함수
Dictionary.prototype.each = function (fn){ // 콜백함수를 매개변수로 사용
  for(let k in this.items){
    fn(k, this.items[k]); // 콜백함수 사용
  }
}
```


## 해시

## 해시 함수 (Hash Function)
임의의 길이의 데이터를 고정된 길이의 데이터로 매핑하는 함수이다.  
- 해시 함수 특성
  - 압축성 : 다양한 가변 길이의 입력에 대해 고정된 크기의 결과값을 반환하는 성질  
  - 효율성 : 어떤 입력 값에 대해서도 많은 자원과 시간이 소요되지 않고 처리되는 성질  
  - 저항성 : 결과값을 바탕으로 입력 값을 찾는것이 불가능한 성질  

## 해시 테이블
Hash함수를 사용하여 평균 O(1) 시간복잡도로 특정 값을 신속하게 찾는 자료구조이다.

- 충돌(Collision)해결방법
  - 해시함수 변경: 더 큰 숫자의 공간과 Modular 산술값을 이용해 충돌 최소화
  - 자료구조 확장: Open Addressing Method(선형 조사법, 이중해시), Close Addressing Method(체이닝)

- 구현 메서드
객체 초기화  HashTable.clear()  
객체 크기 반횐 HashTable.size()  
전체 데이터 반환 HashTable.getBuffer()  
전체 데이터 출력 HashTable.print()  
데이터 추가 HashTable.put()  
데이터 삭제 HashTable.remove()  
데이터 반환 HashTable.get()  

### 해시 테이블 구현

### 해시 테이블의 생성
```js
const HASH_SIZE = 37; // 해시테이블의 크기를 상수로 정한다

// Element() key, value 저장을 위한 생성자
function Element(key, value){ // key-value형태로 노드를 선언
  this.key = key;
  this.value = value;
}
// HashTable() 생성자
function HashTable(){
  this.table = new Array(HASH_SIZE); // 상수만큼의 길이를 가진 해시테이블
  this.length = 0; // 길이는 0으로 초기화
}

// hashCOde() 해시함수
//loselose 해시
HashTable.prototype.hashCode = function(key){
  let hash = 0; // 해시값은 0
  for (let i = 0; i < key.length; i++) {
    hash += key.charCodeAt(i); //문자열 하나하나를 유니코드 값으로 만들어 해시에 더한다
  }
  return hash % HASH_SIZE; // 배열안에 들어갈 수 있도록 해시크기 상수로 나머지 연산
};
```

### 해시 테이블의 값 추가/ 삭제 / 조회
```js
// put() 데이터 추가
HashTable.prototype.put = function(key, value){
  let index = this.hashCode(key); // 입력받은 키를 해시함수를 통해 인덱스로변환
  console.log(`key: ${key} -> index: ${index}`);

  if(this.table[index] !== undefined) // 목표하는 인덱스의 테이블에 값이 있다면
    return false; // false
  
  this.table[index] = new Element(key, value); // 값이 없다면 노드를 삽입
  this.length++; // 길이 +1
  return true; // true
}

// get() 데이터 조회
HashTable.prototype.get = function(key){
  return this.table[this.hashCode(key)]; //해시함수로 구한 인덱스 값으로 테이블의 값을 가져옴
};

// remove() 데이터 삭제
HashTable.prototype.remove = function(key){
  let element = this.table[this.hashCode(key)]; // element는 테이블의 해시함수 인덱스 값
  if(element !== undefined){ // element가 비어있지 않다면
    delete this.table[this.hashCode(key)]; // 해당 테이블의 요소를 삭제
    this.length--; // 길이는 -1
  };
  return element; // element를 반환
};
```

### 해시테이블의 초기화, 크기반환, 데이터 반환, 데이터 출력
```js
// clear() 초기화
HashTable.prototype.clear = function(){
  this.table = new Array(HASH_SIZE); // 초기화는 선언과 같다
  this.length = 0;
};

//size() 크기 반환
HashTable.prototype.size = function(){
  return this.length; // 해시테이블의 length값을 출력
}

// getBuffer() 데이터셋 반환
HashTable.prototype.getBuffer = function(){
  let array = []; // 데이터셋은 배열로 반환 한다
  for (let i = 0; i < this.table.length; i++) { // 전체 탐색
    if(this.table[i]){//값이 있으면
      array.push([this.table[i]]); // 결과 배열에 데이터를 push
    }
  }
  return array; // 배열반환
};

// print() 데이터셋 출력
HashTable.prototype.print = function(){
  for (let i = 0; i < this.table.length; i++) { // 전체 탐색
    if(this.table[i]) // 값이 있다면
      console.log(i+" -> "+ this.table[i].key + ': ' + this.table[i].value); // 출력한다
  }
}
```






### 해시 테이블의 충돌과 해결
해시함수를 이용해 얻은 인덱스 값은 중복 될 수 있다.  
충돌을 줄이기 위해 다양한 방법을 사용할 수 있다.

### 해시 테이블의 충돌을 해결하기위한 djb2해시함수
```js
// 충돌해결 djb2 해시 함수
HashTable.prototype.djb2 = function(key){
  let hash = 5381; // 해시 함수에 기본 시드값을 준다
  for (let i = 0; i < key.length; i++) {
    hash = hash*33 + key.charCodeAt(i); // 지정된 값을 곱해서 더한다
  }
  return hash % HASH_SIZE; // 나머지 연산을 하여 중복값이 쉽게 나오지 않게한다
};
```

## 선형 조사법 해시테이블 (linear probing Hash Table)
Hash충돌이 발생했을때, 그 다음 주소를 확인 하고 비어있다면 그 자리에 대신 저장하는 해시테이블 기반 자료구조이다.  
- 구현 메서드
객체 초기화 LinearHashTable.clear()  
크기 반환 LinearHashTable.size()  
전체 데이터 반환 LinearHashTable.getBuffer()  
전체 데이터 출력 LinearHashTable.print()  
데이터 추가 LinearHashTable.put())  
데이터 삭제 LinearHashTable.remove()  
데이터 반환 LinearHashTable.get()  

### 선형 조사법 해시테이블 구현
일반 해시테이블과 다른 코드만을 TIL에 작성
```js
//충돌을 일으키기 위해 작은 해시 사이즈를 씀
const HASH_SIZE = 5;

// 데이터 추가
LinearHashTable.prototype.put = function(key, value){
  let index = this.hashCode(key); // 해시함수를 이용해 인덱스 생성
  let startIndex = index; // 스타트 인덱스를 초기화

  console.log(`key: ${key}, index: ${index}`);
  do{ // do...while문을 사용한다
    if(this.table[index] === undefined){ // 해당인덱스가 비어있다면
      this.table[index] = new Element(key, value); // 새 노드를 추가한다.
      this.length++; // 길이는 +1
      return true;// true
    }
    index = (index+1)%HASH_SIZE; // 인덱스는 다음인덱스로 진행
  }while(index!==startIndex); // 인덱스가 스타트 인덱스와 다르다면 계속 반복한다

  return false; // 모든 테이블이 값을 가진경우 false
}

// 데이터 조회
LinearHashTable.prototype.get = function(key){
  let index = this.hashCode(key);
  let startIndex = index; // 초기화는 위와 같다.
  do{
    // 인덱스가 비어있지 않고 키값이 같은경우
    if(this.table[index] !== undefined && this.table[index].key === key)
      return this.table[index].value; // value를 리턴한다
    //if문 밖
    index = (index+1) % HASH_SIZE; // 다음 인덱스로 진행
  }while(index !== startIndex); // 인덱스가 스타트 인덱스와 다르면 계속 반복
  return undefined; // 값을 못찾으면 undefined반환
};

// 데이터 삭제
LinearHashTable.prototype.remove = function(key){
  let index = this.hashCode(key);
  let startIndex = index;
  do{
    // 인덱스가 비어있고 키값이 같다면
    if(this.table[index] !== undefined && this.table[index].key === key){
      let element = this.table[index]; // 요소를 element에 저장
      delete this.table[index]; // 요소 삭제
      this.length--; // 길이 -1
      return element; // 요소를 리턴
    }
    index = (index+1) % HASH_SIZE; // 다음 인덱스로 진행
  }while(index !== startIndex); // 한바퀴 돌때까지 반복
  return undefined; // 값이 없다면 undefined
};
```

## 체이닝 해시 테이블 (Chaining Hash Table)
별도의 자료구조인 연결리스트를 병합 사용하여 Hash충돌을 해결한 해시 테이블 기반 자료구조이다.  
- 구현 메서드
객체 초기화 ChainingHashTable.clear()  
크기 반환 ChainingHashTable.size()  
전체 데이터 반환 ChainingHashTable.getBuffer()  
전체 데이터 출력 ChainingHashTable.print()  
데이터 추가 ChainingHashTable.put()  
데이터 삭제 ChainingHashTable.remove()  
데이터 반환 ChainingHashTable.get()  

### 체이닝 해시테이블 구현
체이닝 해시테이블은 링크드 리스트를 가져와 import하여 사용한다.  
import하는 파일과 export하는 파일 모두 확장자는 .mjs로 변경되어야한다.  
기존 해시테이블과 다른 부분만 기재한다.
```js
// 연결리스트 파일
export { LinkedList };
// 체이닝 해시테이블 파일
import { LinkedList } from "./linked_list.mjs"; // 연결리스트 연결
```
### 체이닝 해시테이블 구현(본문코드)
```js
// getBuffer() 전체 데이터셋 반환
ChainingHashTable.prototype.getBuffer = function(){
  let array = []; // 배열로 반환받는다
  for (let i = 0; i < this.table.length; i++) {
    if(this.table[i]){ // 테이블에 값이 있다면
      let current = this.table[i].head; // current는 현재 인덱스의 value의 head

      do{
        array.push(current.data); // 배열에 current의 data를 push
        current = current.next; // current는 다음 연결리스트로 진행
      }while(current); // current가 값이 있다면 계속 반복
    };
  };
  return array; // 배열을 반환
};

// print() 출력
ChainingHashTable.prototype.print = function(){
  for (let i = 0; i < this.table.length; i++) { // 전체 해시테이블 탐색
    if(this.table[i]){ // 해시테이블에 값이 있다면
      let current = this.table[i].head; // current는 head를 가짐
      process.stdout.write(`#${i}`);
      do{
        process.stdout.write(` -> ${current.data.key}: ${current.data.value}`); // 키와 값을 출력
        current = current.next; // 다음 연결리스트로 current가 이동
      }while(current); // current에 연결리스트가 있다면 계속반복
      console.log();
    };
  };
};

// put() 값 추가
ChainingHashTable.prototype.put = function(key, value){
  let index = this.hashCode(key);
  console.log(`key: ${key} -> index: ${index}`);
  
  if(this.table[index] === undefined){ // 해시테이블에 값이 undefined라면
    this.table[index] = new LinkedList(); // 연결리스트를 생성
  }

  this.table[index].append(new Element(key, value)); // 새노드를 추가한다
  this.length++; // 길이 +1

  return true; // true반환
}

// get() 메서드 조회
ChainingHashTable.prototype.get = function(key){
  let index = this.hashCode(key);
  if(this.table[index] !== undefined && !this.table[index].isEmpty()){ // 테이블이 비어있지 않고 undefined도 아니라면
    let current = this.table[index].head; // current는 연결리스트의 head를 가짐

    do{
      if(current.data.key === key){ // 목표키가 current의 연결리스트의 key와 같다면
        return current.data.value; // value를 리턴
      }
      current = current.next; // 아니라면 current는 다음으로 진행
    }while(current); // current에 값이 있으면 계속 진행
  }
  return undefined; // 값이 없으면 undefined반환
};

// remove() 데이터 삭제
ChainingHashTable.prototype.remove = function(key){
  let index = this.hashCode(key);
  let element = undefined; // 출력할 값을 담을 변수

  if(this.table[index] !== undefined){ // 인덱스가 비어있지 않으면
    let current = this.table[index].head; // current는 현재 인덱스의 head
    do {
      if(current.data.key === key){ // 목표 key를 찾으면
        element = current.data; // element에 값을 담음
        this.table[index].remove(current.data); // 값을 삭제
        this.length--; // 길이 -1
        if(this.table[index].isEmpty()){ // 데이터가 없으면 링크드 리스트를 통채로 삭제
          delete this.table[index];
        }
      }
      current = current.next; // 목표 key를 못찾으면 다음 노드로 진행
    } while (current); 
  }
  return element; // element를 반환 (기본은 undefined)
}
```