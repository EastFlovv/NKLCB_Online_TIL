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


// 중위 순회
BinaryTree.prototype._inOrderTraverseNode = function(node, callback){
  if(node === null){
    return; // 널이면 되돌아옴
  }
  this._inOrderTraverseNode(node.left, callback); // 왼쪽 진입
  callback(node); //노드출력
  this._inOrderTraverseNode(node.right, callback); // 오른쪽 진입
}

BinaryTree.prototype.inOrderTraverse = function (callback){
  this._inOrderTraverseNode(this.root, callback);
  console.log('end');
}

function printNode(node){
  process.stdout.write(`${node.value} -> `);
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

tree.inOrderTraverse(printNode);
