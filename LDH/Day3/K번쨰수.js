function solution(array, commands) {
    let answer = [];
    let com = commands;

    for (let i = 0; i < commands.length; i++) {
        let num = array
            .slice(com[i][0] - 1, com[i][1])
            .sort((a, b) => a - b);
        
        let date = num[com[i][2] - 1];
        answer.push(date);
    }

    return answer;
}
