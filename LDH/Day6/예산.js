function solution(d, budget) {
    
    let answer = 0;
    let sum=0;
    
    const sorted = d.sort((a, b) => a - b);

    
    for(let i=0; i < d.length; i++) {
        sum += sorted[i];
    if(sum > budget) {
        break;
    }
    answer++;
    }
    return answer;
}