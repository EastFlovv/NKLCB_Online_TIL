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
 * @return {string[]}
 */

 function recursive (node){
  
  if(node === null) return '';
  let str ='';
  
  str += '->' + recursive(node.left);
  str += '->' + recursive(node.right);
  return ;
}


let binaryTreePaths = function(root) {
  let node = root;
  console.log(recursive(node));
};