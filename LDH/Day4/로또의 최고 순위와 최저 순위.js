function solution(lottos, win_nums) {
    
    let answer = [];
    let num = 0;
    let znum = 0;
    
    for (let i = 0; i < 6; i++) {
            if(lottos[i] === 0)
                znum++;
            else if(win_nums.includes(lottos[i]))
                num++;
    }

    let maxnum = num + znum;
    let minnum = num;
    
    const rank = (num) => num >= 2 ? answer.push(7 - num) : answer.push(6);
    
    rank(maxnum);
    rank(minnum);
    
    return answer;
}