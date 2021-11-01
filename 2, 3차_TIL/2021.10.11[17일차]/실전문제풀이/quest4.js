// 다리를 지나는 트럭
// https://programmers.co.kr/learn/courses/30/lessons/42583?language=javascript

function Truck(weight, time){
  this.weight = weight;
  this.time = time;
}


function solution(bridge_length, weight, truck_weights) {
  // let answer = 0;
  
  let queue = [];
  let head = 0;
  let tail = 0;
  
  let truck_index = 0;
  let total_weight = 0;
  let time = 0;
  
  queue[tail++] = new Truck(truck_weights[truck_index], bridge_length + time); // 현재시간 - 다리위에 올라온 시간 == 다리 길이
  total_weight += truck_weights[truck_index++];
  time++;
  
  while(head != tail){
      if(queue[head].time === time){
          total_weight -= queue[head++].weight;
      }
      
      if(tail - head < bridge_length && 
         total_weight + truck_weights[truck_index] <= weight){
          queue[tail++] = new Truck(truck_weights[truck_index], bridge_length + time);
          total_weight += truck_weights[truck_index++];
      }
      time++;
  }
  
  
  return time;
}