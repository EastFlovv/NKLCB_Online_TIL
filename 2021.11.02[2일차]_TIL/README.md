# 2021.11.02 [2일차]


## 공부한 내용



## 학습 결과물
학습 결과물은 같이 포함된 파일에 동봉되었으며 각 TIL의 목록별 소제목에 링크가 달려있다.

### 강의 학습 현황

\> 러버덕, 강사님께 질문하며 공부한 내용, 프로그래머스 문제풀이 1문


# 러버덕 토론과 질의응답을 통한 학습내용

## var, let, const의 호이스팅
교재에 의하면 var, let, class, function, const등은 런타임 이전에 선언문을 모두 위로 끌어올리는 호이스팅이 발생한다고 한다.  
그런데 막상 코드를 통해 확인해보면 var는 정상적으로 호이스팅이 발생하는데에 비해 let과 const는 에러가 발생한다. 나는 이런 현상이 호이스팅이 되지 않는다고 생각하고 러버덕 토론에 이 현상을 질문했고 같은 조원이 힌트를 주어 다같이 찾아보고 이 현상의 이유를 알아냈다.  
let과 const가 출력하는 에러는 선언되지 않음을 알리는 에러가 아닌, 초기화 하지 않으면 접근할 수 없다는 에러이다.  
JS의 초기 선언 키워드는 var는 선언과 동시에 undefined로 초기화가 진행되는데, let과 const는 선언과 초기화가 분리되어 있어 호이스팅만으로는 메모리에 공간을 할당 받을 수 없고, 메모리가 없기때문에 런타임에서 코드를 읽기전에 접근하면 접근할 수 없다는 에러가 출력되는것이다.  
이러한 스코프의 시작부터 초기화 시작 지점까지의 구간을 TDZ (Temporal Dead Zone)이라고 하여 변수의 선언 이전에 참조하는것을 막고 있다.

## 변수
변수에 값을 재 할당할 경우 새 메모리 공간에 값을 만드는가?  
이것은 데이터의 변환을 자유롭게 하고자 함이라는 러버덕 토론의 결과가 나왔다.  
컴퓨터가 기본적으로 가지는 동작원리이기도 하며 관습적으로 굳어지기도 했다고 한다.  
그 외에도 변수에 대해 많은 내용을 설명 듣기도 했다.  
변수는 하나의 값을 저장하기 위한 공간인데 변수를 많이 생성하는것은 확률적으로 버그가 많아질 확률이 높아짐을 의미한다. 따라서 변수를 적게 선언하는것이 좋은 코딩인 이유는 메모리의 절약이 아닌 가독성을 높이고 버그가 나타날 확률을 줄이기 위함이다.  

## 표현식과 문
표현식은 값이 될 수 있으면 표현식이다.  
문은 세미콜론(;)으로 종결지을 수 있다.  
1은 그 자체로 값이므로 표현식이며 동시에 문이 된다 (1;)  
1+2또한 값이므로 표현식이며 동시에 문이된다. (1+2;)  
다만 1+2에서의 1은 표현식이지만 문이 될 수 없다. (1;+2는 문법적으로 옳지 않다.)
'정규 표현식은 표현식인가?' 라는 질문의 답은 '표현식이 맞다.' 였다. 정확히 말하자면 정규표현식은 하나의 객체이고, 객체는 값이므로 정규표현식은 표현식이 되는것이다.  

# 알고리즘 문제풀이

## 프렌즈 4블록
주어진 블록배열이 2*2의 영역에서 같은 블록만 존재한다면 삭제된다. 연속된 영역도 포함한다. 삭제된 블록의 빈공간은 위의 블록이 내려와서 채우고 그렇게 만들어진 배열로 다시 삭제할 수 있으면 삭제한다.  
삭제할 수 없을때 까지 삭제한 후 삭제한 블록의 갯수를 반환하라.
```js
// https://programmers.co.kr/learn/courses/30/lessons/17679
// 삭제 목록을 추출
function check(h, w, arr){
  const flag = arr[h][w];
  if(flag){ // 플래그가 0이 아니면
    return flag === arr[h+1][w] && flag === arr[h][w+1] && flag === arr[h+1][w+1];
  }
}

// 삭제
function del(pos, brd){
  brd[pos[0]][pos[1]] = 0;
  brd[pos[0]+1][pos[1]] = 0;
  brd[pos[0]][pos[1]+1] = 0;
  brd[pos[0]+1][pos[1]+1] = 0;
}

// 블록을 다시 쌓는다
function reStack(h, w, arr){
  let res = arr[h][w];
  if(res || h === 0){ // res가 0이 아니거나 h 가 0이 됬을때 멈춤
    arr[h][w] = 0;
    return res;
  }
  res = reStack(--h, w, arr);
  return res
}

function solution(m, n, board) {
  let answer = 0;

  // 이차원 배열 만들기
  const brd = [];
  board.forEach(el => {
    brd.push(el.split(''));
  });


  while(true){
    // 삭제 목록을 만듦
  const delPosition = [];
  for(let i = 0; i < m-1; i++){
      for(let j = 0; j < n-1; j++){
          if(check(i, j, brd)) delPosition.push([i,j]);
      }
  }

  if(!delPosition.length) break; // 삭제 할 값이 없으면 멈춘다.

  // 삭제
  while(delPosition.length){
    const pos = delPosition.pop();
    del(pos, brd);
  }
  // console.log(brd);
  
  // 채우기, 밑에서 부터 검사
  for(let i = m-1; i >= 0; i--){
    for(let j = 0; j < n; j++){
      // 0을 만나면 위를 검사해서 바꿈
      if(!brd[i][j]) {
        brd[i][j] = reStack(i, j, brd);
      }
    }
  }
  // console.log(brd);
  // 위 과정을 반복
  }

  // 0의 갯수를 센다
  brd.forEach(el=>{
    el.forEach(elmt => {
      if(!elmt) answer++;
    })
  })

  return answer;
}
```