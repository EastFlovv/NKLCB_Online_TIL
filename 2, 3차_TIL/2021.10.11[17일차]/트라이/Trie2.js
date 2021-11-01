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


let trie = new Trie();

trie.insert("be");
trie.insert("bee");
trie.insert("can");
trie.insert("cat");
trie.insert("cd");

console.log(trie.root)
console.log(trie.search('bear'));
console.log(trie.search('b'));
console.log(trie.search('be'));