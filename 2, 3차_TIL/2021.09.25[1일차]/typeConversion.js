// String()형변환
console.log('--------String()---------');
console.log(123);
console.log(String(123));
console.log(String(-1/0));
console.log(String(NaN));
console.log(String(true));
console.log(String(null));
console.log(String(undefined));

// Number()형변환
console.log('--------Number()---------');
console.log(Number(""));
console.log(Number('123'));
console.log(Number('aaaa'));
console.log(Number(true));
console.log(Number(false));
console.log(Number(null));
console.log(Number(undefined));

// 정수변환 paeseInt, 실수변환 parseFloat
console.log(parseInt('123.123'));
console.log(parseFloat('123.123'));

// Boolean()변환
// 문자열의 경우 값이 있으면 true 비었다면 false
console.log('--------Boolean()---------');
console.log(Boolean(''));
console.log(Boolean(123));
console.log(Boolean('string'));
console.log(Boolean('0'));
console.log(Boolean(0));
console.log(Boolean('1'));
console.log(Boolean(1));
console.log(Boolean(NaN));
console.log(Boolean(null));
console.log(Boolean(undefined));