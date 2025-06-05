function solution(numbers) {
    var answer = [];
    let num = numbers;

    for (let i = 0; i < numbers.length; i++) {
        for (let j = 1; j < numbers.length; j++) {
            if (!(i === j)) {
                answer.push(num[i] + num[j]);
            }
        }
    }

    let set = new Set(answer);
    let uniqueArr = [...set];
    let arr = Array.from(uniqueArr);

    arr.sort((a, b) => a - b);
    return arr;
}
