function ascendingOrder(targetArr) {
  return targetArr.slice().sort((a, b) => a.length - b.length);
}

function parseTuple(targetArr) {
  const strArr = targetArr.split("},{");
  const result = [];
  
  strArr[0] = strArr[0].slice(2);
  strArr[strArr.length - 1] = strArr[strArr.length - 1].slice(0, -2);

  for (let i = 0; i < strArr.length; i++) {
    const nums = strArr[i].split(",");
    const intArr = [];

    for (let j = 0; j < nums.length; j++) {
      intArr.push(Number(nums[j]));
    }
    
    result.push(intArr);
  }

  return result;
}

function tupleToArray(targetArr) {
  const set = new Set();

  for (let i = 0; i < targetArr.length; i++) {
    for (let j = 0; j < targetArr[i].length; j++) {
      set.add(targetArr[i][j]);
    }
  }

  return [...set];
}

function solution(s) {
  const parsed = parseTuple(s);
  const sorted = ascendingOrder(parsed);
  const answer = tupleToArray(sorted);

  return answer;
}