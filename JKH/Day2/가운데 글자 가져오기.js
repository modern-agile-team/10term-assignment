function solution(s) {
  let answer = '';
  const wordLength = s.length;  

  if (wordLength % 2 === 0) {
    answer += s[wordLength / 2 - 1];
    answer += s[wordLength / 2];
  } else {
    answer += s[Math.floor(wordLength / 2)];
  }
    
  return answer;
}