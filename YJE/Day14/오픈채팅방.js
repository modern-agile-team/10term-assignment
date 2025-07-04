function updateNickname(user, state, id, nickname) {
    if (state === 'Enter' || state === 'Change') {
        user[id] = nickname;
    }
}

function addLog(result, state, id) {
    if (state === 'Enter') {
        result.push([id, '님이 들어왔습니다.']);
    }
    else if (state === 'Leave') {
        result.push([id, '님이 나갔습니다.']);
    }
}

function generateMessages(result, user) {
    return result.map(([id, msg]) => user[id] + msg);
}

function solution(record) {
    const user = {};
    const result = [];

    for (let r of record) {
        const [state, id, nickname] = r.split(' ');

        updateNickname(user, state, id, nickname);
        addLog(result, state, id);
    }

    return generateMessages(result, user);
}
