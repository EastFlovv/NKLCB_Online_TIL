# 네카라쿠배 온라인 프론트엔드 TIL 문서

TIL을 Markdown언어를 통해 작성합니다.
각 일차별 TIL와 실습, 복습 결과물을 하단의 링크를 통해 이동 할 수 있습니다.

<a href = "https://goofy-pike-2843c1.netlify.app/" target="_blank">학습 결과물 살펴보기</a> 

[일차별 TIL 요점보기](#일차별-til-요점보기)

## 각 일차별 TIL 상세보기(링크)
0. [2021.08.27[0일차] TIL](https://github.com/EastFlovv/TIL/tree/master/2021.08.27%5B0%EC%9D%BC%EC%B0%A8%5D)
1. [2021.08.28[1일차] TIL](https://github.com/EastFlovv/TIL/tree/master/2021.08.28%5B1%EC%9D%BC%EC%B0%A8%5D)
2. [2021.08.29[2일차] TIL](https://github.com/EastFlovv/NKLCB_Online_TIL/tree/master/2021.08.29%5B2%EC%9D%BC%EC%B0%A8%5D)


# 일차별 TIL 요점보기
## 2021.08.27 [0일차]
Markdown언어를 복습하며 TIL문서 작성을 시작합니다.  
vscode를 통해 README.md파일을 생성하여, TIL을 관리합니다.  
HTML 강의를 통해 HTML개요를 공부했습니다.
### 공부한 내용
- HTML강의의 개요 및 HTML의 기적인 정보  
- HTML, CSS, JavaScript의 기본적인 개념  
- 공부하고 웹표준성 · 웹접근성 · 웹호환성  
- HTML의 모습(태그), 빈태그, 요소의 중첩과 주석  
- HTML문서의 구조

### 강의 학습 현황
\> HTML강의 中 '개요' ~ 'HTML이란? - HTML문서의 구조'

## 2021.08.28 [1일차]

전날에 공부하던 'HTML이란?' 강의의 HEAD태그부터 '텍스트 요소 - entity'까지 학습했습니다.  
TIL문서의 가독성을 위해 각 일차별로 폴더를 나누고 그 안에 README.md파일을 따로 만들어 일차별 수행 성과를 더 보기 쉽게 고쳤습니다.  
최상위 폴더의 README.md파일은 일차별 TIL의 요점 정리와 각 일차별 TIL링크를 놓는 역할을 하게 될것입니다.

## 공부한 내용

- HEAD, BODY태그
- 태그를 구분짓는 특성과 블록/인라인 요소의 특징
- HTML요소를 구분하는 7가지 콘텐츠 카테고리
- 실습환경 세팅 : 웹에디터와 통합개발환경
- 유용한 vscode 확장프로그램과 단축키
- HTML의 다양한 태그에 대한 정의와 기본적인 사용법과 유의사항
- `<a>`의 사용법과 `target`부여법
- HTML에서의 수월한 특수문자 사용을 위한 entity reference

### 강의 학습 현황

\> HTML강의 中 'HEAD 태그'~ '텍스트 요소 - 엔티티(entity)'

## 2021.08.29 [2일차]

## 공부한 내용

- HTML문서의 구조를 결정하는 요소에 대해 배웠습니다.
- `<div>`, `<span>`은 아무런 특징이 없는 구조요소지만 둘은 각각 block, inline요소로 차이가 납니다.
- 시멘틱 웹(semantic web)은 시멘틱 태그로 이루어진 웹사이트를 말하며, 단순히 `<div>`로만 구성된 웹 페이지보다 이점이 많습니다.
- 시멘틱 태그 `<header>`와 `<footer>`는 각각 소개와 탐색에 도움을 주는 구획과 저작권, 웹페이지 작성자에 대한 정보를 담는 태그입니다.
- `<nav>`는 사용자가 전체 페이지중 어디에 위치했는지 알려는주는 태그입니다.
- `<asdie>`는 문서와 간접적으로 관련된 내용을 담는 태그입니다.
- `<main>`는 웹페이지의 주요 콘텐츠가 들어가는 구획 태그입니다.
- `<article>`는 독립적인 구분하여 재사용이 가능한 구획입니다.
- `<section>`는 `<article>`로 나타낼 수 없는 부분을 나누는 구획지만 `<div>`와 비교했을떄 분명한 목적이 존재하는 태그입니다.  
따라서 `<div>`처럼 사용 해서는 안됩니다.

## 개인 학습
기존에 듣던 강의를 통해 Vue.js를 이용한 영화 검색 사이트 클론코딩을 시작했습니다.  
[Git바로가기](https://github.com/EastFlovv/Vue3-movie-web-clonecoding)

### 강의 학습 현황

\> HTML강의 中 '구조를 나타내는 요소 - 컨테이너(div, span)'~ '구조를 나타내는 요소 - section'