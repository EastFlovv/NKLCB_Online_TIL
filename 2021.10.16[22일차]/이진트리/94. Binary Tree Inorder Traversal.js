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

 function recursive (node){
  if(node === null) return '';
  let str = '';
  
  str += 'k' + recursive(node.left);
  str += 'k' + node.val;
  str += 'k' + recursive(node.right);
  return str;
}
let inorderTraversal = function(root) {
    
  let answer = recursive(root);
  return answer.split('k').filter(el => el!='');
};
// 재귀를 이용해서 풀었으나 구분자 k를 이용해 어거지로 풀어냄 어떻게 해야 제대로 된 값 전달이 가능할지?