# 2021.09.30 [6일차]

오늘은 정기테스트를 보는 날이여서 오전에 기존문제를 다시한번 풀어보고 그후에 나머지 진도를 나갔다.  
실전 문제풀이의 경우 나와 같은 코드로 푸는 경우도 있지만 강사님의 풀이가 더욱 간결하게 될수록 살력의 차이를 느끼고 있다.  
단순히 함수를 사용할줄 아는것 보다 어떻게 사용하는가가 더 중요하게 느껴진다.  
그 이후에 배열 문제를 풀면서 점점 단순화된 코드를 만들수 있게되면서 실력이 늘어감을 느끼고 있다.  
다음주 화요일까지 내야할 과제의 주제를 잡기가 너무 힘들다. 하루빨리 방법을 찾아야겠다.    
아직까지의 전체적인 문제풀이는 대부분 배열을 이용한 문제가 대부분인것 같다.  
배열의 여러 메서드를 사용해보고 그 이해를 확실히 하므로써 다음 개념을 익힐때 이러한 문제로 발목을 잡히면 안될것 같다.

## 공부한 내용

- map()함수를 더욱 많이 사용할 수 있게 되었다. 이전까지 생소해서 잘 손이 가지 않았던 메서드이지만 앞으로 이런 메서드를 적극적으로 사용하기위해 시도해야겠다.
- filter()메서드를 통해 배열에서 원하는 값만 남길수 있다. 별도의 데이터 조작없이 원하는 조건에 따라 값을 남기기 위해선 이쪽이 더 효율적인것 같다.
- Math.abs()함수와 Math.min()/max()를 직접 사용하므로써 사용법을 몸에 익히게 되었다. 더욱이 스프레드 연산자를 통해 배열의 값을 반복문없이 넣을수 있게되었다.
- sort가 고차함수라는걸 알게되면서 sort()를 통해 수를 손쉽게 정렬할수 있게 되었다. 
- repeat()를 실제로 사용해봄으로써 다음에 쉽게 사용할 수 있을것 같다.  

## 학습 결과물
학습 결과물은 같이 포함된 파일에 동봉되었으며 각 TIL의 목록별 소제목에 링크가 달려있다.

### 강의 학습 현황

\> 자바스크립트 수학 '실전문제풀이(기본)-두 정수 사이의 합' ~ 자료구조 '7. 배열문제 풀이 나무그리기'


## 실전 17번
```js
function solution(a, b) {
    let result = 0;

    if(a > b) [a, b] = [b, a];
    // if(a > b){
    //     let t = b;
    //     b = a;
    //     a = t;
    // }    
    for(let i = a; i <= b; i++){
        result += i;
    };
    return result;
    // 가우스 케이스
    // return (a+b)*(Math.abs(a-b)/2);
}
```

## 실전 18번
```js
function solution(price, money, count) {
    let total = 0;
    for(let i = 1; i <= count; i++){
        total += price*i;
        // total += i;
    };
    // total *= price;
    if(money-total >= 0) // money >= total
        return 0;
    else
        return Math.abs(money-total);

    // total = (((1+count)*count)/2) * price;
    // return total > money ? total-moeny : 0
}
```

## 실전 19번

```js
function solution(array, commands) {
    let answer = [];
    
    for(let i = 0; i < commands.length; i++){
        let newArr = array.slice(commands[i][0]-1, commands[i][1]);
        newArr.sort((x, y)=> x-y);
        answer.push(newArr[commands[i][2]-1]);
    }
    return answer;
    // map을 이용하여 만들기
    //return commands.map((commands)=>{
    //  const [s, e, p] = command;
    //  return array.slice(s-1, e).sort((x, y)=> x-y)[p-1];
    //})
}
```

## 실전 20번
```js
function solution(arr, divisor) {
    let answer = [];
    
    // answer = arr.filter(el => el%divisor == 0);
    arr.forEach(el=>{
        if(el%divisor == 0)
            answer.push(el);
    });
    if(answer.length != 0)
        answer.sort((x,y)=>x-y);
    else
        answer.push(-1);
    return answer;
    // return answer.length ? answer.sort((x,y)=>s-y) : [-1];
}
```

## 실전 21번
```js
function solution(arr){
    let answer = [];
    let last = -1;
    arr.forEach(el=>{
        if(last != el){
            last = el;
            answer.push(el);
        }
    });
    return answer;
    //return arr.filter((v, i)=> v !=arr[i+1]);
}
```

# 선형 자료구조

## 자료구조
선형 자료구조: 배열, 큐, 연결리스트, 해시테이블, 스택. 데크  
비선형 자료구조: 그레프. 힙, 트리, 트라이

## 배열
여러 개체값을 순차적으로 나열한 선형 자료구조이다.  
### 대표속성과 메서드  
배열크기 및 배열 여부 확인: Array.length, Array.isArray()  
배열 추가/삭제 Array.push(), Array.pop(), Array.shift(), Array.unshift(), Array.splice(), Array.slice()등  
배열 탐색: Array.indexOf(), Array.lastIndexOf(), Array.includes()  
배열 변형: Array.sort(), Array.reverse(), Array.join()  
배열 반복: Array.sort(), Array.forEach(), Array.map(), Array.find(), Array.filter(), Array.reduce()  
배열 논리연산: Array.some(), Array.every()  

### 배열 기본 메서드
배열 선언/접근/속성  
선언: new Array()혹은 []를 통해 선언하며, 사이즈 혹은 값을 입력하여 초기화도 가능하다.  
접근방법 `Array[index]`를 통해 index를 통하여 O(1)복잡도로 접근한다.  
배열 속성 `Array.length`를 통해 배열 요소의 개수를 확인가능하다.  

### 배열의 실체
자바스크립트의 배열은 다른 언어의 일반적 배열이 아닌 Hash기반의 객체이다.  
메모리가 연속적인 밀집배열(dense array)가 아닌 비연속적인 희소배열(sparse array)이다.  

### 배열의 타입확인 및 요소 삭제
배열 타입 확인 : Array.isArray(value)  
배열 요소 삭제: delete array[index]  
(delete가 잘 사용되지 않는 이유: 지워도 배열의 크기가 줄어들지 않고 빈 공간이 남는다.)

### 배열 조작
LIFO(Back) 배열 추가 Array.push(element), 배열 삭제 Array.pop()  
LIFO(Front) 배열 추가 Array.unshift(element), 배열 삭제 Array.shift()  

배열 요소 삭제/ 변경: Array.splice(index, [deleteCount, element1, ...elementN])  
배열요소 삭제: Array.slice([start], [end])  
배열 병합: 다중배열병합: Array.concat(arg1, arg2)  

### 배열탐색
index탐색 (앞에서부터): Array.indexOf(item, from)
index탐색 (뒤에서부터): Array.lastIndexOf(item, from)
값 포함 여부 확인: Array.includes(item, from)

### 배열 변형
내림차순 정렬 Array.reverse(), 오름차순 정렬 Array.sort()
배열값을 문자로 변화니 Array.join(separator)

### sort()
sort()함수 매개변수로 함수를 넣어 고차함수를 이용한 정렬수행가능
```js
arr.sort((x, y)=> x-y); // 정렬시 Number가 String으로 자동 형변환 되어 비교하기에 이렇게 해야 수를 정렬 할 수 있다.
```


## 배열 반복문
반복문 문법: for...length(index접근), for...of(element접근), for...in(key접근)  
acumulator 이전함수결과(initial로 초기화 가능) , item 배열요소, index 배열위치, array배열  
### forEach()
배열요소별 콜백함수에 각각 실행 Array.forEach(function(item, index, array){})  
### map()
배열요소별 함수 호출 및 결과를 배열로 반환 Array.map(function(item, index, array){})
### find()
콜백함수의 조건을 만족하는, 단하나의 값만 반환 Array.find(function(item, index, array){})
### filter()
콜백함수의 조건을 만족하는 값을 배열로 반환 Array.filter(function(item, index, array){})
### reduce()
요소별 함수 수행 누적 결과값 반환: Array.reduce(function(accumulator, item, index, array){})

## 배열 논리연산
### some()
배열내 단 하나의 요소라도 콜백함수의 조건을만족하는 요소가 있다면 true, 아니면 false반환(빈배열인 경우 false반환)
Array.some(function(item, index, array){})
### every()
배열내 모든 요소가 콜백함수의 조건을 만족한다면 true, 아니면 false반환(빈배열인 경우 true반환)
Array.every(function(item, index, array){})

## N차원 배열
배열안에 N개만큼의 배열이 존재하는 객체
### 2차원 배열
array[N][M]으로 접근하며 전체를 push() pop()가능


## 배열 문제 풀이
## 3. 수열 최솟값 위치
[array01.js에서 전체코드 확인하기](./array01.js)

```js
function answer(nums){
  let result = [];
  // Math.min함수와 스프레드 연산자를 통해 최소값을 찾았다.
  let min = Math.min(...nums);
  nums.forEach((el, idx)=>{
    if(el==min)
      result.push(idx);
  })
  return result;
};
```

## 4. 체스 세트
[array02.js에서 전체코드 확인하기](./array02.js)
```js
function answer(chess){
  let result = [];
  const origin = [1, 1, 2, 2, 2, 8];
  // 주어진 샘플과의 차이를 새 배열에 넣어 출력했다
  for (let i = 0; i < chess.length; i++) {
    result.push(origin[i] - chess[i]);
  }
  return result;
};
```

## 5. 두수 최대 합
[array03.js에서 전체코드 확인하기](./array03.js)
```js
function answer(nums){
  let result = [];
  // 들어온 배열을 정렬후 맨 뒤의 두 수를 출력했다.
  nums.sort((x,y)=>x-y);
  for (let i = nums.length-1; i > nums.length-3; i--) {
    result.push(nums[i]);
  }

  return result;
};
```

## 6. 일곱 난장이
[array04.js에서 전체코드 확인하기](./array04.js)
```js
function answer(nums){
  let result = [];
  let total = 0;
  nums.forEach(element => {
    total+=element;
  });
  total -= 100;

  for(let i = 0; i < nums.length; i++){
    for (let j = i+1; j < nums.length; j++) { 
      if(nums[i]+ nums[j] == total){
        // 가짜 난쟁이를 제외한 요소를 map()를 통해 새 배열에 넣었다
        result = nums.map(el => {
          if(el != nums[i] && el != nums[j])
            return el;
        }).filter(el=> el != undefined);
        break;
      }
    }
  }

  return result;
};
```

## 7. 나무 그리기
[array05.js에서 전체코드 확인하기](./array05.js)
```js
function answer(num){
  let result = '';
  // for문을 한번만 사용하고 repeat()를 이용했다.
  for (let i = 0; i < num; i++) {
    let star = ' '.repeat(num-i-1) + '*'.repeat(i*2+1) + '\n';
    result += star;
  }
  return result;
```