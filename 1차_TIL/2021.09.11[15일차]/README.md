# 2021.09.11 [15일차]

오늘은 색상과 배경, transform, transition, 애니메이션을 복습하고 HTML, CSS연습문제와 코딩테스트 문제를 풀어보았다.  
아직 코딩테스트 문제는 반밖에 풀지 못했다.  HTML, CSS연습문제에서 높이값없이 align-content를 적용하려고 시도하다가 지속적인 검색과 시도 끝에 높이값 없이는 적용이 불가능하다는것을 알고 margin을 통한 공백을 만든뒤 wrap만 사용해서 예제를 만들 수 있었다.  

코딩테스트 연습문제의 경우 2번에서 난관이 있었는데 결국 주먹구구식으로 만든 알고리즘이라 제대로 된 답을 출력하긴 하나 좀 더 좋은 방법이 있을것 같다.  
알고리즘 공부를 더 열심히 해서 더 빠르고 효율적인 알고리즘을 사용할수 있도록 해야겠다.

## 공부한 내용
- `opacity`와 `rgba()`의 투명요소는 잘 구분해서 사용해야한다.  
- `background-image`를 통해 요소의 배경을 이미지로 사용할 수 있다.  
- `background-image`의 부가 요소로는 `-repeat`, `=position`, `-origin`, `-size`가 있다.
- `transition`을 통해 요소의 모양에 변화를 줄 수 있다.
- `scale()`은 크기, `rotate()`는 회전, `skew()`는 기울이기 `translate()`는 이동을 한다.
- `transition`을 통해 요소의 변화를 시간을 들여 진행 할 수 있다.  
- `transition`의 부가요소로는 `-property`, `-duration`, `-delay`, `-timing-function`이 있다.
- `animation`은 `@keyframes`를 통해 요소의 변화 중간의 특정지점을 골라 지속적인 변활를 줄 수 있다.  
- `animation-iteraion-count`를 통해 애니메이션의 반복횟수를 정할수 있다.
- `animation-direction`을 통해 애니메이션의 진행방향을 선택할수 있다.
- `animation-fill-mode`를 통해 애니메이션 전후의 요소 형태르 정할 수 있다.
- media query를 사용해 반응형 웹사이트를 만들수 있다. 
- 높이값 없이 `align-content`를 사용할 수 없다.
- `Math.floor()`에 음수를 사용하면 값이 -1된다.

## 학습 결과물

오늘의 학습결과물은 TIL 최상위 파일의 '학습 결과물 살펴보기 링크에 추가되었습니다.

### 강의 학습 현황

\> CSS강의 '색상과 배경', 'transform', 'transition', '애니메이션' 복습, HTML,CSS연습문제 1~5풀이, 코딩테스트 연습문제2 1~3풀이

## 색상과 배경

`opacity`는 요소 전체의 불투명도를 조정한다. `rgba()`의 투명도 조절은 요소의 내용엔 영향을 끼치지 않는다.  
`background-image`를 통해 요소의 배경으로 이미지를 넣을 수 있다.  
이미지는 `background-repeat`속성의 값을 `no-repeat`로 하지않으면 요소를 가득채울때 까지 반복출력된다.  
`background-position`을 통해 이미지가 요소내의 어느위치에 출력될지 결정할 수 있다.  
`background-origin`을 통해 이미지가 `border`, `padding`, `content`영역중 어디를 기준으로 출력할지 정할수 있다.
`background-size`를 통해 요소의 크기를 지정 할 수 있다.  


## transform

`transform`은 요소의 크기 변형, 회전, 기울이기, 이동 등을 할수있게해주는 속성이다.  
값으로는 함수가 쓰이며 쓰이는 함수에 따라 적용하는 스타일이 다르다.  
`scale()`은 크기 지정요소이다.  
`rotate()`를 통해 기울일 수 있다. 많이 쓰는 매개변수의 값은 deg값이다.
`translate()`를 통해 요소를 이동 할 수 있다. 이동하고자 하는 x, y의 길이값을 매개변수로 넣는다.  
`skew()`를 통해 요소를 기울일 수 있다. deg를 매개변수로 쓰는데 90deg로 돌리면 요소가 보이지 않게된다.

## transition

`transition`은 요소의 변화가 일어나는 시간을 지정할 수 있다.
`transition-property`를 사용하여 어느 요소에 시간요소를 더할지 정할수 있다.  
`transition-duration`을 통해 요소가 변하는 시간을 지정할 수 있다.  
`transition-delay`를 통해 요소가 변하기 전에 지연시간을 줄 수 있다.  
`transition-timing-function`을 통해 요소가 변하는 동안의 강도조절을 할 수 있는데 사용값은 easing function이다.

## animation

`animation`은 `@keyframes`를 통해 요소 중간의 효과를 다양하게 줄 수 있는것을 빼면 `transition`과 매우 흡사하다.  
`@keyframes`의 예제는 다음과 같다.  
```css
@keyframes anime {
  0%{color:red;}
  50%{color:yellow;}
  100%{color:blue;}
}
```
`animation-name`은 사용될 `@keyframes`의 이름을 넣는곳이다.  
`animation-duration`은 애니메이션의 한 사이클이 도는 시간이다.  
`animation-delay`는 애니메이션의 지연시간인데, 특이하게 음수값을 줄 수 있다. 이 경우 |음수값| 만큼의 시간이 흐른뒤의 애니메이션이 바로 시작한다.
`animation-timing-function`도 요소가 변하는 동안의 강도조절이다. 사용값은 `transition`과 동일한 easing function.
`animation-iteraion-count`는 애니메이션이 실행될 횟수를 적는다. `infinite`작성시 무한반복한다.  
`animation-direction`은 애니메이션의 실행방향을 결정한다.  
`animation-fill-mode`는 요소가 애니메이션의 실행 전후로 어떤 모습을 할지 결정한다.  

## HTML, CSS 연습문제

### 연습문제 1번

연습문제 1번은 클래스 선택자를 제대로 쓸 수 있는지에 대한 문제였다.  
```css
.content {
  width: 100px;
  height: 100px;
  margin: 10px 15px 20px;
  padding: 10px;
  border: 1px solid black;
}
``` 
다음 코드를 HTML의 `class="content"`로 된 `<div>`에 적용하면 된다.

### 연습문제 2번

`<li>`의 `display` 속성을 `inline`으로 변경한뒤 `float:right`를 통해 오른쪽 끝으로 가로 배치 할 수 있다.  
한줄로 이루어진 요소들 이기때문에 `line-height`를 `heigt`값인 64px로 맞추어 박스의 중앙에 정렬할수 있다.  
밑줄요소는 `border-bottom`속성을 통해 `<div>`의 아래쪽에만 밑줄을 그을수 있다.


### 연습문제 3번

`flex-wrap:wrap`를 통한 줄바꿈 문제였다.  
일단 flex items가 flex container를 넘기 때문에 `flex-wrap:wrap`을 통해 자동 줄바꿈 요소를 더해줬다.  
현재 flex container의 높이 요소가 정해지지 않아 `align-content`가 적용되지 않으므로 이미지 요소에 `margin`값을 추가해 요소간 간격을 벌린다.  
`justify-content: flex-start`는 기본값이기 떄문에 적용하지 않아도 된다.

### 연습문제 4번

미디어 쿼리를 이용한 반응형 웹사이트 제작
요구 조건은 뷰포트의 width값이 720px이 되면 모바일 화면으로 전환하는것이다.
미디어 쿼리는 `@media`로 선언하여 사용하는데, `@media 미디어 타입 and 조건 {}`으로 작성한다.  
실제 적용된 미디어 쿼리는 다음과 같다.  
```css
  /* width의 최대 크기가 720px이하일때   */
  @media screen and (max-width:720px) {
    main {
      width: 100%;
    }

    aside {
      position: static;
      width: auto;
    }
  }
```
기존 요소들의 위치를 바꾸는 형식이라 위치값만 조정하면 됬다.

### 연습문제 5번

모바일 화면 기준이라는것은 미디어 쿼리를 사용하라는것이 아닌 그냥 모바일 인터페이스로 작성하라는것으로 해석했다.  
실제 네이버 웹툰의 댓글창을 pc를 통해 모바일 버전을 보면 만든것과 비슷한 모양새가된다.
대부분의 요소가 앞서 나온 문제들을 풀었다면 해결할 수 있는 요소이고 유일하게 다른 요소는 바로 `word-break`였다.  
단어가 줄바뀜에 잘리지 않도록 `word-break: keep-all;`속성을 통해 댓글창을 관리했다.

### 코딩테스트 연습문제2 1번

흥민이는 자신의 차례에 1kg을 받으면 패한다. 마찬가지로 5kg을 받아도 패하고 9kg을 받아도 패한다.  
즉 흥민이는 시작하는 모래의 무게가 4의배수 + 1일경우 무조건 진다.  
따라서 `모래무게%4 == 1`일경우 `false`를 출력한다.

### 코딩테스트 연습문제2 2번

패턴과 낱말을 배열로 저장한뒤 이중반복문을 통해 전체 비교를 한다.  
이때 패턴과 낱말은 각각 자신의 기준값과 비교값을 통해 `True`, `False`를 반환하여 비교한다.  
이 두 `boolean`의 비교가 `False`가 나오면 즉시 반복문을 탈출하여 `False`를 출력하고 아닐경우 `True`를 출력하면 된다.

### 코딩테스트 연습문제2 3번

입력값으로 들어온 수는 정수형이다.  
입력값이 절대값으로 100,000을 넘을 경우 바로 0을 출력한다.  
절대값으로 100,000을 넘지 않는다면 `while`문을 돌려 입력값의 절대값이 0보다 작아질때까지 반복한다.  
반복문 안에서 `input%10`을 통해 가장 뒤의 수를 `newNum * 10`을 하고난 값에 더한다.  
그리고 `input`값은 `input/10`을 한뒤 `Math.floor()`를 통해 소수점을 버린다.  
이때 input이 음수라면 `Math.floor()`의 값에 1을 더해야한다.  