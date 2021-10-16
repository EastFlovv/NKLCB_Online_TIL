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

function recursive(node, level){
  let now = level;
  // 종료 조건
  if(node === null) return level;
  
  let leftDepth = recursive(node.left, level+1);
  let rightDepth = recursive(node.right, level+1);
}


let isBalanced = function(root) {
  let jud = false;
  let answer = recursive(root, 1);
  
  if(answer < 2) jud = true;
  return jud;
};