/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
 let getIntersectionNode = function(headA, headB) {
  let arrA = [];
  let arrB = [];
  
  while(!(headA === null && headB ===null)){
    
    if(headA !== null){
      arrA.push(headA.val);
      headA = headA.next;
    };
    
    if(headB !== null){
      arrB.push(headB.val);
      headB = headB.next;
    };
  };
  
  console.log(arrA, arrB);
  
  let max = Math.max(arrA.length, arrB.length);
  let sub = arrA.length > arrB.length ? arrA.length-arrB.length : arrB.length-arrA.length;
  // for(let i = min-1; i >= sub ; i--){
  //   if(arrA[i] !== arrB[i]) 
  // }
  
  
  
};