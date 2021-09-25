# 2021.09.14 [18일차]

flex와 grid를 복습했다.  
학습계획표에 있던 반응형 디자인에 관한 강의가 없어서 아쉽다.
flex와 grid는 item과 container요소간에 쓰이는 속성이 다르므로 잘 구분해서 사용해야겠다.

## 공부한 내용

- flex 는 display inside요소이다.
- flex container는 flex item을 담는다.  
- ``flex-direction`을 통해 flex container의 주축과 방향을 정할수있다.
- `flex-wrap`을 통해 flex의 요소들을 강제로 한줄에 배치할지 결정할 수 있다.  
- `order`를 통해 flex나 grid의 아이템의 위치를 바꿀 수 있다.
- `flex-grow`, `flex-shrink`를 통해 flex container의 남는공간이나 초과공간을 기준으로 items의 크기를 조절할 수 있다.  
- `flex-basis`는 flex items의 명시적 크기가 없을때 flex items의 기준크기가 된다.  
- `align-self`는 flex item 하나의 정렬을 결정한다.
- `grid`는 display indside요소이다.
- `grid-template-rows(columns)`를 통해 그리드의 영역을 명시적으로 구분할 수 있다.
- `grid-template-area`를 통해 item요소의 배치를 그림처럼 그려낼 수 있다. 이때 item요소들은 `grid-area`라는 속성을 통해 `grid-template-area`에 쓰일 별칭을 지정해야한다.
- `row(column)-gap`을 통해 grid item간의 간격인 gutter를 조정할수있다.
- `grid-auto-rows(columns)`를 통해 `grid-template-rows(columns)`로 지정된 크기를 넘어가는 추가요소들의 크기를 지정할 수 있다.
- `grid-auto-flow`를 통해 grid안에서 item들이 배치될 규칙을 지정할 수 있다.
- `justify-content`, `align-content`는 flex와 grid의 각 행, 열간의 정렬을 지정한다.
- `justify-items`, `align-items`은 flex와 grid의 지정된 한 칸 안에 들어있는 요소가 칸보다 작을때 정렬을 지정한다.
- `grid-row`, `grid-column`은 grid아이템의 크기를 지정하는 단축속성이다.
- `grid-area`는 `grid-template-area`에 들어갈 item의 별칭을 정하거나, `grid-row`, `grid-column`의 단축속성으로 사용한다.
- grid의 사용 단위로는 `fr`, `min-content`, `max-content`가 있다.
- `auto-fill`, `auto-fit`속성을 통해 grid의 빈공간을 item들이 어떻게 채울것인지 정할 수 있다.


<!-- ## 학습 결과물 -->

<!-- 오늘의 학습결과물은 TIL 최상위 파일의 '학습 결과물 살펴보기 링크에 추가되었습니다. -->

### 강의 학습 현황

\> CSS강의 'flex', 'grid'


## flexbox

flex box는 css3에 추가된 개념으로 flexible box layout입니다.  

## flex container, flex item, main axis, cross axis

flex container는 `display: flex`를 사용한 요소 즉 flex items를 담는 부모요소입니다.  
flex items는 flex container안에 담겨 표현되는 요소들입니다.  
flex container는 main axis와 cross axis로 구분되어 정렬합니다.

## display

flex는 display의 inside요소입니다. inline, block, inline-block은 outside요소입니다.  
따라서 `display: inline flex`와 같이 두 요소를 함께 사용할 수 있습니다.

## flex-direction

`flex-direction`은 flex container의 주축과 방향을 변경하는 속성입니다.  
기본값은 row이며 row-reverse와 같은 값을 통해 방향을 변경할 수 있습니다.
```css
.container{
  display: flex;
  flex-direction: column-reverse;
}
```

## flex-wrap, flex-flow

`flex-wrap`을 통해 flex items가 flex container의 크기를 넘어갈때 강제로 한줄로 배치할지 자신의 원래 크기를 유지하며 여러줄로 배치할지 정할 수 있습니다.  
```css
.container{
  display: flex;
  flex-wrap: wrap;
}
```

`flex-flow`는 `flex-direction`과 `flex-wrap`을 합친 단축속성입니다.  
```css
.container{
  display: flex;
  flex-flow: column wrap;
}
```

## order

flex나 grid의 container안에서 할당가능한 공간의 정도를 선언한다.  
기본값은 0 음수가 아닌 정수만 사용가능하며, 수가 작을수록 앞으로 클수록 뒤로간다.  

## flex-grow

flex container의 공간이 flex items가 다 채우지 못할떄 남은공간을 `flex-grow`에 따라 비율로 나눠 갖는다.  
`flex-grow`의 기본값은 0이며 음수가 아닌 number값을 가질수 있다.

## flex-shrink

`flex-shrink`는 `flex-grow`와 반대되는 속성으로 container의 items가 container보다 커서 강제로 작아질때, 어떤 비율로 작아질지 결정하는 속성입니다.  
`flex-shrink`의 기본값은 1입니다.

## flex-basis

`flex-basis`는 flex item의 초기 크기를 지정합니다.  
flex items의 기본크기가 지정되지 않았을때 flex items의 grow와 shrink는 content의 크기에 따라 비율이 결정됩니다.  
`flex-basis`를 지정하면 이 content의 크기와 관계없이 `flex-basis`의 값을 기준으로 크기를 조정합니다.  
`flex-basis`의 기본값는 `auto`입니다.

## flex

`flex`는 속성으로 `flex-grow`, `flex-shrink`, `flex-basis`를 합친 속성입니다. 
`flex`의 값이 하나일때 값이 number타입일경우 `flex-grow`이고 length/pertentage이면 `flex-basis`입니다.  
`flex`의 값이 두개라면 첫번째 값은 `flex-grow`로 고정이고 두번째 값이 number라면 `flex-shrink`, length/pertentage이면 `flex-basis`입니다.  
값이 세개라면 `flex grow`, `flex-shrink`, `flex-basis` 순서로 작성됩니다.

## justify-content

`justify-content`는 main axis를 기준으로 items를 어떻게 정렬할지 정하는 속성입니다.  
기본값은 flex-start이며 center, flex-end와 같은 키워드를 사용할수있습니다.  
특이한 값으론 공백이 items를 일정한 크기로 감싸는 sapce-around, items사이로 일정한 공백이 들어가는 flex-between이 있습니다.

## align-items

flex items가 한줄일떄 items의 배치 요소를 결정하는 속성입니다.  
기본값은 stretch이며 flex-start, center와 같이 키워드를 사용할 수 있습니다.


## align-content

`align-content`는 cross axis를 기준으로 items을 어떻게 정렬할지 결정합니다.  
`jutify-content`와 같은 값을 사용하며 `align-items`와 헷깔리지 않게 주의해야합니다.

## align-self

`align-self`는 item에 적용하는 속성으로 해당하는 item의 `align-items`의 값을 바꿀수 있습니다.

## grid

`grid`는 `flex`와 달리 2차원 배열과 같은 형태를 가지고 있는 배치속성입니다.
`grid`는 `columns`와 `rows`로 이루어져있으며 이들 사이의 공간을 `gutter`라고 합니다.

## display

grid layout은 앞서 말했듯이 display-inside값입니다.
```css
.container{
  display: inline-grid;
}
```

## grid-template-rows, grid-template-columns

`grid-template-rows`, `grid-template-columns`는 grid container의 안에 행과 열의 갯수를 지정하는 속성입니다.  
`repeat()`함수를 사용하여 반복적인 배치를 표현할 수 있습니다.
단위 fr을 통해 공간배정을 비율로 조절할 수 있습니다.
```css
.conatiner{
  display: grid;
  grid-template-columns: repeat(3, 60px);
  grid-template-rows: 2fr 1fr 1fr;
}
```

## grid-template-areas

`grid-template-areas`는 행과 열이 여러개의 행을 그림처럼 표현할 수 있습니다.  
`grid-template-areas`를 통해 표현할 grid items는 `grid-area`속성을 통해 별칭을 정해야합니다.  
사용하지 않는 칸은 .으로 표시합니다.  
```css
.container{
  grid-template-areas:
    "a a a a"
    "b b b ."
    "b b b c"
}
```

## row-gap, column-gap

각각의 행들간의 간격을 설정합니다.  
`row-gap: 10px;`이라면 행들의 간격이 10px이 됩니다.


## grid-auto-rows, grid-auto-columns
`grid-auto-rows`, `grid-auto-columns`는 지정되 grid영역을 넘치는 grid item들이 어떤 크기의 공간을 가질지 결정합니다.

```css
.container{
  display: grid;
  /* 명시적 지정 */
  grid-template-rows: repeat(3, 1fr);
  /* 암시적 지정 */
  grid-auto-rows: 100px;
}
```

## grid-auto-flow
`grid-auto-flow`는 아이템들이 어떻게 배치될지 결정하는 속성입니다.  
값으로는 `row`, `column`을 사용할 수 있습니다.  
요소를 배치하면서 빈공간없이 채우기 위해서는 `dense`값을 사용할수 있습니다.
```css
.container{
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-auto-flow: column dense;
}
```

## grid

`gird`는 단축속성입니다.  
명시적 속성 `grid-template-rows`, `grid-template-columns`, `grid-template-areas`와 암시적 속성`grid-auto-rows`, `grid-auto-columns`, `grid-auto-flow`를 사용할수있습니다.  
값은 row / column의 형태로 작성한다.
```css
.container{
  display: grid;
  /* grid-template-rows: 1fr 2fr;
  grid-template-columns: 100px 200px; */
  grid: 1fr 2fr / auto-flow 100px 200px;
}
```

## justify-content, align-content
`justify-content`, `align-content`는 main axis와 cross axis를 기준삼아 요소를 배치한다.  
grid container가 item을 담고도 빈공간이 있어야 한다.  

## justify-items, align-items
main axis와 cross axis를 기준삼아 하나의 item을 gird의 공간안에 정렬한다.  
```css
.container{
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  justify-items: center;
  align-items: center;
}
```

## grid-row, grid-column
`grid-row`, `grid-column`은 grid안의 item이 차지하는 영역의 크기를 정할 수 있다.  
span을 이용해서 크기를 지정할 수도 있다.
```css
.container{
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: repeat(3, 1fr);
}

.item:first-child{
  /* grid-row-start: 1;
  grid-row-end: 2; */
  grid-row: 1 / 2;
  grid-column: 2 / span 2;
}
```
## grid-area

`gird-area`는 `grid-tempalte-area`에서 사용할 별칭을 작성하거나 `gird-row-start`,`gird-row-end`, `gird-column-start`, `gird-column-end`의 단축속성으로 사용한다.  
순서는 row-start / column-start / row-end / column-end로 작성한다.  
```css
.item:first-child{
  grid-area: 1 / 2 / 3 /span 2;
}
```

## grid의 단위

`fr`은 grid의 공간을 비율로 나눠 갖습니다.  
`min-content`는 요소의 크기중 가장 작은길이를 기준으로 나눠집니다.  
`max-content`는 요소의 크기중 가장 긴 길이를 기준으로 나눠집니다.
`auto-fill`은 남는 공간을 column의 갯수를 유연하게 조절합니다. 하지만 모든 요소가 1행이되도 남는 공간이 있다면 남는 공간은 채울 수 없습니다.
`auto-fit`은 이 남는공간을 완전히 채우는 속성입니다.