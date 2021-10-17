/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */

 function recursive(p, q){
  if(p === null && q === null) return true;
  if(p === null || q === null) return false;
  if(p.val !== q.val) return false;
  
  return recursive(p.left, q.left) && recursive(p.right, q.right)
  
}

let isSameTree = function(p, q) {
  return recursive(p, q);
};