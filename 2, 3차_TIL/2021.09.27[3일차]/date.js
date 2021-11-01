// Date 생성자
let date = new Date(); // object
let date2 = Date(); // string

console.log(date);
console.log(date2);

// ms 조정
let dateMs1 = new Date(0);
console.log(dateMs1); // 1970-1-1 00:00:00
let dateMs2 = new Date(1000* 3600 * 24); // 하루 당기기
console.log(dateMs2); // 1970-1-2 00:00:00

let dateString = new Date('2020-01-01');
console.log(dateString);
// month: 1월(0)- 12월(11)
let dateParams = new Date(2021, 0, 1); // 2021-1-1 
console.log(dateParams); // 2020-12-31 15:00:00 UCT+9
// UTC보정
let dateParams2 = new Date(Date.UTC(2021, 0, 1)); // 2021-1-1 
console.log(dateParams2); // 2020-01-01 00:00:00 UCT+0

// 날짜 정보 얻기
console.log('날짜 정보 얻기')
date = new Date(Date.UTC(2021, 0, 1));
console.log(date);
console.log(date.getFullYear());
console.log(date.getMonth());
// 일요일(0) - 토요일(6)
console.log(date.getDay()); // 5 금요일
console.log(date.getHours());
console.log(date.getUTCHours());
console.log(date.getTime());
console.log(date.getTimezoneOffset());

console.log('날짜 정보 설정');
console.log(date);
let my_year = date.setFullYear(2020,2, 15);
console.log(date);
console.log(new Date(my_year));
date.setDate(0);  
console.log(date);

date.setHours(date.getHours()+2); // 2시간 증가
console.log(date);


console.log('----------parse-----------');
let ms_parse = Date.parse('2020-03-31T00:00:00.000');
console.log(ms_parse);
console.log(new Date(ms_parse));
ms_parse = Date.parse('2020-03-31T00:00:00.000Z');
console.log(new Date(ms_parse));


console.log('----------benchmark-----------');
function dateSub(oldDate, newDate){
  return newDate-oldDate;
};

function getTimeSub(oldDate, newDate){
  return newDate.getTime()-oldDate.getTime();
};

function benchmark(callback_func){
  let date_1 = new Date('2020-01-01');
  let date_2 = new Date();
  let start = Date.now();
  for (let i = 0; i < 100000; i++) {
    callback_func(date_1, date_2);
  }
  return Date.now()-start;
}

console.log('dateSUb: '+benchmark(dateSub)+'ms');
console.log('GetTImeSUb: '+benchmark(getTimeSub)+'ms');