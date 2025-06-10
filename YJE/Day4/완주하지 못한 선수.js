function solution(participant, completion) {
    let answer = '';
    let obj = {};
    
    //참가자 계산하기
    for(let person of participant) {
        obj[person] = (0 | obj[person]) + 1;
    }
    
    //완주자 계산하기
    for(let person of completion) {
        obj[person]--;
    }
    
    for(let person in obj) {
        if(obj[person] > 0) return person;
    }
}