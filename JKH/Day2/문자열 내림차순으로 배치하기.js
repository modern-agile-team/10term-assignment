function solution(s) {
  let answer = '';

  s = s.split("");
  s = s.sort((a, b) => (a < b ? 1 : -1));

  for (let i = 0; i < s.length; i++) {
    answer += s[i];
  }

  return answer;
}