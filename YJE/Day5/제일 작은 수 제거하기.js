function solution(arr) {
    if(arr.length === 1) {
        return [-1];
    }
    
    else {
        let min = Math.min(...arr);
        let newArr = arr.filter(num => num !== min);
        return newArr;
    }
}