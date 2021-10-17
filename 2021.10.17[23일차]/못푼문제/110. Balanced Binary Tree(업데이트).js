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

 function recursive(node, level = 0){
  if(node === null) return level-1;
  let now = level++;
  // console.log(now);
  let depL = recursive(node.left, level);
  let depR = recursive(node.right, level);
  // console.log(`L ${depL}, R ${depR}`)
  if(now !== 0)
    return Math.max(depL, depR);
  else return Math.abs(depL - depR) > 1 ? false : true;
}


let isBalanced = function(root) {
  return recursive(root, 0);
};

// 예시케이스는 통과 하였으나 반례가 나왔다
//       1
//     2   2
//    3     3
//   4       4          균형 이진트리는 높이 값의 차이가 1이면 되는것이 아닌가? 애당초 최소 높이글 가지도록 설계를 해야하는데 그렇지 않았다고 한다면
//                      균형 이진트리의 모양을 하고 있지 않을때도 false를 추가해야 하는것인가?