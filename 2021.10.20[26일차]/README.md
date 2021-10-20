# 2021.10.20 [26일차]

오늘은 이진 탐색문제를 풀었다.  
이진 탐색 문제들이 비슷하면서도 중간에 예외 조항이 들어가면 문제 풀기가 급격하게 어려워 지는것 같다.  
특히 배열내에서 중복된 요소를 포함한 상태에서 이진 탐색을 하게 되면 원하는 값이 중복값에 의해 나오지 못하는 경우가 많고 문제에서 배열을 마치 순환하는 형태처럼 사용하는 경우에도 꽤나 어려웠다.  
하지만 대개 두개의 포인터와 중앙값을 이용해 포인터를 조정하는 개념은 그대로 여서 이진 탐색을 확실히 이해 할 수 있어 아주 좋았다.  
몇가지 문제는 이진 탐색보다 더 빠를것 같은 방법이 있어 이진 탐색으로 풀지 않은것도 있다.

## 공부한 내용

- 리트코드 문제풀이

## 학습 결과물
학습 결과물은 같이 포함된 파일에 동봉되었으며 각 TIL의 목록별 소제목에 링크가 달려있다.

### 강의 학습 현황

\> 리트코드 문제풀이

## 35. Search Insert Position
정렬된 배열에 지정값을 삽입 할때 어느 위치에 삽입 해야 할지 인덱스를 반환하는 문제
```js
let searchInsert = function (nums, target) {
  let left = 0;
  let right = nums.length-1; // 좌, 우 포인터
  let answer = 0;
  let mid = Math.floor(right/2); // 중앙값
  while (true) {
    if(left === right){ //좌, 우가 같은 포인터를 가리킬때
      if(nums[left] >= target) answer = left; // 타겟값보다 현재 배열값이 크거나 같으면 현재 인덱스를 답으로
      else answer = left+1; // 아니라면 다음 인덱스를 답으로 준다
      break;
    }

    if(nums[mid] === target) { // 중앙값이 타겟값과 같다면
      answer = mid; // mid인덱스가 정답
      break;
    }
    else if (nums[mid] < target) left = mid+1; // 그렇지 않고 중앙값이 타겟보다 작다면 left 는 mid+1로 이동
    else right = mid; // 크다면 right는 mid로 이동
    
    mid = Math.floor((left + right)/2); // 중앙값 재설정
    
  }
  return answer;
};
```

## 69. Sqrt(x)
지정값보다 작은 수 중 가장 큰 제곱근정수 값을 출력
```js
let mySqrt = function(x) {
   return Math.floor(Math.sqrt(x)); // 제곱근을 만든뒤 소수점을 모두 버린다
};
```

## 167. Two Sum II - Input array is sorted
오름차순으로 정렬된 배열에서 덧셈으로 타겟값을 만들 수 있는 두 요소의 길이값을 반환(index +1)
```js
 let twoSum = function(numbers, target) {
  let left = 0;
  let right = numbers.length-1;
  // 투 포인터
  while(true){ // 좌 우로 좁혀오며 합이 목표보다 크면 right를 감소
    if(numbers[left] + numbers[right] > target) right--;
    if(numbers[left] + numbers[right] < target) left++; // 합이 목표보다 작으면 left를 증가
    if(numbers[left] + numbers[right] === target) break; // 정답을 찾는다
  }
  return [left+1, right+1]; // 길이값 출력
};
```

## 278. First Bad Version
여러 버전중 가장 처음으로 잘못된 버전을 찾는 문제
```js
// 이진탐색
let solution = function(isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function(n) {
    
    let left = 0; // 시작버전
    let right = n; // 전체 버전
    
    while(left < right){
      let mid = Math.floor((left+right)/2); // 이진탐색 시작
      if(isBadVersion(mid)){ // 중앙값이 첫 버전이 아닐때
        right = mid;
      }else{ // 중앙값이 정상 버전일때
        left = mid +1;
      }
    }
    return right; // 값을 반환
  };
};
```

## 350. Intersection of Two Arrays II
첫 배열에서 두번째 배열이 가지고 있는 요소를 배열로 출력한다.  
중복되는 만큼 출력해야하며 순서는 신경쓰지 않는다.
```js
 let intersect = function(nums1, nums2) {
  let answer = [];
  for(let i = 0; i < nums1.length; i++){
    if(nums2.includes(nums1[i])) { // 두번쨰 배열이 첫번째 배열의 값을 갖고 있으면
      answer.push(nums1[i]); // 그 값을 새 배열에 넣고
      delete nums2[nums2.indexOf(nums1[i])]; // 두번쨰 배열에서 그 값을 지운다
    }
  }
  return answer;
};
```

## 367. Valid Perfect Square
정수의 제곱근이면 true 아니라면 false를 출력하는 문제
```js
let isPerfectSquare = function(num) {
  let jud = Math.sqrt(num);
  return Number.isInteger(jud);
};
```

## 441. Arranging Coins
동전이 1, 2, 3, 4... 계단형으로 쌀인다 주어진 수만큼의 동전을 가지고 있을때 완벽하게 만든 계단의 마지막 동전수를 출력
```js
 let arrangeCoins = function(n) {
  let ans = 0;
  let sum = 0;
  while(true){
    sum += ans; // 현재값을 더한다
    if(sum === n) break; // 전체 동전이 주어진 동전과 같으면 break
    if(sum > n){ // 주어진 합이 동전의 총량보다 크면 현재값을 -1하고 break
      ans--;
      break;
    }
    ans++; // 현재 값 증가
    
  }
  return ans; // 값을 출력
};
```

## 704. Binary Search
주어진 배열안에 타겟값이 있는 인덱스를 반환 하는 문제, 타겟값이 존재하지 않는다면 -1을 반환한다.
```js
let search = function(nums, target) {
  let left = 0;
  let right = nums.length-1;
  let mid = Math.floor((left + right)/2);
  
  while(true){
    if(nums[mid] === target) break; // 타겟값을 찾으면 break
    if(left === right){ // 두 포인터가 만나면 타겟값이 없음
      mid = -1; // mid = -1
      break; 
    }
    if(nums[mid] > target) right = mid; // 포인터의 움직임
    if(nums[mid] < target) left = mid + 1;
    mid = Math.floor((left + right)/2);
  }
  return mid; // 반환
};
```

## 852. Peak Index in a Mountain Array
배열을 하나의 높이로 생각하고 맨 윗값의 인덱스를 찾는 문제  
이진 탐색으로 풀려다가 더 좋은 방법이 떠올라서 쉽게 푼 문제
```js
let peakIndexInMountainArray = function(arr) {
  let max = Math.max(...arr); // 배열 내의 max값을 구한다
  return arr.indexOf(max); // max의 인덱스를 반환
};
```