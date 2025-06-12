function solution(d, budget) {
    let sum = 0;
    let result = 0;
    
    d.sort((a, b) => a - b);
           
    for(let i = 0; i < d.length; i++) {
        sum += d[i];
        if(sum > budget) break;
        result = i + 1;
    }
    
    return result;
}