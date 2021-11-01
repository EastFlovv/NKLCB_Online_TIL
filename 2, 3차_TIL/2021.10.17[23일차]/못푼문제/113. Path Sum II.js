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
 * @return {number[][]}
 */

 function recursive (node, targetSum, sum = 0, stack = [], answer = []){
  if(node === null) return;
  
  stack.push(node.val);
  sum += node.val;
  
  // if(node.left === null && node.right === null && sum === targetSum) return;
  
  
  console.log(`now = ${node.val} stack = ${stack} targetSum = ${targetSum} sum = ${sum} answer = ${answer}`)
  recursive(node.left, targetSum, sum, stack, answer);
  recursive(node.right, targetSum, sum, stack, answer);
  
  if(node.left === null && node.right === null && sum === targetSum){
    answer.push(stack);
    // answer.push([...stack])
    console.log(`answer stack = ${stack} answer = ${answer[0]}`)
    stack.pop();
    return;
  }
  if(node.left === null && node.right === null && sum !== targetSum){
    stack.pop();
    return;
  }
  
  return answer;
}




let pathSum = function(root, targetSum) {
  // console.log(recursive(root, targetSum));
  return recursive(root, targetSum)
};