function answer(size){
  let count = 1;
  let arr = Array(size).fill().map(()=> Array(size).fill(0));

  /*
    반복문 패턴 구현
    size 길이만큼 시작해서 숫자를 채운다.
    size - i, 방향 ,2회
    size == 0 프로그램이 멈춘다.
  */ 
  let direction = 1;
  let x, y, num;
  x = y = num = 0;
  x--;
  while(true){
    for (let i = 0; i < size; i++) {
      x += direction;
      arr[y][x] = ++num;
    }
    size--;
    if(size == 0) break;

    for(let j =0; j < size; j++){
      y += direction;
      arr[y][x] = ++num;
    }

    direction *= -1;
  }


  return arr;
};

let input = [
  3, 5, 6
];

for (let i = 0; i < input.length; i++) {
  console.log(answer(input[i]));
}






  // let i = 0;
  // let j = 0;
  // if(arr[i][j] == 0){
  //   arr[i][j] = count;
  // }
  // while(count != size**2){
  //   // if(i-1 > 0&& arr[i-1][j] == 0){
  //   //    arr[--i][j] = ++count;   
  //   // }else
  
  //   // if(j+1 < size && arr[i][j+1] == 0){
  //   //    arr[i][++j] = ++count;
  //   // }else
  //   // if(i +1 < size && arr[i+1][j] == 0){
  //   //   arr[++i][j] = ++count;
  //   // }else
  //   // if(j-1 > 0 && arr[i][j-1] == 0){
  //   //   if(arr[i][j-1] == 0) arr[i][--j] = ++count;
  
  //   // }
  
  // }