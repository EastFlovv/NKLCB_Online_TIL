/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 let mergeTwoLists = function(l1, l2) {
  
  let answer;
  // 초기화
  if(l1 === null && l2 === null) return l1;
  
  if(l1 === null) return l2;
  if(l2 === null) return l1;
  
  if(l1.val <= l2.val){
    answer = new ListNode(l1.val, null);
    l1 = l1.next;
  }else{
    answer = new ListNode(l2.val, null);
    l2 = l2.next;
  }
  
  let root = answer;
  
  while(!(l1 === null && l2 === null)){
    // console.log(`l1.next = ${(l1.next).val} l2.next = ${(l2.next).val}`);
    
    if(l2 === null){
      answer.next = l1;
      l1 = l1.next;
      answer = answer.next;
    }else if(l1 === null){
      answer.next = l2;
      l2 = l2.next;
      answer = answer.next;
    }else
    
    
    if(l2 === null || l1.val <= l2.val){
      // console.log(`l1 in ${l1.val}`);
      answer.next = l1;
      l1 = l1.next;
      answer = answer.next;
    }else if (l1 === null || l1.val > l2.val){
      // console.log(`l2 in ${l2.val}`);
      answer.next = l2;
      l2 = l2.next;
      answer = answer.next;
    }
    
  }
  return root;
};


// function ListNode(val, next) {
//   this.val = (val===undefined ? 0 : val)
//   this.next = (next===undefined ? null : next)
// }

// let l1 = new ListNode(1);
// let L1 = l1;
// l1.next = new ListNode(2);
// l1 = l1.next;
// l1.next = new ListNode(4);


// let l2 = new ListNode(1);
// let L2 = l2;
// l2.next = new ListNode(3);
// l2 = l2.next;
// l2.next = new ListNode(4);

// console.log(L1, L2);

// console.log(mergeTwoLists(L1, L2))