function solution(seoul) {
    var answer = '';
    for(var i=0;i<seoul.length;i++){
        if(seoul[i]==="Kim"){
            answer=i;
        }
    }
    return "김서방은 " + answer + "에 있다";
}