// let trap = function(height) {
//   let wall = 0;
//   let max = 0;
//   let water = 0;
//   let add = 0;
//   for(let i = 0; i < height.length; i++){
//     if(height[i] >= max && height[i] !== 0){
//       wall++;
//       max = height[i];
//       water += add;
//       add = 0;
//     }else if(height[i] < max || wall != 0){
//       add += max - height[i];
//     }
//   }
//   return water;
// };
let trap = function(height) {
  let water = 0;
  let r = height.length-1;
  let l = 0;
  let r_max = 0;
  let l_max = 0;
  
  while(l<r){
    if(height[l] < height[r]){
      //left
      if( height[l] >= l_max){
        l_max = height[l];
      }else{
        water += l_max - height[l];
      }
      l++;
    }else{
       if(height[r] >=r_max){
        r_max = height[r];
      }else{
        water += r_max - height[r];
      }
      r--;
    }
    
  }
  return water;
};

console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]));

