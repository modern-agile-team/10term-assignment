function solution(participant, completion) {
    let answer = '';
    let map = {};
    
    //참가자 계산하기
    for(let person of participant) {
        map[person] = (0 | map[person]) + 1;
    }
    
    //완주자 계산하기
    for(let person of completion) {
        map[person]--;
    }
    
    for(let person in map) {
        if(map[personA] > 0) return person;
    }
}