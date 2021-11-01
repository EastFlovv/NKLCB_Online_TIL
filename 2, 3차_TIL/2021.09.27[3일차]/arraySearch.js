let alpha = ['a','b' ,'c' ,'d' ,'e'];
console.log(alpha);
console.log(alpha.indexOf('c')); // return 2
console.log(alpha.indexOf('f')); // return -1
console.log(alpha.indexOf('c', 3)); // return -1 index:3 is 'd'

console.log('------------------');
console.log(alpha.lastIndexOf('d')); // return 3
console.log(alpha.lastIndexOf('d', -3)); // return -1
console.log(alpha.lastIndexOf('d', 0)); // return -1

console.log('------------------');
console.log(alpha.includes('a')); // return true
console.log(alpha.includes('F')); // return false


console.log('------------------');
let nums = [1, -2, 4, 5, 2, 0];
console.log(nums);
console.log(nums.sort()); // 오름차순 정렬
console.log(nums.reverse()); // sort이후에 reverse: 내림차순 정렬

alpha = ['a', 'o', 'b', 'm']; 
console.log(alpha);
console.log(alpha.sort()); // sort, reverse는 원본의 데이터 순서를 바꿈
console.log(alpha.reverse());

console.log(alpha.join('-'));
console.log(alpha.join('/'));
console.log(alpha.join(''));