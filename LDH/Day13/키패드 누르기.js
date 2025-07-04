function solution(numbers, hand) {
    let answer = '';
    const left_key = [1, 4, 7];
    const right_key = [3, 6, 9];
    const hand_position = ['*', '#'];
    const position = [
        [1, 0, 0], [2, 0, 1], [3, 0, 2],
        [4, 1, 0], [5, 1, 1], [6, 1, 2],
        [7, 2, 0], [8, 2, 1], [9, 2, 2],
        ['*', 3, 0], [0, 3, 1], ['#', 3, 2]
    ];

    function get_near_hand(l, r, position, hand, i) {
        const [_, row1, col1] = position.find(e => e[0] === l);
        const [__, row2, col2] = position.find(e => e[0] === r);
        const [___, row3, col3] = position.find(e => e[0] === i);
        const left = Math.abs(row1 - row3) + Math.abs(col1 - col3);
        const right = Math.abs(row2 - row3) + Math.abs(col2 - col3);

        if (left === right) {
            return hand === "right" ? 'R' : 'L';
        }
        return left > right ? 'R' : 'L';
    }

    for (const i of numbers) {
        if (left_key.includes(i)) {
            answer += 'L';
            hand_position[0] = i;
        } else if (right_key.includes(i)) {
            answer += 'R';
            hand_position[1] = i;
        } else {
            const near_hand = get_near_hand(hand_position[0], hand_position[1], position, hand, i);
            if (near_hand === 'R') {
                answer += 'R';
                hand_position[1] = i;
            } else {
                answer += 'L';
                hand_position[0] = i;
            }
        }
    }

    return answer;
}
