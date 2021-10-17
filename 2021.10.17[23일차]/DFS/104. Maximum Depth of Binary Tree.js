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
 * @return {number}
 */

function recursive(node, level = 0){
  if(node === null) return level;
  level++;
  let depL = recursive(node.left, level);
  let depR = recursive(node.right, level);
  
  return depL > depR ? depL : depR;
}



let maxDepth = function(root) {
  return recursive(root);
};