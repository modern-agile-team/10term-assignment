function solution(n, lost, reserve) {

    const re_reserve = reserve.filter (reserve => !lost.includes(reserve)).sort((a, b) => a - b);

    const re_lost = lost.filter (lost => !reserve.includes(lost)).sort((a, b) => a - b);
    for (let i = 0; i < re_reserve.length; i++) {
        for (let j = 0; j < re_lost.length; j++) {
            if (Math.abs(re_reserve[i] - re_lost[j]) === 1) {
                re_lost.splice(j, 1);
                break;
            }
        }
    }
        return n-re_lost.length;
}