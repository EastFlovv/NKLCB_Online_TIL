  // 구슬은 한쌍씩 있다 => 같은 번호의 구슬이 2개
  // 구슬을 뺄수도 안뺄수도 있다.
  // 술래는 배열형태로 남은 구슬을 반환한다
  // 구슬의 번호는 1~100000
  // 배열의 길이는 최대 10000 -> 배열 인덱스 =/= 구슬번호

function solution (arr){ 
  let answer = 0; //초기화
  // 입력받은 배열을 정렬
  arr.sort((x,y)=>x-y);

  for (let i = 0; i < arr.length; i++) {
    if(i == 0){ // 첫값은 앞의 두개를 검사한다. 자신과 앞이 다르고 앞의 두개가 같다면 답은 현재값
      if(arr[i] !== arr[i+1] && arr[i+2] === arr[i+1]) answer = arr[i];
    }else if(i == arr.length-1){ // 마지막 값은 뒤의 두개를 검사. 자신과 뒤가 다르고 뒤의 두개가 같다면 답은 현재값.
      if(arr[i] !== arr[i-1] && arr[i-2] === arr[i-1]) answer = arr[i];
    }else{ // 그 외엔 좌우로 검사. 좌우 모두 자신과 다르면 답은 현재값
      if(arr[i] !== arr[i+1] && arr[i] !== arr[i-1]) answer = arr[i];
    }
  }
  return answer; // 답을 반환
}