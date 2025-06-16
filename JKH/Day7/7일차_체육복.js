function sortArr(arr) {
  return arr.sort((a, b) => a - b);
}

function solution(n, lost, reserve) {
  let answer = 0;
  // 모든 학생은 체육복을 갖고 있다.
  let uniformAmount = Array(n).fill(1);

  sortArr(lost);
  sortArr(reserve);

  for (let i = 0; i < lost.length; i++) {
      uniformAmount[lost[i] - 1] -= 1;
  }
  
  for (let i = 0; i < reserve.length; i++) {    
      uniformAmount[reserve[i] - 1] += 1;
  }

  for (let i = 0; i < n; i++) {
    if (uniformAmount[i] === 0) {
      if (uniformAmount[i-1] === 2) {
        uniformAmount[i-1]--;
        answer++;
        continue;
      }
      if (uniformAmount[i+1] === 2) {
        uniformAmount[i+1]--;
        answer++;
        continue;
      }            
    } else {
      answer++;
    }
  }

  return answer;
}