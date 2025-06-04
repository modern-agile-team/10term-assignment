function solution(s) {
    const a = Array.from(s);

    a.sort(function (a, b) {
        if (a < b) return 1;
        if (a > b) return -1;
        if (a === b) return 0;
    });

    const b = a.join("");
    const answer = b;

    return answer;
}