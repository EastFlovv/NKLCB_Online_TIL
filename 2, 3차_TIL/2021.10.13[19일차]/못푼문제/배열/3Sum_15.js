/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 let threeSum = function(nums) {
  let answer = [];
  let mini = [];
  
  // sorting
  nums.sort((x, y) => x-y);
  // console.log(nums);
  for(let i = 0; i < nums.length; i++){
    
    for(let j = i+1; j < nums.length; j++){
      let left = (nums[i] + nums[j]) * -1;
      // 목표값의 인덱스가 두 인덱스가 아니고 -1도 아닐때
      // console.log(nums.lastIndexOf(left));
      if(left === -0) left = 0;
      if(nums.lastIndexOf(left) > j){ 
        mini.push(nums[i]);
        mini.push(nums[j]);
        mini.push(left);
        mini.sort((x,y)=> x-y);
        answer.push(mini);
        mini = [];
      };
      
    };
    
  };
  
  // 중복된 answer값의 제거
  for(let i = 0; i < answer.length-1; i++){

    


    let now = JSON.stringify(answer[i]);
    while(now === JSON.stringify(answer[i+1])) answer.splice([i+1],1);
    // answer.filter(el=>el != undefined);
  }
  
  
  
  return answer;
};
console.log(threeSum([0,0,0,0]));
// console.log(0 === -0); // true