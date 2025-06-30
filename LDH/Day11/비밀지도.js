function solution(n, arr1, arr2) {
    const arr = arr1.map((num, index) => num | arr2[index]);
    const bitStr = arr.map(num => num.toString(2).padStart(n, "0"));
    const answer = bitStr.map(str => str.replace(/1/g, "#").replace(/0/g, " "));
    return answer;
}
