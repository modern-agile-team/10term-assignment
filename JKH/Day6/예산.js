function ascendingOrder(arr) {
  return arr.sort((a, b) => a - b);
}

function findMaxSupportNumber(requestArr, money) {
  let idx = 0;

  while(idx < requestArr.length) {
    if (money - requestArr[idx] < 0) break;
    money -= requestArr[idx];
    idx++;
  }

  return idx;
}

function solution(d, budget) {
  const sorted = ascendingOrder(d);
  
  const answer = findMaxSupportNumber(sorted, budget);

  return answer;
}