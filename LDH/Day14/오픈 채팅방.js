function solution(record) {
    const answer = [];
    const users = new Map();
    const uidLog = [];

    const records = record.map(line => line.split(" "));

    for (let i = 0; i < records.length; i++) {
        const [action, uid, name] = records[i];

        if (action === "Enter" || action === "Change") {
            users.set(uid, name);
        }

        uidLog.push([action, uid]);
    }

    for (const [action, uid] of uidLog) {
        const name = users.get(uid);
        if (action === "Enter") {
            answer.push(`${name}님이 들어왔습니다.`);
        } else if (action === "Leave") {
            answer.push(`${name}님이 나갔습니다.`);
        }
    }

    return answer;
}
