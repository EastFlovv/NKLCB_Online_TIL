function answer(str) {
  let fix ='';

  let strArr = str.split(' ');
  for (let i = 0; i < strArr.length; i++) {
    strArr[i] = strArr[i].charAt(0).toUpperCase() + strArr[i].substr(1);
    fix += strArr[i]+' ';
  };
  return fix;
};

let input = [
  'Hello, My name is john',
  'This weel is closed due to COVID-19',
  'fifty percent off this week'
];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i+1} ${answer(input[i])}`);
}