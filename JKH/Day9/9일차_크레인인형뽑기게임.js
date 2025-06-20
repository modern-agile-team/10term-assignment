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

// 기존 풀이
/*
function solution(board, moves) {
  let answer = 0;
  let idx = 0;
  const bucket = [];

  for (let i = 0; i < moves.length; i++) {
    for (let j = 0; j < board.length; j++) {
      let target = board[j][moves[i] - 1];
      
      if (target) {
        bucket.push(target);
        board[j][moves[i] - 1] = 0;

        if (bucket[idx] === bucket[idx - 1]) {
          bucket.pop();
          bucket.pop();
          answer += 2;
          idx--;
        } else {
          idx++;
        }

        break;
      }
    }
  }
  return answer;
}
*/