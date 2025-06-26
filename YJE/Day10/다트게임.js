// 특정 패턴을 찾아서 배열로 반환하기
function parsingDartResult(dartResult) {
    return dartResult.match(/\d{1,2}[SDT][*#]?/g);
}

// 계산하기
function calculateScores(chances, scoreList) {
    for (let i = 0; i < chances.length; i++) {
        let [, score, bonus, option] = chances[i].match(/(\d{1,2})([SDT])([*#]?)/);
        score = Number(score);

        switch (bonus) {
            case 'S': score = score ** 1; break;
            case 'D': score = score ** 2; break;
            case 'T': score = score ** 3; break;
        }

        if (option === '*') {
            score *= 2;
            if (i > 0) scoreList[i - 1] *= 2;
        } else if (option === '#') {
            score *= -1;
        }

        scoreList.push(score);
    }
}

function solution(dartResult) {
    let scoreList = [];
    let chances = parsingDartResult(dartResult); 
    
    calculateScores(chances, scoreList);               
    
    return scoreList.reduce((a, b) => a + b);
}