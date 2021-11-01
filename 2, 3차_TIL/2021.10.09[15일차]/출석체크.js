//출석체크

function Dictionary(items = []){
  this.items = items;
};

Dictionary.prototype.has = function(key){
  return this.items.hasOwnProperty(key);
};

Dictionary.prototype.set = function(key, value){
  this.items[key] = value;
};

function answer(class_1, class_2) {
  let result = [];
  // 내 코드 - 시간복잡도 O(n^2)
  // class_1.forEach(element => {
  //   if(class_2.includes(element))
  //     result.push(element);
  // });

  // 강사님 코드 시간복잡도 O(n)
  //class_2에 대한 key-value형태로 저장 -> 학생이 있는지 없는지 확인
  let temp = new Dictionary();
  for (let i = 0; i < class_2.length; i++) {
    temp.set(class_2[i]);
  };
  
  //class_1 for class_2 diction 학생 있는지 없는지 유무를 통해 빠르게 확인가능
  for (let i = 0; i < class_1.length; i++) {
    if(temp.has(class_1[i])) result.push(class_1[i]);
  }
  return result;
};

let input = [
  [
    ['kali', 'oliver', 'naomi'],
    ['oliver', 'naomi', 'maya']
  ],

  [
    ['roxy', 'olga', 'kara', 'nana'],
    ['oliver', 'roxy', 'kara', 'nana', 'maya']
  ],

  [
    ['roxy', 'ravi', 'nana', 'rei', 'karis', 'mana', 'naomi'],
    ['olga', 'nana', 'rei', 'oliver', 'kali', 'rei', 'kara']
  ]
]

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i][0], input[i][1]));
}