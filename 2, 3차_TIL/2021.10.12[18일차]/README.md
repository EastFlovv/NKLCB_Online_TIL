# 2021.10.12 [18일차]

오늘은 알고리즘 기법을 마저 공부했다. 오늘은 병합정렬과 퀵 정렬에 대해 배우고 어제와 오늘 배운 각각의 정렬기법이 어느정도의 성능 차이를 가지는지 성능측정을 통해 걸리는 시간에 대해 알아보았다.  
특이하게도 같은 기법의 알고리즘을 써도 오름차순, 내림차순에 따라 시간이 차이가 매우 크게 나타났다는것이다.  
정렬 이후 탐욕 알고리즘을 공부했다. 나는 이전에도 거스름돈 문제에서 최소의 동전수를 구할때 많이 힘들어 했는데 알고보니 이게 단순한 그리디 알고리즘이였다는것을 알았다.  
내가 힘들어 하던 문제에 대한 딱 알맞는 해답을 얻게 되어 너무 좋다. 다만 그리디 알고리즘이 항상 최적해를 구하는것은 아니므로 사용에 주의를 해야겠다.  
그 이후에는 백트래킹 기법에 대해 배웠는데 백트래킹 기법은 알고리즘 진행도중 현재의 진행 방향에서 해를 찾을 가능성이 0이 되면 해당 진행을 버리고 다음 진행으로 넘어가는것을 의미한다.  
이러한 기법이 큰 데이터를 처리함에 있어 시간을 많이 단축 시킬수 있다.  
내일은 비정기 테스트가 있다. 또한 테스트가 연속으로 있어 복습을 하기위해 자료구조에 관한 문제를 많이 풀어봐야겠다.

## 공부한 내용
- 병합 정렬 알고리즘은 모든 요소를 1개가 될때까지 나눈뒤 다시 병합시키면서 정렬하는 알고리즘이다.  
- 퀵 정렬 알고리즘은 pivot을 기준으로 왼쪽에는 작은 값 오른쪽엔 큰값을 놓고 pivot의 위치를 확정시켜 정렬하는 기법이다.
- 병합 정렬, 퀵 정렬은 시간복잡도가 O(n log n)으로 다른 정렬에 비해 매우 빠르다.
- 탐욕 알고리즘은 매 순간 최적 해를 선택해 해를 도출하는 방식의 알고리즘이다.
- 탐욕 알고리즘이 매 순간 최적 해를 구하지만 그것이 결과의 최적해를 보장하지는 않는다.
- 백트래킹은 알고리즘은 경우의 수를 진행중 현재 조건에서는 해를 찾을 수 없다는게 확실해지면 현재 진행을 버리고 다른 경우의 수로 진행하는 알고리즘 기법이다.

## 학습 결과물
학습 결과물은 같이 포함된 파일에 동봉되었으며 각 TIL의 목록별 소제목에 링크가 달려있다.

### 강의 학습 현황

\> 자바스크립트 비선형 알고리즘 '6. 정렬(5)' ~ 알고리즘 '15. 문제풀이 - 타겟넘버'

## 병합 정렬 (Merge Sort)
하나의 배열을 두개의 균등한 크기로 분할하고, 부분 정렬하며, 이를 다시 합하면서 전체를 정렬해가는 알고리즘이다.  
평균 시간 복잡도 O(n log n)  
알고리즘 동작 방식: 모든 요소가 한개가 될 때 까지 분할 -> 병합하며 정렬한다.  

## 병합 정렬의 구현
병합 정렬의 주요 구현부, 재귀를 통해 구현한다.
```js
let mergeSort = function(arr, compare){
  if(arr.length === 1) return arr; // 배열에 값이 하나만 남으면 배열을 리턴

  let m = (arr.length/2).toFixed(0); // 중앙값
  // 재귀
  let left = mergeSort(arr.slice(0, m), compare); // 왼쪽으로 재귀
  let right = mergeSort(arr.slice(m), compare); // 오른쪽으로 재귀

  let i = 0, j = 0, k =0; // 사용할 변수

  while(i < left.length && j < right.length){ // left와 right는 각각 정렬된 배열
    arr[k++] = compare(left[i], right[j]) ? right[j++] : left[i++]; // 비교하여 정렬한다.
  }
  // 한쪽이 끝나면 나머지 부분을 모두 삽입
  while(i < left.length) arr[k++] = left[i++];
  while(j < right.length) arr[k++] = right[j++];

  return arr; // 일련의 과정이 끝나면 정렬된 배열을 반환
}
```

## 퀵 정렬
특정 값(pivot)을 기준으로 큰 숫자와 작은 숫자를 분할하여 정렬하는 알고리즘이다.  
평균 시간 복잡도 O(n log n)  
알고리즘 동작 방식 : 분할 -> 부분 배열 정렬 -> 전체 정렬  

## 퀵 정렬의 구현
퀵정렬의 주요 구현부, 재귀를 통해 구현
```js
let quickSort = function (arr, compare, s = 0, e = arr.length-1) { // s는 시작점 e는 끝점
  let start = s; // start는 시작점
  let pivot = arr[e]; // pivot은 현재 배열의 끝점

  for(let i = s; i <= e; i++)  { // s에서 e까지 반복
    if(compare(pivot, arr[i])){ // pivot과 각 배열의 값을 비교한다. 오름/내림차순에 따라 true, false를 반환
      swap(arr, start, i); // 조건이 true라면 start와 i의 위치를 바꾼다
      start++; // start는 다음 위치로 이동
    }
  }
  swap(arr, start, e); // 피봇과 start의 위치를 바꾼다. pivot 정렬완료

  if(start - 1 > s) quickSort(arr, compare, s, start-1); // start-1이 s보다 크면 start-1의 위치 변경
  if(start + 1 < e) quickSort(arr, compare, start+1, e); // 반대도 마찬가지
}
```

## 성능측정
benchmark를 통해 배열간 성능측정을 할 수 있다.  
각 정렬에 따른 성능 측정, 오름차순/내림차순의 차이도 시간의 차이가 크게 난다.
```
배열크기: 30000

bubbleSort      ascending        1882ms
bubbleSort      desccending      8118ms
selectionSort   ascending        316ms
selectionSort   desccending      3457ms
insertionSort   ascending        174ms
insertionSort   desccending      1773ms
mergeSort       ascending        25ms
mergeSort       desccending      29ms
quickSort       ascending        14ms
quickSort       desccending      12ms
```


## 이진 검색(Binary Search)
자료구조 기반으로 정렬되어 있는 데이터 안에서 특정 값을 찾는 기법이다.  
평균 시간 복잡도: O(n log n)  
- 구현방법 및 메서드  
  반복문을 이용한 검색: binarySearch_loop()  
  재귀를 이용한 검색: binarySearch_Recursive()  

## 이진 검색의 구현
반복문을 이용한 이진 검색의 구현
```js
function binarySearch_loop(arr, n) {
  let lowIndex = 0;
  let midIndex = 0;
  let highIndex = arr.length - 1; // highIndex는 배열의 끝

  while(lowIndex <= highIndex){ // lowIndex가 highIndex보다 작거나 같다면 계속 반복한다
    midIndex = Math.floor((lowIndex + highIndex)/2); // midIndex는 배열길이의 평균값에서 소수점을 버린다.
    if(arr[midIndex] > n){ // 목표값이 midIndex의 배열값 보다 크면
      highIndex = midIndex-1; // 값은 좌측에 있으므로 highIndex는 midIndex-1
    }else if(arr[midIndex] < n){ // 목표값이 midIndex의 배열값 보다 작으면
      lowIndex = midIndex+1; // 값은 우측에 있으므로 lowIndex는 midIndex+1
    }else return midIndex; // midIndex의 배열값이 목표값이라면 midIndex반환
  }
  return -1; // 배열에서 값을 찾을 수 없으면 -1을 반환한다.
}
```

## 탐욕 알고리즘
매 순간 최적 해를 선택하면서 최종적으로 최적해에 도달하는 알고리즘 설계 기법이다.  
- 탐욕 알고리즘의 특징  
  최적 부분 구조나 탐욕 선택 속성 문제를 해결하는데 적합하다.  
  매 순산 최적 해를 찾으면서 구하는 방법이 항상 최적임을 보장하지 않아 유의가 필요하다.  

## 탐욕 알고리즘 문제풀이
문제 1 : 거스름돈  
탐욕 알고리즘을 통해 가장 큰 동전을 거슬러 줄 수 있으면 사용하고, 아니라면 다음 동전의 케이스로 넘어간다.
```js
function solution(n){
  let coin = [500, 100, 50, 10, 5, 1]; // 동전의 배열
  let answer = 0; // 동전갯수

  n = 1000 - n; // 잔돈 n
  for(let i = 0; i< coin.length; i++){ // 동전 배열만큼 반복한다
    while(n >= coin[i]){ // n이 동전 배열의 크기보다 크다면
      n -= coin[i]; // n에서 동전의 값 만큼 차감한다.
      answer++; // 거슬러준 동전 +1
    }
  }
  // 반복이 끝나면 동전의 갯수가 나옴
  return answer; // 동전 갯수 반환
}
```

문제 2 : 체육복
전체 학생수 체육복이 없는사람의 배열, 체육복이 있는 사람의 배열을 준다.  
체육복은 자신의 번호 앞, 뒤로만 빌려줄 수 있고 본인이 입는것을 우선시한다.
```js
function solution(n, lost, reserve) {
  let losted = [...lost].filter((x) => !reserve.includes(x)); // 체육복이 없는사람
  let reserved = [...reserve].filter((x)=> !lost.includes(x)); // 잔여 체육복이 있는사람
  let answer = n-losted.length; //체육복이 있는 사람의 수
  
  let db = {}; // 체육복의 보유 여부를 key-value형태로 저장하기 위한 객체

  for(let i = 0; i < reserved.length; i++){
      db[reserved[i]] = true; // 잔여 체육복이 있는 사람들은 true로 바꾼다.
  }
  
  losted = losted.sort((x,y)=>x-y); // 체육복이 없는 사람들의 번호를 정렬 (오름차순)
  
  for(let i = 0; i < losted.length; i++){ // 잃어버린 사람들의 수 만큼 반복
      if(db[losted[i] - 1]){ // 자신의 앞사람이 있다면 (값이 true이므로 블록 진입)
          answer++; // 체육복을 가진 사람의 수 + 1
          db[losted[i] - 1] = false; // 앞사람의 보유 여부를 false로 바꾼다.
      }else if(db[losted[i]+1]){ // 자신의 뒷사람이 체육복이 있다면
          answer++; // 체육복을 가진 사람의 수 + 1
          db[losted[i]+1] = false; // 뒷사람의 보유 여부를 false로 바꾼다.
      }
  }
  return answer; // 체육복을 보유한 사람의 수를 반환한다.
}
```


## 백트래킹
경우의 수로 해를 찾는 도중 해가 나올수 없는 조건일때 이를 중단하고 다른 경우의 수로 해를 찾는 알고리즘 기법이다.  
- 백트래킹 특징  
  해가 될 가능성이 있으면 지속적 탐색, 가능성이 없다면 가지치기(pruning)하여 빠르게 전체 해를 탐색한다.  
  해가 되지 않는 경우의 수는 배재하여 해를 찾는 시간복잡도를 단축한다.  

## 백트래킹 문제풀이
이전에 풀었던 DFS문제 타겟넘버에 백트래킹 기법을 추가한다.
```js
function dfs(numbers, target, sums, index, total){
  let count = 0;
  if(numbers.length === index){
      return total === target ? 1 : 0;
  }
  
  //백트래킹
  if (target > total && target > total + sums[index] || // target이 total보다 크고 target이 total과 남은값의 합보다 크다면 변할수 없다.
      target < total && target < total - sums[index]) // target이 total보다 작고 target이 total과 남은값의 차보다 작다면 변할수 없다.
      return 0; // 0을 리턴

  count+= dfs(numbers, target, sums, index+1, total+numbers[index]);
  count+= dfs(numbers, target, sums, index+1, total-numbers[index]);
  return count;
}

function solution(numbers, target) {
  // 백트래킹을 위한 코드
  let sums = new Array(numbers.length); // sums배열을 수의 숫자만큼 선언
  let sum = 0;
  for(let i = numbers.length; i >= 0; i--){ // i는 배열의 길이값부터 시작 매 반복마다 -1
      sum += numbers[i]; // sum에 현재 순회의 값을 저장
      sums[i] = sum; // 누산 값이 저장된다. 이 배열 값으로 백트래킹을 판별한다.
  }
  
  return dfs(numbers, target, sums, 0, 0);
}
```