function decideHand(numbers, hand) {
    let rightNum = [3, 6, 9];
    let leftNum = [1, 4, 7];
    let result = [];
    let keyPad = {
        1: [0, 0],
        2: [0, 1],
        3: [0, 2],
        4: [1, 0],
        5: [1, 1],
        6: [1, 2],
        7: [2, 0],
        8: [2, 1],
        9: [2, 2],
        '*': [3, 0],
        0: [3, 1],
        '#': [3, 2]
    };
    let leftPos = keyPad['*'];
    let rightPos = keyPad['#'];

    for (let number of numbers) {
        if (rightNum.includes(number)) {
            result.push('R');
            rightPos = keyPad[number];
        } else if (leftNum.includes(number)) {
            result.push('L');
            leftPos = keyPad[number];
        } else {
            let target = keyPad[number];
            let leftDist = Math.abs(leftPos[0] - target[0]) + Math.abs(leftPos[1] - target[1]);
            let rightDist = Math.abs(rightPos[0] - target[0]) + Math.abs(rightPos[1] - target[1]);

            if (leftDist < rightDist) {
                result.push('L');
                leftPos = target;
            } else if (leftDist > rightDist) {
                result.push('R');
                rightPos = target;
            } else {
                if (hand === 'right') {
                    result.push('R');
                    rightPos = target;
                } else {
                    result.push('L');
                    leftPos = target;
                }
            }
        }
    }

    return result.join('');
}

function solution(numbers, hand) {
    return decideHand(numbers, hand);
}