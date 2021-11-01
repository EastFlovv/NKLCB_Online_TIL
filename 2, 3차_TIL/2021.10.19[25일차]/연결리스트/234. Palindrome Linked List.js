/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
 let isPalindrome = function(head) {
  let answer = true;
  let arr = [];
  while(head !== null) {
    arr.push(head.val);
    head = head.next;
  }
  
  let left = 0;
  let right = arr.length-1;
  
  while(left < right){
    if(arr[left] !== arr[right]){
      answer = false;
      break;
    }
    left++;
    right--;
  }
  return answer;
};