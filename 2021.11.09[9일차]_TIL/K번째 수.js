function solution(array, commands) {
  const answer = [];
  
  for(let i = 0; i < commands.length; i++){
      const newArr = array.slice(commands[i][0]-1, commands[i][1]);
      newArr.sort((x, y)=> x-y);
      answer.push(newArr[commands[i][2]-1]);
  }
  return answer;
}