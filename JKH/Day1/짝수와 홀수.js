function solution(num) {
    let answer;
    
    if (num % 2 == 0) {
        answer = "Even";
    } else {
        answer = "Odd";
    }

    // const answer = (num % 2 === 0) ? "Even" : "Odd";
    
    return answer;
}