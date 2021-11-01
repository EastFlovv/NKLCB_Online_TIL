/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */

// 선형 연결리스트를 head에서 하나 tail에서 하나씩 연결하는 방식으로 재 정렬한다
let reorderList = function(head) {
  let stack =[];
  let node = head
  while(node){
    stack.push(node.val);
    node = node.next;
  }
  console.log(stack);
  let left = 0;
  let right = stack.length-1;
  node = head;
  // value 변경
  // 기존 linkedList가 참조 하는것은 주소값
  for(let i = 0; i < stack.length; i++){
    if(i % 2 === 0) node.val = stack[left++];
    else node.val = stack[right--];
    node = node.next;
  }
}


//  function ListNode(val, next) {
//        this.val = (val===undefined ? 0 : val)
//        this.next = (next===undefined ? null : next)
//    }

// let a = new ListNode(1);
// let b = new ListNode(2);
// let c = new ListNode(3);
// let d = new ListNode(4);
// a.next = b;
// b.next = c;
// c.next = d;

// console.log(reorderList(a));
