function solution(boards, moves) {
    let answer = 0;
    const stack = [];
    const re_moves = moves.map(mv => mv - 1);

    for (let mv of re_moves) {
        for (let bo of boards) {
            if (bo[mv] !== 0) {
                stack.push(bo[mv]);
                bo[mv] = 0;

                if (stack[stack.length - 1] === stack[stack.length - 2]) {
                    stack.pop();
                    stack.pop();
                    answer += 2;
                }
                break;
            }
        }
    }
    return answer;
}
