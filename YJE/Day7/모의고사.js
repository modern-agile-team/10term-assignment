// 수포자의 점수 계산
function calculateScores(answers, mathGiveUpStudents) {
    return mathGiveUpStudents.map(guess => {
        return answers.reduce((score, answer, index) => {
            if (answer === guess[index % guess.length]) {
                return score + 1;
            }
            return score;
        }, 0);
    });
}

// 가장 많이 맞춘 사람 찾기
function findMaxScore(scores) {
    const maxScore = Math.max(...scores);
    return scores
        .map((score, i) => (score === maxScore ? i + 1 : null))
        .filter(n => n !== null);
}

function solution(answers) {
    const mathGiveUpStudents = [
        [1, 2, 3, 4, 5],
        [2, 1, 2, 3, 2, 4, 2, 5],
        [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    ];

    const scores = calculateScores(answers, mathGiveUpStudents);
    return findMaxScore(scores);
}