function solution(n) {
    let a = String(n).split("");
    let num = 0;

    for (let i = 0; i < a.length; i++) {
        num += Number(a[i]);
    }

    return num;
}