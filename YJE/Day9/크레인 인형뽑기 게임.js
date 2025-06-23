// 인형 뽑기
function pickUpDoll(board, move) {
    const column = move - 1;

    for (let row = 0; row < board.length; row++) {
        const doll = board[row][column];
        if (doll !== 0) {
            board[row][column] = 0; 
            return doll;
        }
    }
}

// 바구니에 담아서 터트리고 점수 반환하기
function handleBasket(basket, doll) {
    if (!doll) return 0;

    const last = basket[basket.length - 1];

    if (last === doll) {
        basket.pop();
        return 2; 
    } else {
        basket.push(doll);
        return 0;
    }
}

function solution(board, moves) {
    let answer = 0;
    let basket = [];

    for (let move of moves) {
        const pickedDoll = pickUpDoll(board, move);
        answer += handleBasket(basket, pickedDoll);
    }

    return answer;
}