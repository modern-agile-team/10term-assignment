function solution(s) {
  const answer = changeToWeirdString(s);

  return answer;
}

function changeToWeirdString(input) {
  const words = input.split(' ');
  const result = [];

  for (let i = 0; i < words.length; i++) {
    let temp = '';
        
    for (let j = 0; j < words[i].length; j++) {
      const target = words[i][j];
      j % 2 === 0 ? temp += target.toUpperCase() : temp += target.toLowerCase();  
    }
      result.push(temp);
  }

  return result.join(' ');
}