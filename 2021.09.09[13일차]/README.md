# 2021.09.09 [13일차]

지난 시험이 학습계획표에 기재된 내용보다 앞서나간 문제가 나왔기 떄문에 오늘은 이번주 내용을 마무리 짓기 위해 `transform`과 `transition`, `animation`을 공부했다.  
`transform`, `transition`은 이전에 공부했던 내용이라 진도에 문제가 없었다.  
`animation`요소를 공부할때 `keyframes`를 통한 `animation`세팅을 미리하는것을 알게되었다.  
그렇다면 `keyframes`를 통한 `animation`작업이 `transform`, `transition`보다 좋을텐데 왜 `transform`과 `transition`을 이용하는지 의문이긴 하다.  
테스트 내용은 그다지 어렵지 않았다. 원래 알고있던 내용도 있고 오늘 배우게 된 요소들도 있어서 풀만했다.  
확실히 지난주에 공부했던 양보다 이번주의 양이 배는 많아서 테스트를 준비하는게 힘들었지만 막상 테스트를 보고나니 `grid`, `flex`를 물어보는것을 보고 공부를 더 많이 해야겠다고 느낀다.  


## 공부한 내용
- `transform`을 통해 요소의 크기, 회전, 기울이기, 이동효과등을 줄 수 있다.  
- `scale()`함수는 요소의 크기를 지정한다.
- `rotate()`함수는 요소를 회전시킨다.
- `translate()`함수는 요소를 이동시킨다.
- `skew()`함수는 요소를 기울인다.
- `transform-origin`은 `transform`의 효과가 적용될 원점을 변경하는 속성이다.
- `transition`은 전환효과를 나타낸다.
- `transition-property`는 전환효과가 적용될 요소를 선택한다.
- `transition-duration`은 요소가 바뀌는데 걸리는 시간을 지정한다.
- `transition-delay`는 요소에 `transition`효과가 적용되기까지의 지연시간을 나타낸다.
- `transition-timing-function`은 요소가 변하는동안 중간에 어느정도의 변화를 가지는지 정한다.
- `transition`요소들은 단축속성 `transition`을 통해 표현할 수 있다.
- `transition`과 `transform`을 합쳐 효과를 만들 수 있다.
- `@keyframes`를 통해 애니메이션의 특정지점에 효과를 넣을 수 있다.
- `animation-name`에 키프레임의 이름을 넣어 사용한다.
- `animation-duration`은 애니메이션의 한 사이클이 몇초에 걸처 재생될지 결정한다.
- `animation-delay`는 사이클의 지연시간을 설정한다. 음수도 사용가능하다.
- `animation-timing-function`은 애니메이션이 중간에 어느정도 변화를 가지는지 정한다.
- `animation-iteration-count`를 통해 애니메이션의 재생횟수를 정한다.
- `animation-direction`을 통해 키프레임의 재생방법을 선택한다.
- `animation-fill-mode`는 애니메이션이 실행되기 전과 후의 요소의 스타일을 지정한다.
- 단축속성 `animation`은 마지막에 `keyframes`값을 넣고 시간은 먼저 쓰인 값이 `duration`이다.


## 학습 결과물
오늘의 학습결과물은 TIL 최상위 파일의 '학습 결과물 살펴보기 링크에 추가되었습니다.

### 강의 학습 현황

\> CSS강의 'transform', 'transition', '애니메이션'


# transform

`transform`은 요소에 회전, 크기조절, 기울이기 및 이동효과를 부여할 수 있는데 속성입니다.  
`transform`을 적용하는 요소는 원본요소의 자리는 유지합니다.  
`transform`의 값으로 함수를 입력하며 여러개의 `transform`요소를 나타내고 싶다면 공백문자로 구분하여 사용합니다.

## scale
`scale()`함수는 요소의 크기를 변경하는 함수입니다.  
`scaleX()`, `scaleY()`를 통해 가로, 세로의 크기를 바꿀 수 있으며 `scale(x, y)`를 통해 가로, 세로를 한번에 조절할 수 있습니다.  
x, y의 값은 Number타입으로 1이 원래 크기를 의미합니다.
```css
.scale{
  transform: scale(0.5, 2);
}
```

## rotate

`rotate()`함수는 요소를 회전시키는 함수입니다.  
`rotate()`의 value로는 `<angle>`요소들이 들어갈 수 있으며 이러한 요소들은 `deg`, `grad`, `rad`, `turn`이 있습니다.  
양수이면 시계방향으로, 음수일땐 반시계방향으로 회전합니다.
```css
.rotate{
  transform: rotate(45deg);
}
```

## translate

`translate()`는 요소를 이동시키는 함수입니다.  
`translate(x, y)`를 통해 각각 가로, 세로로 움직입니다.  
하나의 값만 입력시 x축 이동을 합니다.  
%와 음수도 사용할 수 있으며 %는 자신이 속한 축의 width, height값을 기준으로 삼습니다.  
```css
.translate{
  transform: translate(-200px, 60%);
}
```

## skew

`skew()`함수는 기울이 기동작을 합니다.  
값은 x, y값을 받으며 하나만 입력시 x값만 받습니다.  
`<angle>`값을 통해 기울이는 각도를 조절합니다.
```css
.skew{
  transform: skew(10deg, 20deg);
}
```

## transform-origin

`trnasform-origin`은 요소에 `transfrom`이 적용될때 기준이 되는 원점을 변경하는 요소입니다.  
기본값은 `center`입니다. 값을 수로 입력시 원래 원점인 왼쪽 위에서 x, y값만큼 이동한 지점을 원점으로 삼는다.  
키워드로 값을 입력할수 있다. 
```css
.origin {
  transform-origin: right bottom;
}
```

# transition

전환효과, CSS상태에 변화를 줄때 시간요소를 더한다.  

## transition-property, transition-duration
`transition-property`는 바꾸고 싶은 CSS요소를 선택하는 요소이다.  
`transition-duration`은 바뀌는데 걸리는 시간을 지정하는 요소이다.
`transition-duration`의 값은 `<time>`을 입력한다.

```css
.transition{
  transition-property: all;
  transition-duration: 4s;
}
```

## transition-delay, transiion-timing-function

`transition-delay`는 요소의 transition효과을 얼마나 지연한 뒤 실행할지 지정한다.
```css
.delay{
  transition-delay: 2s;
}
```

`transition-timing-function`은 `transition-duration`동안 변하는 요소가 중간에 어느정도의 변화를 가질지 정하는 요소이다.  
값은 `<easing-function>`의 값을 사용한다.  
```css
.transTiming {
  transition-timing-function: ease;
}
```

## transition(shorthand)

단축속성 `transition`은 다음과 같이 작성한다.  
작성시 순서는 다음과 같소 기본값은 0s, all, ease등이다.  
name | duration | timing-function | delay
2가지 이상의 요소에 대해 작성시 ,로 구분한다.

```css
.transtionShort{
  transition: all 3s ease 1s;
}
```

# animation

## @keyframes

`@keyfames`을 통해 개발자가 애니메이션 중간의 특정 지점을 거칠 수 있는 키 프레임을 설정할 수 있다.  
```css
@keyframs my-anime{
  /* 요소가 animation이 진행되는동안 시작하자마자 color가 red, 시간의 절반이 지날때 blue, 마지막에 yellow가 된다. */
  0% {color: red;}
  50% {color: blue;}
  100% {color: yellow;}
}
```

## animation-name
키프레임의 이름을 입력하는 요소  
대소문자를 구분하며 사용가능한 특수문자는 '-','_' 두가지가 사용가능하다.  

## animaion-duration
애니메이션의 한 사이클이 몇초에 걸쳐 재생될지 결정한다.  
`<time>`값을 사용하며 0이상의 수만 쓸수있다.

## animation-delay
애니메이션 요소에 지연시간을 얼마나 줄지 결정한다.  
음수도 사용가능하다. 음수를 사용하면 애니메이션이 지정된 시간만큼 흐른뒤 시작한것처럼 중간부터 시작한다.

## animation-timing-function
애니메이션의 중간에 어느정도의 변화를 가질지 결정하는 요소이다.

```css
@keyframes moving {
  0% {
    transform: translate(0,0);
  }
  
  50% {
    transform: translate(500px,0);
  }
  
  100% {
    transform: translate(0,0);
  }
}

.ani2{
  width: 100px;
  height: 100px;
  border: 10px solid green;
  background-color: black;
  color: white;
  border-radius: 30px;  
  animation-name: moving;
  animation-duration: 3s;
  animation-timing-function: ease;
  animation-delay: -1s;
}
```

## animation-iteration-count
`animation-iteration-count`를 통해 재생횟수를 정할수 있다.  
`infinite`로 설정시 무한히 재생한다.
```css
.infinite {
  animation-iteration-count: infinite;
}
```

## animation-direction
키프레임을 어떻게 재생할지 결정한다.
value | direction
--|--
normal | 정방향 (기본값)
reverse | 역방향
alternate | 정방향, 역방향 반복
alternate-reverse | 역방향으로 시작하는 정방향, 역방향 반복

## animation-play-state
애니메이션의 실행과 정지를 지정한다.  
default값은 `running`으로 `pause`가 되면 animation을 멈춘다. 
```css
.animation:hover{
  /* 요소에 마우스를 올리면 중지 */
  animation-play-state: pause;
}
```

## animation-fill-mode
애니메이션이 실행되기 전과 후의 스타일을 지정한다.  
`none`, `forwards`, `backwards`, `both`를 값으로 사용한다.  
기본값은 `none`으로 아무런 기능이 없다.  
`forwards`는 애니메이션이 끝날때 keyframe의 마지막 모습을 요소에 유지한다.
`backwards`는 시작하기 전에 keyframe의 모습을 요소에 적용한다.
`both`는 `forwards`와 `backwards`를 둘 다 적용한다.  
```css
.fillmode{
  width : 100px;
  height: 100px;
  border : solid 2px black;
  animation: fill 3s linear;
  animation-fill-mode: forwards;
}

@keyframes fill {
  0%{background-color: red;}
  50%{width: 200px;}
  100%{background: black;}
}
```

## animation (shorthand)
단축속성 `animation`은 입력값이 없으면 기본값을 사용한다.  
작성에 있어 값의 순서는 상관없으나 시간중 먼저 쓰인 요소는 `duration`늦게 쓰인 시간은 `delay`가 된다.  
값의 마지막엔 `keyframes`의 이름을 넣는다.
```css
.fillmode{
  width : 100px;
  height: 100px;
  border : solid 2px black;
  animation: 3s linear forwards fill;
}

@keyframes fill {
  0%{background-color: red;}
  50%{width: 200px;}
  100%{background: black;}
}
```