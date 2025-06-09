function solution(array, commands) {
  let answer = [];
    
  for (let i = 0; i < commands.length; i++) {
    let startPoint = commands[i][0] - 1;
    let endPoint = commands[i][1];
    let KPoint = commands[i][2] - 1;

    let arr1 = array.slice(startPoint, endPoint);
    arr1.sort((a, b) => (a - b));
          
    answer.push(arr1[KPoint]);
  }
    
  return answer;
}