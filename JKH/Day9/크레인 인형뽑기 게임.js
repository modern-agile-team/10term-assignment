function pullDoll(board, column) {
  for (let i = 0; i < board.length; i++) {
    if (board[i][column] !== 0) {
      const doll = board[i][column];
      board[i][column] = 0;
      return doll;
    }
  }
  return null;
}

function addToBucket(bucket, doll) {
  if (!doll) return 0;
    
  if (bucket[bucket.length - 1] === doll) {
    bucket.pop();
    return 2;
  } else {
    bucket.push(doll);
    return 0;
  }
}

function solution(board, moves) {
  const bucket = [];
  let answer = 0;

  for (const move of moves) {
    const doll = pullDoll(board, move - 1);
    answer += addToBucket(bucket, doll);
  }

  return answer;
}