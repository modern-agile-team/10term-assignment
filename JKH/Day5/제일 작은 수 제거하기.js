function solution(arr) {
  const answer = [];
  let minValue = arr[0];

  if (arr.length === 1) return [-1];

  // 최솟값 찾기
  for (let i = 1; i < arr.length; i++) {
    if(minValue > arr[i]) minValue = arr[i];
  }

  // 제일 작은 수 제외하여 배열 생성
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === minValue) continue;
    answer.push(arr[i]); 
  }

  return answer;
}