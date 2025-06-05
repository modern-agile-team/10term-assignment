function solution(n)
{
  let pow = 0;
  let answer = 0;

  while(1) {
    if (n / Math.pow(10, pow) < 1) break;
    pow++;
  }

  for (pow; pow >= 0;) {
    --pow;
    answer += Math.floor(n / Math.pow(10, pow));
    n %= Math.pow(10, pow);
  }

  return answer;
}