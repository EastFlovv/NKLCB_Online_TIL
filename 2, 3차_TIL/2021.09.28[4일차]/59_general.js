function answer(str){
  let spam_flag;
  str = str.toLowerCase();
  spam_flag = str.includes('advert');

  return spam_flag;
};

let input = [
  'RE: Request documents',
  '[Advertisement] free mobile!',
  '50^ off this week (advertising)'
];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i+1} ${answer(input[i])}`);
}