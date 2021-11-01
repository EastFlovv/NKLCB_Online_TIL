/**
 * @param {number[]} prices
 * @return {number[]}
 */
const finalPrices = function (prices) {
  // 하위 인덱스의 가격만큼 할인받아서 살 수 있다.
  // 하위 인덱스의 가격이 더 큰 경우 할인 없음, 같으면 할인
  // monotonic stack을 사용해 풀어보자

  // 할인값을 넣을 배열
  const discount = [];
  let j = 0;

  for (let i = 0; i < prices.length; i++) {
    j = i + 1;
    // j인덱스의 값이 i인덱스보다 크고 끝까지 간게 아니라면 반복
    while (prices[j] > prices[i] && j !== prices.length) j++;
    // 할인 불가능이면 값을 그대로 입력
    if (j === prices.length) discount.push(prices[i]);
    // 할인 가능이면 두 값의 차를 입력
    else discount.push(prices[i] - prices[j]);
  }

  return discount;
};

console.log(finalPrices([8, 4, 6, 2, 3]));