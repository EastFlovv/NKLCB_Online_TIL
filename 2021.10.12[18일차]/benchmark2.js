let swap = function(arr, idx_1, idx_2){
  let temp = arr[idx_1];
  arr[idx_1] = arr[idx_2];
  arr[idx_2] = temp; 
}

let ascending = function (x, y){
  return x > y;
}

let desccending = function (x, y){
  return x < y;
}

let bubbleSort = function(arr, compare){
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length-1; j++) {
      if(compare(arr[j], arr[j+1])){
        swap(arr, j, j+1);
      }
    }    
  }
}

let insertionSort = function(arr, compare){
  for (let i = 1; i < arr.length; i++) {
    let temp = arr[i];
    let j;
    for (j = i-1; j >= 0; j--) {
      arr[j+1] = arr[j];
      if(compare(temp, arr[j])) break;
    }
    arr[j+1] = temp;
  }
}

let selectionSort = function(arr, compare){
  for (let i = 0; i < arr.length; i++) {
    let k = i;
    for (let j = i + 1; j < arr.length; j++) {
      if(compare(arr[k], arr[j])) k = j;
    }
    swap(arr, i, k);
  }
}

let mergeSort = function(arr, compare){
  if(arr.length === 1) return arr;

  let m = (arr.length/2).toFixed(0); // 중앙값
  // 재귀
  let left = mergeSort(arr.slice(0, m), compare);
  let right = mergeSort(arr.slice(m), compare);

  let i = 0, j = 0, k =0;

  while(i < left.length && j < right.length){
    arr[k++] = compare(left[i], right[j]) ? right[j++] : left[i++]; // 비교하여 정렬
  }
  // 한쪽이 끝나면 나머지 삽입
  while(i < left.length) arr[k++] = left[i++];
  while(j < right.length) arr[k++] = right[j++];

  return arr;
}

let quickSort = function (arr, compare, s = 0, e = arr.length-1) {
  let start = s;
  let pivot = arr[e];

  for(let i = s; i <= e; i++)  {
    if(compare(pivot, arr[i])){
      swap(arr, start, i);
      start++;
    }
  }
  swap(arr, start, e);

  if(start - 1 > s) quickSort(arr, compare, s, start-1);
  if(start + 1 < e) quickSort(arr, compare, start+1, e);

}

function benchmark (arr, callback, order) {
  let start = Date.now();

  callback(arr, order);
  return Date.now() - start;
}


let init_array = [];
let max = 30000;
for(let i = 0; i < max; i++){
  init_array.push(Math.round(Math.random()*max));
}

let sorting = [bubbleSort, selectionSort, insertionSort, mergeSort, quickSort];
let order = [ascending, desccending];
let array;
for (let i = 0; i < sorting.length; i++) {
  for (let j = 0; j < order.length; j++) {
    array = [...init_array];
    console.log(sorting[i].name, order[j].name, benchmark(array, sorting[i], order[j])+'ms');    
    // sorting[i](array, order[j]);
    // console.log(array);
  }
  const element = array[i];  
}
