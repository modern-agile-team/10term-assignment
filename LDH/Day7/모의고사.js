function solution(answers) {
    const answer = [];
    const mathloser1 = [1, 2, 3, 4, 5];
    const mathloser2 = [2, 1, 2, 3, 2, 4, 2, 5];
    const mathloser3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    let count1 = 0;
    let count2 = 0;
    let count3 = 0;
    
    for (let i = 0; i < answers.length; i++) {
        if (answers[i] === mathloser1[i % mathloser1.length]) {
            count1++;
        }   
    }
    for (let i = 0; i < answers.length; i++) {
        if (answers[i] === mathloser2[i % mathloser2.length]) {
            count2++;
        }
    }
    for (let i = 0; i < answers.length; i++) {
        if (answers[i] === mathloser3[i % mathloser3.length]) {
            count3++;
        } 
    }
    const max = Math.max(count1,count2,count3);
    if (count1 === max) answer.push(1);
    if (count2 === max) answer.push(2);
    if (count3 === max) answer.push(3);
    return answer;
}