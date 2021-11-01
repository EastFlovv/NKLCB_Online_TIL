// Max, Mix, absolute
console.log(Math.max(1, -1, 0, 0.5));
console.log(Math.min(1, -1));

let nums = [0, 1, 2, 3, 4, 5, -1, -2, -3];
// apply함수
console.log(Math.max.apply(null, nums));
console.log(Math.min.apply(null, nums));
// spread 문법
console.log(Math.max(...nums));
console.log(Math.min(...nums));

// abs 절대값
console.log(Math.abs(1));
console.log(Math.abs(-1));
console.log(Math.abs(-Infinity));

// property
console.log(Math.E);
console.log(Math.PI);

// random
console.log(Math.random()); // 0 ~ 1 Float
console.log(parseInt(Math.random()*100)); // 0 ~ 100 Integer
for (let i = 0; i < 10; i++) {
  console.log(parseInt(Math.random()*100));
};

// pow
console.log(Math.pow(2, 3)); // 2^3 = 8
console.log(2 ** 3); // 2^3 = 8

console.log(Math.sqrt(4)); // 2
console.log(Math.sqrt(2));

// round, ceil, floor
console.log(Math.round(3.5)); // 4 반올림
console.log(Math.ceil(3.5)); // 4 올림
console.log(Math.floor(3.5)); // 3 내림

console.log(Math.round(-3.5)); // -3 반올림
console.log(Math.ceil(-3.5)); // -3  올림
console.log(Math.floor(-3.5)); // -4 내림