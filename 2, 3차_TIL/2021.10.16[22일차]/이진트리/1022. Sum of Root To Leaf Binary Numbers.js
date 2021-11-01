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

 function recursive (node, str, sum){
  let num1 = 0, num2 = 0;
  
  str += node.val;
  
  if(node.left !== null)
    num1 = recursive(node.left, str, sum);
  if(node.right !== null)
    num2 = recursive(node.right, str, sum);
  if(node.left === null && node.right === null) return parseInt(str, 2);
  
  return num1 + num2;
}


let sumRootToLeaf = function(root) {
  let str = '';
  let sum = 0;
  return recursive(root, '', sum);
};
