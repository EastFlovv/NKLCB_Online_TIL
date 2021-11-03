function solution(str1, str2) {
  let answer = 0;
  
  // 대소문자 구별을 없애고, 두개씩 끊은 배열로 만들기
  // 영문자만 남긴다
  const strArr1 = str1.toLowerCase().split('').filter(el => el >= 'a' && el <= 'z');
  const strArr2 = str2.toLowerCase().split('').filter(el => el >= 'a' && el <= 'z');
  
  for(let i = 0; i < strArr1.length; i++){
      if(i+1 != strArr1.length)
          strArr1[i] = strArr1[i]+strArr1[i+1];
      else strArr1.pop();
  }
  
  for(let i = 0; i < strArr2.length; i++){
      if(i+1 != strArr2.length)
          strArr2[i] = strArr2[i]+strArr2[i+1];
      else strArr2.pop();
  }
  
  console.log(strArr1);
  console.log(strArr2);
  
  // 합집합과 교집합 만들기
  const union = [...new Set([...strArr1, ...strArr2])]; // 합집합
  console.log(union);
  const intersection = strArr1.filter(el => strArr2.includes(el)); // 교집합
  console.log(intersection);
  
  answer = Math.floor(65536 * intersection.length / union.length);
  
  
  
  return answer;
}