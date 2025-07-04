function findPos(num, phone, hand) {
  if (hand === "left") {
    for (let i = 0; i < 3; i++) {
      if (phone[i][0] === num) return [i, 0];
    }
  }

  if (hand === "right") {
    for (let i = 0; i < 3; i++) {
      if (phone[i][2] === num) return [i, 2];
    }
  }
}

function solution(numbers, hand) {
  let answer = '';
  let leftPos = [3, 0];
  let rightPos = [3, 2];
  const phone = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    ['*', 0, '#']
  ];
  const middleColumn = [2, 5, 8, 0];
  
  for(let i = 0; i < numbers.length; i++) {
    let target = numbers[i];

    if([1, 4, 7].includes(target)) { 
      leftPos = findPos(target, phone, "left");
      answer += "L";
      continue;
    }

    if([3, 6, 9].includes(target)) { 
      rightPos = findPos(target, phone, "right"); 
      answer += "R";
      continue;
    }

    const depth = middleColumn.indexOf(target);
    const leftDist = Math.abs(leftPos[0] - depth) + Math.abs(leftPos[1] - 1);
    const rightDist = Math.abs(rightPos[0] - depth) + Math.abs(rightPos[1] - 1);

    if (leftDist < rightDist) {
      leftPos = [depth, 1];
      answer += "L";
    } else if (leftDist > rightDist) {
      rightPos = [depth, 1];
      answer += "R";
    } else {
      if (hand === "left") {
        leftPos = [depth, 1];
        answer += "L";
      } else {
        rightPos = [depth, 1];
        answer += "R";
      }
    }
  }
        
  return answer;
}