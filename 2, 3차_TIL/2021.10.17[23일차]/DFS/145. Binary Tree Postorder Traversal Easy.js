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
 * @return {number[]}
 */


function recursive(node, stack = []){
  if(node === null) return [];
  recursive(node.left, stack);
  recursive(node.right, stack);
  stack.push(node.val);
  return stack;
};
let postorderTraversal = function(root) {
  return recursive(root);
};