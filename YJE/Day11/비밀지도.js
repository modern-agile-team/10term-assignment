// 숫자 배열을 받아 각 숫자를 n자리 이진수 형태 문자열로 변환하여 배열로 반환
function getBinaryArray(arr, n) {
    return arr.map(num => {
        let result = '';
        let divisor = 2 ** (n - 1);

        while (divisor >= 1) {
            if (num >= divisor) {
                result += '#';
                num -= divisor;
            } else {
                result += ' ';
            }
            divisor = divisor / 2;
        }

        return result;
    });
}

// 두 개의 지도 배열을 받아서 합쳐진 지도 배열 반환
function mergeMaps(arr1, arr2, n) {
    return arr1.map((row, i) => 
        row
          .split('')
          .map((char, j) => (char === '#' || arr2[i][j] === '#') ? '#' : ' ')
          .join('')
    );
}

function solution(n, arr1, arr2) {    
    let hashArr1 = getBinaryArray(arr1, n);
    let hashArr2 = getBinaryArray(arr2, n);
    return mergeMaps(hashArr1, hashArr2, n);
}