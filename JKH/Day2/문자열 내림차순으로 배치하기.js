function solution(s) {
  let answer = '';

  s = s.split("");
  s = s.sort();

  for(i = s.length - 1; i >= 0; i--) {
      answer += s[i];
  }

  return answer;
}