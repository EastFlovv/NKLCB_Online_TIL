# 2021.09.07 [11일차]

오늘은 CSS요소 폰트와 박스모델 그리고 그 안에 들어가는 값과 단위에 대해 공부했다.  
`em`, `rem`, `vh`, `vw`와 같은 속성들이 실무에서 많이 쓰인다고 알고있었지만 독할을 할 때는 그저 `px`만 사용했었는데 직접 배우게 되면서 상당히 유용해보였다.  
font에 관한 내용은 대게 아는 내용이여서 복습하듯이 공부했다.  
margin collapsing은 처음 보는 개념이라 이해하는데 시간이 조금 걸렸던것같다.  
요지만 보면 content간에 아무런 경계없이 붙어있을경우 더 큰 margin을 사용하는것 같다.  
`word-break`나 `spacing`관련 내용 또한 일반적인 유튜브 css에서 비중있게 다루지 않던 내용이라 배웠던 내용이라고 마음을 놓고 공부해서는 안되겠다는 생각이 들었다.  

## 공부한 내용
- font의 크기, 기울임, 굴기를 정하는 `font-size`, `font-style`, `font-weight`를 배웠다.
- `font-fmaily`는 글꼴을 지정하는데 여러요소를 나열해 적용되지 않을경우 다른 글꼴로 대체할 수 있다.  
- `line-height`는 글자의 줄높이를 지정한다. 숫자를 입력해 배율적용한다.  
- 단축속성 `font`를 통해 글꼴을 스타일링 할 수 있다. size와 family는 필수요소.  
- `letter-spacing`, `word-spacing`은 각각 글자, 단어간의 간격을 조정한다.
- `text-align`은 텍스트 정렬속성이다. inline에서 사용불가
- `text-indent`는 들여쓰기를 한다.
- `word-break`는 한중일 텍스트와 그외의 텍스트가 값을 다르게 쓴다.  
- `word-transform`은 해당하는 글자요소에 일관된 스타일을 적용한다.
- 절대길이의 값으로 `px`을 사용한다.
- `em`은 해당요소의 글꼴 크기를 기준으로 `rem`은 root의 글꼴 크기를 기준으로 한다.
- `vh`, `vw`는 뷰포트를 기준으로 하는 상대길이이다.
- `vmin`, `vmax`는 가로세로 관계없이 긴 요소가 `vmax`이다.  
- %는 부모요소를 기준으로 값을 계산한다.
- 함수표기법을 통해 값을 지정할 수 있다. IE에서 사용불가
- 박스모델은 content, padding, border, margin으로 구성된다
- width, height를 통해 요소의 크기를 지정한다.
- `(max/min)-(width/height)`를 통해 최대 최소 크기를 지정할 수 있다.
- `margin`은 외부여백을 나타내며 각면의 크기를 다르게 줄 수 있다.
- `margin collapsing`은 여러 블록요소의 위/아래 `margin`이 경우에 따라 크기가 큰 `margin`으로 결합되는 현상이다.
- `padding`은 내부여백이다.  
- `border`는 테두리이며 -style, -width, -color를 통해 모양, 두께, 색을 다르게 줄 수 있고 각면마다 다르게 지정할 수있다.
- 그냥 `border`만 사용하면 shorthand요소이다.  
- `box-sizing`을 통해 요소의 크기 지정 방법을 정할 수 있다.


## 학습 결과물
오늘의 학습결과물은 TIL 최상위 파일의 '학습 결과물 살펴보기 링크에 추가되었습니다.

### 강의 학습 현황

\> CSS강의 '폰트관련속성' ~ '박스모델'

# 폰트 관련 속성

## font-size, font-style, font-weight

`font-size`는 글자의 크기를 나타냅니다. 
기본 크기는 16px입니다.  
`font-style`은 주로 italic체나 oblique체를 만들기 위해 사용합니다.  
`font-weight`는 폰트의 굵기를 결정합니다. 보통 100단위로 나누어 쓰며 400이 기본값입니다.  
700은 bold속성과 같습니다.

## font-family

`font-family`는 글꼴을 지정하는 속성입니다. 보통 기본글꼴은 맑은고딕체입니다.  
여러 글꼴을 나열하여 사용할 수 있는데 가장 앞의 속성부터 차례로 적용해보고 사용할 수 없다면 다음 속성을 적용합니다.
```css
font-family: Verdana, Tahoma, sans-serif;
```

## line-height

`line-height`는 줄의 높이를 지정합니다.  
글꼴별로 기본 높이가 다르며 숫자를 입력하여 기본크기의 배수로 사용할 수 있습니다.
```css
line-height: 2.0;
```

## font와 단축속성(shorthand)

`font`는 font와 관련된 단축속성입니다.  
`font`에는 size와 family에 대한 정보는 필수이며 순서는 상괍없습니다.  
추가로 작성할 수 있는 요소론 style, weight, line-height가 있습니다.  
```css
font: italic 700 20px Verdana, Tahoma, sans-serif;
```

## letter-spaceing, word-spacing

`letter-spacing`과 `word-spacing`은 각각 글자와 단어의 간격을 조정합니다.  
둘다 기본값은 normal입니다. 두 속성의 값에 5px이 들어갔다면 이 값은 normal+5px을 의미합니다.
%를 이용해 조절할 수 있으며 음수값도 받을 수 있습니다.
```css
letter-spacing: 5px;
word-spacing: 2px;
```

## text-align

`text-align`은 텍스트를 정렬방향을 결정하는 속성입니다.  
`text-align`속성은 인라인 요소에서는 사용할 수 없고 블럭요소에서만 사용할 수 있습니다.  
```css
text-align: center;
```

## text-indent

`text-indent`는 들여쓰기를 지정하는 속성입니다.  
`text-indent`역시 블럭요소에서만 사용이 가능하며 이 속성은 상속이 가능합니다.  
%를 이용해 값으 지정할 경우 부모요소의 `text-indent`을 참조합니다.

## text-decoration

`text-decoration`은 텍스트를 꾸미기 위한 4가지요소를 합친 shorthand입니다.  
필수값은 `text-decoration-line`입니다.  
추가로 `text-decoration-style`, `text-decoration-color`, `text-decoration-thickness`등을 더할수 있습니다.  
mutiple text decoration이 하고싶다면 style요소느 붙여서 열거해야합니다.  
```css
text-decoration: underline red wavy 5px;
```

## word-break

`word-break`는 텍스트가 자신의 콘텐츠 박스 밖으로 overflow할지 줄을 바꿀지 결정합니다.
`word-break`는 언어권별로 동작법이 다릅니다.
`normal`값은 기본값입니다.  
`break-all`은 한중일 텍스트에 적용이 되지 않으며 텍스트가 콘텐츠 박스밖으로 나가면 단어를 자르고 줄을 바꿉니다.  
`keep-all`은 한중일 텍스트에 적용되며 단어를 자르지 않고 줄을 바꾸는 방법입니다.
```css
word-break: break-all;
```

## text-transform

`text-transform`은 한글에 사용이 불가능 하고 터키어, 영어, 일본어등에서 사용가능합니다.  
`text-transform`의 속성을 사용하여 요소내의 텍스트를 모두 대문자로 표시하거나 소문자로 만들수 있습니다.
lowercase는 모두 소문자로 만듭니다.  
uppercase는 모두 대문자로 만듭니다.  
capitalize는 단어의 첫글자를 대문자로 만듭니다.

# 단위와 값

## 숫자, 길이, 백분율, px
CSS에서 값을 입력하는 단위로는 숫자, 길이, 백분율등이 있습니다.  
숫자는 말 그대로 수를 입력하면됩니다.  
길이의 경우 상대길이와 절대길이가 있는데 이중 절대길이는 `px`을 사용합니다.  
사용자의 브라우저한경의 확대, 축소에 영향을 받지 않습니다.  

## em, rem

상대길이의 경우 `em`,과 `rem`이 있습니다.
`em`은 스타일을 지정한 요소의 글자 크기를 1로 기준삼습니다.  
만일 지정되지 않았다면 부모요소로 부터 글꼴 크기를 상속받을것입니다.
해당 요소의 글꼴 크기가 10px이라면 `em=2`는 20px을 갖게 됩니다.
`rem`은 최상위요소(root)의 글꼴 크기를 참조합니다. 부모크기의 글꼴 크기가 20px이고 root의 글꼴 크기가 16px이라면 `rem=2`는 32px의 크기를 갖게 됩니다.  

## vw, vh

상대길이 요소로 `vw`, `vh`가 또 있습니다.  
이 요소들은 뷰포트의 상대길이를 의미하며, 뷰포트란 브라우저에서 웹사이트를 볼 수 있는 영역을 의미합니다.  
`100vw`는 뷰포트의 너비를 `100vh`는 뷰포트의 높이를 의미합니다.

## vmin, vmax

`vmin`, `vmax`은 상대모드 요소로 가로요소와 세로요소가 지정되어있지 않습니다.  
뷰포트의 길이를 비교해 더 긴 길이를 `vmax`로 더 짧은 길이를 `vmin`로 지정합니다.  

# percent

%는 부모요소로부터 백분율을 계산해 사용합니다  
viewport혹은 부모요소애 따라 CSS가 길이를 계산해서 출력합니다.

```css
.percentP {
  width: 100px;
  height: 100px;
  background-color: darkgreen;
}

.percentC {
  height: 50%;
  width: 50%;
  background-color: darkkhaki;
}
```
해당 코드에 의하면 percentC를 갖는 요소는 부모요소의 가로, 세로길이의 절반인 50px을 길이로 갖습니다.  


## 함수표기법 calc(), min(), max()

`clac()`는 claculate의 준말로 말 그대로 ()의 값을 계산하여 반환하는 함수입니다.  
사칙연산을 사용 할 수 있으며 각 연산자의 좌, 우는 공백을 넣습니다.  
```css
.calc {
  width: calc(100% - 300px);
  height: 100px;
  background-color: goldenrod;
}
```
`min()`, `max()`의 ()안에는 ,를 사용하여 값을 나열합니다.  
min(100%, 200px) 이면 둘중 작은것을 선택하고, min(100%, 200px) 이면 둘중 큰것을 선택합니다.  
함수표기법은 IE환경에서는 지원하지 않습니다.

# 박스모델 (BoxModel)
박스모델이란 HTML의 요소가 웹페이지에서 차지하는 공간을 정의하는 모델입니다.  
HTML의 요소는 안쪽부터 `content`, `padding`, `border`, `maring`으로 구분됩니다.

요소 | 영역
--|--
content | 콘텐츠 표시 영역
padding | 콘텐츠와 테두리 사이의 내부여백
border | padding과 margin사이의 테두리
margin | 가장 바깥쪽 레이어, 다른요소와의 공백역할을 한다.

## width, height

`width`는 가로, `height`는 세로의 길이를 지정합니다.  
들어갈 수 있는 값은 거리값과 %입니다.  
기본값은 auto이며 상속되지 않습니다.  
`inline`요소는 `width`, `height`를 통해 크기를 지정할 수 없습니다.

## (max/min)-width, (max/min)-height
`(max/min)-width`, `(max/min)-height` 두 요소는 해당 요소의 최대, 최소 길이를 지정합니다. 기본값은 auto입니다.  
함수 표기법의 `max()`, `min()`과 다르게 IE 7버전부터는 이 요소를 사용할 수 있습니다.  

```css

#con {
  /* 가로는 부모의 50%를 차지하지만 400px이하로는 줄어들지 않는다. */
  width: 50%;
  min-width: 400px;
  height: 300px;
  background-color: lightcoral;
}
```

## margin 

`margin`은 외부여백입니다.  
박스모델의 가장 바깥 영역입니다.  
4가지 속성을 합친 shorthand요소이고 초기값은 0입니다.

`margin`속성의 short표기법은 다음과 같습니다.  
```
margin: value -> 모든방향  
margin: value1, value2 -> 위아래, 좌우  
margin: value1, value2, value3 -> 위, 좌우, 아래 (시계방향)  
margin: value1, value2, value3, value4 -> 위, 우, 아래, 좌 (시계방향)  
```
`margin`의 값으로 %를 사용할 수 있습니다. 이때 기준의 부모의 `width`값을 사용합니다.

## margin collpasing (마진 상쇄)

마진 상쇄는 여러 블록요소의 위/아래 `margin`이 경우에 따라 크기가 큰 `margin`으로 결합되는 현상입니다.

마진 상쇄가 일어나는 경우는 다음과 같습니다.  
1. 인접형제 : 두 형제요소의 위/아래 여백이 만나 발생한다.
2. 부모-자식요소 : 부모 블록에 `border`, `padding`, inline-content가 없어서 부모자식간의 `margin-top`이 만나경우이다.
3. 빈블록 : `border`, `padding`, `inline-content`가 없고 `height`도 존재하지 않으면 해당 블록의 `margin-top`, `margin-bottom`이 만나 상쇄됨

## padding

`padding`은 박스모델에서 내부여백을 의미합니다. 이 속성 또한 shorthand로 이루어져 있는데, shorthand표기법은 `margin`과 동일합니다.

## border-style, border-width, border-color

`border-style`, `border-width`, `border-color`는 각각 테두리를 스타일링 하는 속성입니다.  
`border-style`은 테두리의 모양을 정합니다. 가장 많이 사용하는 실선은 `solid`입니다.  
`border-width`는 테두리의 두께를 정합니다. 값으로 length값들을 넣을 수 있으며 thin, medium, thick과 같은 값을 넣을 수도 있지만 브라우저마다 스타일링이 다르니 length값을 넣는것을 권장합니다.  
`border-color`는 테두리의 색상을 지정합니다.
각 속성은 ,를 통해 위부터 시계방향으로 각 며에 다른 스타일을 사용할 수 있습니다.  
```css
.borderTest{
  width:300px;
  height: 300px;
  background-color: lightblue;
  border-width: 10px;
  border-style: dashed solid;
  border-color: black red;
}
```

## border(shorthand)

앞서 본 `border-style`, `border-width`, `border-color`속성들은 `border`속성에 shorthand로 작성할 수 있습니다.  
```css
.borderShort{
  width:300px;
  height: 300px;
  background-color: blueviolet;
  border: 10px solid chartreuse;
}
```

## border-radius

`border-radius`는 요소 테두리의 경계의 꼭짓점을 둥글게 만듭니다.  
4개의 값을 차례로 입력해 왼쪽 위 모서리부터 시계방향으로 지정할 수 있습니다.  
`border-radius=150px`의 경우 각 모서리의 끝에서 반지름이 `150px`인 원이 있는 모양과 같습니다.
```css
.borderR{
  width:300px;
  height: 300px;
  background-color: skyblue;
  border: 10px solid red;
  border-radius: 150px;
}
```

## box-sizing

`box-sizing`은 요소와 너비와 높이를 계산하는 방법을 지정하는 속성입니다.  
기본값은 `content-box`입니다.  
이 값은 주로 `border-box`값을 사용하기위해 사용합니다.  
`content-box`로 이루어진 요소는 width와 같은 크기가 content의 크기를 지정해 content + padding + border의 크기를 width값으로 만들고 싶을땐 내부요소의 크기를 일일히 수정해야합니다.  
반면 `border-box`값을 사용하면 선언된 width와 같은 크기요소가 content + padding + border를 포함한 크기로 지정됩니다. 

```css
/* notboxsizing의 요소는 300px + 40px*2 + 30px = 410px이 전체의 가로길이입니다. */
.notboxsizing{
  width: 300px;
  height: 200px;
  background-color: darkseagreen;
  border:30px solid blue;
  padding: 40px;
}
/* boxsizing content + border + padding*2의 값이 300px입니다. */
.boxsizing{
  width: 300px;
  height: 200px;
  background-color: darkseagreen;
  border:30px solid blue;
  padding: 20px;
  box-sizing: border-box;
}
```