function solution(new_id) {
    
    //1단계 new_id의 모든 대문자를 대응되는 소문자로 치환합니다.
    const test1 = new_id.toLowerCase();
    console.log(test1);
    //2단계 new_id에서 알파벳 소문자, 숫자, 빼기(-), 밑줄(_), 마침표(.)를 제외한 모든 문자를 제거합니다.
    const test2 = test1.match(/[a-z0-9\-_.]/g);
    const re_test2 = test2.join("");
    console.log(re_test2);
    //3단계 new_id에서 마침표(.)가 2번 이상 연속된 부분을 하나의 마침표(.)로 치환합니다.
    const test3 = re_test2.replace(/\.{2,}/g,".");
    console.log(test3);
    //4단계 new_id에서 마침표(.)가 처음이나 끝에 위치한다면 제거합니다.
    const test4 = test3.replace(/^\.|\.$/g,"");
    console.log(test4);
    //5단계 new_id가 빈 문자열이라면, new_id에 "a"를 대입합니다.
    const test5 = test4 === "" ? "a" : test4;
    console.log(test5);
    //6단계 new_id의 길이가 16자 이상이면, new_id의 첫 15개의 문자를 제외한 나머지 문자들을 모두 제거합니다. 만약 제거 후 마 침표(.)가 new_id의 끝에 위치한다면 끝에 위치한 마침표(.) 문자를 제거합니다.
    const test6 = test5.slice(0,15);
    const re_test6 = test6.replace(/^\.|\.$/g,"");
    console.log(re_test6);
    //7단계 new_id의 길이가 2자 이하라면, new_id의 마지막 문자를 new_id의 길이가 3이 될 때까지 반복해서 끝에 붙입니다.
    const test7 = re_test6.padEnd(3, re_test6[re_test6.length-1]);
    
    return test7;
}