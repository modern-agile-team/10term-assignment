function solution(arr) {
    
    const answer = [];
    if (arr.length === 1) {
        answer.push(-1);
    } else {
        arr.splice(arr.indexOf(Math.min(...arr)), 1);
        
        answer.push(...arr);
    }
    return answer;
}