function solution(new_id) {
    var answer = new_id
        .toLowerCase() //1단계: 소문자로 변환
        .replace(/[^a-z0-9-_.]/g, "") //2단계: 허용된 문자만 남기기
        .replace(/\.{2,}/g, ".") //3단계: . 2개라면 하나만 남기기
        .replace(/^\.|\.$/g, "");//4단계: 마침표가 처음과 끝에 있다면 제거하기
        
        //5단계: 빈 문자열이면 a 대입하기
        if(answer === "") answer = "a";
    
        //6단계: 길이를 15개까지
        if(answer.length >= 16) {
            answer = answer.slice(0, 15);
            answer = answer.replace(/\.$/, "");
        }    
    
        //7단계: 길이가 2자 이하면 new_id 마지막 문자를 길이가 3이 될 때까지 붙이기
        while(answer.length < 3) {
            answer += answer[answer.length - 1];
        }

    return answer;
}