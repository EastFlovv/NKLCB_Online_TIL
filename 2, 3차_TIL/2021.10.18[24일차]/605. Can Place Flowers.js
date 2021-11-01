/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
 let canPlaceFlowers = function(flowerbed, n) {
  let count = 0;
  
  for(let i = 0; i < flowerbed.length; i++){
    // 한개짜리 예외 처리
    if(flowerbed.length === 1 && flowerbed[0] === 0) count++;
    // 처음
    if(i === 0 && flowerbed[0] === 0 && flowerbed[1] === 0) {
      flowerbed[i] = 1;
      count++;
    }// 끝
    else if (i === flowerbed.length-1 && flowerbed[i] === 0 && flowerbed[i-1] === 0){
      flowerbed[i] = 1;
      count++;
    }// 중간
    else if(flowerbed[i] === 0 && flowerbed[i-1] === 0 && flowerbed[i+1] === 0){
      flowerbed[i] = 1;
      count++;
    }
    
    // console.log(`i = ${i} flowerbed = ${flowerbed} count = ${count}`);
  }
  
  return count >= n ? true : false;
}

// 코드를 더 간결하게 할 수 있지 않을까?