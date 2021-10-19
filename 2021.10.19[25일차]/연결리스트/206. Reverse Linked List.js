/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

 function recursive(node){
  // 종료
  if(node === null) return null;
  if(node.next === null) return node;
  
  // 재귀
  let list = recursive(node.next); // 5
  
  // 새 노드
  let tmp = new ListNode(node.val); // new
  
  // list의 끝으로
  let pointer = list;
  while(pointer.next !== null){
    pointer = pointer.next;
  }
  // 첫노드를 리스트의 끝노드로
  pointer.next = tmp;
  //리스트 반환
  return list;
}

let reverseList = function(head) {
    return recursive(head);
};