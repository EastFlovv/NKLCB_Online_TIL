// 개행
// /n, /r은 다르나 윈도우에선 혼합하여 하나의 new line을 처리하고 있다.
console.log('line\nfeed');
console.log('line\rfeed');
// \표현
console.log('\\n');
// Tab
console.log('String\ttab');
// unicode
console.log('unicode\u{1F60D}');

// 문자열 길이
let str = 'hello\nworld\n!!!';
console.log(str.length);
// 문자열 내 개별 문자에 접근
console.log(str.charAt(1));
console.log(str.charCodeAt(1));
console.log(str[1]);

// 문자열검색
let txt = 'hello world';
// 처음으로 만난 l의 문자열 위치를 리턴
console.log(txt.indexOf('l')); // 2

// 4번째에서 시작해서 만난 l의 문자열 위치를 리턴
console.log(txt.indexOf('l', 4)); // 9
// 뒤에서 부터 처음 만난 l의 문자열 위치를 리턴
console.log(txt.lastIndexOf('l')); // 9
// hello가 있는지 찾아보고 boolean형으로 리턴 (대소문자 구분함)
console.log(txt.includes('Hello')); // false
console.log(txt.includes('ello')); // true
// 해당 문자열로 시작하는것을 찾는다
console.log(txt.startsWith('ello')); // false
// pos값을 통해 시작위치를 지정가능
console.log(txt.startsWith('ello', 1)); // true

// 대소문자 변경
let txt2 = 'HeLLo woRld';
// 모두 대문자
console.log(txt2.toUpperCase());
// 모두 소문자
console.log(txt2.toLowerCase());


// 문자열 치환
let txt3 = 'hello wOrld'
let changed_text = '';

changed_text = txt3.replace('wOrld', 'earth');
console.log(changed_text);
// 하나의 l만 replace된다
console.log(txt.replace('l', 'L'));
// 정규표현식을 사용한 문자열 치환
console.log(txt.replace(/l/g, 'L'));
console.log(txt.replace(/o/gi, '0'));

// 문자열 추출
let txt4 = 'hello, world!!';
console.log(txt4.slice(0, 5));
// console.log(txt4.slice(6, 5)); -> error 
console.log(txt4.substring(1,5)); // slice와 substring 기능은 같다 but
console.log(txt4.substring(5,1)); // substring은 더 작은값을 시작으로 씀

console.log(txt4.slice(4, 5));
console.log(txt4.slice(4));
// 음수를 이용해 역순 추출 가능
console.log(txt4.slice(-4));


console.log(txt4.substr(2, 6));

// 문자열 분할
console.log(txt4.split(' '));
console.log(txt4.split('', 4));