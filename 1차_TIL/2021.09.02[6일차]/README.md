# 2021.09.02 [6일차]
테스트 준비를 위해 어제 마저 못한 목록과 표에서 임베디드 요소까지 복습했다.  
`<ol>`을 정확히 알고 있으면 `<ul>`도 확실하게 알 수 있었다.  
`<dl>`의 경우는 `<table>`에 비하면 어렵지 않아 쉽게 익힌 기분이다.
`<table>`은 익혀야 할 요소가 많지만 겉모습만 어려울뿐 생각보다 어렵게 느껴지지 않았다.  
`<img>`, `<video>`, `<audio>`는 세세한 부분은 다르지만 많은 부분이 일치 하고 있어 묶어서 공부하니 쉽게 익힐 수있었다. `<img>`와 `<video>`의 텍스트 출력의 이유가 다르다는것만 조심하면 될것 같다.  
반응형 이미지는 개념은 이해됬지만 아직 제대로 모바일 환경을 고려한 페이지를 만들어본적이 없어 헷깔리기도했다.  
그대로 어제 복습한 내용과 오늘 복습한 내용을 반복하며 보며 테스트를 준비했다.  
테스트는 보기보다 어렵지 않았는데 몇가지 헷깔리는 문제가 있었다.  
특히 open graph의 경우 예전에 따로 클론코딩을 할때 배우지 않았다면 절대 못푸는 문제였을것 같다.  
이번 테스트를 통해 강사진들이 원하는것은 인강으로만 공부하는것이 아닌 그이상 스스로 찾아서 하는 공부를 원한다는것을 알았다.

테스트 이후 `<form>`관련 요소를 학습했다. 학습한 내용은 아래 후술한다.


## 공부한 내용

- `<form>`은 이전까지 배운 내용과 다르게 정보를 제출하기 위한 대화형 컨트롤을 포함하는 문서구획이다.  
- `action`과 `method`속성을 통해 양식 데이터를 처리할 방법을 결정한다.
- `<label>`은 `<input>`의 설명을 나타낸다.
- `<input>`은 다양한 값을 입력받을 수 있다.  
- `<label>`과 `<input>`을 형제 요소로 쓰려면 `<label>`의 `for`속성을 `<label>`은 `<input>`의 `id`속성과 맞춰야한다. 
- `<fieldset>`은 웹 양식의 여러 컨트롤과 레이블을 묶을때 사용한다.  
- `<legend>`는 부모요소인 `<fieldset>`를 설명하는 요소로 `<fieldset>`의 첫 자식요소로 나와야한다.
- `<input>`엔 다양한 `type`이 존재한다. 자세한 내용은 본문에 정리되어있다.
- `palceholder`, `required`, `autocomplete`를 이용하여 `<input>`을 더 유용하게 사용할 수 있다.


### 강의 학습 현황

\> HTML강의 中 '목록과 표'~ '폼 관련 요소 - input - name, placeholder, autocomplete, required'

## ul, ol, li

`<ol>`는 Ordered list로 순서가 있는 목록입니다.  
반대로 `<ul>`은 Unordered list로 순서가 없는 목록입니다.  
`<li>`는 위 두 태그의 아이템으로 사용되는 태그입니다.  

`<ol>`의 경우 `type`속성을 통해 순서를 지정하는 불렛을 바꿀 수 있습니다.  
`type`의 값은 다음과 같습니다.  
기호 | 표기
--|--
1 | 숫자
a | 알파벳 소문자
A | 알파벳 대문자
i | 로마자 소문자
I | 로마자 대문자

`<ol>`의 속성 `start`의 값을 통해 목록을 중간부터 시작할 수 있습니다.  
비슷한 요소로 `<li>`의 `value`속성을 통해서도 바꿀 수 있습니다.
```html
<ol start = "8">
  <li>content</li> <!-- 8. contnent -->
  <li value = "10">contetn</li> <!-- 10. contnent -->
  <li>content</li> <!-- 111. contnent -->
</ol>
```
`<ol>`에 `reversed`속성을 사용하면 역순출력이 됩니다.
`<ul>`는 전역속성만 사용합니다.  
`<ol>`, `<ul>`, `<li>`는 요소의 중첩이 가능합니다.

## dl, dt, dd

`<dl>`은 설명 목록입니다.  
주로 용어사전, 메타데이터 설명에 사용합니다.  
`<dt>`는 설명하려는 요소를 기입하고, `<dd>`는 요소의 설명을 기입합니다.

```html
<dl>
  <dt>A</dt>
  <dd>describe A</dd>
</dl>
```
`<dt>`, `<dd>`는 1대1로 매칭되지 않아도 됩니다.  
하나의 단어가 여러 뜻을 가질수도 여러단어가 하나의 뜻을 가질수도 있으니 `<dt>`, `<dd>`를 여러번 사용하여 표현 하면됩니다.  
`<div>`요소를 통해 `<dt>`, `<dd>`를 묶어 구분해도 되지만 `<dt>`, `<dd>`는 `<div>`의 형제 요소가 될 순 없습니다.  

## table, tr, th, td

`<table>`는 표를 만드는 태그입니다.  
`<tr>`는 table row 즉 행을 나타냅니다.  
`<th>`는 table head로 행이나 열의 대표값을 말합니다.  
`<td>`는 table data로 값을 의미합니다.  
`<th>`의 속성 `scope`는 `row`, `col`값을 통해 해당 데이터가 어느 열이나 행을 대표하는지 명시적으로 나타냅니다. (웹 접근성)

`colspan`속성은 셀을 합치는 속성입니다.

```html
<table>
  <tr>
    <th scope = "row"></th>
    <th></th>
  </tr>

  <tr>
    <td colspan = "2"></td>
    <td></td>
  </tr>
  
  <tr>
    <td></td>
    <td></td>
  </tr>
</table>
```

## thead, tbody, tfoot

`<table>`또한 `<html>`의 `<header>`, `<footer>`처럼, `<thead>`, `<tbody>`, `<tfoot>`으로 구획을 나눌 수 있습니다.  
단 `<thead>`사용시 `<tr>`은 형제요소로 올수 없습니다. `<tbody>`나 `<tfoot>`이 와야합니다.  
`<caption>`은 표의 전체를 아우르는 설명을 하는 태그입니다. 이는 `<table>`의 내부요소로 `<table>`의 첫번째 자식요소로 와야합니다.  

`<caption>`이 포함된 `<table>`이 `<figure>`의 유일한 자식요소라면 `<caption>`대신 `<figcaption>`을 사용하여야 합니다.  

## img

`<img>`는 이미지를 삽입하는 빈 태그입니다.  
`src`속성을 통해 출력하려는 이미지의 경로를 표시하는데 경로를 표시하는 방법은 절대경로와 상대경로가 있습니다.  
절대경로는 이미지가 있는 정확한 주소를 작성하면 되지만 상대경로의 경우 현재위치를 기준으로 경로를 지정해야합니다.  

`alt`속성은 `<img>`의 링크가 올바르지 않을때 대체되는 텍스트를 출력하기 위한 대체텍스트 속성입니다. 이는 스크린 리더에서 이미지를 읽을때도 사용됩니다.  
`width`, `height`속성은 이미지의 가로, 세로의 길이를 결정하는데 두 속성중 하나만 쓰이는 경우 원래 이미지의 비율에 맞추어 다른 속성의 길이가 자동으로 조절됩니다.  

`<img>`에 주로 쓰이는 이미지는 JPEF, PNG, GIF, WEBP, SVG가 있습니다.  
각 이미지는 다음과 같은 특징을 가집니다.

유형  | 요약
--|--
JPEG |정지 이미지의 손실 압축에 적합하다. (현재 가장 많이 사용됨)
PNG | PNG는 원본 이미지를 보다 정확하게 보여주거나 투명도가 필요한 경우 JPEG보다 선호된다.
GIF | 여러장의 이미지로 이루어진 애니메이션 표현 가능, 단 색상이 적어 이미지가 깨질수 있다.
WEBP | Google에서 만든 이미지 포멧, 품질, 압축률등이 훨씬 우수하나 지원 브라우저가 제한적이다.
SVG | 다양한 크기로 정확하게 그려야 하는 아이콘, 다이어그램 등에 사용된다.

특히 SVG이미지의 경우 앞선 이미지들과 다른 벡터 이미지 인데 이는 이미지에 대한 수학적 정보를 가진 파일입니다. 따라서 확대를 해도 이미지 손상이 없으나 복잡한 이미지를 표현하는데 한계가 있어 주로 아이콘이나 로고에 쓰입니다.  

## 반응형 이미지

반응형 이미지를 만들기 위해 `<img>`에 `srcset`이라는 속성을 사용할 수 있습니다.  
이 속성은 여러개의 경로를 가지며 사용자의 viewport에 반응해 각기 다른 이미지를 출력합니다.  
사용자의 뷰포트를 측정하는데는 너비서술자 `w`, 밀도서술자 `x`를 사용합니다.  
또한 IE에서는 srcset을 지원하지 않으므로 기본값으로 사용될 src를 넣어야 합니다.

```html
<img
  src = "./medium.png"
  srcset = 
    "./small.png 300w ./medium.png 450w ./large.png 600w"
  alt = "responsive image"
/>
```

`sizes`속성은 소스의 크기를 나타내는 요소로 viewport의 크기에 따라 이미지가 어느정도 크기로 출력되지를 결정합니다.  
`sizes`의 값은 미디어조건, 소스크기의 값 두가지로 결정되며 마지막에는 미디어 조건을 생략합니다.  

## video

`<video>`는 `<img>`와 비슷하지만 빈요소가 아니고 영상을 출력하는 태그입니다.  
`<video>`의 내용은 브라우저에서 영상을 지원하지 않을때 나오는 텍스트입니다.  
`src`를 통해 영상의 경로에서 파일을 가져오는것은 같지만 자식요소로 `<source>`속성을 사용할 경우 `src`속성을 사용하지 않습니다.  
`<video>`는 여러가지 속성을 통해 영상을 제어할수 있는데 `controls`속성을 통해 영상을 조작할 수 있는 컨트롤 패널을 출력할 수 있습니다.  
`autoplay`속성을 사용하면 영상을 자동재생 시킬수있으나 `muted`속성이 같이 적용되어있지 않다면 사용자경험을 해칠 수 있어 `autoplay`가 작동하지 않을 수 있습니다.  
`loop`속성을 이용하면 영상이 끝나면 처음으로 돌아가 반복재생되게 할 수 있습니다.  
`poster`속성은 영상의 썸네일을 결정하는 속성인데 정해진 값이 없다면 영상의 첫 프레임을 사용합니다.  

## audio

`<audio>`는 `<video>`와 작성에 큰 차이가 없습니다.  
`<audio>`, `<video>`는 multiple source라는것을 통해서도 작성 할 수 있습니다.  
```html
<audio>
  <source src = ./videos/file_example.mp4 />
  <source src = ./videos/file_example.mp4 />
  <source src = ./videos/file_example.mp4 />
  지원하지 않는 브라우저입니다.
</audio>
```

## canvas, iframe

`<canvas>`는 HTML로만 작성하기엔 그 기능이 많이 한정적인 태그입니다.  
그림을 그릴수 있게 해주는 태그인데 JavaScript의 도움이 필요합니다.  

`<iframe>`은 인라인 프레임요소로 외부 HTML을 가져와 프레임 안에 출력합니다.  
주로 지도와 같은 기능을 만들때 사용합니다.

## form

`<form>`는 사용자에게 값을 입력받는 대화형 컨트롤을 하는 문서구획입니다.  
`<form>`는 단독 사용시 아무것도 표시하지 않습니다.  

`<form>`의 속성으론 `action`, `method`가 있는데 `action`은 양식데이터를 처리할 프로그램의 URI를 입력받고, `method`는 양식을 제출할때 사용할 HTTP메서드를 결정합니다.  

`method`는 3가지 방식이 있는데 기능은 다음과 같습니다. 
method | 기능
--|--
post | 양식데이터를 요청본문으로 보낸다.
get | 양식데이터를 action url과 ? 구분자 뒤에 붙여서 전송한다.
dialog | 양식이 dialog면 제출과 함께 대화상자를 닫는다.

get방식은 주소창에 사용자가 입력한 값이 보여 보안에 취약하기 때문에 주로 검색에 쓰입니다.
post방식은 서버에서 데이터를 받기 때문에 주소창에 사용자의 값이 보이지 않습니다.

## label, input

`<label>`은 사용자 인터페이스 항목의 설명을 나타냅니다.  
`<input>`은 입력요소입니다. `tpye`속성을 통해 여러항목을 입력받을 수 있습니다.  

`<label>`의 `for`속성은 `<input>`의 구분요소로써 `<input>`의 `id`값과 대응합니다.  
```html
<label for ="ace"></label> 에이스는 누구?
<input type = "text" id = "ace" />
```
`id`는 전역속성이므로 중복되어서는 안됩니다.

```html
<label> 에이스는 누구?
  <input type = "text"/>
</label>
```

`<input>`이 `<label>`의 자식요소라면 `for`속성이 없어도 됩니다.

## fieldset, legend

`<filedset>`은 웹 양식의 여러 컨트롤과 레이블을 묶어서 사용하는 태그입니다.
`<legend>`는 부모요소인 `<fieldset>`의 콘텐츠 설명을 나타내고 `<fieldset>`의 첫 요소로 작성해야합니다.

```html
<fieldset>
  <legend>에이스는 누구?</legend>
  <label> 
    <input type = "text" name = "ace"/>
  </label>
</fieldset>
```

<fieldset>
  <legend>에이스는 누구?</legend>
  <label> 
    <input type = "text" name = "ace"/>
  </label>
</fieldset>

스타일링을 위해 `<filedset>`을 통한 묶기를 사용하지마세요. 스타일링을 위한 묶기는 `<div>`를 사용해야합니다.  

## input의 type속성

`<input>`의 `type`은 다양한 값을 입력 받을 수 있습니다.

`type = text`  
<label> text는 문자한줄을 입력합니다.  
  <input type = "text" name = ""/>
</label>

`type = password`  
<label> password는 입력된 텍스트를 마스킹합니다.  
  <input type = "passwod" name = ""/>
</label>

`type = email`  
<label> email은 이메일형식만 받습니다.  
  <input type = "email" name = ""/>
</label>

`type = tel`  
<label> tel은 전화번호를 받습니다.  
  <input type = "tel" name = ""/>
</label>

`type = number`
<label> number는 숫자만 받습니다.  
  <input type = "number" name = ""/>
</label>

`type = range`  
<label> range는 값이 가려진 숫자를 받습니다.  
  <input type = "range" name = ""/>
</label>

`type = date`  
<label> date는 시간을 제외한 날짜를 받습니다.  
  <input type = "date" name = ""/>
</label>

`type = month`  
<label> month는 달만 받습니다.  
  <input type = "month" name = ""/>
</label>

`type = time`  
<label> time은 시간을 받습니다.  
  <input type = "time" name = ""/>
</label>

`type = submit`
<label> submit은 제출버튼을 만듭니다.  
  <input type = "submit" name = ""/>
</label>

`type = button`  
<label> button은 빈 버튼을 만듭니다
  <input type = "button" name = "" value = "빈 버튼"/>
</label>

`type = reset`
<label> reset은 format 내부의 정보를 초기화 합니다.  
  <input type = "reset" name = ""/>
</label>

`type = checkbox`
<label> 체크박스는 중복이 가능한 체크요소입니다.  
  <input type = "checkbox" name = "cb1"/>A
  <input type = "checkbox" name = "cb2"/>B
  <input type = "checkbox" name = "cb3"/>C
</label>

`type = radio`  
<label> radio는 중복이 허용되지 않는 체크요소입니다.  
  <input type = "radio" name = "r"/>A
  <input type = "radio" name = "r"/>B
  <input type = "radio" name = "r"/>C
</label>

`radio`는 속성 `name`의 값이 같아야 중복을 허용하지 않습니다.  

## name, palceholder, autocomplete, required

`<input>`의 `name`속성은 해당 필드가 어떤 데이터를 가지고 있는지 구분하는 속성입니다  
`<input>`의 `placeholder`속성은 해당 `<input>`에 어떤 내용이 들어가야하는지에 대한 힌트입니다. 값이 들어오면 사라집니다.  
`<input>`의 `autocomplete`속성은 자동완성기능을 제공합니다 `autocomplete = "on"`으로 사용합니다.  
`<input>`의 `required`속성은 반드시 제출되어야하는 `<input>`에 적용합니다. 공란으로 제출할 수 없게 만듭니다.

```html
<form>
  <label>텍스트 제출
    <input type = "text" placeholder = "반드시 텍스트를 입력하세요." autocomplete = "on" name = "required_text" required>
  </label>
  <input type= "submit">
</form>
```
<form>
  <label>텍스트 제출
    <input type = "text" placeholder = "반드시 텍스트를 입력하세요." autocomplete = "on" name = "required_text" required>
  </label>
  <input type= "submit">
</form>