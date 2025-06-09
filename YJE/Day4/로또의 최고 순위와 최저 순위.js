function solution(lottos, win_nums) {
    let zeroCount = 0;
    let matchCount = 0;
    
    for(let i = 0; i < lottos.length; i++) {
        let lotto = lottos[i];
        if(lotto === 0) {
            zeroCount++;
        } 
        else if(win_nums.includes(lotto)) {
            matchCount++;
        }
    }
    
    let maxCount = matchCount + zeroCount;
    let minCount = matchCount;
    
    let getRank = (n) => (n >= 2 ? 7 - n : 6);
    
    return [getRank(maxCount), getRank(minCount)];
}