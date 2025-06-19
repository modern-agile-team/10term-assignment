// 답이랑 비교하기
function compareWithAnswers(answers, scores, mathGiveUpStudents1,mathGiveUpStudents2, mathGiveUpStudents3) {
    for(let i = 0; i < answers.length; i++) {
        if(answers[i] === mathGiveUpStudents1[i % mathGiveUpStudents1.length]) scores[0]++;
        if(answers[i] === mathGiveUpStudents2[i % mathGiveUpStudents2.length]) scores[1]++;
        if(answers[i] === mathGiveUpStudents3[i % mathGiveUpStudents3.length]) scores[2]++;
    }    
}

// 가장 많이 맞춘 사람 찾기
function findMaxScore(scores, answer) {
    let maxScore = Math.max(...scores);

    for(let i = 0; i < scores.length; i++) {
        if(scores[i] === maxScore) {
            answer.push(i + 1);
        }
    }    
}

function solution(answers) {
    let mathGiveUpStudents1 = [1, 2, 3, 4, 5];
    let mathGiveUpStudents2 = [2, 1, 2, 3, 2, 4, 2, 5];
    let mathGiveUpStudents3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    let scores = [0, 0, 0];
    let answer = [];
    
    compareWithAnswers(answers, scores, mathGiveUpStudents1, mathGiveUpStudents2, mathGiveUpStudents3);
    findMaxScore(scores, answer);
    
    return answer;
}