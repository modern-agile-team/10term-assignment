function solution(participant, completion) {
    
    let win = {};
    
    for (let name of participant) {
        if(win[name]) {
            win[name] += 1;
        } else {
            win[name] = 1;
        }
    }
    for (let name of completion) {
        if(win[name]) {
            win[name] -= 1;
        }
    }
    for (let name in win) {
        if(win[name] === 1) {
            return name;
        }
    }
}