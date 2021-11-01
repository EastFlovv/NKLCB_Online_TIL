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

let init_array = [6, 5, 1, 3, 2 ,4];
let array;

let sorting = [insertionSort];
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
