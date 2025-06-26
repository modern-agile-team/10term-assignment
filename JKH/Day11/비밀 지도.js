function solution(n, arr1, arr2) {
  let answer = [];

  for (let i = 0; i < n; i++) {
    let str = '';
    const firstLine = arr1[i].toString(2).padStart(n, '0');
    const secondLine = arr2[i].toString(2).padStart(n, '0');
    
    for (let j = 0; j < n; j++) {
      if (firstLine[j] === '0' && secondLine[j] === '0') str += ' ';
      else str += '#';
    }
    answer.push(str);
  }
  return answer;
}