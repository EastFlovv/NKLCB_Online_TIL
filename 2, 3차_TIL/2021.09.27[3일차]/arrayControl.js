let alpha = ['a', 'b', 'c'];
console.log(alpha);
console.log("alpha.push('d')"); 
alpha.push('d'); // input d
console.log(alpha);
console.log("alpha.pop()"); // delete d
alpha.pop();
console.log(alpha);

let pop = alpha.pop(); // pop()은 삭제한 데이터를 return한다
console.log(pop);

console.log('alpha.shift()'); // delete a
alpha.shift();
console.log(alpha);
console.log("alpha.unshift('A')");
alpha.unshift('A');
console.log(alpha);

console.log('-----------------------');
alpha = ['a', 'b', 'c'];
console.log(alpha);
// 매개변수로 받은 index부터 이후의 값들을 return
let spl = alpha.splice(1); // delete a
console.log(spl);
// 잘리고 남은 나머지가 원래 배열에 남아있
console.log(alpha);
alpha = ['a', 'b', 'c'];
console.log(alpha);
spl = alpha.splice(1, 1); // index 1부터 1개 삭제
console.log(alpha);
console.log(spl);
alpha = ['a', 'b', 'c'];
console.log(alpha);
spl = alpha.splice(1, 1, 'B', 'B2'); // b를 제거하고 B, B2를 삽입
console.log(alpha);

console.log('-----------------------');
alpha = ['a', 'b', 'c'];
console.log(alpha.slice(1));
console.log(alpha.slice(1, 2));
console.log(alpha.slice(-2));
console.log(alpha); // 원본이 유지됨

let alpha2 = ['d', 'e'];
console.log(alpha);
console.log(alpha2);
console.log(alpha.concat(alpha2)); // 리턴으로 반환 
console.log(alpha); // 원본손상 없음
