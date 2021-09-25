# 2021.09.08 [12일차]

내일 있을 테스트를 대비해 진도를 일찍 나가기로 했다.  
이전의 테스트의 경험으로는 범위가 사실상 그 주의 모든 학습과정이였다.  
게다가 추가적인 내용이 더욱 나와 진도를 조금 서둘렀다.  
레이아웃 요소와 색상, 배경에 관한 요소를 공부했다.  
`float`이나 색상 지정의 `HexCode` 그리고 `opacity`와 `rgba()`의 차이 등 주의해서 공부해야할 내용이 곳곳에 보인다.  
`position: absolute`의 경우 부모요소를 찾는 명확한 기준을 알게됬다.
`background`요소중 `background-origin`은 처음에 이해가 잘 안됬다. 각 값에 따른 배경의 위치를 잘 알아둬야 문제를 안틀릴것 같다.

## 공부한 내용
- `block`요소는 크기 지정이 되며 세로로 배치된다.  
- `inline`요소는 크기지정이 되지 않으며 가로로 배치된다.
- `inline-block`은 크기지정이 되며 가로로 배치된다.  
- `flaot`은 요소를 normal flow에서 빼 띄워두듯이 배치한다.
- `position`의 값을 통해 요소의 위치를 바꿀 수 있다.
- `position: relation`은 자기자신을 기준으로 배치한다.
- `position: absolute`는 `position: static`이 아닌 부모요소를 기준으로 배치한다.
- `position: fixed`는 뷰포트를 기준으로 배치한다.
- `position: sticky`는 스크롤 요소를 기준으로 배치한다.
- `overflow`는 넘침요소에 대한 처리를 지정한다.
- `z-index`는 정수값을 사용하며 높은 값 일수록 위로 배치된다.
- 색상은 키워드, `HexCode`, `rgb()`, `rgba()`로 표현할 수 있다.
- `opacity`는 요소의 불투명도를 조절한다 `raba()`의 투명도 조절과 달리 content까지 영향을 받으므로 조심해야 한다.
- `background-color`, `background-image`는 배경의 색과 이미지를 지정한다. `background-color`가 `background-image`보다 뒤에 위치한다.
- `background-repeat`은 이미지의 반복을 지정한다.  
- `background-position`은 이미지의 위치를 지정한다. 키워드와 length값을 사용할 수 있다.
- `background-origin`은 배경요소가 어디에서 시작할지 지정한다.
- `background-size`는 이미지의 크기를 지정한다. `contain`은 최소길이를 기준으로 `cover`는 최대길이를 기준으로 한다.
- `background`는 `background-`요소의 단축속성이며 몇가지 규칙에 따라 작성되어야한다.


## 학습 결과물
오늘의 학습결과물은 TIL 최상위 파일의 '학습 결과물 살펴보기 링크에 추가되었습니다.

### 강의 학습 현황

\> CSS강의 '레이아웃' ~ '색상과 배경'


# 레이아웃

## block, inline, inline-block

HTML의 각 요소는 `block`, `inline`, `inline-block`의 `display`값을 가지고 있다.  
### block
block요소인 대표적 HTML태그는 `<div>`이며 block요소는 영역의 크기를 `width`, `height`로 지정할 수 있다.  
`width`값이 없다면 가로영역 전체를 차지하고 block요소가 연속될 경우 세로로 배치된다.  

### inline  
inline요소의 대표적 HTML태그론 `<span>`이 있으며 inline요소는 영역의 크기가 내부 콘텐츠의 크기로 정해진다.  
`margin`이나 `padding`을 통한 여백 또한 `top`/`bottom`엔 줄 수 없다.  
여러 요소가 배치 될 경우 가로로 배치된다.  

### inline-block
inline-block요소는 `inline`과 `block`의 특성을 둘 다 가진 요소로 `<input>`이 대표적이다.  
이 요소들은 영역의 크기를 `width`, `height`로 지정할 수 있고 여러요소를 배치할때 가로로 배치된다.  

## 요소를 없애자 disaply: none, visibility: hidden

`display`의 값을 `none`으로 주거나, `visibility`의 값을 `hidden`으로 주면 레이아웃에서 해당 요소를 보이지 않게 할 수 있다.  
이러한 두 요소는 해당 컨텐츠를 눈에 보이지 않게 하는 공통점을 가지고 있지만 큰 차이가 있다.  
`display: none`의 경우 요소를 레이아웃에서 완전히 배제하여 보이지 않게한다.  
요소가 본래 위치하던 자리에 다른 요소가 들어간다.  
반면 `visibility: hidden`의 경우엔 요소가 원래 있던 자리를 비워두고 보이지 않게 된다.


## float

`float`는 요소가 브라우저의 일반적 배치흐름인 normal flow를 벗어나 텍스트 및 인라인 요소가 자기 컨테이너를 감싸게 하는 형태를 지정한다.
```css
.imgg{
  /* 이 요소는 100 * 100의 크기로 형제요소의 텍스트에게 둘러 쌓일수 있다. */
  float:left;
  width: 100px;
  height: 100px;
  margin : 10px;
}
```

## position

`position`은 요소의 위치를 이동시키는 속성으로 기본값은 `static`을 가진다.  
`position: static;`을 가진 요소는 normal flow에 의해 배치가된다.  

### position: relative

`position: relative`는 해당하는 요소를 normal flow에 따라 배치한뒤 자기 자신을 기준으로 이동한다.  
`position: relative`사용 시 `top`, `left`, `bottom`, `right`를 사용할 수 있으며, `left:10px`은 해당 요소를 왼쪽에서 부터 오른쪽으로 10px만큰 이동시킨다는 뜻이다.
`position: relative`에서 top, bottom처럼 반대 방향으로 적용된 요소는 top과 left를 우선시한다.  

### position: absolute

`position: absolute`는 요소를 normal flow에서 제거하고 레이아웃 공간에 배정하지 않는다.  
조상 요소중 `position`의 값이 `static`이 아닌 요소를 기준으로 배치를 한다.  
조상 요소에 해당하는 요소가 없다면 `body`를 기준으로 배치한다.  

### position: fixed

`position: fixed`는 normal flow에서 요소를 제거하고 viewport의 초기 컨테이닝 블록을 기준으로 삼는다. (body)

### position: sticky

`position: sticky`는 normal flow에 맞춰 요소를 배치하고 가장 가까운 스크롤이 되는 조상을 찾아 배치된다.

## overflow

`overflow`는`overflow-x`, `overflow-y`두 요소를 합친 속성이며, 요소가 부모 컨테이너의 범위를 넘어갈때 넘치는 요소를 어떻게 처리할지에 대한 속성이다.  
기본값은 `visible`로 넘치는 요소를 그대로 출력한다.  
`overflow`의 값으론 `hidden`, `scroll`, `auto`가 있다.  
`overflow: hidden`은 넘치는 요소를 숨긴다.  
`overflow: scroll`은 넘치는 요소를 스크롤 바로 숨긴다.  
`overflow: auto`는 브라우저가 동작을 고른다.  

## z-index 

`z-index`는 요소의 z축 순위를 지정한다.
정수로 값을 지정하며 더 큰 값일수록 위로 올라가며 기본값은 auto이다.  
요소의 `position`이 `static`이면 사용할 수 없다.  

# 색상과 배경

## Hex, rbg, rbga

CSS에서 색상은 여러가지 방법으로 표현할 수 있다.  
첫번쨰는 키워드로 `color: red;`와 같이 색상에 지정된 키워드로 색을 지정하는 방법이다.  
두번쨰 방법은 `HexCode`를 이용하는것인데 색상을 16진수로 표현하는 방법이다.  
색상을 입력할때 `#`을 기입한뒤 뒤에 6자리의 16진수를 입력하여 색상을 만든다. 각 수는 2개씩 묶어 각각 R, G, B를 의미한다.
```css
color: #00FF4a;
```

세번쨰 방법은 `rbg()`함수이다. `rgb()`함수 안에 0~255사이의 정수를 ','로 구분하여 3개를 넣는는다.  
각각의 위치는 R, G, B를 의미한다.
```css
color: rgb(0,0,0);
```

네번째 방법은 `rbga()`함수이다.  
이 함수는 `rbg()`와 사용방법이 같고 마지막에 불투명도에 대한 값이 들어간다.  
투명도로 0.0~1.0값으로 작성한다.  
```css
color: rbga(0, 255, 0, 0,5);
``` 

## opacity

`opacity`는 요소의 불투명도를 설정하는 요소로 0.0 ~ 1.0의 값을 사용하고 %로도 표현할 수 있다. 0은 완전투명 1은 완전불투명을 의마한다.  
주의해야할 점으로 `rbga()`와 다르게 `content`까지 투명해진다.  
자식요소는 이 값을 상속하지 않는다.  

## background-color, background-image

`background-color`, `background-image`는 각각 배경의 색상, 이미지를 지정하는 속성이다.  
`background-color`는 `background-image`보다 뒤에 랜더링 되므로 `background-image`에 투명요소가 있다며 뒤의 `background-color`가 보이게된다.  
```css
background-image: url("#");
```

## background-repeat
background-repeat은 배경의 이미지 반복 방법을 지정하는 요소로 기본값은 `repeat`로 반복을 한다.  
`background-repeat`는 `repeat-x`, `repeat-y`를 지정된 가로, 세로로 반복을 명시 할 수 있다.  
`background-repeat: no-repeat`을 사용하면 반복읗 하지 않는다.  

## background-position
`background-position`은 백그라운드 이미지의 위치를 변경하는 요소이다.  
`background-position`의 값은 차례대로 x, y의 좌표값을 공백으로 구분하여 선언한다.  
`background-position`의 값은 left, center와 같은 키워드로 작성이 가능하다. 이때 키워드의 순서는 중요하지 않다.

## background-origin

`background-origin`은 배경요소가 어디서 부터 시작할지 지정하는 속성으로, `content-box`, `padding-box`, `border-box`세가지 값이 있다.  
기본값은 `padding-box`이다.  
`content-box`의 경우 배경요소가 padding이후에 등장하는 content영역에서 시작하게 된다. 따라서 `content-box`로 지정된 컨테이너에 `padding`과 `border`가 존재한다면 배경요소는 `border`와 `padding`의 거리만큼의 거리를 두고 출력된다.  
`border-box`는 반대로 `border`의 시작영역에서 부터 이미지를 출력한다. `border`와 배경요소가 같이 있다면 둘은 겹쳐서 출력된다.


## background-size
`background-size`는 이미지의 크기를 설정한다. 늘리거나 줄이고 공간에 맞출 수 있다. 기본값은 auto  
원하는 사이즈를 지정하거나 %를 통해 값을 지정할 수 있다. %를 사용할 경우 width값을 기준으로 사용한다.  
`contain`값을 가질경우 요소의 안쪽을 비율을 유지하며 가득채우는데 이때 배경이미지의 최소길이를 기준으로 채운다.  
바대로 `cover`는 요소의 안쪽을 비율을 유지하며 채우되 기준은 최대길이를 기준으로 한다.

## backgound (shorthand)

단축속성 `backgound`는 색상, 이미지, 원점, 크기, 반복등을 한번에 지정한다.  
각 값은 공백으로 몇가지 규칙이 있다.  
`background-color`는 사용시 반드시 마지막 값으로 와야한다.  
`background-size`는 `background-position`의 뒤에 와야하며  두값은 /로 구분한다.
```css
background: no-repeat contain/80% red;
```