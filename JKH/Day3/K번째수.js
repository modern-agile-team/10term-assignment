function solution(array, commands) {
  let answer = [];
    
  for (let i = 0; i < commands.length; i++) {
    let startPoint = commands[i][0];
    let endPoint = commands[i][1];
    let KPoint = commands[i][2];

    let arr1 = array.slice(startPoint - 1, endPoint);
    arr1.sort((a, b) => (a - b));
          
    answer.push(arr1[KPoint - 1]);
  }
    
  return answer;
}