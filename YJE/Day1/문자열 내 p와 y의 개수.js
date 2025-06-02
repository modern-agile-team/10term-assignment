function solution(s){
    var answer = true;
    var p=0, y=0;
    
    for(var i=0;i<s.length;i++){
        if(s[i]==="P" || s[i]==="p"){
            p++;
        }
        if(s[i]==="Y" || s[i]==="y"){
            y++;
        }
    }
    
    if(p!==y){
        answer=false;
    }
    
    return answer;
}