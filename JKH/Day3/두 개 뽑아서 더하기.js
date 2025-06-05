// 1번 방법 Set 객체
function solution(numbers) {
  let answer = [];

  for (i = 0; i < numbers.length; i++) {
    for (j = i + 1; j < numbers.length; j++) {
      answer.push((numbers[i] + numbers[j]));
    }
  }

  const set1 = new Set(answer);
  answer = Array.from(set1);

  return answer.sort((a, b) => (a - b));
}