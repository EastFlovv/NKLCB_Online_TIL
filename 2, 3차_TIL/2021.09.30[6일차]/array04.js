function answer(nums){
  let result = [];
  let total = 0;
  nums.forEach(element => {
    total+=element;
  });
  total -= 100;
  console.log(total);

  for(let i = 0; i < nums.length; i++){
    for (let j = i+1; j < nums.length; j++) { 
      if(nums[i]+ nums[j] == total){
        result = nums.map(el => {
          if(el != nums[i] && el != nums[j])
            return el;
        }).filter(el=> el != undefined);
        break;
      }
    }
  }

  return result;
};

let input = [
  [1, 5, 6, 7, 10, 12, 19, 29, 33],
  [25, 23, 11, 2, 18, 3, 28, 6, 37],
  [3, 37, 5, 36, 6, 22, 19, 2, 28]
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i+1} `);
  console.log(answer(input[i]));
}