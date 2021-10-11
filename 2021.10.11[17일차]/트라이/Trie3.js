// TrieNode(): 문자값과 끝 단어 표시를 위한 노드 생성자
function TrieNode(){
  this.children = {}; // key: 문자., value: TrieNode
  this.endOfNode = false; // 단어 여부
}

// Trie(): 루트 노드 저장을 위한 생성자
function Trie(){
  this.root = new TrieNode();
}

// insert(): 문자열 추가
Trie.prototype.insert = function(word){
  let current = this.root;

  for (let i = 0; i < word.length; i++) {
    let ch = word[i];
    let node = current.children[ch];

    if(node === undefined){
      node = new TrieNode();
      current.children[ch] = node;
    }
    current = node;
  }
  current.endOfNode = true;
}


// search(): 문자열 검색
Trie.prototype.search = function(word){
  let current = this.root;

  for (let i = 0; i < word.length; i++) {
    let ch = word[i];
    let node = current.children[ch];
    
    if(node == undefined) return false;
    current = node;
  }
  return current.endOfNode;
}

// delete(): 문자열 삭제
Trie.prototype.delete = function(word, current = this.root, index = 0){
  // 종료 조건
  if(index === word.length){
    if(!current.endOfNode) return false;

    current.endOfNode = false;
    return Object.keys(current.children).length === 0;
  }
  let ch = word[index];
  let node = current.children[ch];

  if(node === undefined) return false;

  let isDeleteNode = this.delete(word, node, index+1) && !node.endOfNode;
  if(isDeleteNode){
    delete current.children[ch];
    return Object.keys(current.children).length === 0;
  }
  return false;
}


let trie = new Trie();

trie.insert("be");
trie.insert("bee");
trie.insert("can");
trie.insert("cat");
trie.insert("cd");

// console.log(trie.root)
// console.log(trie.search('bear'));
// console.log(trie.search('b'));
// console.log(trie.search('be'));

console.log(trie.search('bee'));
trie.delete('bear')
console.log(trie.search('bee'));
trie.delete('b')
console.log(trie.search('bee'));
trie.delete('bee')
console.log(trie.search('bee'));