function invert(node){
  if(node === null) return null;
  
  let tmp = node.left;
  node.left = node.right;
  node.right = tmp;
  
  invert(node.left);
  invert(node.right);
  return node;
}



let invertTree = function(root) {
  return invert(root);
};