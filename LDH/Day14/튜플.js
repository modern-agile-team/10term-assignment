function solution(s) {
    const answer = [];
    const tuples = JSON.parse(s.replace(/{/g, "[").replace(/}/g, "]"))
        .sort((a, b) => a.length - b.length);

    for (const arr of tuples) {
        for (const num of arr) {
            if (!answer.includes(num)) {
                answer.push(num);
            }
        }
    }

    return answer;
}
