function solution(s){
    let countP = 0;
    let countY = 0;
    
    for (i = 0; i < s.length; i++) {
        if (s[i] == 'p' || s[i] == 'P') {
            countP++;
        }
        if (s[i] == 'y' || s[i] == 'Y') {
            countY++;
        }
    }
    
    if (countP == countY || !countP && !countY) {
        return true;
    }

    return false;
}