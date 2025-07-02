function solution(N, stages) {
    const answer = [];
    const dic = {};
    let allplayer = stages.length;

    // 실패율 계산
    for (let i = 1; i <= N; i++) {
        const notplayer = stages.reduce((count, stage) => count + (stage === i ? 1 : 0), 0);
        const failRate = allplayer === 0 ? 0 : notplayer / allplayer;
        dic[i] = failRate;
        allplayer -= notplayer;
    }

    // 실패율로 정렬
    const sortdic = Object.entries(dic);
    sortdic.sort(([, v1], [, v2]) => v2 - v1);

    // 정렬된 결과에서 번호만 추출
    for (const [i] of sortdic) {
        answer.push(Number(i));
    }

    return answer;
}
