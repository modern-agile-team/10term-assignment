function solution(s) {
    let answer = '';

    if (s.length % 2 === 0) {
        let a = s.length / 2;
        answer = s[a - 1] + s[a];
    } else {
        let a = Math.floor(s.length / 2);
        answer = s[a];
    }

    return answer;
}