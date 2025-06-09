function solution(lottos, win_nums) {
  // 변수 선언
  const answer = [];
  let zeroCount = 0;
  let trueCount = 0;

  // 로또 배열과 당첨 번호를 오름차순으로 정렬
  lottos.sort((a, b) => (a - b));
  win_nums.sort((a, b) => (a - b));

  // 로또 배열과 당첨 번호를 비교
  for (let i = 0; i < 6; i++) {
    // 로또 번호가 0이면 바로 다음 로또 번호 비교
    if (lottos[i] === 0) { 
      zeroCount += 1; 
      continue; 
    }
    // 로또 번호와 당첨 번호가 같은지
    for (let j = 0; j < 6; j++) {
      if (lottos[i] === win_nums[j]) {
        trueCount += 1; 
        break; 
      }
    }
  }
  
  // 좋은 등수와 나쁜 등수 계산
  const Rank = 7 - trueCount
  const goodRank = Rank - zeroCount >= 6 ? 6 : Rank - zeroCount;
  const badRank = Rank >= 6 ? 6 : Rank;

  answer.push(goodRank);
  answer.push(badRank);

  return answer;
}