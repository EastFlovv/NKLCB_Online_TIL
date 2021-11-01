// 점화식
let result;
// for문으로 만드는 등차수열
function forloop(s, t, number){
  let acc = 0;
  for (let i = 1; i <= number; i++) {
    if(i == 1){
      acc += s;
    }else{
      acc += t;
    };
    console.log(i, acc);
  };
  return acc;
};

result = forloop(3, 2, 5);
console.log(result);

// 재귀로 만드는 등차수열
function recursive(s, t, number){
  // 멈춤 조건
  if(number == 1){
    return s;
  };
  return recursive(s, t, number-1) + t;
};
console.log(recursive(3, 2, 5));


// for문으로 만드는 등비수열
function forloop2(s, t, number){
  let acc = 1;
  for (let i = 1; i <= number; i++) {
    if(i == 1){
      acc *= s;
    }else{
      acc *= t;
    };
    console.log(i, acc);
  };
  return acc;
};
result = forloop2(3, 2, 5);
console.log(result);

// 재귀로 만드는 등비수열
function recursive2(s, t, number){
  // 멈춤 조건
  if(number == 1){
    return s;
  };
  return recursive2(s, t, number-1) * t;
};
console.log(recursive2(3, 2, 5));

//팩토리얼
function factorial(number){
  if(number == 1){
    return number;
  };
  return factorial(number-1)*number;
};

console.log(factorial(5));

// 피보나치 수열
function fibonacci(number){
  if(number == 1 || number == 0){
    return number;
  };
  return fibonacci(number-1) + fibonacci(number-2);
};

console.log(fibonacci(5));