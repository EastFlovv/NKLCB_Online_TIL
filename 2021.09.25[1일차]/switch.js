let dayNum = 1;
let day = '';

switch(dayNum){
  case 0:
    day = 'sunday';
    break;
  case 1:
    day = 'monday';
    break;
  case 2:
    day = 'tuesday';
    break;
  case 3:
    day = 'wednesday';
    break;
  case 4:
    day = 'thurday';
    break;
  case 5:
    day = 'friday';
    break;
  case 6:
    day = 'saturday';
    break;
  default:
    day='error';
    break;
}
console.log(day);


let browser ='chrome';
switch(browser){
  case 'explorer':
    msg = 'active x required';
    break;
  case 'chrome':
  case 'firefox':
  case 'opera':
    msg = 'supported bowser';
    break;
  default:
    msg = 'not supported';
    break;
}

console.log(msg);