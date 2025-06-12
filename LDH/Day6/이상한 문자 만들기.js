function solution(s) {
    
    let answer = '';
    
    const words = s.split(" ");
    
    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        let converted = '';
        
        for (let j = 0; j < word.length; j++) {
            converted += (j % 2 === 0) ? word[j].toUpperCase() : word[j].toLowerCase();
        }

        answer += converted;
        if (i < words.length - 1) answer += ' ';
    }
    
    return answer;
}
