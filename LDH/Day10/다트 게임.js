function solution(dartResult) {
    const scores = [];
    const parser = dartResult.match(/(\d{1,2}[SDT][*#]?)/g);

    for (let i = 0; i < parser.length; i++) {
        const match = parser[i].match(/(\d{1,2})([SDT])([*#]?)/);
        let score = Number(match[1]);
        const bonus = match[2];
        const option = match[3];

        if (bonus === 'D') {
            score **= 2;
        } else if (bonus === 'T') {
            score **= 3;
        }

        if (option === '*') {
            score *= 2;
            if (i > 0) scores[i - 1] *= 2;
        } else if (option === '#') {
            score *= -1;
        }

        scores.push(score);
    }

    return scores.reduce((a, b) => a + b, 0);
}
