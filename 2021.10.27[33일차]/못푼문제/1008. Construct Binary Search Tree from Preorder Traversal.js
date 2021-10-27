/**
* Definition for a binary tree node.
* function TreeNode(val, left, right) {
*     this.val = (val===undefined ? 0 : val)
*     this.left = (left===undefined ? null : left)
*     this.right = (right===undefined ? null : right)
* }
*/
/**
* @param {number[]} preorder
* @return {TreeNode}
*/

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}


function inorderLeft(arr, head, prev){
  if(head === null){
    head = new TreeNode(arr.shift());
    if(arr[0] < head.val) head.left = inorderLeft(arr, head.left, head.val);
    if(arr[0] > head.val && arr[0] < prev) head.right = inorderLeft(arr, head.right, head.val);  
    return head;
  }
  prev = head.val;
  if(arr[0] < head.val) head.left = inorderLeft(arr, head.left, head.val);
  return head;
}

function inorderRight(arr, head, prev){
  if(head === null){
    head = new TreeNode(arr.shift());
    if(arr[0] < head.val) head.left = inorderRight(arr, head.left, head);
    if(arr[0] > head.val && prev.right !== null) head.right = inorderRight(arr, head.right, head);  
    return head;
  }
  prev = head;
  if(arr[0] > head.val) head.right = inorderRight(arr, head.right, head);
  return head;
}



let bstFromPreorder = function(preorder) {
  let left = [];
  let right = [];
  let node = new TreeNode(preorder.shift());

  preorder.forEach(el => {
    if(el < node.val) left.push(el);
    else right.push(el);
  });
  
  console.log(left);
  console.log(right);

  let head = inorderLeft(left, node);
  head = inorderRight(right, node);
  console.log(head);
  return head;
};

bstFromPreorder([8,5,1,7,10,12]);