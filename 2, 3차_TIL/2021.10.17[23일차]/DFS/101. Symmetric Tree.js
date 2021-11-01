/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */


function recursive(nodeL, nodeR){
  if(nodeL === null && nodeR === null) return true;
  if(nodeL === null || nodeR === null) return false;
  if(nodeL.val !== nodeR.val) return false;
  
  return recursive(nodeL.left, nodeR.right) && recursive(nodeL.right, nodeR.left)
  
}

let isSymmetric = function(root) {
  return recursive(root.left, root.right)
};