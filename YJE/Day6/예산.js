function solution(d, budget) {
	let requests = [...d].sort((a, b) => a - b);
    let sum = 0;
    let result = 0;
    
    for(let i = 0; i < requests.length; i++) {
        sum += requests[i];
        if(sum > budget) break;
        result = i + 1;
    }
    
    return result;
}