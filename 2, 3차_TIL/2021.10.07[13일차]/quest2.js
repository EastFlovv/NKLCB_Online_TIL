
// Queue() 생성자
function Queue(){
  this.array = [];
};

// 삽입
Queue.prototype.enqueue = function(element){
  return this.array.push(element);
};

// 삭제
Queue.prototype.dequeue = function(){
  return this.array.shift();
};


//카드 뽑기
function answer(num){
  let answer = [];
  let cards = new Queue();
  // let cards = new Array(7);
  for (let i = 0; i < num; i++) {
    cards.enqueue(i+1);
    // cards.push(i+1);
  }
  
  while(true){
    answer.push(cards.dequeue());
    if(cards.array.length != 0){
      cards.enqueue(cards.dequeue());
    }else break;
  };

  // while(true){
  //   answer.push(cards.shift());
  //   if(cards.length != 0){
  //     temp = cards[0];
  //     cards.shift();
  //     cards.push(temp);
  //   }else break;
  // };

  return answer;
}

console.log(answer(7));