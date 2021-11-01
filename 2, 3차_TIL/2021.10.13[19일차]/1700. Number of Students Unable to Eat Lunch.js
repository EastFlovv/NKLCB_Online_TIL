/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
 let countStudents = function(students, sandwiches) {
  // 원 샌드위치 0
  // 네모 샌드위치 1
  //원하는것을 먹을때까지 순환 원하는게 없다면 못먹은 사람수 반환
  
  let starve = 0; 
  while(starve != students.length){
    if(students[0] === sandwiches[0]){ // 먹고 싶은게 있으면 하나씩 제거
      students.shift();
      sandwiches.shift();
      starve = 0;
    }else{ // 먹고 싶은게 없으면 학생이 줄로 돌아감
      students.push(students.shift());
      starve++; // 못먹은 사람수 + 1
    }
  }
  return starve;
};