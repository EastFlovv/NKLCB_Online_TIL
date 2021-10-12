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


let init_array = [6, 5, 1, 3, 2 ,4];
let array;

let sorting = [quickSort];
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
