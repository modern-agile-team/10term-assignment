function solution(s) {
    let sSlice = s.slice(2, -2);
    let strArray = sSlice.split("},{");
    let set = new Set();
    let result = [];

    let numArray = strArray
        .map(n => n.split(',').map(Number))
        // 집합들을 길이 순으로 정렬해서 이전 집합에 없던 숫자를 찾아 튜플을 구성
        .sort((a, b) => a.length - b.length);

    for (let nums of numArray) {
        for (let num of nums) {
            if (!set.has(num)) {
                set.add(num);
                result.push(num);
            }
        }
    }

    return result;
}