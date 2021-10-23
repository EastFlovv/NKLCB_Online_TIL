/**
 * @param {string} preorder
 * @return {boolean}
 */
let isValidSerialization = function(preorder) {
  let arrows = 1;
  let nodes = preorder.split(',');
  
  if(nodes[0] === '#') { // 첫 노드가 공백일때
    return nodes.length === 1 ? true : false;
  }
  
  for(let i = 0; i < nodes.length; i++){
    if(nodes[i] !== '#') arrows++;
    else arrows--;
    // 노드가 없는데 추가로 입력할때
    if(arrows === 0 && i < nodes.length-1) return false;
  }
  
  return arrows === 0 ? true : false;
};