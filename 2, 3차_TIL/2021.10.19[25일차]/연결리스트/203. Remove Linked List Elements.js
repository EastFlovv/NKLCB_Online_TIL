/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
let removeElements = function(head, val) {
  // 빈리스트 -> null 출력
  if(head === null) return null;
  let prev = null;
  let node = head;
  
  while(node !== null){
    // 첫요소 지우기
    if(prev === null && node.val === val){
      head = head.next;
    }else if (node.next === null && node.val === val){ // 끝 요소 지우기
      prev.next = null;
    }else if(node.val === val){ // 중간값 지우기
      prev.next = node.next;
    }else{ // 지우는게 없을때
      prev = node;
    }
    node = node.next;
  }
  return head;
};

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
 }


let head = new ListNode(1);
let test = head;
head.next = new ListNode(2);
head = head.next;
head.next = new ListNode(6);
head = head.next;
head.next = new ListNode(3);
head = head.next;
head.next = new ListNode(4);
head = head.next;
head.next = new ListNode(5);
head = head.next;
head.next = new ListNode(6);
head = head.next;



console.log(removeElements(test, 6));