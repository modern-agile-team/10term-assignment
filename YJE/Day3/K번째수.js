function solution(array, commands) {
    let answer = [];

    for (let i = 0; i < commands.length; i++) {
        //commands
        let [start, end, k] = commands[i];
        //배열 자르기
        let sliceArray = array.slice(start - 1, end);  
        //배열 정렬하기
        sliceArray.sort((a, b) => a - b);  
        //answer에 넣기
        answer.push(sliceArray[k - 1]);
    }

    return answer;
}