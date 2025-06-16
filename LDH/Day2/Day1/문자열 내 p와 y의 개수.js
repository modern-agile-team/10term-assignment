function solution(s){
    let p_cheak = 0;
    let y_cheak = 0;
    for(let count = 0; count<s.length;count++){
    if(s[count]==='p' ||s[count]==='P'){
    p_cheak++;
    }
    if(s[count]==='y' ||s[count]==='Y'){
    y_cheak++;
    }
    }
    if(p_cheak==y_cheak){
        var answer = true;
    }else{
        var answer = false;
    }
    

    // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
    console.log('Hello Javascript')

    return answer;
}