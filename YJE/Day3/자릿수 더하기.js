//배열로 바꿔서 풀기
function solution(n) {
    let answer = 0;
    let numArray = n.toString().split('');
    for(let num of numArray) {
        answer += Number(num);
    }
    return answer;
}

//문자열로 바꿔서 풀기
function solution(n) {
    let answer = 0;
    let numStr = n.toString();
    for(let i=0; i<numStr.length; i++) {
        answer += Number(numStr[i]);
    }
    return answer;
}