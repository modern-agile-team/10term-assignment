function solution(s) {
    const sSlice = s.slice(2, -2);
    const strArray = sSlice.split("},{");
    const set = new Set();
    const result = [];

    const numArray = strArray
        .map(n => n.split(',').map(Number))
        // 집합들을 길이 순으로 정렬해서 이전 집합에 없던 숫자를 찾아 튜플을 구성
        .sort((a, b) => a.length - b.length);

    for (const nums of numArray) {
        for (const num of nums) {
            if (!set.has(num)) {
                set.add(num);
                result.push(num);
            }
        }
    }

    return result;
}