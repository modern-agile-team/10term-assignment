  function solution(answers) {
    let score = Array(3).fill(0);
    const answer = [];
    const arr0 = [1, 2, 3, 4, 5];
    const arr1 = [1, 3, 4, 5];
    const arr2 = [3, 1, 2, 4, 5];
    let idx0 = 0, idx1 = 0, idx2 = 0;

    for (let i = 0; i < answers.length; i++) {
      // 1번 수포자 답 확인
      if (answers[i] === arr0[idx0]) score[0]++;

      idx0++;
      if (idx0 > 4) idx0 = 0;
      
      // 2번 수포자
      if (i % 2 === 0 && answers[i] === 2) score[1]++;
      if (i % 2 !== 0 && answers[i] === arr1[idx1]) score[1]++;

      if (i % 2 === 1) idx1++;
      if (idx1 > 3) idx1 = 0;

      // 3번 수포자
      if (answers[i] === arr2[idx2]) score[2]++;

      if (i % 2 === 1) idx2++;
      if (idx2 > 4) idx2 = 0;
    }

    for (let i = 0; i < 3; i++) {
      if (score[i] === Math.max.apply(null, score)) {
        answer.push(i + 1);
      }
    }

    return answer;
  }