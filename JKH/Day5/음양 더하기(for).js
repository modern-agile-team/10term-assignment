function solution(absolutes, signs) {
  let answer = 0;
  
  for (let i = 0; i < absolutes.length; i++) {
    signs[i] ? answer += absoultes[i] : answer -= absolutes[i];
  }

  return answer;
}