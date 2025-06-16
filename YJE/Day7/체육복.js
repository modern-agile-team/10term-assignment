// 여벌 체육복이 있으면서 체육복을 잃어버린 학생 제거(스스로 해결)
function filterSelfSufficientStudents(lostSet, reserveSet) {
    for(let student of [...reserveSet]) {
        if(lostSet.has(student)) {
            lostSet.delete(student);
            reserveSet.delete(student);
        }
    }
}

// 여벌 체육복이 있는 학생이 앞 또는 뒤 번호 학생에게 체육복 빌려주기
function lendUniform(lostSet, reserveSet) {
    for(let student of [...reserveSet]) {
        if(lostSet.has(student - 1)) {
            lostSet.delete(student - 1);
        }
        else if(lostSet.has(student + 1)) {
            lostSet.delete(student + 1);
        }
    }    
}
    
function solution(n, lost, reserve) {
    let lostSet = new Set(lost);
    //그리디(탐욕법) 적용을 위해 정렬하기
    reserve.sort((a, b) => a - b);
    let reserveSet = new Set(reserve);
    let studentNum = n;
    
    filterSelfSufficientStudents(lostSet, reserveSet);
    lendUniform(lostSet, reserveSet);
    
    
    return studentNum - lostSet.size;
}