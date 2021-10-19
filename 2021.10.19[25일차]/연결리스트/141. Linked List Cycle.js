/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
// 순환하는 연결리스트라면 true를 반환
let hasCycle = function(head) {
  if(head === null) return false;
  let pointer1 = head;
  let pointer2 = head.next;
  let answer = true;
  
  while(true){
    if(pointer1 === null || pointer2 === null) {
      answer = false;
      break;
    }
    
    pointer1 = pointer1.next;
    pointer2 = pointer2.next;
    
    if(pointer2 === null){
      answer = false;
      break;
    }
    
    if(pointer2.next === null) {
      answer = false;
      break;
    }
    pointer2 = pointer2.next;
    if(pointer1 === pointer2) break;
  }
  
  return answer;
};