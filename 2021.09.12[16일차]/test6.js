// 문제설명 도시의 아파트에서 버스 정류장까지 거리를 구하려고 합니다. 도시는 격자 모양의 지역으로 구분되어
// 있으며 아파트는 1로, 버스 정류장은 0으로 표시되어 있습니다. 아파트에서 버스 정류장으로 이동은
// 상하좌우로만 이동할 수 있으며, 대각선으로는 이동이 불가합니다.
// h x w 크기의 도시가 주어질 때, 각 아파트에서 가장 가까운 버스 정류장까지의 거리를 구하는 함수,
// solution을 완성해주세요.
// 예를 들어, 3 x 3 크기의 도시[[1, 0, 1], [1, 1, 1], [1, 1, 1]]가 주어질 때, 각 아파트에서 가까운 버스
// 정류장까지의 거리를 나타내는 결과는 [[ 1, 0, 1 ], [ 2, 1, 2 ], [ 3, 2, 3 ]] 입니다.
// 제한사항 - 도시에서 이동은 상하좌우로만 이동할 수 있으며, 대각선으로는 이동할 수 없습니다.

// - 도시에서 버스 정류장은 적어도 하나 이상 존재합니다.
// - 도시에는 아파트와 버스 정류장만 존재합니다.

// 매개변수
// & 리턴타입

// - 매개변수 :
// number[][] city

// - Return Type : Number[][]

// 입출력형식 [입력 형식]

// - 도시의 정보 city가 주어집니다.
// - city는 0과 1로 이루어진 h x w 크기의 2차원 배열입니다.
// - 도시의 크기 h와 w는 1 이상 50 이하의 자연수입니다.

// [출력 형식]
// - 아파트에서 버스 정류장까지의 최단 거리를 반환합니다.
// - 결과는 h x w 크기의 2차원 배열입니다.

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.output
});

let city =[];

rl.on('line', line=>{
  // 입력받은 배열을 각 행씩 분리하여 1차원 배열로 만듬
  let dim1 = line.split(/\]\,\[|\]\,\ \[/);
  console.log(dim1);
  // 수를 제외한 요소를 모두 제거하고 이차원 배열로 만듬
  for (let i = 0; i < dim1.length; i++) {
    city.push(dim1[i].split(/\D/).filter(el=>el!=''));    
  }
  console.log(city);

  // let answer = [];
  // for (let i = 0; i < city.length; i++) {
    
  // }
  // console.log(answer)

  // bfs(city);
  
  

  // input.push();

  // input= line.split(',')
  // console.log(input);

  // console.log(input.length)
  // for (let i = 0; i < input.length; i++) {
  //   // input[i]= input[i].split(/\D/);    
  // }


  rl.close();
}).on('close', ()=>{


  
  process.exit();
});



function bfs(arr = Array()){
  let answer=[];
  let check = arr;
  let queue = [];
  for (let i = 0; i < arr.length; i++) {
    let oneline=[];
    for (let j = 0; j < arr.length; j++) {
      if(arr[i][j] == 0)
        oneline.push(0);
      else{
        check[i][j] = 'c';



      }
    }
    answer.push(oneline);
  }
  console.log(answer)
}

function move(arr = Array(), arr2 = Array()){
  
}