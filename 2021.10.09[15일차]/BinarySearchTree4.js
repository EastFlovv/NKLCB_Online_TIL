// Node() value, left, right를 저장하기 위한 생성자
function Node(value){
  this.value = value;
  this.left = null;
  this.right = null;
};

// BinarySearchTree() 시작 노드인 root를 저장하기 위한 생성자
function BinarySearchTree(){
  this.root = null;
};

// _insertNode() 재귀로 트리를 순회하며 노드추가 (내부사용)
BinarySearchTree.prototype._insertNode = function (node, value){

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
BinarySearchTree.prototype.insert = function(value){
  this.root = this._insertNode(this.root, value);
}


// 중위 순회
BinarySearchTree.prototype._inOrderTraverseNode = function(node, callback){
  if(node === null){
    return; // 널이면 되돌아옴
  }
  this._inOrderTraverseNode(node.left, callback); // 왼쪽 진입
  callback(node); //노드출력
  this._inOrderTraverseNode(node.right, callback); // 오른쪽 진입
}

BinarySearchTree.prototype.inOrderTraverse = function (callback){
  this._inOrderTraverseNode(this.root, callback);
  console.log('end');
}

function printNode(node){
  process.stdout.write(`${node.value} -> `);
}

// 최소값 찾기
//_minNode(): 반복문으로 트리를 순회하며 최솟값 노드 탐색
BinarySearchTree.prototype._minNode = function(node){
  if(node === null){
    return null;
  }

  while(node && node.left !== null){
    node = node.left;
  }

  return node.value;
}

//min(): 최솟값 노드 탐색
BinarySearchTree.prototype.min = function(){
  return this._minNode(this.root);
}


// 최대값 찾기
//_maxNode(): 반복문으로 트리를 순회하며 최대값 노드 탐색
BinarySearchTree.prototype._maxNode = function(node){
  if(node === null){
    return null;
  }

  while(node && node.right !== null){
    node = node.right;
  }

  return node.value;
}
//max(): 최댓값 노드 탐색
BinarySearchTree.prototype.max = function(){
  return this._maxNode(this.root);
}

// _SearchNode(): 재귀로 트리를 순회하며 값을 만족하는 노드 탐색
BinarySearchTree.prototype._searchNode = function (node, value){
  if(node === null){
    return false;
  }

  if(node.value === value) {
    return true;
  }else if(node.value > value){
    return this._searchNode(node.left, value);
  }else if(node.value < value){
    return this._searchNode(node.right, value);
  }
}
// search(): value 노드 탐색
BinarySearchTree.prototype.search = function(value){
  return this._searchNode(this.root, value)
}

// 삭제
//_findMinNode(): 반복문으로 트리를 순회하며 최솟값을 보유한 노드 탐색/반환
BinarySearchTree.prototype.findMinNode = function(node){
  while(node && node.left !== null){
    node = node.left;
  }
  return node;
}

// _removeNode(): 재귀로 트리를 순회하며 값을 만족하는 노드를 찾고 삭제
BinarySearchTree.prototype._removeNode = function(node, value){
  if(node === null) return null;
  if(node.value === value){
    // case1: 자식 0개
    if(node.left === null && node.right === null){
      node = null;
    }
    // case2: 자식 1개
    else if (node.left === null){
      node = node.right;
    }else if (node.right === null){
      node = node.left;
    }
    // case3: 자식 2개
    else{
      let aux = this.findMinNode(node.right);
      node.value = aux.value;
      node.right = this._removeNode(node.right, aux.value);
    }
  }else if (node.value > value){
    node.left = this._removeNode(node.left, value)
  }else if (node.value < value){
    node.right = this._removeNode(node.right, value)
  }
  return node;
};

// remove(): 노드 삭제
BinarySearchTree.prototype.remove = function(value){
  this.root = this._removeNode(this.root, value);
};


let tree = new BinarySearchTree();

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
tree.remove("H");
tree.inOrderTraverse(printNode);
tree.remove("D");
tree.inOrderTraverse(printNode);
tree.remove("F");
tree.inOrderTraverse(printNode);