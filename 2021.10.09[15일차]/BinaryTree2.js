// Node() value, left, right를 저장하기 위한 생성자
function Node(value){
  this.value = value;
  this.left = null;
  this.right = null;
};

// BinaryTree() 시작 노드인 root를 저장하기 위한 생성자
function BinaryTree(){
  this.root = null;
};

// _insertNode() 재귀로 트리를 순회하며 노드추가 (내부사용)
BinaryTree.prototype._insertNode = function (node, value){
  // 현재값과 비교
  // 작으면 왼쪽, 크면 오른쪽
  // 왼쪽 오른쪽에 left, right pointer 비어있다면 추가할 노드를 연결
  // 비어있지 않다면 하위 노드에서 다시 비교하도록 넘김

  if(node === null){
    node = new Node(value);
  }
  //left
  if(value < node.value){
    node.left = this._insertNode(node.left, value);
  }
  //right
  if(value > node.value){
    node.right = this._insertNode(node.right, value);
  }
  return node;
}
// insert() 노드 추가
BinaryTree.prototype.insert = function(value){
  this.root = this._insertNode(this.root, value);
}

// 전위 순회
BinaryTree.prototype._preOrderTraverseNode = function(node, callback){
  if(node === null){
    return; // 널이면 되돌아옴
  }
  callback(node); //노드출력
  node.left = this._preOrderTraverseNode(node.left, callback); // 왼쪽 진입
  node.right = this._preOrderTraverseNode(node.right, callback); // 오른쪽 진입
}

BinaryTree.prototype.preOrderTraverse = function (callback){
  this._preOrderTraverseNode(this.root, callback);
}




let tree = new BinaryTree();

tree.insert("F");
tree.insert("B");
tree.insert("A");
tree.insert("D");
tree.insert("C");
tree.insert("E");
tree.insert("G");
tree.insert("I");
tree.insert("H");

console.log(tree);

function printNode(node){
  process.stdout.write(`${node.value} -> `);
}
tree.preOrderTraverse(printNode);
console.log('end');