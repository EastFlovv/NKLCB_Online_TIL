let swap = function(arr, idx_1, idx_2){
  let temp = arr[idx_1];
  arr[idx_1] = arr[idx_2];
  arr[idx_2] = temp; 
}

let bubbleSort_1 = function(arr){
  for (let i = 0; i < arr.length; i++) { // 총 수행횟수
    for (let j = 0; j < arr.length-1; j++) {
      if(arr[j] > arr[j+1]){
        swap(arr, j, j+1);
      }
    }
  }
}

let bubbleSort_2 = function(arr){
  for (let i = 0; i < arr.length - 1; i++) { // 총 수행횟수
    for (let j = 0; j < arr.length - i - 1; j++) {
      if(arr[j] > arr[j+1]){
        swap(arr, j, j+1);
      }
    }
  }
}

let bubbleSort_3 = function(arr){
  let swapped;
  for (let i = 0; i < arr.length - 1; i++) { // 총 수행횟수
    swapped = false;
    for (let j = 0; j < arr.length - i - 1; j++) {
      if(arr[j] > arr[j+1]){
        swap(arr, j, j+1);
        swapped = true;
      }
    }
    if(!swapped) break;
  }
}

let init_array = [6, 5, 1, 3, 2 ,4];

let array = [...init_array];
let array2 = [...init_array];
let array3 = [...init_array];
bubbleSort_1(array);
bubbleSort_2(array2);
bubbleSort_3(array3);
console.log(array);
console.log(array2);
console.log(array3);