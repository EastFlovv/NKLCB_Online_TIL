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




let init_array = [6, 5, 1, 3, 2 ,4];
let array;

let sorting = [mergeSort];
let order = [ascending, desccending];

for (let i = 0; i < sorting.length; i++) {
  for (let j = 0; j < order.length; j++) {
    console.log(sorting[i].name, order[j].name);

    array = [...init_array];
    sorting[i](array, order[j]);
    console.log(array);
  }
  const element = array[i];  
}
