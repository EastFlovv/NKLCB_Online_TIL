/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
 let nextLargerNodes = function(head) {
  let stack = [];
  let change = 0;
  let start = head.val;
  stack.push(start);
  head = head.next;
  
  while(head !== null){
    let now = head.val;

    if(stack[stack.length-1] === 0 && start === -1){ // 더 큰수가 나올때 안됨
      start = now;
      head = head.next;
      stack.push(now);
      continue;
    }


    if(now > start){
      while(!(stack.length === 0 || stack[stack.length-1] === 0)){
        stack.pop();
        change++;
      }
      while(change !== 0){
        stack.push(now);
        change--;
      }
      stack.push(0);
      start = -1;
    }else{
      stack.push(head.val);
    }
    head = head.next;
  }
  return stack;
};



function ListNode(val, next) {
      this.val = (val===undefined ? 0 : val)
   this.next = (next===undefined ? null : next)
}


let a = new ListNode(2);
let b = new ListNode(7);
let c = new ListNode(4);
let d = new ListNode(3);
let e = new ListNode(5);
a.next = b;
b.next = c;
c.next = d;
d.next = e;

nextLargerNodes(a);