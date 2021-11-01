// binarySearch_loop() 반복문 기반
function binarySearch_loop(arr, n) {
  let lowIndex = 0;
  let midIndex = 0;
  let highIndex = arr.length - 1;

  while(lowIndex <= highIndex){
    midIndex = Math.floor((lowIndex + highIndex)/2);
    if(arr[midIndex] > n){
      highIndex = midIndex-1;
    }else if(arr[midIndex] < n){
      lowIndex = midIndex+1;
    }else return midIndex;
  }
  return -1;
}
// binarySearch_Recursive() 재귀 기반
function binarySearch_Recursive(arr, n, lowIndex=0, highIndex=arr.length-1) {
  if(highIndex < lowIndex) return -1;

  let midIndex = Math.floor((lowIndex + highIndex)/2);

  if(arr[midIndex] > n){
    return binarySearch_Recursive(arr, n, lowIndex, midIndex-1);
  }else if(arr[midIndex] < n){
    return binarySearch_Recursive(arr, n, midIndex+1, highIndex);
  }else return midIndex;
}

let array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(binarySearch_loop(array, 0));
console.log(binarySearch_loop(array, 3));
console.log(binarySearch_loop(array, 7));
console.log(binarySearch_loop(array, 10));

console.log(binarySearch_Recursive(array, 0));
console.log(binarySearch_Recursive(array, 3));
console.log(binarySearch_Recursive(array, 7));
console.log(binarySearch_Recursive(array, 10));