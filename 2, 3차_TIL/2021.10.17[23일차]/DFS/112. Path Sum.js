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
 * @param {number} targetSum
 * @return {boolean}
 */

function recursive (node, targetSum, sum = 0){
  if(node === null) return false;
  sum += node.val;
  if(node.left === null && node.right === null) return targetSum === sum;
  
  return recursive(node.left, targetSum, sum) || recursive(node.right, targetSum, sum);
}


let hasPathSum = function(root, targetSum) {  

  return recursive(root, targetSum)
};