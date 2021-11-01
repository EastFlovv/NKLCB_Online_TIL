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
  let depL = recursive(node.left, level+1);
  let depR = recursive(node.right, level+1);
  
  // console.log(`val ${node.val}, level ${level}, L ${node.left}, R ${node.right} depL : ${depL} depR : ${depR}`)
  if(node.right === null)  return depL;
  if(node.left === null)  return depR;
  
  return Math.min(depL, depR);
}

//  2
//   3
//    4
//     5
//      6



// 리프노드중 가장 작은 값을 반환?
let minDepth = function(root) {
  return recursive(root);
};