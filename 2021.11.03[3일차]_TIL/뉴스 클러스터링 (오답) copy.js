function solution(str1, str2) {
  let answer = 0;
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();
  const strArr1 = [];
  const strArr2 = [];
  // 배열화 -> 
  for(let i = 0; i < str1.length; i++){
    if(str1[i] >= 'a' && str1[i] <= 'z' && str1[i+1] >= 'a' && str1[i+1] <= 'z') strArr1.push(str1[i]+str1[i+1]);
  }

  for(let i = 0; i < str1.length; i++){
    if(str2[i] >= 'a' && str2[i] <= 'z' && str2[i+1] >= 'a' && str2[i+1] <= 'z') strArr2.push(str2[i]+str2[i+1]);
  }
  // console.log(strArr1);
  // console.log(strArr2);

  // 교집합, 합집합
  const intersection = strArr1.filter(el => strArr2.includes(el));
  // const union = [...strArr1, ... strArr2].filter(el=> !intersection.includes(el));


  /// ///////////////////////////////////////////////////////////////////////////////////////
  // 중복을 없애면서 문제가 발생

  const diff1 = strArr1.filter(el => !strArr2.includes(el));
  const diff2 = strArr2.filter(el => !strArr1.includes(el));
  const union = [...diff1, ...diff2, ...intersection];
  // console.log(intersection);
  // console.log(union);

  /// //////////////////////////////////////////////////////////////////////////////////////
  if(intersection.length === union.length) answer = 65536;
  else answer = Math.floor(65536 * intersection.length / union.length);
  // answer = Math.floor(65536 * strArr1.length / strArr2.length);

  return answer;
}


console.log(solution("FRANCE", "french"));
console.log(solution("handshake", "shake hands"));
console.log(solution("aa1+aa2", "AAAA12"));
console.log(solution("E=M*C^2", "e=m*c^2"));