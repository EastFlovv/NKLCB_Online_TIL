// Two Sum
function answer(nums, target){
  let result = [];
  //O(n^2)
  // for (let i = 0; i < nums.length; i++) {
  //   for (let j = i+1; j < nums.length; j++) {
  //     if(nums[i] + nums[j] == target){
  //       result[0] = i;
  //       result[1] = j;
  //     }
  //   }
  // }

  // for문 한번쓰기
  // for (let i = 0; i < nums.length-1; i++) {
  //   if(nums[i]+nums[i+1] == target)
  //     result = [i, i+1];
  // }

  //map()
  //target = nums[i] + nums[j]
  let map = {}; //key, value
  for (let i = 0; i < nums.length; i++) {
    if(map[target-nums[i]] != undefined) // nums[j]가 있는지 없는지 판별
      return [map[target-nums[i]], i];
    map[nums[i]] = i;
    // console.log(map);
  }

  return [];
};

let input = [
  [[2, 7, 11, 15], 9],
  [[3, 2, 4], 6],
  [[3, 3], 6]
]

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i+1} `);
  console.log(answer(input[i][0], input[i][1]));
}