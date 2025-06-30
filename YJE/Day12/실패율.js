// 실패율 계산하기
function failRate(N, stages, result) {
    let totalPlayers = stages.length;

    for (let stage = 1; stage <= N; stage++) {
        let currentStageFail = stages.filter(s => s === stage).length;
        let failRate = currentStageFail / totalPlayers;
        result.push({ stage, failRate });
        totalPlayers -= currentStageFail;
    }
}

// 스테이지 번호를 실패율의 내림차순으로 정렬하기
function sortResult(N, stages, result) {
    result.sort((a, b) => {
        return b.failRate - a.failRate;
    });
    return result.map(s => s.stage);
}

function solution(N, stages) {
    let result = [];

    failRate(N, stages, result);
    return sortResult(N, stages, result);
}