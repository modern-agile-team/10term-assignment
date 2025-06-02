function solution(s){
    // JKH
    let numP = 0;
    let numY = 0;
    
    for (i=0; i<s.length; i++) {
        if (s[i]=='p' || s[i]=='P') {
            numP++;
        }
        if (s[i]=='y' || s[i]=='Y') {
            numY++;
        }
    }
    
    if (numP==numY || !numP && !numY) {
        return true;
    }

    return false;
}