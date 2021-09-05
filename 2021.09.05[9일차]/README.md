# 2021.09.05 [9일차]

오늘은 목록과 표 ~ 임베디드 요소를 복습했다.  
복습을 하면서 잘못 이해하고 있던 `<source>`의 멀티 소스사용에 대해 정확히 이해를 하게 되었다.  
멀티소스요소를 통해 여러 요소를 동시에 출력하는것인줄 알고 있던 것이 알고보니 가능한 요소가 나올때 까지 시도해보는 것 이였다.  
복습을 마치고 코딩 테스트 아재개그를 풀기 시작했다.  
입력받은 요소를 2중배열로 만들어 4*4의 퍼즐을 만드는것 까지는 괜찮았는데 JS에서의 두번째 요소입력이 문제였다.  
아직 JS의 입출력을 완벽히 이해하지 못한것이 문제였다 NODE.js의 홈페이지로 가 readline의 문서와 여러 블로그를 봤지만 아직 두번쨰 요소를 받는 방법을 만들지 못하고 있다.

## 공부한 내용

- 목록과 표, 임베디드 요소에 대해 복습한 내용은 기재하지 않겠다.
- `<video>`, `<audio>`의 `<source>`를 활용한 muti source를 통해 여러 확장자의 영상, 오디오를 여분으로 비치해 둘 수 있다.
사용자의 브라우저에서 특정 확장자를 지원하지 않더라도 다른 파일이 이를 대체하여 재생할 수 있다.
- JS에서 입력받은 값을 split을 통해 배열로 만들어 변수에 저장할 수 있다.  
- 이렇게 저장한 변수를 반복문을 통해 새변수에 배열로만들어 배열에 배열을 저장하는 2중배열의 형태로 만들 수 있었다.
```javascript
let k=0;
//4*4배열을 만들기 위해 이중반복문을 사용한다.
for (let i = 0; i < 4; i++) {
  //매 행의 시작시 row를 초기화 한다.
  let row = new Array;
  for (let j = 0; j < 4; j++) {
    //1차원 배열인 originArr에서 값을 하나씩 입력한다.
    row.push(originArr[k]);
    //다음요소로 가기위해 index로 사용중인 k를 1 증가시킨다.
    k++;
  }
  //새 행으로 넘어가기전에 2중배열으로 사용할 변수에 배열 row를 담는다.
  newArr[i] = row;
}
```
- readline모듈을 한번에 한줄씩 읽을 수 있는 인터페이스를 만들수 있다.
- readline.createInterface()를 통해 인터페이스를 만들수 있으며, input과 output모두 표준 입출력에 연결하면된다.
- readline의 on(),close()를 통해 인터페이스를 열고 닫을 수 있으며 question()을 통해 질문을 하는 인터페이스를 열 수 있다.

## 학습 결과물
오늘의 학습결과물은 TIL 최상위 파일의 '학습 결과물 살펴보기 링크에 추가되었습니다.'

### 강의 학습 현황

\> HTML강의 '목록과 표', '임베디드 요소', JS의 이중배열, readline모듈에 대한 공부

## ol, ul, li

`<ol>`는 정렬목록. 순서를 가진 목록을 나타낸다.  
`<ol>`는 `type`의 '1','a','A','i','I'로 순서목록의 숫자를 지정할 수 있다.  
`start`속성은 `<ol>`의 항목의 숫자가 시작하는 숫자를 변경할 수 있다.  
`reversed`속성을 통해 번호의 역순출력이 가능하다.  
`<ul>`는 비정렬 목록. 순서가 없는 목록을 나타낸다.  
`<li>`는 위의 두 태그의 자식목록으로 각각의 아이템을 나타낸다.  
`<li>`의 `value`속성을 통한 숫자지정은 `<ol>`안의 해당 `<li>`의 숫자를 바꿀수 있다.  
해당 태그들은 태그간 중복이 가능하다. (Nesting)
```html
  <ol>
    <li></li>
    <li>
      <ul>
        <li></li>
        <li></li>
      </ul>
    </li>
  </ol>
```

## dl, dt, dd

`<dl>`는 정의 목록을 나타낸다.  
`<dt>`는 정의하고자 하는 항목의 이름을 `<dd>`는 정의하는 항목의 설명을 나타낸다.  
`<dt>`,`<dd>`는 하나의 쌍으로 이루어진다. 하지만 동음이의나 동의이음의 경우 `<dt>`, `<dd>`를 여러개 사용하여 표현한다.
`<div>`를 통해 스타일링을 할 경우 `<div>`는 `<dt>`,`<dd>`의 형제로 와서는 안된다. 
```html
<dl>
  <div>
    <dt>dt</dt>
    <dd>dd</dd>
  </div>

  <div>
    <dt>dt1</dt>
    <dt>dt2</dt>
    <dd>dd</dd>
  </div>

  <div>
    <dt>dt</dt>
    <dd>dd1</dd>
    <dd>dd2</dd>
  </div>
</dl>
```

## table, tr, th, td

`<table>`를 통해 표를 만들 수 있습니다.  
`<tr>`는 행을 의미하고 이렇게 선언한 `<tr>`의 자식으로 `<th>`,`<td>`를 자식요소로 사용해 표를 만들 수 있습니다.  
```html
<table>
  <tr>
    <th></th>
    <th></th>
    <th></th>
  </tr>

  <tr>
    <th></th>
    <td></td>
    <td></td>
  </tr>

  <tr>
    <th></th>
    <td></td>
    <td></td>
  </tr>
</table>
```
`<th>`에는 행이나 열을 대표하는 명칭이 들어갑니다. `scope`속성을 통해 어느 행, 열을 대표하는지 작성할 수 있습니다.  
`<td>`에는 표현하고자 하는 값을 넣습니다.  
`<th>`, `<td>`에 `colspan`, `rowspan`속성을 통해 여러칸을 차지 할 수 있습니다.  

## thead, tbody, tfoot

시멘틱웹의 `<header>`, `<main>`, `<footer>`처럼 `<table>`에서도 `<thead>`, `<tbody>`, `<tfoot>`을 통해 구획을 나눌 수 있습니다.  
```html
<table>
  <thead>
    <tr>
      <th></th>
      <th></th>
      <th></th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <th></th>
      <td></td>
      <td></td>
    </tr>
  </tbody>

  <tfoot>
    <tr>
      <th></th>
      <td></td>
      <td></td>
    </tr>
  </tfoot>
</table>
```

`<thead>`는 `<table>`안의 첫 요소로 사용되야 합니다.  
`<thead>`를 사용할 경우 `<thead>`의 형제요소로 `<tr>`을 사용할 수 없습니다. `<tbody>`, `<tfoot>`을 쓰세요.  
`<tbody>`는 여러개를 사용할 수 있다.  

## caption

`<caption>`는 표 전체를 아우르는 설명을 쓰는 태그입니다.  
사용시 반드시 `<table>`의 첫요소로 와야합니다. `<thead>`가 있으면 `<caption>`다음에 `<thead>`를 작성합니다.  
`<table>`이 `<figurer>`의 유일한 요소일 경우 `<caption>`대신 `<figcaption>`을 사용한다.  

```html
<table>
  <caption></caption>
  <thead>
    <tr>
      <th></th>
    </tr>
  </thead>
  <tfoot>
    <tr>
      <td></td>
    </tr>
  </tfoot>
</table>
```

## img

`<img>`는 이미지 삽입 요소입니다.  
`<img>`는 `src`속성에 출력하고자 하는 이미지의 경로를 지정하여 출력합니다.  
경로지정은 절대경로 방식과 상대경로 방식 2가지가 있습니다.
```html
<img src="./image.png" alt="대체텍스트"/>
```
`<img>`의 `alt`속성은 대체텍스트로 이미지가 정상적으로 출력되지 못할때 대신 출력 될 텍스트를 담습니다.  
`width`, `height`속성을 통해 이미지의 가로, 세로값을 넣어 크기를 조정할 수 있습니다. 둘중 하나만 입력하면 다른 한쪽이 이미지 원본의 비율에 맞춰 조정됩니다. (픽셀이 기준이니 정수만 입력합니다.)  

`<img>`를 통해 웹에서 다양한 이미지 파일일을 출력할 있습니다.  
`<img>`에서 주로 사용되는 이미지 유형은 JPEG, PNG, GIF, WEBP, SVG들이 있습니다.

## 반응형 이미지

`<img>`의 `srcset`에 여러 이미지 경로를 넣고 선택적으로 너비서술자를 기입하여 화면 크기에 따른 반응형 이미지를 출력합니다.  
큰 이미지가 있다면 화면이 작아지더라도 작은 이미지로 교체하지 않고 큰 이미지를 계속 사용합니다.
```html
<img src = "./main.png" srcset="./small.jpg 300w, ./large.jpg 600w" alt = "ace">
```

`<img>`의 `sizes`느 뷰포트에 따른 소스의 크기를 지정합니다.  
문법은 미디어조건과 값을 차례로 입력하고 마지막에는 값만 입력합니다. 
```html
<img src = "./main.png"
  srcset="./small.jpg 300w, ./large.jpg 600w" 
  sizes="(min-width: 600px) 600px, (min-width: 400px) 400px, 200px" 
  alt = "ace">
```

## video, audio

`<video>`와 `<audio>`는 속성의 사용이 매우 유사하므로 `<video>`로 묶어서 설명합니다.  
`<video>`는 `src`속성을 통해 비디오 경로를 입력합니다.  
`<video>`는 빈태그가 아니므로 요소내에 텍스트나 자식요소를 넣을 수 있는데, 이때 텍스트는 `<video>`가 제대로 영상을 제대로 지원하지 못할때 출력됩니다.  
```html
<video src = ./video.mp4> video is not working</video>
```
`<video>`의 영상 삽입 방법으로는 `<source>`를 사용하는 방법도 있습니다.  
또한 `<source>`를 이용해 멀티플 소스를 사용할 수 있습니다.  
```html
<video>
  <!-- 첫요소부터 차례로 가능한 요소인지 보고 가능하면 실행함 실행시 나머지는 실행하지 않음 -->
  <source src = ./video1.mp4>
  <source src = ./video2.mp4>
  <source src = ./video3.mp4>
  video is not working
</video>
```

`<video>`의 영상의 속성중 `controls`는 영상을 제어하기위한 컨트롤 패널을 출력합니다.  
`autoplay`속성은 영상을 자동으로 재생합니다. 하지만 사용자 경험을 위해 `muted`속성이 없다면 작동하지 않을 수 있습니다.  
`loop`는 영상이 끝날때 자동으로 반복되게 합니다.  

```html
<video src = ./video.mp4 controls autoplay muted loop> video is not working</video>
```

`poster`는 썸네일을 지정합니다. 만약 지정하지 않으면 영상의 첫 프레임을 썸네일로 사용합니다.

## canvas, iframe

`<canvas>`는 그래픽 캔버스 요소입니다.  
단독으로는 할수 있는게 거의 없고 Javascript와 함께 사용되어야 합니다.

`<iframe>`은 인라인 프레임 요소입니다.  
다른 HTML요소를 가져와 지정된 프레임 안에 삽입합니다. 보통 지도와 같은 기능을 사용할때 사용합니다.