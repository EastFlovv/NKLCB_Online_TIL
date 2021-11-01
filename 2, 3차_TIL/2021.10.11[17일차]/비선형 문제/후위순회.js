// 후위 순회
function Node(value){
  this.value = value;
  this.left = null;
  this.right = null;
}

function BinaryTree(){
  this.root = null;
}

BinaryTree.prototype._insertNode = function(node, value){
  if(node === null) node = new Node(value);
  else if (value < node.value){
    node.left = this._insertNode(node.left, value)
  }else if (value > node.value){
    node.right = this._insertNode(node.right, value)
  }
  return node;
}

BinaryTree.prototype.insert = function(value){
  this.root = this._insertNode(this.root, value);
}

BinaryTree.prototype.postSearch = function (node, result = []){
  if(node === null) return;

  this.postSearch(node.left, result);
  this.postSearch(node.right, result);
  result.push(node.value);
}

function answer(str){
  let result =[];
  
  let strs = str.split('');
  let tree = new BinaryTree;
  for (let i = 0; i < strs.length; i++) {
    tree.insert(strs[i]);
  };

  tree.postSearch(tree.root, result);

  return result;
};

let input = [
  "ABC",

  "FBADCEGIH",

  "CBAEDFG"
]

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i]));
}