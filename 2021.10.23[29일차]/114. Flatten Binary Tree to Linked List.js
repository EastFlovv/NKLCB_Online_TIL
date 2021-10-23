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
 * @return {void} Do not return anything, modify root in-place instead.
 */

// 깊이 우선탐색 -> 스택
// 리턴없음 root로 부터 모든 요소가 우측정렬 되어야함 (like linkedList)


function recursive(node){
  // 종료 조건
  if(node === null) return null;
  // 끝 탐색을 위한 tail
  let tail = node;
  
  let L = recursive(node.left);
  let R = recursive(node.right);
  // 노드의 우측에 왼쪽 노드 붙임
  node.right = L;
  // 왼쪽 노드를 비움
  node.left = null;
  // tail을 끝까지 보낸다
  while(tail.right){
    tail = tail.right;
  }
  // tail의 우측에 기존의 R을 붙임
  tail.right = R;
  // node를 리턴
  return node;
}


let flatten = function(root) {
  recursive(root);
};

// function TreeNode(val, left, right) {
//     this.val = (val===undefined ? 0 : val)
//     this.left = (left===undefined ? null : left)
//    this.right = (right===undefined ? null : right)
// }


// let a = new TreeNode(1);
// let root = a;
// let b = new TreeNode(2);
// let c = new TreeNode(3);
// let d = new TreeNode(4);
// let e = new TreeNode(5);
// let f = new TreeNode(6);

// a.left = b;
// b.left = c;
// b.right = d;
// a.right = e;
// e.right = f;

// flatten(root);