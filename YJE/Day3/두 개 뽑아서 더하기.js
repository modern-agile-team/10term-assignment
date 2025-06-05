function solution(numbers) {
    var answer = [];
    
    for(let i=0; i < numbers.length; i++) {
        for(let j = i + 1; j < numbers.length; j++) {
            let sum = numbers[i] + numbers[j];
            if(!answer.includes(sum)) {
                answer.push(sum);
            }
        }
    }
    
    //숫자 정렬
    answer.sort((a, b) => a - b);
    return answer;
}
