//for문
function solution(absolutes, signs) {
    let answer = 0;
    for (let i = 0; i < absolutes.length; i++) {
        if (signs[i] == true) {
            answer += absolutes[i];
        } else {
            answer -= absolutes[i];
        }
    }
    for (let i of absolutes) {
        signs[i] == true ? answer += absolutes[i] : answer -= absolutes[i];
    }
    return answer;
}
//reduce 함수 사용
function solution(absolutes, signs) {
    const sum = absolutes.reduce((answer, value, index) => {
        return answer + (signs[index] ? value : -value);
    }, 0);
    return sum;
}