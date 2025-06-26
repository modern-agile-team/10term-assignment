function calculator(arr, sharp) {
  let temp1 = parseInt(arr);
  let temp2 = '';
  let result = 0;

  if (temp1 === 10) {
      temp2 = arr[2];
  } else {
      temp2 = arr[1];
  }

  if (temp2 === 'S') result = Math.pow(temp1, 1);
  if (temp2 === 'D') result = Math.pow(temp1, 2);
  if (temp2 === 'T') result = Math.pow(temp1, 3);

  if (sharp) result *= -1;

  return result;
}

function solution(dartResult) {
  const scores = [];
  let i = 0;

  while (i < dartResult.length) {
      let num = 0;
      let option = '';
      let score = 0;

      if (dartResult[i] === '1' && dartResult[i + 1] === '0') {
          num = 10;
          i += 2;
      } else {
          num = parseInt(dartResult[i++]);
      }

      let bonus = dartResult[i++];
      
      if (dartResult[i] === '*' || dartResult[i] === '#') option = dartResult[i++];
      
      let segment = num.toString() + bonus + option;

      score = calculator(segment, option === '#');

      if (option === '*') {
          score *= 2;
          if (scores.length > 0) scores[scores.length - 1] *= 2;
      }
      scores.push(score);
  }

  return scores.reduce((a, b) => a + b, 0);
}